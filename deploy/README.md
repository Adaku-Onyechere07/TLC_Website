# Deploying The Learning Craft to Hetzner

Static Vite SPA, no backend and no build-time env vars.

**Server:** `188.245.207.241`, SSH as `impulsecraft` on port **2222**. It fronts
its sites with a Caddy reverse-proxy container whose stack lives in
`/root/caddy-proxy/` — steps touching it need `sudo`. This site is served by its
own static-file sidecar (`tlc-web`) that the edge proxies to. Caddy issues and
renews TLS automatically; there is no certbot.

This mirrors the ImpulseCraft deployment on the same box. The `deploy` user, its
CI key, and the `AllowUsers` entry already exist from that setup and are reused.

---

## 1. DNS at Namecheap

`www.thelearningcraft.com` **already points at the VPS**. The apex does not — it
still resolves to Cloudflare (`104.21.69.28` / `172.67.203.48`) and serves a
suspended cPanel page from the old host.

Domain List → **Manage** → **Advanced DNS**. Delete the `@` records pointing at
those Cloudflare IPs and any `URL Redirect`/parking rows, then ensure:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | `@` | `188.245.207.241` | Automatic |
| A Record | `www` | `188.245.207.241` | Automatic (already set) |

The domain has no MX records, so no email is affected.

Verify before continuing — Caddy cannot issue a certificate until both resolve:

```bash
dig +short thelearningcraft.com
dig +short www.thelearningcraft.com
```

## 2. Server prep

```bash
scp -P 2222 -r deploy/ impulsecraft@188.245.207.241:/tmp/tlc-deploy/
ssh -p 2222 impulsecraft@188.245.207.241
cd /tmp/tlc-deploy && sudo ./server-setup.sh thelearningcraft.com
```

Creates `/var/www/thelearningcraft.com`. The `deploy` user already exists, so the
script leaves it and its key untouched.

## 3. Add the sidecar

**a.** `sudo cp /tmp/tlc-deploy/tlc-web.Caddyfile /root/caddy-proxy/`

**b.** Insert `docker-compose.snippet.yml` into the `services:` section of
`/root/caddy-proxy/docker-compose.yml` — **before** the top-level `networks:`
block, or the file becomes invalid.

Then confirm the `networks:` key survived the edit. This is the step that has
silently failed before:

```bash
sudo sed -n '/^  tlc-web:/,/^$/p' /root/caddy-proxy/docker-compose.yml
```

No `networks:` line means the container lands on Compose's project default, the
edge cannot resolve it, and every request returns 502 with a healthy-looking
sidecar and clean logs.

**c.** Append `Caddyfile.site` to `/root/caddy-proxy/Caddyfile`.

**d.** Bring it up. Naming the service explicitly is what keeps the edge — and
every other site behind it — from being recreated:

```bash
cd /root/caddy-proxy
sudo docker compose up -d tlc-web
sudo docker exec caddy caddy reload --config /etc/caddy/Caddyfile
```

**e.** Verify:

```bash
sudo docker ps --format '{{.Names}}\t{{.Status}}' | grep -E 'caddy|tlc-web'
sudo docker exec caddy wget -S -O- http://tlc-web/ 2>&1 | head -5
curl -sSI https://thelearningcraft.com | head -3
```

**404 is the success signal** until step 5 runs — the webroot is empty, so a 404
proves DNS, TLS, and proxy routing all work. 502 means the edge cannot reach the
sidecar; re-check 3b.

## 4. GitHub secrets

Repo → Settings → Secrets and variables → Actions. Same values as the
ImpulseCraft repo — the same `deploy` user and CI key serve both sites:

| Secret | Value |
|--------|-------|
| `SSH_HOST` | `188.245.207.241` |
| `SSH_USER` | `deploy` |
| `SSH_PORT` | `2222` |
| `SSH_PRIVATE_KEY` | contents of `~/.ssh/impulsecraft_deploy` (private half, header/footer lines included) |

There is no `DEPLOY_PATH` secret — it is a literal in the workflow. It was a
secret once, and an unset secret made the rsync destination `host:/`, where
`--delete` walked the root filesystem.

No `VITE_*` secrets either: this project reads no `import.meta.env` values.

## 5. Deploy

Push to `main`, or **Actions → Deploy to Hetzner → Run workflow**.

`rsync --delete` writes into `/var/www/thelearningcraft.com`, so nothing else may
use that directory.

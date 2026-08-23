#!/usr/bin/env bash
# One-time setup on the Hetzner VPS. Run with sudo ON THE SERVER.
#
#   sudo ./server-setup.sh thelearningcraft.com
#
# The box serves its sites through a Caddy reverse-proxy container, so this
# installs no web server and does not touch TLS — Caddy issues and renews
# certificates itself. It creates only the deploy user and the rsync target.
# Wiring that into Caddy is manual (see deploy/README.md) because it means
# editing the compose file that also governs the other sites.
#
# Safe to re-run: the deploy user already exists from the ImpulseCraft setup.
set -euo pipefail

DOMAIN="${1:-}"
DEPLOY_USER="${DEPLOY_USER:-deploy}"

if [[ -z "$DOMAIN" ]]; then
  echo "usage: $0 <domain>" >&2
  exit 1
fi

WEBROOT="/var/www/$DOMAIN"

echo "==> Installing rsync (needed by the CI deploy step)"
if ! command -v rsync >/dev/null 2>&1; then
  apt-get update -qq && apt-get install -y rsync
fi

echo "==> Ensuring deploy user '$DEPLOY_USER' exists"
if ! id -u "$DEPLOY_USER" >/dev/null 2>&1; then
  adduser --disabled-password --gecos "" "$DEPLOY_USER"
else
  echo "    already present, leaving it alone"
fi
install -d -m 700 -o "$DEPLOY_USER" -g "$DEPLOY_USER" "/home/$DEPLOY_USER/.ssh"

# A hardened sshd with an AllowUsers allowlist rejects the account before it ever
# evaluates the key, producing a bare "Permission denied (publickey)" that looks
# like a key fault and is not one. Warn rather than edit: a bad edit here plus a
# closed session locks everyone out of the machine.
if grep -rqEi '^\s*AllowUsers\s+' /etc/ssh/sshd_config /etc/ssh/sshd_config.d/ 2>/dev/null; then
  if ! grep -rEi '^\s*AllowUsers\s+' /etc/ssh/sshd_config /etc/ssh/sshd_config.d/ 2>/dev/null \
       | grep -qw "$DEPLOY_USER"; then
    echo
    echo "!! sshd has an AllowUsers allowlist that does not include '$DEPLOY_USER'."
    echo "!! CI will fail with 'Permission denied (publickey)' until you add it."
    echo
  fi
fi

# authorized_keys is deliberately root-owned so the deploy user cannot delete its
# own key — which is exactly what a misdirected rsync --delete once did.
if [[ -f "/home/$DEPLOY_USER/.ssh/authorized_keys" ]]; then
  echo "==> authorized_keys already present, leaving it alone"
else
  echo "!! /home/$DEPLOY_USER/.ssh/authorized_keys is missing — CI cannot connect."
  echo "!! Install the CI public key there, then: chown root:root && chmod 644"
fi

echo "==> Creating web root $WEBROOT"
install -d -o "$DEPLOY_USER" -g "$DEPLOY_USER" -m 755 "$WEBROOT"

echo
echo "Done. Remaining steps (see deploy/README.md):"
echo "  1. cp tlc-web.Caddyfile to /root/caddy-proxy/"
echo "  2. Insert docker-compose.snippet.yml into the services: section of"
echo "     /root/caddy-proxy/docker-compose.yml (before the top-level networks:)"
echo "  3. Append Caddyfile.site to /root/caddy-proxy/Caddyfile"
echo "  4. docker compose up -d tlc-web && docker exec caddy caddy reload \\"
echo "       --config /etc/caddy/Caddyfile     # edge proxy is NOT recreated"

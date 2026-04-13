import { FaRocket } from "react-icons/fa6"
import Layout from "../components/Layout"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import heart from "../assets/images/heart_perfect.png"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as any },
})

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as any },
})

const fadeLeft = (_delay = 0) => ({
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any },
    viewport: { once: true }
})

const cards = [
  { title: "Volunteer with TLC", desc: "Share your skills with a mission that matters. Whether you're a facilitator, researcher, designer, or communicator — there's meaningful ways you can contribute here.", items: ["Flexible, remote-friendly roles available", "Work directly on active programs", "Join a passionate, Pan-African community", "Professional development opportunities"], btn: { label: "Apply to Volunteer", style: "outline" }, path: "/get-involved" },
  { title: "Partner with TLC", desc: "Bring TLC's proven programs to your school, state, or institution. We work with governments, NGOs, schools, and research institutions to co-design and deliver impact.", items: ["State & institutional partnership models", "Custom program design available", "24,000+ educators already reached", "Evidence-based, measurable outcomes"], btn: { label: "Contact Us", style: "outline" }, path: "/get-involved" },
  { title: "Support Our Work", desc: "Your contribution funds free teacher resources, community-based programs, and the research that shapes education policy across Africa. Be a part of a fast growing force of change.", items: ["Fund specific programs or initiatives", "Transparent impact reporting", "Reach 412,000+ learners served", "Tax-exempt donations accepted"], btn: { label: "Donate Now", style: "filled" }, path: "/foundation/payment" },
];

const GetInvolved = () => {
  const navigate = useNavigate()
  return (
    <>
    <Layout>
        <div className="bg-grid relative min-h-[80vh] px-6 md:px-10 lg:px-15 py-12 lg:py-20">
          <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'radial-gradient(ellipse 80% 80% at 0% 0%, #fefddcea 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b via-transparent to-white pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-8 lg:gap-0">
            <div className="flex flex-col gap-6 lg:gap-9 max-w-[750px]">
                <div className="w-full md:w-[80%] space-y-6 lg:space-y-10">
                <motion.span {...fadeUp(0)} className="w-[50%] md:w-[40%] text-[12px] font-bold bg-[#d5fcee]/30 border border-[#119B53] text-[#119B53] rounded-full px-5 py-2 flex items-center justify-center gap-1 self-start">
                    <FaRocket className="h-4 w-4 text-[#119B53]" />YOUR ROLE IN THE MISSION
                </motion.span>
                <motion.h1 {...fadeUp(0.1)} className="text-[36px] md:text-[48px] lg:text-[60px] font-bold leading-tight">
                    There's a place for you in
                    <span className="text-[#119B53]"> this work.</span>
                </motion.h1>
                <motion.p {...fadeUp(0.2)} className="text-gray-500 text-md leading-relaxed md:max-w-[500px] font-medium">
                    From classrooms to boardrooms, from funding to facilitation — there are many ways to join The Learning Craft community and help advance whole-child education across Africa.
                </motion.p>
                </div>
              <div className="flex flex-wrap gap-2 lg:gap-4">
                <button className="border border-gray-500 text-gray-500 text-sm px-3 py-1.5 rounded-full hover:border-gray-700 hover:text-gray-700 transition-colors">I'm an Educator</button>
                <button className="border border-gray-500 text-gray-500 text-sm px-3 py-1.5 rounded-full hover:border-gray-700 hover:text-gray-700 transition-colors">I'm a Partner</button>
                <button className="border border-gray-500 text-gray-500 text-sm px-3 py-1.5 rounded-full hover:border-gray-700 hover:text-gray-700 transition-colors">I'm a Reasearcher</button>
                <button className="border border-gray-500 text-gray-500 text-sm px-3 py-1.5 rounded-full hover:border-gray-700 hover:text-gray-700 transition-colors">I'm a Donor</button>
                <button className="border border-gray-500 text-gray-500 text-sm px-3 py-1.5 rounded-full hover:border-gray-700 hover:text-gray-700 transition-colors">I'm a Parent</button>
              </div>
            </div>
          <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:0.9,delay:0.2,ease:[0.16,1,0.3,1] as any}} className="">
            <img loading="lazy" className="w-60 h-60 md:w-80 md:h-80 lg:h-120 lg:w-120 object-contain" src={heart} alt="" />
          </motion.div>
          </div> 
        </div>

        <div className="bg-gradient-to-b from-gray-200 to-gray-50 px-6 md:px-10 lg:px-15 py-12 lg:py-20">
            <h2 {...inView()} className="text-3xl font-bold text-gray-900 mb-6">How you can engage</h2>
            <p {...inView(0.05)} className="text-sm text-gray-500 mb-8">Each pathway has one clear action. Find where you fit, and take the next step.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-15 leading-loose">
                {cards.map((card, i) => (
                <motion.div key={card.title} {...inView(i * 0.1)} className="bg-white border border-gray-500 rounded-2xl p-8 lg:p-10 flex flex-col">
                    <div className="w-10 h-10 rounded-full bg-[#1C5035] flex items-center justify-center mb-4">
                    <span className="text-yellow-400 text-3xl leading-none pb-1">★</span>
                    </div>
                    <p className="font-bold text-gray-900 text-lg mb-4">{card.title}</p>
                    <p className="text-md text-gray-500 leading-relaxed mb-8">{card.desc}</p>
                    <ul className="flex flex-col gap-6 mb-7 flex-1">
                    {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-gray-700 tracking-widest">
                        <span className="w-4 h-4 rounded-full bg-[#1C5035] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                            <polyline points="2,5 4.2,7.5 8,3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        {item}
                        </li>
                    ))}
                    </ul>
                    <button onClick={() => navigate(card.path)} className={`w-full py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 ${
                    card.btn.style === 'filled'
                        ? 'bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-500'
                        : 'border-2 border-[#1C5035] text-[#1C5035] font-medium bg-white hover:bg-green-100'
                    }`}>
                    {card.btn.label} →
                    </button>
                </motion.div>
                ))}
            </div>
        </div>

        <div className="bg-gray-200 px-6 md:px-12 lg:px-20 py-10 lg:py-15">
            <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-0.5 bg-yellow-500 block" />
                <p className="text-xs font-bold tracking-widest text-[#1C5035] uppercase">Partnership Models</p>
            </div>
            <motion.h2 {...fadeUp(0.05)} className="text-3xl font-bold text-gray-900 mb-10">How We Partner</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                {[
                { num: "01", title: "State Partnerships", desc: "Ministry-level curriculum and teacher training programs" },
                { num: "02", title: "Institutional", desc: "School and university implementation partnerships" },
                { num: "03", title: "Community-Based", desc: "Grassroots and community education programs" },
                { num: "04", title: "Multi-Lingual", desc: "Programs across multiple African languages and regions" },
                ].map((item) => (
                <motion.div key={item.num} {...fadeLeft(0.1)} className="bg-white border border-gray-200 rounded-xl py-6 px-4 border-l-12 border-l-[#1C5035]">
                    <p className="text-2xl font-bold text-gray-900 mb-4">{item.num}</p>
                    <p className="text-md font-bold text-gray-900 mb-4">{item.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
                ))}
            </div>
            </div>
            <div className="px-6 md:px-12 lg:px-20 py-10 lg:py-15" style={{ backgroundColor: '#10502F' }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-6 h-0.5 block" style={{ backgroundColor: '#F5C518' }} />
                        <p className="text-xs font-bold tracking-widest uppercase" style={{ color: '#F5C518' }}>Partnership Models</p>
                    </div>
                    <h2 className="text-[28px] lg:text-[36px] font-bold text-white mb-4 leading-snug">Your support reaches further than you think</h2>
                    <p className="text-lg text-[#F5C518] leading-loose mb-8 w-full lg:w-[80%] font-extrathin tracking-wide">
                        From classrooms to boardrooms, from funding to facilitation — there are many ways to join The Learning Craft community and help advance whole-child education across Africa.
                    </p>
                    <button className="px-8 py-4 rounded-lg text-sm font-semibold flex items-center gap-2" style={{ backgroundColor: '#F5C518', color: '#111' }}>
                        Donate Now {" "}→
                    </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        {[
                            { stat: "412k+", label: "USERS SERVED" },
                            { stat: "24k+", label: "EDUCATORS TRAINED" },
                            { stat: "250+", label: "DIRECT CLIENTS" },
                            { stat: "10+", label: "YEARS OF IMPACT" },
                        ].map((item, i) => (
                            <motion.div key={item.label} {...inView(i * 0.08)} className="rounded-3xl px-4 py-8 flex flex-col items-center justify-center text-center" style={{ backgroundColor: '#119B5333' }}>
                            <p className="text-[36px] lg:text-[48px] font-bold mb-2" style={{ color: '#F5C518' }}>{item.stat}</p>
                            <p className="text-[14px] lg:text-[20px] tracking-widest" style={{ color: '#F5C518' }}>{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-b from-gray-100 to-white px-6 md:px-12 lg:px-20 py-10 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    <div>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-6 h-0.5 bg-yellow-500 block" />
                        <p className="text-xs font-bold tracking-widest text-[#1C5035] uppercase">Partnership Models</p>
                    </div>
                    <h2 className="text-[36px] md:text-[48px] lg:text-[60px] font-bold text-gray-900 leading-snug mb-2">
                        Let's start a <br />
                        <span style={{ color: '#119B53' }}>conversation</span>
                    </h2>
                    <p className="text-[16px] lg:text-[18px] text-gray-500 leading-relaxed mt-4 mb-8 lg:mb-15">
                        Whether you're ready to partner, want to volunteer, or just need more information — we'd love to hear from you. Fill in the form and we'll be in touch within 2 business days.
                    </p>
                    <div className="flex flex-col gap-4 text-sm text-black tracking-wide">
                        <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
                        <span>273 Babs Animashaun, Bode Thomas, Surulere, Lagos</span>
                        </div>
                        <div className="flex items-center gap-3 font-normal">
                        <svg className="w-4 h-4 flex-shrink-0 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
                        <span>enquiry@learningcraft.org</span>
                        </div>
                        <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 flex-shrink-0 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"/></svg>
                        <span>+2349137070976</span>
                        </div>
                        <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 flex-shrink-0 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3.284 14.253A8.959 8.959 0 013 12c0-1.016.167-1.994.457-2.918"/></svg>
                        <span>www.thelearningcraft.com</span>
                        </div>
                    </div>
                    </div>
                    <div className="bg-white border border-gray-500 rounded-[2rem] p-8 lg:p-12 pt-6 lg:pt-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Express Your Interest</h3>
                    <p className="text-sm text-gray-400 my-4 tracking-wide">Tell us about yourself and how you'd like to get involved.</p>
                    <div className="flex flex-col gap-4 mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-md text-gray-700 uppercase tracking-wide block mb-1.5">First Name</label>
                            <input type="text" placeholder="e.g. Bryan" className="w-full border border-gray-200 bg-gray-100 rounded-lg px-5 py-4 text-xs text-gray-700 placeholder-gray-500 outline-none focus:border-gray-700" />
                        </div>
                        <div>
                            <label className="text-md text-gray-700 uppercase tracking-wide block mb-1.5">Last Name</label>
                            <input type="text" placeholder="e.g. Wayer" className="w-full border border-gray-200 bg-gray-100 rounded-lg px-5 py-4 text-xs text-gray-700 placeholder-gray-400 outline-none focus:border-gray-700" />
                        </div>
                        </div>
                        <div>
                        <label className="text-md text-gray-700 uppercase tracking-wide block mb-1.5">Email</label>
                        <input type="email" placeholder="your@email.com" className="w-full border border-gray-200 rounded-lg bg-gray-100 px-5 py-4 text-xs text-gray-700 placeholder-gray-400 outline-none focus:border-gray-700" />
                        </div>
                        <div>
                        <label className="text-md text-gray-700 uppercase tracking-wide block mb-1.5">Organization / School</label>
                        <input type="text" placeholder="Where do you work?" className="w-full border border-gray-200 rounded-lg px-5 py-4 bg-gray-100 text-xs text-gray-700 placeholder-gray-400 outline-none focus:border-gray-700" />
                        </div>
                        <div>
                        <label className="text-md text-gray-700 uppercase tracking-wide block mb-1.5">I Am Interested In....</label>
                        <select className="w-full border border-gray-200 rounded-lg px-5 py-4 text-xs text-gray-400 bg-gray-100 outline-none focus:border-gray-700 appearance-none">
                            <option value="" disabled selected>Select an option</option>
                            <option value="volunteer">Volunteering</option>
                            <option value="partner">Partnering</option>
                            <option value="donate">Donating</option>
                        </select>
                        </div>
                        <div>
                        <label className="text-md text-gray-700 uppercase tracking-wide block mb-1.5">Your Message</label>
                        <textarea placeholder="Tell us a little about yourself and what you're hoping to explore.." rows={3} className="w-full border border-gray-200 bg-gray-100 rounded-lg px-5 py-4 text-xs text-gray-700 placeholder-gray-400 outline-none focus:border-gray-700 resize-none" />
                        </div>
                        <button className="w-full py-3 rounded-lg text-white text-sm font-semibold flex items-center justify-center gap-3 mt-4" style={{ backgroundColor: '#1C5035' }}>Send →</button>
                    </div>
                    </div>
                </div>
                </div>
    </Layout>
    </>
  )
}

export default GetInvolved
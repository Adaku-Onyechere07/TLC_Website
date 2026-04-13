import { FaRocket } from "react-icons/fa6"
import Layout from "../components/Layout"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import earth from "../assets/images/earth (1).png"
import pfp from "../assets/images/4ef0e74153b0753ed786bc8cb8281bf2c91a1c84 (1).png"
import ndu from "../assets/images/a4a950419bc77fefce40a3375788655446975896 (1).png"
import image from "../assets/images/a95e62b50f8c087b327489d6f5dcfcd6a3ba6020.png"

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

const cards = [
  {
    title: "Volunteer with TLC",
    desc: "Share your skills with a mission that matters. Whether you're a facilitator, researcher, designer, or communicator — there's meaningful ways you can contribute here.",
    items: ["Flexible, remote-friendly roles available", "Work directly on active programs", "Join a passionate, Pan-African community", "Professional development opportunities"],
    btn: { label: "Apply to Volunteer", style: "outline" },
    path: "/get-involved",
  },
  {
    title: "Partner with TLC",
    desc: "Bring TLC's proven programs to your school, state, or institution. We work with governments, NGOs, schools, and research institutions to co-design and deliver impact.",
    items: ["State & institutional partnership models", "Custom program design available", "24,000+ educators already reached", "Evidence-based, measurable outcomes"],
    btn: { label: "Contact Us", style: "outline" },
    path: "/get-involved",
  },
  {
    title: "Support Our Work",
    desc: "Your contribution funds free teacher resources, community-based programs, and the research that shapes education policy across Africa. Be a part of a fast growing force of change.",
    items: ["Fund specific programs or initiatives", "Transparent impact reporting", "Reach 412,000+ learners served", "Tax-exempt donations accepted"],
    btn: { label: "Donate Now", style: "filled" },
    path: "/foundation/payment",
  },
];

const Programs = () => {
  const navigate = useNavigate()
  return (
    <>
    <Layout>
        <div className="bg-grid relative min-h-[80vh] px-6 md:px-10 lg:px-15 py-12 lg:py-20">
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: 'radial-gradient(ellipse 80% 80% at 0% 0%, #fefddcea 0%, transparent 70%)',
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b via-transparent to-white pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 items-center justify-between max-w-7xl mx-auto">
            <div className="flex flex-col gap-6 lg:gap-9 max-w-5xl">
              <motion.span {...fadeUp(0)} className="w-auto md:w-[40%] text-[12px] font-bold bg-[#d5fcee]/30 border border-[#119B53] text-[#119B53] rounded-full px-5 py-2 flex items-center justify-center gap-1 self-start">
                <FaRocket className="h-4 w-4 text-[#119B53]" />YOUR ROLE IN THE MISSION
              </motion.span>

              <motion.h1 {...fadeUp(0.1)} className="text-[36px] md:text-[48px] lg:text-[60px] font-bold leading-tight">
                <span className="text-[#119B53]">Empowering</span> communities, <span className="text-[#119B53]">embracing</span> culture, <span className="text-[#119B53]">creating</span> lasting impact.
              </motion.h1>

              <motion.p {...fadeUp(0.2)} className="text-gray-500 text-md leading-loose md:max-w-[700px] font-medium">
                The Learning Craft Foundation was established to reimagine education across Africa — ensuring every child, especially the most vulnerable, has access to learning that uplifts, includes, and transforms.nnovative teacher training
                and evidence-based SEL practices.
              </motion.p>

              <motion.div {...fadeUp(0.3)} className="flex gap-6 lg:gap-15">
                <button onClick={() => navigate('/foundation/payment')} className="bg-[#119B53] text-white text-md font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-lg shadow-xl shadow-black/10">
                  Donate
                </button>
                <button onClick={() => navigate('/get-involved')} className="bg-black text-white text-md font-semibold px-8 lg:px-10 py-3 lg:py-4 rounded-lg shadow-xl shadow-black/10">
                  Volunteer
                </button>
              </motion.div>
            </div>
          <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:0.9,delay:0.2,ease:[0.16,1,0.3,1] as any}} className="w-full lg:w-full lg:h-full">
            <img loading="lazy" className="w-full h-full object-cover" src={image} alt="" />
          </motion.div>
          </div>
        </div>

        <div className="border-t-gray-500 min-h-[80vh] px-6 md:px-10 lg:px-15 py-12 lg:py-20">
          <hr className="border-t border-gray-200 w-screen relative left-1/2 -translate-x-1/2" />
          <motion.div {...inView()} className="text-[28px] lg:text-[40px] max-w-[750px] py-10">
            Programs
          </motion.div>
          <div className="flex flex-col gap-10 lg:gap-15 items-center justify-center">
            <motion.div {...inView(0)} className="border border-gray-200 rounded-3xl flex flex-col lg:flex-row w-full">
                <div className="flex flex-col gap-6 p-8 lg:p-20 w-full lg:w-1/2">
                    <h1 className="text-xl font-semibold">Climate-Responsive Digital Literacy</h1>
                    <p className="text-gray-400 leading-relaxed text-md tracking-wide">Today's students are more connected than ever — and that connection comes with both extraordinary opportunity and real risk. The TLC Digital Citizenship Curriculum equips students across K–12 with the critical thinking, safety skills, and ethical grounding they need to thrive in a digital world. Rooted in climate-responsive digital literacy, the curriculum goes beyond screen time — it shapes how young people engage, create, and contribute online, responsibly.</p>
                </div>
                <div className="w-full lg:w-1/2">
                    <img loading="lazy" className="w-full aspect-video lg:aspect-auto lg:w-xl lg:h-xl object-cover lg:object-contain rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl border-t lg:border-t-0 lg:border-l border-gray-200" src={earth} alt="" />
                </div>
            </motion.div>
            <motion.div {...inView(0.05)} className="border border-gray-200 rounded-3xl flex flex-col lg:flex-row w-full">
                <div className="flex flex-col gap-6 p-8 lg:p-20 w-full lg:w-1/2">
                    <h1 className="text-xl font-semibold">Pads for Progress</h1>
                    <p className="text-gray-400 leading-relaxed text-md tracking-wide">We support girls in underserved and under-resourced communities across Africa, tackling one of the most significant yet under-stated barriers to their education: Period Poverty. We work with communities to provide access to sanitary pads, and hygiene resources, so young girls can attend school with dignity and confidence. We aim to empower girls to reach their full potential and unlock a brighter future for themselves and their communities by addressing this hidden issue.</p>
                </div>
                <div className="w-full lg:w-1/2">
                    <img loading="lazy" className="w-full aspect-video lg:aspect-auto lg:h-full object-cover rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl border-t lg:border-t-0 lg:border-l border-gray-200" src={pfp} alt="" />
                </div>
            </motion.div>
            <motion.div {...inView(0.1)} className="border border-gray-200 rounded-3xl flex flex-col lg:flex-row w-full">
                <div className="flex flex-col p-8 lg:p-20 w-full lg:w-1/2">
                    <h1 className="text-xl font-semibold mb-6">Social & Emotional Learning Toolkit</h1>
                    <p className="text-gray-400 leading-relaxed text-md tracking-wide">Our Ndu(R) Social and Emotional Learning (SEL) toolkit is a collection of proprietary resources, strategies, and activities designed to support the development of social and emotional skills in students from K to 9. Ndu(R) SEL It typically contains:</p>
                    <ul className="text-gray-400">
                        <li>1. Lesson plans and activities</li>
                        <li>2. Assessment tools (and possible surveys)</li>
                        <li>3. Teacher guides and training materials</li>
                        <li>4. Student worksheets and exercises</li>
                        <li>5. On request, "Strategies for classroom management and climate-building."</li>
                    </ul>
                    <p className="text-gray-400 leading-relaxed text-md tracking-wide mt-6">The toolkit aims to help educators integrate SEL into their classroom teaching practices, promoting students' self-awareness, self-regulation, empathy, relationships, and responsible decision-making skills. Overall, it improves academic learning outcomes.</p>

                </div>
                <div className="w-full lg:w-1/2">
                    <img loading="lazy" className="w-full aspect-video lg:aspect-auto lg:h-full object-cover rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl border-t lg:border-t-0 lg:border-l border-gray-200" src={ndu} alt="" />
                </div>
            </motion.div>
          </div>
        </div>
        <hr className="border-t border-gray-200 w-screen relative left-1/2 -translate-x-1/2" />
        <div className="px-6 md:px-12 lg:px-20 py-10 md:py-20">
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

    </Layout>
    </>
  )
}

export default Programs
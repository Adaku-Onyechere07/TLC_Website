import { FaRocket } from "react-icons/fa6"
import Layout from "../components/Layout"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import mission from "../assets/images/Frame 498.png"
import sel from "../assets/images/41a0c2bc0646ee9c01dc7a280c691f4887eb43ba.jpg"
import bg from "../assets/images/Vector 6.png"
import splash1 from "../assets/images/light-blue.png"
import splash2 from "../assets/images/peach.png"
import splash3 from "../assets/images/purple.png"
import splash4 from "../assets/images/pink.png"
import splash5 from "../assets/images/blue.png"
import image from "../assets/images/a95e62b50f8c087b327489d6f5dcfcd6a3ba6020.png"
import highlights from "../assets/images/Frame 497.png"
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

const coreOfferings = [
    { title: "Climate-Responsive Digital Literacy Program", desc: "The Learning Craft Climate-Responsive Digital Literacy Framework equips African learners with digital skills and the environmental awareness needed to shape a sustainable future." },
    { title: "Social and Emotional Learning Program", desc: "The Ndu® SEL Toolkit equips educators with proprietary resources and activities to develop students' social, emotional, and academic skills from K to 9." },
    { title: "Period Poverty", desc: "We tackle period poverty in underserved African communities, providing girls with the resources to attend school with dignity and reach their full potential." },
]
const cards = [
  { title: "Volunteer with TLC", desc: "Share your skills with a mission that matters. Whether you're a facilitator, researcher, designer, or communicator — there's meaningful ways you can contribute here.", items: ["Flexible, remote-friendly roles available", "Work directly on active programs", "Join a passionate, Pan-African community", "Professional development opportunities"], btn: { label: "Apply to Volunteer", style: "outline" } },
  { title: "Partner with TLC", desc: "Bring TLC's proven programs to your school, state, or institution. We work with governments, NGOs, schools, and research institutions to co-design and deliver impact.", items: ["State & institutional partnership models", "Custom program design available", "24,000+ educators already reached", "Evidence-based, measurable outcomes"], btn: { label: "Contact Us", style: "outline" } },
  { title: "Support Our Work", desc: "Your contribution funds free teacher resources, community-based programs, and the research that shapes education policy across Africa. Be a part of a fast growing force of change.", items: ["Fund specific programs or initiatives", "Transparent impact reporting", "Reach 412,000+ learners served", "Tax-exempt donations accepted"], btn: { label: "Donate Now", style: "filled" } },
]

const Foundation = () => {
  const navigate = useNavigate()
  return (
    <>
    <Layout>
        <div className="bg-grid relative min-h-5xl px-6 md:px-10 lg:px-15 py-12 lg:py-20">
            <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'radial-gradient(ellipse 80% 80% at 0% 0%, #fefddcea 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b via-transparent to-white pointer-events-none" />
            <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-8 lg:gap-0">
            <div className="flex flex-col gap-6 lg:gap-9 max-w-5xl">
                <motion.span {...fadeUp(0)} className="w-auto lg:w-[40%] text-[12px] font-bold bg-[#d5fcee]/30 border border-[#119B53] text-[#119B53] rounded-full px-5 py-2 flex items-center justify-center gap-1 self-start">
                <FaRocket className="h-4 w-4 text-[#119B53]" />YOUR ROLE IN THE MISSION
                </motion.span>
                <motion.h1 {...fadeUp(0.1)} className="text-[36px] md:text-[48px] lg:text-[60px] font-bold leading-tight">
                <span className="text-[#119B53]">Empowering</span> communities, <span className="text-[#119B53]">embracing</span> culture, <span className="text-[#119B53]">creating</span> lasting impact.
                </motion.h1>
                <motion.p {...fadeUp(0.2)} className="text-gray-500 text-md leading-loose md:max-w-[700px] font-medium">
                The Learning Craft Foundation was established to reimagine education across Africa — ensuring every child, especially the most vulnerable, has access to learning that uplifts, includes, and transforms.nnovative teacher training and evidence-based SEL practices.
                </motion.p>
                <motion.div {...fadeUp(0.3)} className="flex gap-6 lg:gap-15">
                <button onClick={() => navigate('/foundation/payment')} className="bg-[#119B53] text-white text-md font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-lg shadow-xl shadow-black/10">Donate</button>
                <button onClick={() => navigate('/get-involved')} className="bg-black text-white text-md font-semibold px-8 lg:px-10 py-3 lg:py-4 rounded-lg shadow-xl shadow-black/10">Volunteer</button>
                </motion.div>
            </div>
            <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:0.9,delay:0.2,ease:[0.16,1,0.3,1] as any}} className="w-full lg:w-full lg:h-full">
              <img loading="lazy" className="w-full h-full object-cover" src={image} alt="" />
            </motion.div>
            </div>
        </div>

        <div className="w-full h-full relative flex items-center justify-center">
        <div className="relative w-full h-full">
          <img loading="lazy" src={bg} alt="Description" className="w-full md:max-h-[700px] fit-stretch" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-white text-[36px] md:text-[44px] mt-20 lg:text-[55px] font-bold">Our Mission</h1>
            <img loading="lazy" src={mission} className="w-full max-w-2xl lg:w-7xl lg:h-7xl p-10 object-contain" />
          </div>
        </div>
      </div>

        <div className="p-6 md:p-12 lg:p-20 pt-6 lg:pt-10 bg-gray-100/50">
          <motion.div {...inView()} className="text-[28px] lg:text-[36px] max-w-[750px] py-10">Our Core Offerings</motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-15 leading-loose">
                {coreOfferings.map((card, i) => (
                <motion.div key={card.title} {...inView(i * 0.1)} className="relative">
                    <div className="bg-white flex flex-col px-6 lg:px-8 py-10 lg:py-12 rounded-2xl drop-shadow-lg shadow-black/100 min-h-[300px] h-[460px] lg:h-[420px]">
                    <div className="absolute bottom-0 right-0 w-22 h-22 bg-black/10" style={{ borderRadius: '14px 0 20px 0' }} />
                    <p className="text-gray-900 font-medium text-xl lg:text-2xl mb-6">{card.title}</p>
                    <p className="text-md lg:text-sm text-gray-500 leading-loose mb-8 flex-1">{card.desc}</p>
                    <p onClick={() => navigate('/foundation/programs')} className="text-[#1a5c2e] font-semibold uppercase text-lg leading-loose cursor-pointer hover:underline">LEARN MORE</p>
                </div>
                <button onClick={() => navigate('/foundation/programs')} className="absolute bottom-0 right-0 bg-[#1a5c2e] rounded-tl-2xl rounded-br-2xl w-20 h-20 flex items-center justify-center hover:bg-[#154a24] transition-colors shadow-lg">
                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                </motion.div>
                ))}
            </div>
        </div>

        <div className="px-6 md:px-12 lg:px-20">
          <motion.div {...inView()} className="font-thin text-[28px] lg:text-[36px] max-w-[750px] py-10">
            SEL Impact Lab: <span className="text-[#119B53]">Evidence Hub</span>
          </motion.div>
          <div className="flex flex-col gap-4 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {[
            { num: "01", title: "The Problem", body: "Many students in Nigeria's non-state affordable schools face challenges beyond academics — stress, poor emotional regulation, and difficult school climates that undermine learning. The SEL Impact Lab, developed in partnership with SEED Care and Support Foundation, is an evidence hub designed to measure the effect of The Learning Craft's Ndu® SEL Program on student outcomes, wellbeing, and teacher practice across select affordable schools in Lagos State.", list: null, splash: splash1 },
            { num: "02", title: "The Approach", body: "The SEL Impact Lab is an evidence hub designed to rigorously measure the effect of The Learning Craft's Ndu® SEL Program on student academic outcomes, wellbeing, and teacher practice. Developed in partnership with SEED Care and Support Foundation, the lab will be implemented across select affordable schools in Lagos State — institutions where the need is real and the potential for impact is significant.", list: null, splash: splash2 },
            { num: "03", title: "The Technique", body: "The Lab uses a Randomised Controlled A/B testing design, comparing 10 treatment schools implementing the Ndu® SEL Program against 10 control schools over two school terms, engaging 800–1000 students and their teachers. The study runs across five phases:", list: ["Baseline", "Implementation", "Midline", "Endline", "Analysis & Reporting — culminating in findings shared with SEED, participating schools, and the wider education community."], splash: splash3 },
          ].map((card, i) => (
          <motion.div key={card.num} {...inView(i * 0.1)} className="drop-shadow-lg shadow-black/50 rounded-3xl h-full">
            <div className="relative bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 flex flex-col gap-3 h-full overflow-hidden">
            <img loading="lazy" src={card.splash} alt="" className="absolute top-0 left-0 w-full object-cover pointer-events-none select-none" />
              <p className="text-[28px] font-bold text-gray-900 leading-none">{card.num}</p>
            <div className="relative z-10 flex flex-col gap-3">              
             <p className="text-[17px] py-3 font-semibold text-gray-900">{card.title}</p>
              <p className="text-[15px] tracking-wide text-gray-600 leading-relaxed">{card.body}</p>
              {card.list && (
                <ol className="text-[13px] text-gray-500 leading-loose list-decimal list-inside">
                  {card.list.map((item) => <li key={item}>{item}</li>)}
                </ol>
              )}
              </div>              
            </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch px-0 lg:px-40 h-full gap-4 py-10 w-full">
        {[
          { num: "04", title: "The Estimation", body: "For students: improved literacy and numeracy, stronger SEL competencies — including self-awareness, empathy, and resilience — and greater overall wellbeing and classroom participation. For teachers: reduced stress and burnout, stronger classroom management, and healthier teacher-student relationships. For schools: a more positive school culture and tangible evidence of SEL sustainability embedded in daily practice.", list: null, splash: splash4 },
          { num: "05", title: "The Impact", body: "Research consistently links Social and Emotional Learning to better academic achievement, improved wellbeing, and stronger classroom relationships. The SEL Impact Lab is an opportunity to validate this within Nigeria's non-state affordable school context — and to build a scalable, evidence-backed model for integrating SEL where it is needed most. The findings will also directly inform SEED Care and Support Foundation's broader school support strategy.", list: null, splash: splash5 },
        ].map((card, i) => (
        <motion.div key={card.num} {...inView(i * 0.1)} className="drop-shadow-lg shadow-black/50 min-h-[300px] lg:min-h-[500px] rounded-3xl">
          <div className="relative bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 flex flex-col gap-3 h-full overflow-hidden">
          <img loading="lazy" src={card.splash} alt="" className="absolute top-0 left-0 w-full object-cover pointer-events-none select-none" />
          <p className="text-[28px] font-bold text-gray-900 leading-none">{card.num}</p>
          <div className="relative z-10 flex flex-col gap-3">
            <p className="text-[17px] py-3 font-semibold text-gray-900">{card.title}</p>
            <p className="text-[15px] tracking-wide text-gray-600 leading-relaxed">{card.body}</p>
          </div>
          </div>
          </motion.div>
        ))}
      </div>
          </div>
        </div>

        <motion.div {...inView()}>
            <img loading="lazy" className="h-full w-full object-cover" src={highlights} alt="" />
        </motion.div>

        <div className="px-6 md:px-16 lg:px-30">
          <motion.div {...inView()} className="font-thin text-[28px] lg:text-[36px] max-w-[750px] py-10">Initiatives</motion.div>
          <motion.div {...inView(0.1)} className="bg-[#89853C] rounded-4xl min-h-[400px] lg:h-[80vh] w-full p-6 lg:p-10">
           <div className="bg-gray-200 h-full rounded-3xl flex flex-col lg:flex-row">
                <div className="flex flex-col justify-center gap-4 w-full lg:w-[40%] px-6 lg:px-10 py-8 lg:py-10">
                    <h1 className="text-xl font-bold">The TLCF SEL Prize</h1>
                    <div className="text-gray-700 leading-relaxed text-sm tracking-wide leading-loose">The TLCF SEL Prize challenges students and teachers to design community-based projects that address an annual SEL theme, with winners celebrated across our platforms.
                    <p className="text-gray-700 leading-relaxed text-md tracking-wide py-2 leading-loose">Our inaugural theme is The Kindness Challenge — inviting schools to create meaningful projects rooted in empathy, compassion, and SEL principles. Because kindness isn't a one-time act; it's a way of life.</p>
                    <p className="text-black font-semibold leading-relaxed text-md tracking-wide leading-loose">Follow our social media platforms for participation details.</p></div>
                </div>
                <div className="w-full lg:w-[60%]">
                    <img loading="lazy" className="w-full h-full object-cover rounded-b-3xl lg:rounded-b-none lg:rounded-r-xl" src={sel} alt="" />
                </div>
            </div>
          </motion.div>
        </div>

        <div className="px-6 md:px-12 lg:px-20 py-10 lg:py-15">
          <hr className="border-t border-gray-200 w-screen relative left-1/2 -translate-x-1/2 pb-5" />
          <motion.div {...inView()} className="font-thin text-[28px] lg:text-[36px] max-w-[750px] pt-10 lg:pt-15">#EducationCannotWait</motion.div>
          <motion.p {...inView(0.05)} className="text-sm text-gray-400 tracking-wide pt-5 pb-10 lg:pb-15">Tell us about yourself and how you'd like to get involved.</motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-15 leading-loose pb-10 lg:pb-15">
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
                    <button onClick={() => {
                      if (card.btn.label === 'Donate Now') navigate('/foundation/payment')
                      else navigate('/get-involved')
                    }} className={`w-full py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 ${
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

export default Foundation
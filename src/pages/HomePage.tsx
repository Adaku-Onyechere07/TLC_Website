import Layout from "../components/Layout"
import welcomeImage from "../assets/images/ee515d2d2ce7b31f8846d0f34f11d7f71b24f6d2.jpg"
import programs from "../assets/images/the-learning-craft-logo.png"
import workbooks from "../assets/images/12ce44292d56eacb6951984f01067346bea85be3.png"
import toolkits from "../assets/images/fc6474610475e15f19972bd1be904aba8860a722.png"
import pascel from "../assets/images/25bceda049d2670c50694d264ba814105305eb46.jpg"
import { motion } from 'framer-motion'
import teta from "../assets/images/355a3ad3e7d8fb0b8ff3151bb61596ee0acdacde.png"
import planner from "../assets/images/214cace7acea5cda047aa60b37ae6b76d5b37420.png"
import { FaArrowRight, FaGraduationCap } from "react-icons/fa6"
import { useRef, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import frame from "../assets/images/b1f0021147a6f7cfc3a0274ab8e8e28cb4e00774.png"
import cca from "../assets/images/9c30439cc0fe957b00656e287c1c917556d06fa1.png"
import teachart from "../assets/images/616822271c883e0e15f4fd5e469c83cc842ef824.jpg"

const HomePage = () => {
  const navigate = useNavigate()
  const scrollRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const directionRef = useRef<"forward" | "backward">("forward")
  const isHoveredRef = useRef(false)
  const [showButtons, setShowButtons] = useState(false)

  const scrollAmount = 750
  const intervalMs = 2000

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const autoScroll = () => {
      if (isHoveredRef.current) return

      const { scrollLeft, scrollWidth, clientWidth } = container
      const atEnd = scrollLeft + clientWidth >= scrollWidth - 10
      const atStart = scrollLeft <= 10

      if (directionRef.current === "forward" && atEnd) {
        directionRef.current = "backward"
      } else if (directionRef.current === "backward" && atStart) {
        directionRef.current = "forward"
      }

      const target =
        directionRef.current === "forward"
          ? scrollLeft + scrollAmount
          : scrollLeft - scrollAmount

      container.scrollTo({ left: target, behavior: "smooth" })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationRef.current = window.setInterval(autoScroll, intervalMs)
        } else {
          if (animationRef.current) clearInterval(animationRef.current)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
      if (animationRef.current) clearInterval(animationRef.current)
    }
  }, [])

  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" })
  }

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

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

          <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-8 lg:gap-0">
            <div className="flex flex-col gap-6 lg:gap-9 max-w-[700px]">
              <span className="w-auto lg:w-[50%] text-[12px] font-bold bg-[#d5fcee]/30 border border-[#119B53] text-[#119B53] rounded-full px-5 py-2 flex items-center justify-center gap-1 self-start">
                 <FaGraduationCap className="h-4 w-4 text-[#119B53]" />REVOLUTIONIZING AFRICAN EDUCATION
              </span>

              <h1 className="text-[36px] md:text-[48px] lg:text-[60px] font-bold leading-tight">
                Built for Educators.<br />
                <span className="text-[#119B53]">Designed for Success.</span>
              </h1>

              <p className="text-gray-500 text-md leading-relaxed md:max-w-[500px] font-medium">
                The Learning Craft bridges the gap between academic excellence
                and social-emotional wellbeing through innovative teacher training
                and evidence-based SEL practices.
              </p>

              <div className="flex gap-6 lg:gap-15">
                <button onClick={() => navigate('/resources')} className="bg-[#119B53] text-white text-md font-medium px-6 lg:px-8 py-3 lg:py-4 rounded-lg shadow-xl shadow-black/10">
                  Explore Resources
                </button>
                <button onClick={() => navigate('/about')} className="bg-black text-white text-md font-medium px-8 lg:px-10 py-3 lg:py-4 rounded-lg shadow-xl shadow-black/10">
                  Our Mission
                </button>
              </div>
            </div>

            <motion.div className="relative w-full max-w-[500px] lg:w-[500px] h-[300px] lg:h-[430px] rounded-2xl overflow-hidden shadow-lg shadow-black/40" 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0 , ease: 'easeOut' }}
              viewport={{ once: true }}>
              <img
                src={welcomeImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
        <div className="border-t-gray-500 min-h-[80vh] px-6 md:px-10 lg:px-15 py-12 lg:py-20">
          <hr className="border-t border-gray-200 w-screen relative left-1/2 -translate-x-1/2" />
          <div className="font-thin text-[28px] lg:text-[40px] max-w-[750px] py-10">
            One community, built for teaching and learning
          </div>
          <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-center justify-between h-full">
            <div onClick={() => navigate('/programs')} className="h-[400px] lg:h-[500px] w-full md:w-[26vw] border border-gray-200 rounded-[2rem] flex flex-col cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-gradient-to-b from-[#1C5035] to-[#24B66B] rounded-full p-8 h-32 w-32 lg:h-40 lg:w-40 flex items-center justify-center">
                  <img src={programs} alt="" />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center bg-gray-200 border-b border-b-gray-200 rounded-b-[2rem] gap-6">
                <div className="flex flex-col bg-gray-200 py-8 px-6 gap-1 rounded-b-[2rem]">
                  <p className="font-bold text-xl">Programs</p>
                  <p className="text-[12px] font-medium text-gray-500">Explore many great programs TLC has to offer.</p>
                </div>
                <FaArrowRight className="size-9 h-full flex items-center justify-center pr-5" />
              </div>
            </div>
            <div onClick={() => navigate('/resources/sel-workbooks')} className="h-[400px] lg:h-[500px] w-full md:w-[26vw] border border-gray-200 rounded-[2rem] flex flex-col cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex-1 flex items-center justify-center">
                  <img src={workbooks} alt="" className="p-8 h-60 w-60 lg:h-80 lg:w-80 flex items-center justify-center" />
              </div>
              <div className="flex flex-row items-center justify-center bg-gray-200 border-b border-b-gray-200 rounded-b-[2rem] gap-6">
                <div className="flex flex-col bg-gray-200 py-8 px-6 gap-1 rounded-b-[2rem]">
                  <p className="font-bold text-xl">Workbooks</p>
                  <p className="text-[12px] font-medium text-gray-500">Access essential resources to supercharge learning.</p>
                </div>
                <FaArrowRight className="size-9 h-full flex items-center justify-center pr-5" />
              </div>
            </div>
            <div onClick={() => navigate('/resources/ndu-sel-toolkit')} className="h-[400px] lg:h-[500px] w-full md:w-[26vw] border border-gray-200 rounded-[2rem] flex flex-col cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex-1 flex items-center justify-center">
                  <img src={toolkits} alt="" className="p-8 h-48 w-64 lg:h-60 lg:w-80 flex items-center justify-center" />
              </div>
              <div className="flex flex-row items-center justify-center bg-gray-200 border-b border-b-gray-200 rounded-b-[2rem] gap-6">
                <div className="flex flex-col bg-gray-200 py-8 px-6 gap-1 rounded-b-[2rem]">
                  <p className="font-bold text-xl">SEL Toolkits</p>
                  <p className="text-[12px] font-medium text-gray-500">Access essential teaching resources at your disposal.</p>
                </div>
                <FaArrowRight className="size-9 h-full flex items-center justify-center pr-5" />
              </div>
            </div>
          </div>
          <motion.div className="flex flex-col lg:flex-row justify-between min-h-[50vh] lg:min-h-[70vh] w-full rounded-[2rem] bg-[#1C5035] my-20 overflow-hidden drop-shadow-2xl shadow-black/30"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 , ease: 'easeInOut' }}
              viewport={{ once: true }}>
            <div className="flex flex-col gap-6 lg:gap-8 w-full lg:max-w-1/2 px-8 lg:px-15 py-12 lg:py-20 text-white">
              <span className="w-fit text-[14px] font-bold text-[#4BB04F] tracking-widest uppercase">
                FLAGSHIP INITIATIVE
              </span>

              <h1 className="text-[28px] lg:text-[38px] font-extrabold leading-tight">
                PACSEL: Pan-African Conference on Social Emotional Learning
              </h1>

              <p className="text-gray-300 text-md leading-relaxed md:max-w-[400px]">
                The largest gathering of educators, policy makers, and researchers in Africa dedicated to scaling SEL across the continent.
              </p>

              <div className="flex gap-6 lg:gap-15">
                <button onClick={() => navigate('/foundation/pascel')} className="bg-[#119B53] text-white text-md font-medium px-8 py-4 rounded-lg shadow-xl shadow-black/10">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 self-stretch h-60 lg:h-auto">
              <img src={pascel} alt="" className="h-full w-full object-cover rounded-b-[2rem] lg:rounded-b-none lg:rounded-r-[2rem]" />
            </div>
          </motion.div>
          <div className="border-t-gray-500 h-full">
          <hr className="border-t border-gray-200 w-screen relative left-1/2 -translate-x-1/2" />
            <div className="font-thin text-[28px] lg:text-[40px] max-w-[750px] py-10">
              Suggested for you
            </div>

            <div
              className="relative"
              onMouseEnter={() => {
                isHoveredRef.current = true
                setShowButtons(true)
              }}
              onMouseLeave={() => {
                isHoveredRef.current = false
                setShowButtons(false)
              }}
            >
              {showButtons && (
                <>
                <div className="absolute top-10 left-3 flex gap-2 z-10">
                  <button
                    onClick={handleScrollLeft}
                    className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:bg-gray-50"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M8 2L4 6l4 4" stroke="#1a7a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                <div className="absolute top-10 right-3 flex gap-2 z-10">
                  <button
                    onClick={handleScrollRight}
                    className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:bg-gray-50"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M4 2l4 4-4 4" stroke="#1a7a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                </>
              )}

              <div
                ref={scrollRef}
                className="overflow-x-auto w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                <div className="flex flex-row justify-between items-center w-max gap-6 lg:gap-20">
                  <div onClick={() => navigate("/resources/exceptional-teachers-academy")} className="flex items-center overflow-hidden h-40 md:h-35 w-[320px] md:w-[500px] lg:w-full lg:min-w-[700px] rounded-lg border border-gray-200 bg-white drop-shadow-lg shadow-black/70 cursor-pointer hover:shadow-lg transition-shadow">
                    <div
                      className="flex-shrink-0 w-24 lg:w-40 self-stretch flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #119B53, #85C54A, #C0DB46, #FAF041)" }}
                    >
                      <img src={teta} alt="" className="w-16 h-16 lg:w-30 lg:h-30 object-contain" />
                    </div>
                    <div className="flex-1 px-3 lg:px-4 py-3 flex flex-col justify-between h-full">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[13px] lg:text-[16px] font-semibold text-gray-900 leading-snug">
                          The Exceptional Teachers Academy (TETA)
                        </p>
                        <span className="flex-shrink-0 text-[8px] font-medium px-2 py-0.5 rounded-full border border-[#1C5035] text-[#1C5035]">
                          TRAINING
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-amber-400 text-lg">★</span>
                          <span className="text-black text-md font-semibold">5.0</span>
                          <span className="text-gray-400">(2,482)</span>
                          <span className="text-gray-400 text-xl">·</span>
                          <span className="hidden md:inline">1 Year</span>
                        </div>
                        <div>
                          <p className="text-base font-semibold text-gray-900 text-[20px] lg:text-[25px]">₦60,000</p>
                        </div>
                      </div>
                      <div className="flex pt-3 md:pt-0 items-center justify-end">
                        <button
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ background: "#1a7a4a" }}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M4 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div onClick={() => navigate("/resources/curriculum-planner")} className="flex items-center overflow-hidden h-40 md:h-35 w-[320px] md:w-[500px] lg:w-full lg:min-w-[700px] rounded-lg border border-gray-200 bg-white drop-shadow-lg shadow-black/70 cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0 w-24 lg:w-40 self-stretch flex items-center justify-center border-l border-l-gray-200">
                      <img src={planner} alt="" className="w-16 h-16 lg:w-30 lg:h-30 object-contain" />
                    </div>
                    <div className="flex-1 px-3 lg:px-4 py-3 flex flex-col justify-between h-full">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[13px] lg:text-[16px] font-semibold text-gray-900 leading-snug">
                          TLC Curriculum Planner
                        </p>
                        <span className="flex-shrink-0 text-[8px] font-medium px-2 py-0.5 rounded-full border border-[#1C5035] text-[#1C5035]">
                          TRAINING
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-amber-400 text-lg">★</span>
                          <span className="text-black text-md font-semibold">5.0</span>
                          <span className="text-gray-400">(504)</span>
                          <span className="text-gray-400 text-xl">·</span>
                        </div>
                        <div>
                          <p className="text-base font-semibold text-gray-900 text-[20px] lg:text-[25px]">₦35,000</p>
                        </div>
                      </div>
                      <div className="flex pt-3 md:pt-0 items-center justify-end">
                        <button
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ background: "#1a7a4a" }}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M4 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div onClick={() => navigate("/resources/curriculum-coordinator-academy")} className="flex items-center overflow-hidden h-40 md:h-35 lg:h-35 w-[320px] md:w-[500px] lg:w-full lg:min-w-[700px] rounded-lg border border-gray-200 bg-white drop-shadow-lg shadow-black/70 cursor-pointer hover:shadow-lg transition-shadow">
                      <div className="flex-shrink-0 w-24 lg:w-40 self-stretch flex items-center justify-center border-l border-l-gray-200">
                        <img src={cca} alt="" className="w-16 h-16 lg:w-30 lg:h-30 object-contain" />
                      </div>
                    <div className="flex-1 px-3 lg:px-4 py-3 flex flex-col justify-between h-full">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[13px] lg:text-[16px] font-semibold text-gray-900 leading-snug">
                          Curriculum Coordinator's Academy (CCA)
                        </p>
                        <span className="flex-shrink-0 text-[8px] font-medium px-2 py-0.5 rounded-full border border-[#1C5035] text-[#1C5035]">
                          TRAINING
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-amber-400 text-lg">★</span>
                          <span className="text-black text-md font-semibold">5.0</span>
                          <span className="text-gray-400">(2,000)</span>
                          <span className="text-gray-400 text-xl">·</span>
                          <span className="hidden md:inline">1 Year</span>
                        </div>
                        <div>
                          <p className="text-base font-semibold text-gray-900 text-[25px]"></p>
                        </div>
                      </div>
                      <div className="flex pt-3 md:pt-0 items-center justify-end">
                        <button
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ background: "#1a7a4a" }}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M4 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div onClick={() => navigate("/resources/teachart")} className="flex items-center overflow-hidden h-40 md:h-35 w-[320px] md:w-[500px] lg:w-full lg:min-w-[700px] rounded-lg border border-gray-200 bg-white drop-shadow-lg shadow-black/70 cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0 w-24 lg:w-40 self-stretch flex items-center justify-center border-l border-l-gray-200">
                      <img src={teachart} alt="" className="w-16 h-16 lg:w-30 lg:h-30 object-contain" />
                    </div>
                    <div className="flex-1 px-3 lg:px-4 py-3 flex flex-col justify-between h-full">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[13px] lg:text-[16px] font-semibold text-gray-900 leading-snug">
                          TeachArt
                        </p>
                        <span className="flex-shrink-0 text-[8px] font-medium px-2 py-0.5 rounded-full border border-[#1C5035] text-[#1C5035]">
                          PLATFORM
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-gray-600 text-[8px] lg:text-md pt-2">Empowering educators through impactful conversations</span>
                          <span className="text-gray-400 text-xl">·</span>
                        </div>
                        <div>
                          <p className="text-base pt-2 font-bold text-gray-900 italic text-[12px]">Coming Soon</p>
                        </div>
                      </div>
                      <div className="flex pt-3 md:pt-0 items-center justify-end">
                        <button
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ background: "#1a7a4a" }}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M4 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-200 w-screen relative left-1/2 -translate-x-1/2 mt-10" />
          <motion.div className="flex flex-col lg:flex-row justify-between min-h-[50vh] lg:min-h-[80vh] w-full rounded-[2rem] bg-[#1C5035] my-20 overflow-hidden drop-shadow-2xl shadow-black/30"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}>
              <div className="flex flex-row gap-6 lg:gap-10 relative">
                <div className="flex flex-col gap-6 lg:gap-8 max-w-full lg:max-w-[700px] px-8 lg:px-15 py-12 lg:py-20 text-white">
                <span className="w-fit text-[16px] lg:text-[20px] font-medium text-WHITE tracking-widest uppercase">
                  READY TO CRAFT THE FUTURE?
                </span>

                <h1 className="text-[28px] lg:text-[40px] font-black tracking-wide">
                  Join the Movement Building Africa's Tourism Future
                </h1>
                <div className="flex gap-6 lg:gap-15">
                  <button onClick={() => navigate('/resources')} className="bg-white text-black text-md font-medium px-6 lg:px-8 py-3 lg:py-4 rounded-lg shadow-xl shadow-black/10">
                    Our Products
                  </button>
                  <button onClick={() => navigate('/get-involved')} className="text-white border border-white text-md font-medium px-6 lg:px-8 py-3 lg:py-4 rounded-lg shadow-xl shadow-black/10">
                    Partner with Us
                  </button>
                </div>
              </div>
              <div className="hidden lg:block absolute right-0 top-0 bottom-0">
                <img className="min-w-[350px] min-h-[300px] rotate-67 absolute -top-24 right-10 w-full h-full object-contain" src={frame} alt="" />
                <img className="min-w-[400px] min-h-[400px] rotate-67 absolute top-5 right-30 w-full h-full object-contain" src={frame} alt="" />
                <img className="min-w-[450px] min-h-[500px] rotate-67 absolute top-38 right-50 w-full h-full object-contain" src={frame} alt="" />
              </div>
              </div>
          </motion.div>
          </div>
        
      </Layout>
    </>
  )
}

export default HomePage
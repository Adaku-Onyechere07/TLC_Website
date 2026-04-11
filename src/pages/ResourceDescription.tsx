import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import providerLogo from "../assets/images/the-learning-craft-logo.png"
import Layout from "../components/Layout";
import nduSelToolkitImg from "../assets/images/a4a950419bc77fefce40a3375788655446975896 (1).png"
import selWorkbooksImg from "../assets/images/12ce44292d56eacb6951984f01067346bea85be3.png"
import curriculumPlannerImg from "../assets/images/3b31ee28447c7825f670b9e66ff2f4830ca53230.png"
import ccaImg from "../assets/images/9c30439cc0fe957b00656e287c1c917556d06fa1.png"
import tetaImg from "../assets/images/355a3ad3e7d8fb0b8ff3151bb61596ee0acdacde.png"
import customCurriculumImg from "../assets/images/the-learning-craft-logo.png"
import dyslexicsImg from "../assets/images/the-learning-craft-logo.png"
import schoolCoherenceImg from "../assets/images/6458cad9592de715fd23e3c358b470b0187eab18.jpg"
import teachartImg from "../assets/images/616822271c883e0e15f4fd5e469c83cc842ef824.jpg"
import nduVideo from "../assets/images/NDU_SEL_PROMO.mp4"

type ActionType = "purchase" | "enroll" | "contact" | "coming-soon";

interface ChecklistItem { text: string }
interface BulletItem { text: string }

interface ResourceDetail {
  slug: string;
  title: string;
  providerName: string;
  description: React.ReactNode;
  bullets?: BulletItem[];
  checklist?: ChecklistItem[];
  price?: string;
  actionType: ActionType;
  actionLabel: string;
  imageSlot?: boolean;
  image?: string;
  comingSoon?: string;
  quantitySelector?: boolean;
  moreDetails?: string;
}

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a5c2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const RESOURCES: ResourceDetail[] = [
  {
    slug: "ndu-sel-toolkit",
    title: "NDU® SEL Toolkit",
    providerName: "The Learning Craft",
    image: nduSelToolkitImg,
    description: (
      <>
        <div className="mb-3 text-xl leading-relaxed text-black">
          <p>SEL Social &amp; Emotional Learning (Tool Kit)</p>
        </div>
        <p className="mb-3 text-sm leading-relaxed text-black">
          ndu® Social &amp; Emotional Learning (SEL) Programme – is a comprehensive learning experience designed to enable students and educators to develop SEL skills; cultivating a culture of care, collaboration and character in classrooms and schools around the world.
        </p>
        <p className="mb-3 text-xl font-medium text-gray-800">Empowering Schools, Transforming Students</p>
        <p className="mb-3 text-sm leading-relaxed text-black">
          ndu® SEL is more than just a programme – it's a toolkit for educators who believe in the power of social and emotional learning in shaping the future.
        </p>
        <p className="mb-3 text-sm leading-relaxed text-black">
          Our programme equips teachers with the resources they need to seamlessly integrate SEL into their daily curriculum, creating a nurturing environment where every student feels seen, heard, connected and valued. Students continue to show a statistically conclusive learning outcomes significantly, by reducing behavioral issues, increasing student engagement, or fostering a growth mindset.
        </p>
        <p className="mb-2 text-sm leading-relaxed text-black">Join our ndu® Social &amp; Emotional Learning SEL Certified membership:</p>
        <ul className="list-disc list-inside text-sm text-black space-y-1 mb-3">
          <li>School Membership</li>
          <li>Access to exclusive adoption training for enhancing school culture. Community forums for teacher, student, parent collaboration to foster strong relationships and a sense of community.</li>
          <li>Teacher member: access to exclusive resources (including lesson plans, teacher guides etc), training, community forums.</li>
          <li>Year-long SEL Integration advisory and support.</li>
          <li>Proven outcomes: statistically conclusive and positive impact on student achievement through our SEL membership.</li>
        </ul>
        <p className="text-sm text-gray-500 italic">
          Send us an email for more about the program:{" "}
          <span className="text-[#1a5c2e]">info@learningcraft.org</span>
        </p>
      </>
    ),
    bullets: [
      { text: "30-day prompt cards provide teachers with thoughtfully curated activities that invite students to explore the five core SEL competency areas." },
      { text: "Comprehensive teacher guide, which serves as a roadmap for implementing the program with ease and confidence." },
      { text: "Lesson plans at 4 levels – Early Childhood, Lower Primary, Upper Primary and Junior Secondary (Digital copies)." },
      { text: "Honour badges awarded weekly and..." },
    ],
    price: "₦ 35,000",
    actionType: "purchase",
    actionLabel: "Purchase",
    imageSlot: true,
    quantitySelector: true,
    moreDetails: "More Details →",
  },

  {
    slug: "sel-workbooks",
    title: "SEL Workbooks",
    providerName: "The Learning Craft",
    image: selWorkbooksImg,
    description: (
      <>
        <p className="mb-3 text-lg font-semibold text-gray-800">Empower Your Child's Potential with Ndu SEL Workbooks</p>
        <p className="mb-3 text-sm leading-relaxed text-black">
          Develop essential life skills among children; building strong relationships, manage emotions and develop a positive self-concept with our interactive SEL Workbooks.
        </p>
        <p className="mb-2 text-sm leading-relaxed text-black">The Ndu SEL Helps:</p>
        <ul className="list-disc list-inside text-sm text-black space-y-1 mb-3">
          <li>Build confidence and self-awareness</li>
          <li>Manage emotions and relationships</li>
          <li>Achieve academic and personal goals</li>
        </ul>
        <p className="text-sm text-black">
          Get Your Workbook Now 🛒 Shop now → visit{" "}
          <span className="text-[#1a5c2e] font-medium">Ndu Resources Store</span>
        </p>
      </>
    ),
    bullets: [{ text: "Chato Bookbazaar" }],
    actionType: "contact",
    actionLabel: "Contact Us",
    imageSlot: true,
  },

  {
    slug: "curriculum-planner",
    title: "The Learning Craft Curriculum Planner",
    providerName: "The Learning Craft",
    image: curriculumPlannerImg,
    description: (
      <>
        <p className="mb-3 text-lg leading-relaxed text-black">
          The Learning Craft collaborates with schools and institutions to design impactful solutions that lead to desirable outcomes.
        </p>
        <p className="mb-2 text-sm font-semibold text-gray-800">Schools &amp; Learners</p>
        <p className="mb-3 text-sm leading-relaxed text-black">
          At The Learning Craft, we collaborate with schools to develop effective, academic progressive pedagogies for impactful goals and desired outcomes. Our curriculum focuses on the following areas:
        </p>
        <ul className="list-disc list-inside text-sm text-black space-y-1 mb-3">
          <li>Mathematics</li>
          <li>Language Arts</li>
          <li>Social Studies &amp; Citizenship</li>
          <li>Information and Communication Technology (ICT)</li>
          <li>Digital literacy</li>
          <li>Social &amp; Emotional Learning</li>
        </ul>
        <p className="mb-3 text-sm leading-relaxed text-black">
          Our curriculum is competency-based, designed to equip participants with the necessary knowledge, tools, and strategies to excel in curriculum design and implementation.
        </p>
        <p className="mb-2 text-sm font-semibold text-gray-800">Institutions &amp; Trainers</p>
        <p className="mb-3 text-sm leading-relaxed text-black">
          We will collaborate with you to design and enhance your training programs using effective methodological tailored to your goals. Our Professional Development focuses on three areas known as the "3C Framework":
        </p>
        <ul className="list-disc list-inside text-sm text-black space-y-1 mb-3">
          <li>Connections (building connections within team and with expertise)</li>
          <li>Competency (Building tools for capacity)</li>
          <li>Coherence (Creating coherence across the system)</li>
        </ul>
        <p className="text-sm text-black">
          The Learning Craft Curriculum Planner is available exclusively through direct engagement with The Learning Craft.
        </p>
      </>
    ),
    bullets: [
      { text: "Customised to your school's unique context and goals." },
      { text: "Competency-based design with measurable learning outcomes." },
      { text: "Covers Mathematics, Language Arts, Social Studies, ICT, Digital Literacy, and SEL." },
    ],
    actionType: "contact",
    actionLabel: "Contact Us",
    imageSlot: true,
  },

  {
    slug: "exceptional-teachers-academy",
    title: "The Exceptional Teachers Academy (TETA)",
    providerName: "The Learning Craft",
    image: tetaImg,
    description: (
      <>
        <p className="mb-3 text-lg font-semibold text-gray-800">Cultivating a New Generation of Exceptional Educators</p>
        <p className="mb-3 text-sm leading-relaxed text-black">
          TETA is a comprehensive year-long teacher training solution that aims to cultivate a new generation of educators. This programme focuses on upskilling teachers, elevating their status, and increasing their value, all to foster excellence in teaching.
        </p>
      </>
    ),
    checklist: [
      { text: "Year-long comprehensive training programme" },
      { text: "Upskilling for classroom excellence" },
      { text: "SEL integration into teaching practice" },
      { text: "Ongoing coaching and mentorship" },
    ],
    price: "₦ 60,000",
    actionType: "enroll",
    actionLabel: "Enroll",
    imageSlot: true,
    quantitySelector: false,
  },

  {
    slug: "curriculum-coordinator-academy",
    title: "Curriculum Coordinator's Academy (CCA)",
    providerName: "The Learning Craft",
    image: ccaImg,
    description: (
      <>
        <p className="mb-3 text-lg font-semibold text-gray-800">Equipping Curriculum Leaders for Impact</p>
        <p className="mb-3 text-sm leading-relaxed text-black">
          CCA is a comprehensive year-long teacher training solution that aims to cultivate a new generation of educators. This programme focuses on upskilling teachers, elevating their status, and increasing their value, all to foster excellence in teaching.
        </p>
      </>
    ),
    checklist: [
      { text: "Year-long training for curriculum coordinators" },
      { text: "Strategic curriculum design and alignment" },
      { text: "Leadership and coaching frameworks" },
      { text: "Evidence-based curriculum evaluation" },
    ],
    actionType: "enroll",
    actionLabel: "Enroll",
    imageSlot: true,
  },

  {
    slug: "how-to-teach-dyslexics",
    title: "How to Teach Learners with Dyslexia",
    providerName: "The Learning Craft",
    image: dyslexicsImg,
    description: (
      <>
        <p className="mb-3 text-lg font-semibold text-gray-800">A Practical Guide for Inclusive Education</p>
        <p className="mb-3 text-sm leading-relaxed text-black">
          A practical, evidence-based guide for classroom teachers and school leaders on identifying dyslexia, designing inclusive lessons, and supporting affected learners.
        </p>
      </>
    ),
    checklist: [
      { text: "Evidence-based strategies for dyslexia support" },
      { text: "Inclusive lesson design frameworks" },
      { text: "Identification and early intervention tools" },
    ],
    price: "₦ 5,000",
    actionType: "purchase",
    actionLabel: "Purchase",
    imageSlot: true,
    quantitySelector: true,
  },

  {
    slug: "school-coherence-toolkit",
    title: "School Coherence Toolkit",
    providerName: "The Learning Craft",
    image: schoolCoherenceImg,
    description: (
      <>
        <p className="mb-3 text-lg font-semibold text-gray-800">Aligning Your School for Better Outcomes</p>
        <p className="mb-3 text-sm leading-relaxed text-black">
          A practical leadership toolkit that helps school leaders identify and fix the structural misalignments causing low-trust and incoherent learning outcomes.
        </p>
      </>
    ),
    checklist: [
      { text: "Structural alignment diagnostic tools" },
      { text: "Leadership and culture frameworks" },
      { text: "Coherence-building strategies for school teams" },
    ],
    actionType: "contact",
    actionLabel: "Contact Us",
    imageSlot: true,
  },

  {
    slug: "teachart",
    title: "TeachArt",
    providerName: "The Learning Craft",
    image: teachartImg,
    description: (
      <>
        <p className="mb-3 text-lg font-semibold text-gray-800">A Peer-Led Platform for Educators</p>
        <p className="mb-3 text-sm leading-relaxed text-black">
          A dynamic peer-led platform where teachers share ideas, insights, and innovations in education — inspiring and equipping one another to elevate their practice.
        </p>
      </>
    ),
    comingSoon: "TeachArt is coming soon. Stay tuned!",
    actionType: "coming-soon",
    actionLabel: "Coming Soon",
    imageSlot: true,
  },

  {
    slug: "custom-curriculum-planner",
    title: "Custom Curriculum Planner",
    providerName: "The Learning Craft",
    image: customCurriculumImg,
    description: (
      <>
        <p className="mb-3 text-lg font-semibold text-gray-800">Bespoke Curriculum Design for Your Context</p>
        <p className="mb-3 text-sm leading-relaxed text-black">
          A bespoke curriculum design service where The Learning Craft works directly with schools and organisations to build tailored, skills-based learning experiences aligned to their unique goals and context.
        </p>
      </>
    ),
    checklist: [
      { text: "Fully bespoke to your school or organisation" },
      { text: "Skills-based, competency-aligned design" },
      { text: "Ongoing review and advisory support" },
    ],
    actionType: "contact",
    actionLabel: "Contact Us",
    imageSlot: true,
  },

  {
    slug: "ndu-sel-toolkit-foundation",
    title: "NDU® SEL Toolkit",
    providerName: "The Learning Craft",
    image: nduSelToolkitImg,
    description: (
      <>
        <div className="mb-3 text-xl leading-relaxed text-black">
          <p>SEL Social &amp; Emotional Learning (Tool Kit)</p>
        </div>
        <p className="mb-3 text-sm leading-relaxed text-black">
          ndu® Social &amp; Emotional Learning (SEL) Programme – is a comprehensive learning experience designed to enable students and educators to develop SEL skills; cultivating a culture of care, collaboration and character in classrooms and schools around the world.
        </p>
        <p className="mb-3 text-xl font-medium text-gray-800">Empowering Schools, Transforming Students</p>
        <p className="mb-3 text-sm leading-relaxed text-black">
          ndu® SEL is more than just a programme – it's a toolkit for educators who believe in the power of social and emotional learning in shaping the future.
        </p>
        <p className="mb-3 text-sm leading-relaxed text-black">
          Our programme equips teachers with the resources they need to seamlessly integrate SEL into their daily curriculum, creating a nurturing environment where every student feels seen, heard, connected and valued.
        </p>
        <p className="mb-2 text-sm leading-relaxed text-black">Join our ndu® Social &amp; Emotional Learning SEL Certified membership:</p>
        <ul className="list-disc list-inside text-sm text-black space-y-1 mb-3">
          <li>School Membership</li>
          <li>Access to exclusive adoption training for enhancing school culture. Community forums for teacher, student, parent collaboration to foster strong relationships and a sense of community.</li>
          <li>Teacher member: access to exclusive resources (including lesson plans, teacher guides etc), training, community forums.</li>
          <li>Year-long SEL Integration advisory and support.</li>
          <li>Proven outcomes: statistically conclusive and positive impact on student achievement through our SEL membership.</li>
        </ul>
        <p className="text-sm text-gray-500 italic">
          Send us an email for more about the program:{" "}
          <span className="text-[#1a5c2e]">info@learningcraft.org</span>
        </p>
      </>
    ),
    bullets: [
      { text: "30-day prompt cards provide teachers with thoughtfully curated activities that invite students to explore the five core SEL competency areas." },
      { text: "Comprehensive teacher guide, which serves as a roadmap for implementing the program with ease and confidence." },
      { text: "Lesson plans at 4 levels – Early Childhood, Lower Primary, Upper Primary and Junior Secondary (Digital copies)." },
      { text: "Honour badges awarded weekly and..." },
    ],
    price: "₦ 35,000",
    actionType: "purchase",
    actionLabel: "Purchase",
    imageSlot: true,
    quantitySelector: true,
    moreDetails: "More Details →",
  },
];

export default function ResourceDescription() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const resource = RESOURCES.find((r) => r.slug === slug);

  if (!resource) {
    return (
      <div className="px-8 py-16 text-center text-gray-500">
        <p className="text-lg font-medium">Resource not found.</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-[#1a5c2e] font-thin">
          ← Go back
        </button>
      </div>
    );
  }

  const handleAction = () => {
    if (resource.actionType === "purchase" || resource.actionType === "enroll") {
      navigate("/foundation/payment");
    }
  };

  return (
    <>
    <Layout>
    <div className="w-full mx-auto px-6 md:px-12 lg:px-20 py-10 lg:py-15">
      <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-8">{resource.title}</h1>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
        <div className="flex-1 min-w-0 rounded-xl w-full">
          {resource.imageSlot && (
          <div className="w-full h-48 lg:h-60 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
            {resource.image ? (
              resource.image.match(/\.(mp4|webm|ogg)$/i) ? (
                <div className="w-full h-48 lg:h-56 rounded-2xl mb-6 p-4 overflow-hidden flex items-center justify-center">
                  <video src={resource.image} className="w-full lg:w-100 h-full lg:h-100 object-contain rounded-2xl" controls autoPlay muted loop />
                </div>
              ) : (
                <img src={resource.image} alt={resource.title} className="w-60 h-60 lg:w-80 lg:h-80 object-contain" />
              )
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                Media Placeholder
              </div>
            )}
          </div>
        )}
          <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-6">Description</h2>
          <div className="tracking-wide">{resource.description}</div>
        </div>

        <div className="w-full lg:w-[40vw] flex-shrink-0">
          <div className="border border-gray-200 rounded-3xl p-6 lg:p-10 flex flex-col gap-4 lg:sticky lg:top-8">
            <h3 className="text-base font-bold text-gray-900">{resource.title}</h3>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex-shrink-0 overflow-hidden">
                <img src={providerLogo} className="w-10 h-10 object-cover" alt="" />
              </div>
              <span className="text-md font-medium p-2 text-black">{resource.providerName}</span>
            </div>
            {resource.checklist && resource.checklist.length > 0 && (
              <ul className="flex flex-col gap-2.5">
                {resource.checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 tracking-wide text-sm text-black">
                    <span className="mt-0.5 flex-shrink-0">
                      <CheckIcon />
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            )}
            {resource.bullets && resource.bullets.length > 0 && (
              <ul className="flex flex-col gap-2.5">
                {resource.bullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 tracking-wide text-sm text-black">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a5c2e] flex-shrink-0" />
                    {item.text}
                  </li>
                ))}
              </ul>
            )}
            {resource.moreDetails && (
              <button className="text-sm text-[#1a5c2e] font-medium text-left hover:underline">
                {resource.moreDetails}
              </button>
            )}
            {resource.comingSoon && (
              <p className="text-sm text-gray-500 font-medium italic">{resource.comingSoon}</p>
            )}
            {resource.price && (
              <p className="text-xl pt-6 font-bold text-gray-900">{resource.price}</p>
            )}
            {resource.quantitySelector && (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-black hover:bg-gray-50 text-lg leading-none"
                >
                  −
                </button>
                <span className="text-sm font-semibold text-gray-800 w-4 text-center">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-black hover:bg-gray-50 text-lg leading-none"
                >
                  +
                </button>
              </div>
            )}
            {resource.actionType !== "coming-soon" && (
              <button
                onClick={handleAction}
                className="w-full py-3 mt-6 rounded-lg bg-[#1a5c2e] text-white text-sm font-bold hover:bg-[#154a24] transition-colors"
              >
                {resource.actionLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    </Layout>
    </>
  );
}
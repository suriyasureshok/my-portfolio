import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Rocket, Network, Users, Camera, ChevronRight, ChevronLeft } from "lucide-react";
import Terminal from "./Terminal";
import suriyaImage from "../assets/suriya.png";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeStory, setActiveStory] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Stagger animation for the highlight cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  // The Narrative Chapters
  const storyChapters = [
    {
      id: "01",
      title: "The Spark",
      content: "My interest in technology began with Artificial Intelligence and Machine Learning, but building AI applications exposed me to a deeper question:\n\nWhat makes software reliable, scalable, and production-ready?"
    },
    {
      id: "02",
      title: "The Shift",
      content: "That curiosity led me beyond models and algorithms into backend engineering, distributed systems, infrastructure, and systems programming.\n\nThrough startup internships, I've worked across both software engineering and AI development roles, gaining first-hand experience building products in fast-moving environments."
    },
    {
      id: "03",
      title: "The Community",
      content: "Outside of work, I founded NammaRust, a community dedicated to exploring Rust across different domains.\n\nI also create technical content on YouTube, where I share insights on Rust, backend engineering, and software engineering fundamentals."
    },
    {
      id: "04",
      title: "The Philosophy",
      content: "I'm naturally curious about how systems behave under load, why they fail, and how they can be designed to scale reliably.\n\nI enjoy digging into root causes rather than settling for temporary fixes and believe that strong engineering is built on a deep understanding of fundamentals."
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % storyChapters.length);
    }, 8000); 
    return () => clearInterval(timer);
  }, [storyChapters.length]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative overflow-hidden bg-[#0B1121] py-20 md:py-32"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{
          y: backgroundY,
          backgroundImage: `url(${suriyaImage})`,
        }}
        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-20 pointer-events-none"
      />

      {/* Deep Space Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1121]/90 via-[#0B1121]/80 to-[#0B1121] z-1" />

      {/* Floating Animated Orbs for Depth */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#38507D]/20 blur-[120px] pointer-events-none z-1"
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#4D7C8A]/10 blur-[100px] pointer-events-none z-1"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="grid gap-10 md:gap-12 lg:gap-20 md:grid-cols-2 lg:grid-cols-[1fr,1.1fr] items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#4D7C8A]" />
            <span className="font-mono text-sm tracking-widest text-[#8FAEC1] uppercase">Chapter 1: The Summary</span>
          </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] text-[#F1F5F9]">
              The Journey <br />
              <span className="bg-gradient-to-r from-[#8FAEC1] to-[#cbd5e1] bg-clip-text text-transparent">
                So Far.
              </span>
            </h2>

            {/* FIXED HEIGHT Interactive Story Carousel */}
            <div className="mt-8 relative h-[450px] sm:h-[220px] lg:h-[320px] flex flex-col justify-between rounded-2xl border border-[#263655]/40 bg-[#111A2E]/20 p-6 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStory}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold text-[#8FAEC1] tracking-wider">
                      {storyChapters[activeStory].id}
                    </span>
                    <h3 className="text-xl font-semibold text-[#F1F5F9]">
                      {storyChapters[activeStory].title}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-[#94A3B8] font-light whitespace-pre-wrap">
                    {storyChapters[activeStory].content}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Controls */}
              <div className="mt-6 flex items-center justify-between border-t border-[#263655]/40 pt-4">
                <div className="flex gap-2">
                  {storyChapters.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStory(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeStory === i ? "w-8 bg-[#8FAEC1]" : "w-3 bg-[#263655] hover:bg-[#38507D]"
                      }`}
                      aria-label={`Go to story slide ${i + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveStory((prev) => (prev === 0 ? storyChapters.length - 1 : prev - 1))}
                    className="p-1.5 rounded-md text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#263655]/50 transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button 
                    onClick={() => setActiveStory((prev) => (prev + 1) % storyChapters.length)}
                    className="p-1.5 rounded-md text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#263655]/50 transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Dynamic Staggered Highlights */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-4"
            >
              <motion.div variants={itemVariants}>
                <Highlight icon={<Rocket size={22} />} title="Startup Experience" desc="Software & AI Internships" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Highlight icon={<Network size={22} />} title="Distributed Systems" desc="Scaling Beyond One Machine" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Highlight icon={<Users size={22} />} title="NammaRust" desc="Rust Community & Learning" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Highlight icon={<Camera size={22} />} title="Technical Content" desc="YouTube & Knowledge Sharing" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT (Terminal) */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full lg:ml-auto max-w-[100%] md:max-w-none lg:max-w-2xl"
          >
            <Terminal />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

type HighlightProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function Highlight({ icon, title, desc }: HighlightProps) {
  return (
    <div
      className="
        group
        relative
        flex
        flex-col
        gap-3
        overflow-hidden
        rounded-2xl
        border
        border-[#263655]/60
        bg-[#111A2E]/40
        p-4
        lg:p-5
        backdrop-blur-md
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#4D7C8A]/50
        hover:bg-[#152038]/60
        hover:shadow-[0_8px_30px_rgba(38,54,85,0.3)]
      "
    >
      <div className="absolute -inset-full top-0 z-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-all duration-700 group-hover:left-[150%] group-hover:opacity-100" />
      
      <div className="relative z-10 flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1C2841] text-[#8FAEC1] transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
          {icon}
        </div>
        <div>
          <h4 className="text-sm font-bold text-[#F1F5F9]">{title}</h4>
          <p className="text-xs text-[#64748B] mt-0.5">{desc}</p>
        </div>
      </div>
    </div>
  );
}
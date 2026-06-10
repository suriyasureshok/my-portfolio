import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Target, Zap } from "lucide-react";
import logo from "../assets/logo.png";
import community_logo from "../assets/community_logo.png";

export default function Community() {
  const containerRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth parallax for the massive background logo
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const logoY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const logoRotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  // Framer motion variants for the staggered grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring" as const, stiffness: 60, damping: 20 } 
    },
  };

  return (
    <section
      ref={containerRef}
      id="community"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0B0B0B] py-24 sm:py-32"
    >
      {/* 1. HUGE FADED LOGO (Background) - Opacity controlled by CTA hover */}
      <motion.div
        style={{ y: logoY, rotate: logoRotate }}
        animate={{ opacity: isHovered ? 0.10 : 0.07 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <img
          src={logo}
          alt="Logo"
          // max-w-none is the magic class here that allows it to break out of the container bounds
          className="w-[400px] md:w-[400px] lg:w-[1200px] max-w-none object-contain text-[#F5F5F5]"
        />
      </motion.div>
        <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[#F74C00]" />
            <span className="font-mono text-sm tracking-widest text-[#F74C00] uppercase">Chapter 5: The Community</span>
            <div className="h-[1px] w-12 bg-[#F74C00]" />
          </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8">
        
        
        {/* HERO QUOTE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="font-['Poppins'] text-3xl md:text-5xl font-semibold leading-tight text-[#F5F5F5]">
            "At some point, I realized that learning becomes far more meaningful <br className="hidden md:block"/>
            <span className="text-[#F74C00] italic">when it is shared.</span>"
          </p>
        </motion.div>

        {/* ASYMMETRIC BENTO GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8"
        >
          {/* Main Card (Left side, spans 7 cols) */}
          <motion.div 
            variants={cardVariants}
            className="group relative flex flex-col justify-center overflow-hidden rounded-3xl border border-[#1B1B1B] bg-gradient-to-br from-[#131313] to-[#0B0B0B] p-8 pt-4 md:p-12 md:pt-1 transition-all duration-500 hover:border-[#333333] lg:col-span-7"
          >
            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-[#F5F5F5] opacity-[0.02] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.04]" />
            <img src={community_logo} alt="Community Logo" className="mb-6 md:mb-10 lg:mb-12 h-20 md:h-28 lg:h-35 w-120 md:w-130 lg:w-140 text-[#F74C00]" />
            <p className="font-['Inter'] text-lg md:text-xl font-light leading-relaxed text-[#A1A1AA]">
              While exploring systems programming and the Rust ecosystem, I noticed that many developers were curious about Rust but often found the learning journey fragmented and difficult to navigate. The deeper I went, the more I felt the need for a space where people could learn, discuss, and grow together.
            </p>
          </motion.div>

          {/* Right Column (spans 5 cols, holds 2 stacked cards) */}
          <div className="flex flex-col gap-6 lg:col-span-5 lg:gap-8">
            
            {/* Top Right Card - The Brand */}
            <motion.div 
              variants={cardVariants}
              className="group relative overflow-hidden rounded-3xl border border-[#1B1B1B] bg-gradient-to-br from-[#131313] to-[#0B0B0B] p-8 transition-all duration-500 hover:border-[#F74C00]/30"
            >
              {/* Subtle orange glow on hover */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#F74C00] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-10" />
              
              <Zap className="mb-6 h-7 w-7 text-[#F74C00]" strokeWidth={1.5} />
              <h3 className="mb-4 font-['Poppins'] text-2xl font-semibold text-[#F5F5F5]">
                That idea became NammaRust.
              </h3>
              <p className="font-['Inter'] text-base font-light leading-relaxed text-[#A1A1AA]">
                A community built around curiosity, fundamentals, and continuous learning. It's a place where developers explore Rust across different domains—from backend and systems programming to modern software engineering.
              </p>
            </motion.div>

            {/* Bottom Right Card - The Philosophy */}
            <motion.div 
              variants={cardVariants}
              className="group relative overflow-hidden rounded-3xl border border-[#1B1B1B] bg-gradient-to-br from-[#131313] to-[#0B0B0B] p-8 transition-all duration-500 hover:border-[#333333]"
            >
              <Target className="mb-6 h-7 w-7 text-[#A1A1AA]" strokeWidth={1.5} />
              <p className="font-['Inter'] text-base font-light leading-relaxed text-[#A1A1AA]">
                As I continue my own journey through distributed systems, NammaRust grows alongside it. More than a community, it represents a core belief: <span className="font-medium text-[#F5F5F5]">knowledge compounds when it is shared.</span>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA BUTTON & TRANSITION TEXT */}
        <motion.div 
          variants={cardVariants} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center justify-center gap-16"
        >
          {/* Interactive CTA */}
          <a
            href="#namma-rust-link"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="
              group
              relative
              flex
              items-center
              gap-4
              rounded-full
              border
              border-[#1B1B1B]
              bg-[#0B0B0B]
              py-3
              pl-8
              pr-3
              transition-all
              duration-500
              hover:border-[#F74C00]/50
              hover:bg-[#131313]
              hover:shadow-[0_0_30px_rgba(247,76,0,0.1)]
            "
          >
            <span className="font-['JetBrains_Mono'] text-sm font-semibold tracking-widest text-[#F5F5F5] uppercase transition-colors duration-300 group-hover:text-[#F74C00]">
              Visit NammaRust
            </span>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B1B1B] transition-colors duration-500 group-hover:bg-[#F74C00]">
              <ArrowRight 
                strokeWidth={2}
                size={20}
                className="text-[#A1A1AA] transition-colors duration-500 group-hover:text-[#F5F5F5]" 
              />
            </div>
          </a>

          {/* Next Section Transition */}
          <div className="flex flex-col items-center justify-center gap-3 opacity-60">
            <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-[#333333] to-[#F5F5F5] mb-2" />
            <p className="font-['JetBrains_Mono'] text-[11px] font-medium tracking-widest text-[#A1A1AA] uppercase">
              The community was the beginning.
            </p>
            <p className="font-['JetBrains_Mono'] text-[11px] font-medium tracking-widest text-[#A1A1AA] uppercase">
              Sharing the journey came next.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
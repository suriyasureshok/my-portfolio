import { motion, useMotionTemplate, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { skills } from "./skillsData"; 
import suriya4Image from "../../assets/suriya_4.jpeg";

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"],
    });
  
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative overflow-hidden bg-[#0E1629] pt-14 pb-24 md:pt-20 md:pb-32"
    >
      <motion.div
        style={{
          y: backgroundY,
          backgroundImage: `url(${suriya4Image})`,
        }}
        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-5 pointer-events-none"
      />
      {/* Floating Ambient Orbs for depth */}
      {/* <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#4D7C8A] blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-[#263655] blur-[150px] pointer-events-none"
      /> */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[#8FAEC1]" />
            <span className="font-mono text-sm tracking-widest text-[#8FAEC1] uppercase">Chapter 3: The arsenal</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F1F5F9]">
            Technical Abilities.
          </h2>
          <p className="mt-6 mb-0 text-lg text-[#94A3B8] font-light max-w-2xl leading-relaxed">
            The programming languages, frameworks, and infrastructure tools I use to architect robust, scalable systems.
          </p>
        </motion.div>

        {/* REFACTORED: 2-COLUMN SMOOTH GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-16 border-t border-[#263655]/40">
          {skills.map((skillGroup, index) => (
            <SkillRow key={index} group={skillGroup} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- REFACTORED COLUMN CELL COMPONENT ---

function SkillRow({ group, index }: { group: typeof skills[0]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      className="
        group 
        relative 
        flex 
        flex-col 
        gap-4
        py-8
        md:py-10
        border-b 
        border-[#263655]/40 
        transition-colors
        duration-500
        hover:border-[#4D7C8A]/50
      "
    >
      {/* Dynamic Hover Spotlight Background */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-0 rounded-xl"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(77, 124, 138, 0.04),
              transparent 80%
            )
          `,
        }}
      />

      {/* Category Header (Top of the item) */}
      <div className="relative z-10 w-full pt-1">
        <h3 className="text-sm font-bold uppercase tracking-widest text-[#4D7C8A] flex items-center gap-4 transition-colors duration-300 group-hover:text-[#F1F5F9]">
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8FAEC1] opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4D7C8A] group-hover:bg-[#8FAEC1] transition-colors duration-300" />
          </span>
          {group.category}
        </h3>
      </div>

      {/* Content Pills (Wrapping naturally underneath the category) */}
      <div className="relative z-10 w-full flex flex-wrap gap-2.5 pt-2">
        {group.items.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: (index * 0.05) + (i * 0.02) }}
            whileHover={{ 
              y: -3, 
              scale: 1.03,
              transition: { type: "spring", stiffness: 400, damping: 12 } 
            }}
            className="
              px-3.5 
              py-1.5 
              rounded-xl 
              bg-[#111A2E]/60 
              backdrop-blur-md
              text-[#94A3B8] 
              text-xs 
              font-mono 
              border 
              border-[#263655]/60 
              shadow-sm
              cursor-default
              transition-colors
              duration-300
              hover:bg-[#1D3557]
              hover:text-[#ffffff]
              hover:border-[#4D7C8A]
              hover:shadow-[0_6px_15px_rgba(77,124,138,0.25)]
            "
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
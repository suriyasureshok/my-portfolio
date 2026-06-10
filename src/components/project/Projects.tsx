import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "./projectData";
import suriya3Image from "../../assets/suriya_3.jpeg";
import { useRef } from "react";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      id="projects" 
      ref={containerRef} /* Fixed: Attached ref to compute accurate scroll parallax calculations */
      className="relative overflow-hidden bg-[#0B1121] py-24 md:py-32"
    >
      {/* --- PREMIUM BACKGROUND --- */}
      <motion.div
        style={{
          y: backgroundY,
          backgroundImage: `url(${suriya3Image})`,
        }}
        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-5 pointer-events-none"
      />

      {/* Top to bottom gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0B1121] to-transparent pointer-events-none" />
      
      {/* Sophisticated ambient glows */}
      <motion.div
        animate={{ opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-[#263655]/40 to-transparent blur-[120px] pointer-events-none z-0"
      />
      <motion.div
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-[#4D7C8A]/30 to-transparent blur-[120px] pointer-events-none z-0"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-12 max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#4D7C8A]" />
            <span className="font-mono text-sm tracking-widest text-[#8FAEC1] uppercase">Chapter 2: The Projects</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F1F5F9] mb-6">
            Selected Work.
          </h2>
          <p className="text-lg leading-relaxed text-[#94A3B8] font-light">
            A collection of AI systems, infrastructure platforms, and engineered solutions. 
            Built for scale, reliability, and impact.
          </p>
        </motion.div>

        {/* PROJECTS LIST (Alternating Rows) */}
        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project, index) => (
            <ProjectRow key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- SENIOR-LEVEL PROJECT ROW COMPONENT ---

function ProjectRow({ project, index }: { project: typeof projects[0], index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col gap-10 lg:gap-16 lg:items-center ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* IMAGE / VISUAL ASSET (Fits the column width dynamically and shows the asset completely) */}
      <div className="w-full lg:w-[55%] relative group overflow-hidden rounded-2xl border border-[#263655]/50 bg-[#111A2E]">
        {/* Technical blueprint grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#26365530_1px,transparent_1px),linear-gradient(to_bottom,#26365530_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
        
        <img 
          src={project.image} 
          alt={`${project.title} Interface`}
          className="w-full h-auto block opacity-80 mix-blend-luminosity transition-all duration-700 group-hover:scale-[1.02] group-hover:opacity-100 group-hover:mix-blend-normal"
        />
        
        {/* Inner Shadow / Vignette Overlay */}
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
      </div>

      {/* CONTENT (Takes up 45% of width) */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center">
        
        {/* Title & Links */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <h3 className="text-3xl md:text-4xl font-bold text-[#F1F5F9]">
            {project.title}
          </h3>
          <div className="flex gap-3 pt-2">
            <a href={project.github} target="_blank" rel="noreferrer" className="text-[#64748B] hover:text-[#C1E8FF] transition-colors">
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer" className="text-[#64748B] hover:text-[#C1E8FF] transition-colors">
              <ArrowUpRight size={24} />
            </a>
          </div>
        </div>

        {/* Structured Data Grid (WHY / WHAT / HOW / TRADEOFF) */}
        <div className="flex flex-col gap-5 border-l border-[#263655] pl-6 mb-8">
          
          <div className="group/item">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#4D7C8A] uppercase block mb-1">
              Why
            </span>
            <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed transition-colors group-hover/item:text-[#F1F5F9]">
              {project.why}
            </p>
          </div>

          <div className="group/item">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#4D7C8A] uppercase block mb-1">
              What
            </span>
            <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed transition-colors group-hover/item:text-[#F1F5F9]">
              {project.what}
            </p>
          </div>

          <div className="group/item">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#4D7C8A] uppercase block mb-1">
              How
            </span>
            <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed transition-colors group-hover/item:text-[#F1F5F9]">
              {project.how}
            </p>
          </div>

          <div className="group/item">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#8FAEC1] uppercase block mb-1">
              Tradeoff
            </span>
            <p className="text-[#8FAEC1] text-sm md:text-base leading-relaxed italic border-l-2 border-[#4D7C8A]/50 pl-3">
              "{project.tradeoff}"
            </p>
          </div>

        </div>

        {/* Technologies List */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="font-mono text-xs text-[#8FAEC1] bg-[#111A2E] border border-[#263655]/60 px-3 py-1.5 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
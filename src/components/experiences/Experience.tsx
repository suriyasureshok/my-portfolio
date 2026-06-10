import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Terminal, Rocket, Cpu, CheckCircle2 } from "lucide-react";
import suriya2Image from "../../assets/suriya_2.jpg";

const experiences = [
  {
    id: "nvskzen",
    company: "NVSKZEN",
    role: "Product Engineer",
    date: "Present",
    icon: <Terminal size={20} />,
    color: "#C1E8FF", 
    points: [
      "Pioneered R&D for a visual AI model builder allowing drag-and-drop neural network generation.",
      "Engineered modular node pipelines optimizing complex configurations for CNN and RNN architectures.",
      "Architected a high-performance desktop runtime environment to streamline prototyping and training.",
    ],
  },
  {
    id: "daloft",
    company: "DALOFT AEROSPACE",
    role: "Software Engineer Intern",
    date: "Jan 2026 – Mar 2026",
    icon: <Rocket size={20} />,
    color: "#7DA0CA", 
    points: [
      "Integrated mission systems using 4 low-level protocols (UART, I2C, SPI, CAN) to resolve link latency.",
      "Designed 3 mission-critical systems spanning ground station software, metrics tracking, and logging.",
      "Deployed production infrastructure within a rapid 10-day cycle to meet strict field testing deadlines.",
    ],
  },
  {
    id: "omis",
    company: "OMIS LABS UK LTD",
    role: "AI Developer",
    date: "Sep 2025 – Oct 2025",
    icon: <Cpu size={20} />,
    color: "#5483B3", 
    points: [
      "Optimized real-time voice AI execution pipelines to achieve sub-200ms round-trip request latency.",
      "Architected scalable session memory systems maintaining conversational states across concurrent paths.",
      "Constructed unified CI/CD systems, health metrics, and data streams to monitor enterprise agents.",
    ],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      id="experience" /* Added anchor ID for custom navigation links */
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#0B1121] py-10 sm:py-24 overflow-hidden flex flex-col"
    >
      {/* Parallax Background */}
      <motion.div
        style={{
          y: backgroundY,
          backgroundImage: `url(${suriya2Image})`,
        }}
        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-10 pointer-events-none"
      />

      {/* Decorative Technical Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#22335410_1px,transparent_1px),linear-gradient(to_bottom,#22335410_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* --- LEFT ALIGNED CONTENT HEADER --- */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 mb-16 md:mb-24">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-[#5483B3]" />
          <span className="font-mono text-sm tracking-widest text-[#7DA0CA] uppercase font-semibold">
            Chapter 4: The Experience
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F1F5F9]">
          Professional History.
        </h2>
        <p className="mt-4 text-base md:text-lg text-[#94A3B8] font-light max-w-xl">
          A track record of engineering scalable backend modules, automation pipelines, and core systems architecture.
        </p>
      </div>

      {/* --- VERTICAL TIMELINE TRACK CONTAINER --- */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 flex flex-col items-center">
        
        {/* Adaptive Spine Line */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-[1px] bg-[#223354]/60 z-0" />

        {experiences.map((exp, i) => {
          const isLeft = i % 2 === 0;

          return (
            <div 
              key={exp.id} 
              className={`relative w-full flex flex-col justify-start pb-12 md:pb-16 md:min-h-[280px] ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* 1. INTERACTIVE SYSTEM CARD CONTAINER */}
              <div className={`w-full md:w-1/2 flex pl-10 pr-4 md:px-12 z-10 ${
                isLeft ? "md:justify-end" : "md:justify-start"
              }`}>
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="group relative bg-[#111A2E]/80 backdrop-blur-xl border border-[#223354]/50 rounded-2xl p-6 sm:p-8 w-full max-w-[620px] flex flex-col justify-between transition-all duration-500 hover:border-[#5483B3]/50 hover:bg-[#152038]/90 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
                >
                  {/* Subtle Accent Glow */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at top right, ${exp.color}, transparent 50%)` }}
                  />

                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-4 border-b border-[#223354]/50 pb-4">
                    <div className="overflow-hidden">
                      <h3 className="text-lg sm:text-xl font-bold text-[#F1F5F9] truncate group-hover:text-white transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono text-xs text-[#7DA0CA] mt-1">
                        <span>{exp.company}</span>
                        <span className="md:hidden text-[#223354]">•</span>
                        <span className="md:hidden font-semibold" style={{ color: exp.color }}>{exp.date}</span>
                      </div>
                    </div>
                    <div 
                      className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0B1121] border border-[#223354]/60 group-hover:scale-105 transition-transform duration-500 shrink-0 shadow-inner"
                      style={{ color: exp.color }}
                    >
                      {exp.icon}
                    </div>
                  </div>

                  {/* Normalized Bullet List Layout */}
                  <ul className="space-y-3 relative z-10 flex-grow pt-4">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 shrink-0">
                          <CheckCircle2 size={14} className="text-[#5483B3] opacity-60 group-hover:opacity-100 transition-all duration-300" />
                        </div>
                        <p className="text-[#94A3B8] leading-relaxed text-xs sm:text-sm font-light group-hover:text-[#cbd5e1] transition-colors">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* 2. CENTRAL RUNTIME HUB */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-0 h-full flex items-start md:items-center justify-center z-20">
                {/* Central Spine Node Circle */}
                <div 
                  className="absolute top-8 md:top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#0B1121] border-2 z-10 shadow-[0_0_10px_rgba(0,0,0,0.8)]" 
                  style={{ borderColor: exp.color }}
                >
                  <div className="w-1.5 h-1.5 rounded-full m-auto mt-[2px]" style={{ backgroundColor: exp.color }} />
                </div>
              </div>

              {/* 3. ALIGNED DESKTOP DATE COLUMN */}
              <div className={`hidden md:flex w-1/2 items-center px-12 z-10 ${
                isLeft ? "justify-start" : "justify-end"
              }`}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="px-4 py-1.5 rounded-full border border-[#223354]/60 bg-[#111A2E]/90 backdrop-blur-md shadow-xl"
                >
                  <span 
                    className="font-mono font-bold tracking-widest text-[11px] uppercase whitespace-nowrap"
                    style={{ color: exp.color }}
                  >
                    {exp.date}
                  </span>
                </motion.div>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}
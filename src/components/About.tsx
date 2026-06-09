import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cpu, Database, Network, Code2 } from "lucide-react";
import Terminal from "./Terminal";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

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
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

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
          backgroundImage: "url('src/assets/suriya.png')",
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
        {/* UPDATED GRID: 
          Now uses `md:grid-cols-2` to ensure it sits side-by-side on smaller laptops/tablets,
          and `lg:grid-cols-[1fr,1.1fr]` for larger screens. 
        */}
        <div className="grid gap-10 md:gap-12 lg:gap-20 md:grid-cols-2 lg:grid-cols-[1fr,1.1fr] items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] text-[#F1F5F9]">
              Building Systems <br />
              <span className="bg-gradient-to-r from-[#8FAEC1] to-[#cbd5e1] bg-clip-text text-transparent">
                That Scale.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base lg:text-lg leading-relaxed text-[#94A3B8] font-light">
              My journey revolves around backend architecture, distributed systems, 
              AI engineering, and building reliable infrastructure that powers modern applications.
              <br /><br />
              I enjoy turning complex engineering problems into elegant solutions, 
              with a strong focus on performance, observability, and scalability.
            </p>

            {/* Dynamic Staggered Highlights */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="mt-5 lg:mt-5 grid grid-cols-1 xl:grid-cols-2 gap-4"
            >
              <motion.div variants={itemVariants}>
                <Highlight icon={<Cpu size={22} />} title="AI Systems" desc="LLMs & RAG Pipelines" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Highlight icon={<Database size={22} />} title="Data Platforms" desc="High-throughput processing" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Highlight icon={<Network size={22} />} title="Distributed Apps" desc="Microservices & Cloud" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Highlight icon={<Code2 size={22} />} title="Open Source" desc="Community contributions" />
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
      {/* Shine Effect on Hover */}
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
import { motion, } from "framer-motion";
import { useRef } from "react";
import { experiences } from "./experienceData.ts";

export default function Experience() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Stagger variants for the cards entering the screen
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    
    <section className="relative overflow-hidden bg-[#0B1121] py-24 md:py-5">
      {/* Inject custom scrollbar styles securely */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0B1121;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #263655;
          border-radius: 8px;
          border: 2px solid #0B1121;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4D7C8A;
        }
      `}</style>

      {/* Ambient Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#021024]/20 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#F1F5F9]">
            Experience
          </h2>
          <p className="mt-4 text-[#94A3B8]">
            A journey through my professional milestones and growth.
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Continuous Horizontal Background Line */}
          <div className="absolute left-0 top-[28px] h-[2px] w-full bg-[#263655]/50" />

          <motion.div
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="
              custom-scrollbar
              relative
              flex
              w-full
              snap-x
              snap-mandatory
              gap-8
              overflow-x-auto
              pb-12
              pt-4
            "
          >
            {experiences.map((exp, index) => (
              <TimelineCard key={index} experience={exp} index={index} />
            ))}
            
            {/* Spacer to allow the last card to scroll fully to the left on desktop */}
            <div className="min-w-[10vw] flex-shrink-0 sm:min-w-[30vw]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  experience,
  index,
}: {
  experience: typeof experiences[0];
  index: number;
}) {
  const itemVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    show: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 70, damping: 15 }
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="
        group
        relative
        flex
        w-[85vw]
        min-w-[320px]
        max-w-[400px]
        flex-shrink-0
        snap-start
        flex-col
        sm:w-[400px]
      "
    >
      {/* Node & Animated Line Connection */}
      <div className="relative mb-8 flex items-center">
        {/* The Node */}
        <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#0B1121] bg-[#4D7C8A] shadow-[0_0_15px_#4D7C8A] transition-transform duration-300 group-hover:scale-125">
          <div className="h-1.5 w-1.5 rounded-full bg-[#0B1121]" />
        </div>
        
        {/* Active Line (Glows on Hover) */}
        <div className="absolute left-6 top-1/2 h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-[#4D7C8A] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Glassmorphism Card */}
      <div
        className="
          relative
          h-full
          overflow-hidden
          rounded-3xl
          border
          border-[#263655]/60
          bg-[#111A2E]/40
          p-8
          backdrop-blur-md
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#4D7C8A]/50
          hover:bg-[#152038]/60
          hover:shadow-[0_10px_40px_rgba(38,54,85,0.4)]
        "
      >
        {/* Subtle Shine Effect */}
        <div className="absolute -inset-full top-0 z-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-all duration-700 group-hover:left-[150%] group-hover:opacity-100" />

        <div className="relative z-10">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-bold tracking-widest text-[#4D7C8A]">
              {experience.year}
            </span>
          </div>

          <h3 className="mb-1 text-2xl font-bold text-[#F1F5F9] transition-colors duration-300 group-hover:text-white">
            {experience.role}
          </h3>

          <p className="mb-6 font-mono text-sm text-[#8FAEC1]">
            @ {experience.company}
          </p>

          <p className="leading-relaxed text-[#94A3B8]">
            {experience.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
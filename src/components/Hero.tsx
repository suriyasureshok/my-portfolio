import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import heroImage from "../assets/hero.png";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress strictly within this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth scroll transformations for parallax depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "-40px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#0B1121] flex items-center"
    >
      {/* Scroll-Driven Background Image */}
      <motion.div
        style={{
          y: backgroundY,
          scale: backgroundScale,
          backgroundImage: `url(${heroImage})`,
        }}
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          opacity-35
          mix-blend-luminosity
          pointer-events-none
        "
      />

      {/* Sophisticated Deep Slate Fade */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#080D1A]
          via-[#0B1121]/90
          to-transparent
          z-1
        "
      />

      {/* Content wrapper with scroll fade */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-6
          sm:px-8
          py-32
          md:py-36
        "
      >
        <div className="max-w-3xl">

          {/* Premium Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              mb-8
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#223354]
              bg-[#111A2E]/60
              px-4
              py-2
              backdrop-blur-md
            "
          >
            <div className="relative flex h-2 w-2 items-center justify-center">
              <div className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8FAEC1] opacity-40"></div>
              <div className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#8FAEC1]"></div>
            </div>
            <span className="text-xs sm:text-sm font-medium tracking-wide text-[#94A3B8]">
              Available for Opportunities
            </span>
          </motion.div>

          {/* High-Impact Professional Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut"
            }}
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-bold
              tracking-tight
              text-[#F1F5F9]
              leading-[1.1]
            "
          >
            Architecting <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#8FAEC1] to-[#cbd5e1] bg-clip-text text-transparent">
              Scalable Infrastructure.
            </span>
          </motion.h1>

          {/* Refined Description for Backend/Infra */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut"
            }}
            className="
              mt-6
              max-w-2xl
              text-base
              sm:text-lg
              leading-relaxed
              text-[#94A3B8]
              font-light
            "
          >
            I engineer high-performance backend systems and robust web infrastructure, 
            focusing on memory-safe, concurrent, and distributed architectures to power 
            enterprise-grade applications.
          </motion.p>

          {/* Elevated Call-to-Actions (UPDATED) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut"
            }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
          >
            {/* Primary Button: Clean, High-Contrast Minimalist */}
            <button
              className="
                group
                relative
                flex
                w-full
                sm:w-auto
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#F8FAFC]
                px-7
                py-3.5
                text-sm
                font-semibold
                text-[#0B1121]
                transition-all
                duration-300
                hover:bg-white
                hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                focus:outline-none
                focus:ring-2
                focus:ring-white/50
                focus:ring-offset-2
                focus:ring-offset-[#0B1121]
              "
            >
              Explore Architecture
              <ArrowUpRight 
                size={18} 
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
              />
            </button>

            {/* Secondary Action: Minimal Animated Text Link */}
            <button
              className="
                group
                flex
                items-center
                gap-2
                text-sm
                font-medium
                text-[#94A3B8]
                transition-colors
                duration-300
                hover:text-[#F1F5F9]
                focus:outline-none
              "
            >
              <span className="relative overflow-hidden pb-1">
                Get in touch
                {/* Animated underline effect */}
                <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-[#F1F5F9] transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </span>
              <Mail 
                size={16} 
                className="opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
              />
            </button>
          </motion.div>

          {/* Bottom Divider / Metric spacer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 border-t border-[#223354]/40 pt-8"
          />
        </div>
      </motion.div>
    </section>
  );
}
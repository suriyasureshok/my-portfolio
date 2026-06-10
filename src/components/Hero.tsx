import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { MouseEvent } from "react";
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

  // Premium Programmatic Smooth Scrolling Handler
  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Optionally update window history hash cleanly without snapping
      window.history.pushState(null, "", targetId);
    }
  };

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

          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#4D7C8A]" />
            <span className="font-mono text-sm tracking-widest text-[#8FAEC1] uppercase">Chapter 0: The Intro</span>
          </div>

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
            Building Systems <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#8FAEC1] to-[#cbd5e1] bg-clip-text text-transparent">
              Beyond One Machine.
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
            Backend Engineer focused on distributed systems, web infrastructure, and AI-powered applications. 
            Founder of <b>NammaRust</b>, where we explore Rust, software engineering, and scalable system design.
          </motion.p>

          {/* Elevated Call-to-Actions (UPDATED TO ANCHOR TAGS) */}
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
            {/* Primary Link: Clean, High-Contrast Minimalist */}
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "#about")}
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
              Explore My Journey
              <ArrowUpRight 
                size={18} 
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
              />
            </a>

            {/* Secondary Link: Minimal Animated Text Link */}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
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
            </a>
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
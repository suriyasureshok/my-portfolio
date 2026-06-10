import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Terminal() {
  return (
    <div className="relative group">
      {/* Dynamic Animated Glow Behind Terminal */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -inset-1
          rounded-3xl
          bg-gradient-to-r
          from-[#4D7C8A]/30
          via-[#263655]/30
          to-[#4D7C8A]/30
          blur-2xl
          transition-all
          duration-500
          group-hover:-inset-2
          group-hover:blur-3xl
        "
      />

      {/* Terminal Window */}
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-[#263655]/60
          bg-[#0A0F1C]/95
          backdrop-blur-xl
          shadow-[0_20px_50px_rgba(0,0,0,0.5)]
          transition-all
          duration-300
          group-hover:border-[#4D7C8A]/50
        "
      >
        {/* Subtle CRT Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-10 opacity-20" />

        {/* macOS Style Header */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[#263655]/60
            bg-[#111827]/80
            px-5
            py-3.5
          "
        >
          <div className="flex gap-2.5 group/lights">
            <div className="h-3 w-3 rounded-full bg-[#ED6A5E] border border-[#D04E42] transition-colors group-hover/lights:bg-[#FF5F56]" />
            <div className="h-3 w-3 rounded-full bg-[#F5BF4F] border border-[#D6A243] transition-colors group-hover/lights:bg-[#FFBD2E]" />
            <div className="h-3 w-3 rounded-full bg-[#61C554] border border-[#53A447] transition-colors group-hover/lights:bg-[#27C93F]" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium tracking-wider text-[#64748B]">
              suriya@system ~ zsh
            </span>
          </div>

          <div className="w-10" /> {/* Spacer for centering */}
        </div>

        {/* Content Area with Pre-Wrap for Line Breaks - NOW FIXED HEIGHT */}
        <div
          className="
            relative
            h-[640px]
            p-6
            font-mono
            text-[14px]
            sm:text-[15px]
            leading-relaxed
            text-[#8FAEC1]
            whitespace-pre-wrap
          "
        >
          <TypeAnimation
            sequence={[
              "suriya@system:~$ whoami",
              600,
              "suriya@system:~$ whoami\n\n> Software Engineer\n> Community Builder\n> Content Creator",
              1000,
              "suriya@system:~$ whoami\n\n> Software Engineer\n> Community Builder\n> Content Creator\n\nsuriya@system:~$ cat journey.txt",
              600,
              "suriya@system:~$ whoami\n\n> Software Engineer\n> Community Builder\n> Content Creator\n\nsuriya@system:~$ cat journey.txt\n\nAI -> Backend\nBackend -> Systems\nSystems -> Infrastructure",
              1000,
              "suriya@system:~$ whoami\n\n> Software Engineer\n> Community Builder\n> Content Creator\n\nsuriya@system:~$ cat journey.txt\n\nAI -> Backend\nBackend -> Systems\nSystems -> Infrastructure\n\nsuriya@system:~$ cat initiatives.txt",
              600,
              "suriya@system:~$ whoami\n\n> Software Engineer\n> Community Builder\n> Content Creator\n\nsuriya@system:~$ cat journey.txt\n\nAI -> Backend\nBackend -> Systems\nSystems -> Infrastructure\n\nsuriya@system:~$ cat initiatives.txt\n\n• Founder, NammaRust\n• Technical YouTube Creator\n• Open Source Explorer",
              1000,
              "suriya@system:~$ whoami\n\n> Software Engineer\n> Community Builder\n> Content Creator\n\nsuriya@system:~$ cat journey.txt\n\nAI -> Backend\nBackend -> Systems\nSystems -> Infrastructure\n\nsuriya@system:~$ cat initiatives.txt\n\n• Founder, NammaRust\n• Technical YouTube Creator\n• Open Source Explorer\n\nsuriya@system:~$ cat mindset.txt",
              600,
              "suriya@system:~$ whoami\n\n> Software Engineer\n> Community Builder\n> Content Creator\n\nsuriya@system:~$ cat journey.txt\n\nAI -> Backend\nBackend -> Systems\nSystems -> Infrastructure\n\nsuriya@system:~$ cat initiatives.txt\n\n• Founder, NammaRust\n• Technical YouTube Creator\n• Open Source Explorer\n\nsuriya@system:~$ cat mindset.txt\n\nUnderstand Root Causes\nBuild For Scale\nKeep Learning",
              4000,
              "", // Resets the terminal for a loop
              500
            ]}
            wrapper="div"
            cursor={true}
            speed={60}
            repeat={Infinity}
            className="z-20 relative"
          />
        </div>
      </div>
    </div>
  );
}
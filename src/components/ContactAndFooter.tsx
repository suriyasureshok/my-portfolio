import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { type MouseEvent } from "react";
import { ArrowUpRight, Terminal, ShieldCheck, Activity } from "lucide-react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";

export default function ContactAndFooter() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <footer
      id="contact"
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-[#0B0B0B] border-t border-[#1B1B1B] pt-24 pb-12 group/section"
    >
      {/* 1. ARCHITECTURAL BACKGROUND GLOW */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover/section:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(247, 76, 0, 0.03),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* LEFT SIDE: DECORATIVE LIVE HANDSHAKE CONSOLE (Col span 5) */}
          <div className="w-full lg:col-span-5 flex flex-col gap-4 order-2 lg:order-1">
            {/* Reduced padding from p-6 to p-4, adjusted radius to rounded-xl for smaller scale */}
            <div className="rounded-xl border border-[#1B1B1B] bg-[#111111]/40 p-4 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 left-0 h-[1px] w-1/3 bg-[#F74C00]" />
              
              {/* Tightened header padding (pb-3) and spacing (mb-4) */}
              <div className="flex items-center justify-between border-b border-[#1B1B1B] pb-3 mb-4">
                <div className="flex items-center gap-3 font-['JetBrains_Mono'] text-xs text-[#A0A0A0]">
                  <Terminal size={14} className="text-[#F74C00]" />
                  <span>suriya_node_sh.io</span>
                </div>
                <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[10px] bg-[#1B1B1B] text-[#F5F5F5] px-2 py-0.5 rounded">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F74C00] animate-pulse" />
                  LISTEN_PORT
                </div>
              </div>

              {/* Pseudo Systems Logs: Tightened list spacing from space-y-3 to space-y-2 */}
              <div className="font-['JetBrains_Mono'] text-xs text-[#A0A0A0] space-y-2">
                <div className="flex items-start gap-2">
                  <ShieldCheck size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                  <p>TLS Handshake initialized ... <span className="text-emerald-500">[OK]</span></p>
                </div>
                <div className="flex items-start gap-2">
                  <Activity size={14} className="text-[#F74C00] mt-0.5 shrink-0" />
                  <p>Distributed routing tables aligned with system fundamentals.</p>
                </div>
                
                {/* Trimmed bottom divider margins and padding from 3 to 2 */}
                <div className="border-t border-[#1B1B1B] my-2 pt-2 flex justify-between text-[11px] text-[#4A4A4A]">
                  <span>STATUS: AWAITING_CONN</span>
                  <span>EST_TIME: 2026_UTC</span>
                </div>
              </div>
            </div>

            <p className="font-['Inter'] text-sm text-[#4A4A4A] leading-relaxed max-w-sm px-2">
              Ready to process high-throughput collaborations, architectural consulting, or open-source initiatives.
            </p>
          </div>

          {/* RIGHT SIDE: HIGH-IMPACT CONTACT CALLOUT (Col span 7) */}
          <div className="w-full lg:col-span-7 flex flex-col items-start order-1 lg:order-2 ml-0 lg:-ml-8">
            <span className="text-[#F74C00] font-['JetBrains_Mono'] text-xs mb-6 uppercase tracking-[0.4em] font-bold block">
              [ Connect Socket ]
            </span>
            
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-[#F5F5F5] leading-[1.05] font-['Poppins'] mb-10">
              Let's build something <br />
              <span className="text-[#1B1B1B] [text-shadow:_0_0_2px_#F5F5F5]">extraordinary.</span>
            </h2>
            
            {/* Immersive CTA Link */}
            <a
              href="mailto:suriyasureshkumar1312@gmail.com"
              className="group relative flex items-center gap-4 py-4 overflow-hidden"
            >
              <span className="font-['Poppins'] text-2xl md:text-4xl font-medium text-[#F5F5F5] transition-colors duration-300 group-hover:text-[#F74C00]">
                suriyasureshkumar1312@gmail.com
              </span>
              
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B1B1B] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#F74C00]/10">
                <ArrowUpRight 
                  size={20} 
                  className="text-[#F5F5F5] transition-all duration-300 group-hover:text-[#F74C00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                />
              </div>

              {/* Smooth kinetic underline element */}
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#1B1B1B]" />
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#F74C00] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </a>
          </div>

        </div>

        {/* --- FOOTER COMPONENT BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#1B1B1B] pt-12">
          <div className="text-[#A0A0A0] text-xs font-['Inter'] tracking-wide">
            © {new Date().getFullYear()} Suriya Sureshkumar. Built with Rust-like precision.
          </div>
          
          <div className="flex items-center gap-6">
            <FooterLink icon={<AiFillGithub size={20} />} href="#" label="GitHub Profile" />
            <FooterLink icon={<AiFillLinkedin size={20} />} href="#" label="LinkedIn Profile" />
            <FooterLink icon={<AiOutlineTwitter size={20} />} href="#" label="X Twitter Profile" />
            <FooterLink icon={<AiOutlineMail size={20} />} href="mailto:hello@yourdomain.com" label="Email Socket" />
          </div>
        </div>

      </div>
    </footer>
  );
}

// --- SECURE HOVER FOOTER LINK ---
function FooterLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a 
      href={href} 
      aria-label={label}
      className="
        relative
        flex
        items-center
        justify-center
        h-9
        w-9
        rounded-lg
        border
        border-[#1B1B1B]
        bg-[#0B0B0B]
        text-[#A0A0A0]
        transition-all
        duration-300
        hover:text-[#F74C00]
        hover:border-[#F74C00]/30
        hover:shadow-[0_0_15px_rgba(247,76,0,0.15)]
      "
    >
      {icon}
    </a>
  );
}
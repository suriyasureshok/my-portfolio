import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
// Try this exact import
// Use this instead if Simple Icons (si) is acting up
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";

export default function ContactAndFooter() {
  return (
    <footer className="relative bg-[#0B0B0B] border-t border-[#1B1B1B] pt-24 pb-12 font-sans">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* CONTACT SECTION */}
        <div className="mb-32 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#F74C00] font-['JetBrains_Mono'] text-sm mb-6 uppercase tracking-[0.3em]"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-extrabold text-[#F5F5F5] tracking-tighter mb-12 font-['Poppins']"
          >
            Let's build something <br />
            <span className="text-[#1B1B1B] [text-shadow:_0_0_2px_#F5F5F5]">extraordinary.</span>
          </motion.h2>
          
          <a
            href="mailto:your-email@example.com"
            className="group inline-flex items-center gap-4 text-xl font-medium text-[#F5F5F5] hover:text-[#F74C00] transition-colors"
          >
            <span className="border-b-2 border-[#F74C00] pb-1">hello@yourdomain.com</span>
            <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* FOOTER BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#1B1B1B] pt-12">
          <div className="text-[#A0A0A0] text-sm font-['Inter']">
            © {new Date().getFullYear()} Suriya. Built with Rust-like precision.
          </div>
          
          <div className="flex gap-8">
            <FooterLink icon={<AiFillGithub size={20} />} href="#" />
            <FooterLink icon={<AiFillLinkedin size={20} />} href="#" />
            <FooterLink icon={<AiOutlineTwitter size={20} />} href="#" />
            <FooterLink icon={<AiOutlineMail size={20} />} href="#" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a 
      href={href} 
      className="text-[#F5F5F5] hover:text-[#F74C00] transition-colors"
    >
      {icon}
    </a>
  );
}
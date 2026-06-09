import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, BookOpen, ExternalLink } from "lucide-react";

// Inlined data for easy editing in your portfolio
const communityData = {
  title: "NammaRust",
  description: "I started this community with the goal of building an open-source ecosystem to help developers learn and master modern web systems through Rust. It's a space dedicated to collaboration, learning, and documenting engineering paradigms.",
  tags: ["Rust", "Open Source", "Community", "Workshops"],
  communityLink: "#" // Add your community link here
};

const blogPosts = [
  {
    title: "Ownership in Rust",
    readTime: "5 min read",
    link: "#"
  },
  {
    title: "Redis Internals",
    readTime: "7 min read",
    link: "#"
  },
  {
    title: "SOLID Principles",
    readTime: "4 min read",
    link: "#"
  }
];

export default function CommunityAndBlogs() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress strictly within this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth scroll transformations for parallax depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0B0B0B] py-24 md:py-32 font-['Inter']">
      
      {/* BACKGROUND: Muted Video with strict #0B0B0B overlay */}
      <motion.div
        style={{
          y: backgroundY,
          scale: backgroundScale,
          backgroundImage: "url('src/assets/community.png')",
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
      <div className="absolute inset-0 z-0">
        
        {/* Themed Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#0B0B0B]/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-[#F5F5F5] tracking-tighter mb-6 font-['Poppins']">
            Ecosystem.
          </h2>
          <p className="text-lg text-[#F5F5F5]/60 font-light font-['Inter']">
            Driving open-source education and documenting engineering paradigms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Community Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 group relative rounded-sm border border-[#1B1B1B] bg-[#1B1B1B]/80 backdrop-blur-sm p-10 hover:border-[#F74C00] transition-colors"
          >
            <div className="flex items-center gap-4 mb-8 text-[#F74C00]">
              <Users size={32} />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5F5F5] font-['Inter']">Community</span>
            </div>
            
            <h3 className="text-3xl font-bold text-[#F74C00] mb-4 font-['Poppins']">
              {communityData.title}
            </h3>
            
            <p className="text-lg text-[#F5F5F5]/80 mb-8 leading-relaxed font-['Inter']">
              {communityData.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {communityData.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 border border-[#1B1B1B] bg-[#0B0B0B] text-[10px] font-['JetBrains_Mono'] text-[#F5F5F5]/60">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={communityData.communityLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#F5F5F5] font-bold uppercase text-sm hover:text-[#F74C00] transition-colors font-['Inter']"
            >
              Explore <ExternalLink size={16} />
            </a>
          </motion.div>

          {/* RIGHT COLUMN: Blog Posts */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3 text-[#F74C00] mb-4">
              <BookOpen size={24} />
              <span className="text-sm font-bold uppercase tracking-widest text-[#F5F5F5] font-['Inter']">Articles</span>
            </div>

            {blogPosts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                className="group flex items-center justify-between border-b border-[#1B1B1B] py-6 hover:border-[#F74C00] transition-colors"
              >
                <div>
                  <span className="block text-[10px] font-['JetBrains_Mono'] text-[#F74C00] mb-1">
                    {post.readTime}
                  </span>
                  <h4 className="text-xl font-medium text-[#F5F5F5] group-hover:text-[#F74C00] transition-colors font-['Inter']">
                    {post.title}
                  </h4>
                </div>
                <ExternalLink className="opacity-0 group-hover:opacity-100 text-[#F74C00] transition-opacity" size={20} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
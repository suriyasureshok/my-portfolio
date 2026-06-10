import { motion } from "framer-motion";
import { ytContentData } from "./ytContentData";
import { blogContentData } from "./blogContentData";

// Pseudo-random generator for consistent server/client rendering
const getPseudoRandom = (seed: number, min: number, max: number) => {
  const random = (Math.sin(seed * 9999) * 10000) % 1;
  return min + Math.abs(random) * (max - min);
};

export default function InvestigationBoard() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#111] py-20 font-mono text-[#111]">
      
      {/* --- CENTERED CHAPTER HEADER --- */}
      <div className="relative z-20 flex justify-center items-center w-full mb-16">
        <div className="flex items-center gap-6">
          <div className="h-[1px] w-16 sm:w-24 bg-[#F74C00]/70" />
          <span className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#F74C00] uppercase font-semibold">
            Chapter 6: The Evidence
          </span>
          <div className="h-[1px] w-16 sm:w-24 bg-[#F74C00]/70" />
        </div>
      </div>

      {/* --- PHYSICAL BOARD TEXTURES --- */}
      
      {/* 1. Dark Corkboard Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay"
        }}
      />

      {/* 2. Overhead Spotlight (Center Top) & Vignette */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_100%_120%_at_50%_-10%,rgba(255,255,255,0.12)_0%,rgba(0,0,0,0.85)_80%,rgba(0,0,0,1)_100%)] pointer-events-none" />

      {/* 3. Red Thread Network (SVG Overlay) */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-70 pointer-events-none drop-shadow-lg">
        {/* Simulating physical threads pinned between quadrants */}
        <line x1="25%" y1="25%" x2="75%" y2="25%" stroke="#a30000" strokeWidth="1.5" className="origin-center rotate-2" />
        <line x1="75%" y1="25%" x2="25%" y2="75%" stroke="#a30000" strokeWidth="1.5" strokeDasharray="5 3" />
        <line x1="25%" y1="75%" x2="75%" y2="75%" stroke="#a30000" strokeWidth="1.5" className="origin-center -rotate-1" />
        <line x1="25%" y1="25%" x2="25%" y2="75%" stroke="#a30000" strokeWidth="1.5" />
        <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="#a30000" strokeWidth="1.5" />
        <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#a30000" strokeWidth="1.5" />
      </svg>

      {/* --- BOARD CONTENT GRID --- */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* QUADRANT 1: YouTube Papers (Top Left) */}
          <div className="flex flex-wrap justify-center gap-6 relative">
            <h2 className="absolute -top-12 left-0 text-[#d4d0c5] opacity-40 text-xl font-bold tracking-widest uppercase border-b border-[#d4d0c5]/30 pb-1">Video Evidence</h2>
            {ytContentData.map((item, i) => (
              <InvestigationPaper 
                key={item.id} 
                title={item.title} 
                subtitle={item.subtitle} 
                action={item.action} 
                status={item.status}
                seed={i + 10} 
              />
            ))}
          </div>

          {/* QUADRANT 2: YouTube Journey Narration (Top Right) */}
          <div className="flex justify-center">
            <NarrationPaper seed={99}>
              <strong className="text-xl block mb-6 border-b-2 border-black/20 pb-2 uppercase tracking-widest text-[#1a1a1a]">Investigation Notes</strong>
              <p className="leading-relaxed text-lg whitespace-pre-line text-[#2a2a2a] font-semibold">
                NammaRust started as a community,{"\n"}
                but communities grow through{"\n"}
                shared knowledge.{"\n\n"}
                These videos are my attempt{"\n"}
                to document the things I learn{"\n"}
                in real-time.
              </p>
            </NarrationPaper>
          </div>

          {/* QUADRANT 3: Blog Journey Narration (Bottom Left) */}
          <div className="flex justify-center">
            <NarrationPaper seed={88}>
              <strong className="text-xl block mb-6 border-b-2 border-black/20 pb-2 uppercase tracking-widest text-[#1a1a1a]">Case Files</strong>
              <p className="leading-relaxed text-lg whitespace-pre-line text-[#2a2a2a] font-semibold">
                The articles dive deeper.{"\n\n"}
                Exploring backend engineering,{"\n"}
                distributed systems, Rust,{"\n"}
                and software architecture.{"\n\n"}
                Written evidence of systems{"\n"}
                broken down and understood.
              </p>
            </NarrationPaper>
          </div>

          {/* QUADRANT 4: Blog Papers (Bottom Right) */}
          <div className="flex flex-wrap justify-center gap-6 relative">
            <h2 className="absolute -top-12 right-0 text-[#d4d0c5] opacity-40 text-xl font-bold tracking-widest uppercase border-b border-[#d4d0c5]/30 pb-1">Written Records</h2>
            {blogContentData.map((item, i) => (
              <InvestigationPaper 
                key={item.id} 
                title={item.title} 
                subtitle={item.subtitle} 
                action={item.action} 
                status={item.status}
                seed={i + 30} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// --- SUBCOMPONENTS ---

type PaperProps = {
  title: string;
  subtitle: string;
  action: string;
  status: string;
  seed: number;
};

function InvestigationPaper({ title, subtitle, action, status, seed }: PaperProps) {
  // Generate random analog imperfections
  const rotate = getPseudoRandom(seed, -4, 4);
  const pinX = getPseudoRandom(seed + 1, 45, 55); 
  const width = getPseudoRandom(seed + 2, 220, 260);
  
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02, rotate: rotate + 1 }}
      className="relative p-5 shadow-[4px_6px_15px_rgba(0,0,0,0.6)] transition-all duration-300 hover:shadow-[8px_15px_25px_rgba(0,0,0,0.8)] cursor-pointer group"
      style={{ 
        transform: `rotate(${rotate}deg)`,
        width: `${width}px`,
        // Vintage/Aged Paper base color (#e3dec3) + heavier noise texture
        backgroundColor: '#e3dec3',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`
      }}
    >
      {/* The Pin */}
      <div 
        className="absolute w-3.5 h-3.5 rounded-full bg-[#0a0a0a] shadow-[2px_3px_5px_rgba(0,0,0,0.8)] z-10"
        style={{ top: '6px', left: `${pinX}%` }}
      >
        {/* Pin highlight */}
        <div className="absolute top-[2px] left-[2px] w-1 h-1 bg-white/30 rounded-full" />
      </div>

      <div className="mt-4 border-2 border-[#1a1a1a] p-3 h-full flex flex-col justify-between relative opacity-90">
        {/* Gritty corner accents */}
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#1a1a1a]" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#1a1a1a]" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#1a1a1a]" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#1a1a1a]" />

        <div>
          <span className="text-[10px] font-bold tracking-widest uppercase bg-[#1a1a1a] text-[#e3dec3] px-1.5 py-0.5">
            {status}
          </span>
          <h3 className="mt-3 text-xl font-bold uppercase leading-tight tracking-tight text-[#111]">{title}</h3>
          <p className="mt-2 text-sm text-[#333] border-t border-[#1a1a1a]/30 pt-2 font-medium">{subtitle}</p>
        </div>
        <div className="mt-6 font-bold uppercase tracking-widest text-sm flex items-center justify-between text-[#111] group-hover:text-[#a30000] transition-colors">
          {action}
        </div>
      </div>
    </motion.div>
  );
}

function NarrationPaper({ children, seed }: { children: React.ReactNode, seed: number }) {
  const rotate = getPseudoRandom(seed, -2, 2);
  const pin1X = getPseudoRandom(seed + 1, 15, 25);
  const pin2X = getPseudoRandom(seed + 2, 75, 85);

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      className="relative p-8 shadow-[5px_8px_20px_rgba(0,0,0,0.7)] transition-all duration-300 hover:shadow-[10px_15px_30px_rgba(0,0,0,0.9)] max-w-md"
      style={{ 
        transform: `rotate(${rotate}deg)`,
        // Slightly different aged paper shade for contrast (#d9d3b4)
        backgroundColor: '#d9d3b4',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.09'/%3E%3C/svg%3E")`
      }}
    >
      {/* Two Pins for larger paper */}
      <div className="absolute w-3.5 h-3.5 rounded-full bg-[#0a0a0a] shadow-[2px_3px_5px_rgba(0,0,0,0.8)] z-10" style={{ top: '10px', left: `${pin1X}%` }}>
        <div className="absolute top-[2px] left-[2px] w-1 h-1 bg-white/30 rounded-full" />
      </div>
      <div className="absolute w-3.5 h-3.5 rounded-full bg-[#0a0a0a] shadow-[2px_3px_5px_rgba(0,0,0,0.8)] z-10" style={{ top: '8px', left: `${pin2X}%` }}>
        <div className="absolute top-[2px] left-[2px] w-1 h-1 bg-white/30 rounded-full" />
      </div>

      <div className="mt-2 font-['Courier_New',Courier,monospace] opacity-90">
        {children}
      </div>
    </motion.div>
  );
}
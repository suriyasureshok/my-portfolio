import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { skills } from "./skillsData";

export default function Skills() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number }[] = [];

    const init = () => {
      particles = Array.from({ length: 40 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * 800,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(77, 124, 138, 0.15)';
      
      particles.forEach((p, _) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > 800) p.vy *= -1;

        particles.forEach((p2, _) => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    canvas.width = window.innerWidth;
    canvas.height = 800;
    init();
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-[#0B1121] overflow-hidden">
      {/* 1. INTERACTIVE NEURAL-MESH BACKGROUND */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121] via-transparent to-[#0B1121] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F1F5F9]">Technical Arsenal.</h2>
          <p className="mt-4 text-[#94A3B8]">The stack I use to architect robust systems.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <SkillCard key={index} group={skillGroup} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ group, index }: { group: typeof skills[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group p-[1px] rounded-2xl bg-white/5 hover:bg-[#4D7C8A]/20 transition-all duration-500"
    >
      <div className="h-full rounded-[15px] bg-[#0B1121]/90 p-6 backdrop-blur-sm border border-[#263655]/50">
        <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#4D7C8A]">{group.category}</h3>
        <div className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span key={item} className="px-2 py-1 rounded bg-[#111A2E] text-[#F1F5F9] text-xs font-mono border border-transparent hover:border-[#8FAEC1]/30 transition-colors">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
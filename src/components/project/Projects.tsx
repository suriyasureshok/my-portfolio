import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { projects } from "./projectData"; // Importing your external data

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#0B1121] py-24 md:py-20">
      {/* 1. CODE-DRIVEN ANIMATED BACKGROUND */}
      
      {/* Moving Tech Grid */}
      <div 
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#26365530_1px,transparent_1px),linear-gradient(to_bottom,#26365530_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />
      
      {/* Slow Pulsing Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.10, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#4D7C8A] blur-[150px] pointer-events-none z-0"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#F1F5F9] mb-6">
            Selected Work.
          </h2>
          <p className="text-lg leading-relaxed text-[#94A3B8] font-light">
            A collection of AI systems, infrastructure platforms, and engineering projects 
            focused on solving complex real-world problems.
          </p>
        </motion.div>

        {/* PROJECTS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 md:gap-8 lg:grid-cols-2"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- PROJECT CARD COMPONENT ---

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 20 } },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="
        group
        relative
        flex
        flex-col
        justify-between
        overflow-hidden
        rounded-2xl
        border
        border-[#263655]/60
        bg-[#111A2E]/60
        p-8
        backdrop-blur-md
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#4D7C8A]/50
        hover:shadow-[0_12px_40px_rgba(38,54,85,0.4)]
      "
    >
      {/* Subtle Image Reveal on Hover */}
      <div 
        className="absolute inset-0 z-0 opacity-0 mix-blend-luminosity transition-opacity duration-700 group-hover:opacity-20"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Gradient overlay to ensure text remains readable over the image */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#111A2E] via-[#111A2E]/90 to-[#111A2E]/40 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {/* Content Container (Needs higher z-index to sit above the image) */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Top Section */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1C2841] text-[#8FAEC1] transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
              <FolderGit2 size={24} />
            </div>
            
            {/* Action Links */}
            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748B] transition-colors hover:text-[#F1F5F9]"
                aria-label="GitHub Repository"
              >
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64748B] transition-colors hover:text-[#F1F5F9]"
                aria-label="View Demo"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          <h3 className="mb-2 text-2xl font-bold text-[#F1F5F9] group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="mb-4 text-sm font-medium tracking-wide text-[#4D7C8A]">
            {project.subtitle}
          </p>
          <p className="mb-8 leading-relaxed text-[#94A3B8] text-sm md:text-base">
            {project.description}
          </p>
        </div>

        {/* Bottom Section: Tech Stack & Button */}
        <div className="mt-auto flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="rounded-full border border-[#263655] bg-[#0A0F1C]/80 px-3 py-1 text-xs font-medium text-[#8FAEC1] transition-colors group-hover:border-[#4D7C8A]/40 group-hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Dynamic CTA Button */}
          <a
            href={project.demo}
            className="
              inline-flex
              shrink-0
              items-center
              gap-2
              rounded-xl
              bg-[#1D3557]
              px-4
              py-2
              text-sm
              font-semibold
              text-white
              transition-all
              hover:bg-[#4D7C8A]
              hover:shadow-[0_0_15px_rgba(77,124,138,0.4)]
            "
          >
            Case Study
            <ExternalLink size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";
import { projects } from "./projectData";

import {
  ArrowUpRight,
} from "lucide-react";

interface ProjectProps {
  project: typeof projects[0];
  reverse?: boolean;
}

export default function ProjectCard({
  project,
  reverse,
}: ProjectProps) {
  const ref = useRef(null);

  const { scrollYProgress } =
    useScroll({
      target: ref,
      offset: ["start end", "end start"],
    });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [80, -80]
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [40, -40]
  );

  return (
    <section
      ref={ref}
      className="
        relative
        py-32
        border-t
        border-[#263655]/40
      "
    >
      <div
        className={`
          mx-auto
          max-w-7xl
          px-8
          grid
          gap-16
          items-center
          lg:grid-cols-2
          ${
            reverse
              ? "lg:[&>*:first-child]:order-2"
              : ""
          }
        `}
      >
        {/* IMAGE */}

        <motion.div
          style={{
            y: imageY,
          }}
          className="relative"
        >
          <div
            className="
              absolute
              -inset-8
              rounded-[40px]
              bg-[#4D7C8A]/10
              blur-3xl
            "
          />

          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-[#263655]
              bg-[#151E32]
            "
          >
            <img
              src={project.image}
              alt={project.title}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>
        </motion.div>

        {/* CONTENT */}

        <motion.div
          style={{
            y: textY,
          }}
        >
          <p
            className="
              text-sm
              tracking-[0.25em]
              text-[#4D7C8A]
            "
          >
            FEATURED PROJECT
          </p>

          <h3
            className="
              mt-4
              text-5xl
              font-semibold
              text-[#F1F5F9]
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-2
              text-lg
              text-[#8FAEC1]
            "
          >
            {project.subtitle}
          </p>

          <p
            className="
              mt-8
              max-w-xl
              leading-relaxed
              text-[#94A3B8]
            "
          >
            {project.description}
          </p>

          {/* TECH */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-3
            "
          >
            {project.technologies.map(
              (tech: string) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-[#263655]
                    bg-[#151E32]
                    px-4
                    py-2
                    text-sm
                    text-[#8FAEC1]
                  "
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* BUTTONS */}

          <div
            className="
              mt-10
              flex
              gap-4
            "
          >
            <a
              href={project.demo}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-[#1B4079]
                px-6
                py-3
                text-white
                transition-all
                hover:bg-[#2456a2]
              "
            >
              View Case Study
              <ArrowUpRight size={18} />
            </a>

            <a
              href={project.github}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-[#263655]
                px-6
                py-3
                text-[#94A3B8]
              "
            >
              {/* Github icon */}
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
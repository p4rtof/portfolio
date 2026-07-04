  "use client";

  import { motion } from "framer-motion";
  import { useState } from "react";
  import Image from "next/image";
  import type { Project } from "@/data/projects";
  import { getTagColor } from "@/lib/tagColors";

  type ProjectCardProps = Project & {
    rotate?: number;
  };

  const STAR_POSITIONS = [
    { top: "-6%", left: "5%", size: 14, delay: 0 },
    { top: "-10%", left: "85%", size: 10, delay: 0.1 },
    { top: "50%", left: "-4%", size: 12, delay: 0.15 },
    { top: "90%", left: "95%", size: 16, delay: 0.05 },
    { top: "100%", left: "15%", size: 10, delay: 0.2 },
    { top: "10%", left: "102%", size: 12, delay: 0.25 },
  ];

  export default function ProjectCard({
    title,
    description,
    image,
    tags,
    demoUrl,
    githubUrl,
    rotate = -1,
  }: ProjectCardProps) {
    const [hovered, setHovered] = useState(false);

    return (
      <motion.div
        layout
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ rotate: 0, y: -4 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        style={{ rotate }}
        className="relative border-2 border-neutral-800 bg-white rounded-sm p-4 md:p-5 flex flex-col md:flex-row gap-5"
      >
        {STAR_POSITIONS.map((star, i) => (
          <motion.svg
            key={i}
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{
              position: "absolute",
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            className="text-amber-400 pointer-events-none"
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={
              hovered
                ? { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0.6], rotate: 180 }
                : { opacity: 0, scale: 0 }
            }
            transition={{
              duration: 1.1,
              delay: star.delay,
              repeat: hovered ? Infinity : 0,
              repeatDelay: 0.4,
            }}
          >
            <path d="M12 0l2.2 8.4L22 12l-7.8 3.6L12 24l-2.2-8.4L2 12l7.8-3.6L12 0z" />
          </motion.svg>
        ))}

        <div className="relative w-full md:w-64 h-48 flex-shrink-0 overflow-hidden rounded-sm border border-neutral-200">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="font-playpen-sans text-2xl font-bold text-neutral-800 mb-3">
            {title}
          </h3>

          <p className="font-playpen-sans text-sm text-neutral-500 leading-relaxed mb-4">
            {description}
          </p>

          {/* --- Link development & GitHub --- */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-playpen-sans text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Link
              </a>
            )}

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-playpen-sans text-sm font-bold text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-1.94c-3.16.69-3.83-1.52-3.83-1.52-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 5.74 0c2.19-1.47 3.15-1.16 3.15-1.16.62 1.58.23 2.75.11 3.04.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A10.53 10.53 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* --- Tags --- */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => {
              const color = getTagColor(tag);
              return (
                <span
                  key={tag}
                  className={`${color.bg} ${color.text} text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </motion.div>
    );
  }

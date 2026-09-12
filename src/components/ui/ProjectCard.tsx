"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
}: Project) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col gap-5 border-b border-border py-8 first:pt-0 md:flex-row md:gap-8"
    >
      <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-lg border border-border md:h-40 md:w-64">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 256px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <h3 className="font-serif text-xl text-ink">{title}</h3>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-muted">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-border px-2.5 py-1 text-xs text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-5">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              Live demo ↗
            </a>
          )}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <FaGithub size={14} />
            Source
          </a>
        </div>
      </div>
    </motion.article>
  );
}

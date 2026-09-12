"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

const VISIBLE_COUNT = 3;

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, []);

  const filteredProjects = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  const visibleProjects = filteredProjects.slice(0, VISIBLE_COUNT);
  const hasMore = filteredProjects.length > VISIBLE_COUNT;

  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          className="mb-10"
        />

        {/* Filter bar */}
        <div className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
              activeTag === null
                ? "border-ink bg-ink text-bg"
                : "border-border text-ink-muted hover:border-ink-faint"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => {
            const isActive = activeTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(isActive ? null : tag)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "border-ink bg-ink text-bg"
                    : "border-border text-ink-muted hover:border-ink-faint"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Projects list */}
        <motion.div layout className="flex flex-col">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="py-8 text-sm text-ink-muted">
            No projects with this tag yet.
          </p>
        )}

        {hasMore && (
          <div className="mt-10">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink"
            >
              View all projects
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

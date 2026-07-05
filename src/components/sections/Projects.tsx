'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { getTagColor } from '@/lib/tagColors';

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
    <section
      id="projects"
      className="relative overflow-hidden px-4 sm:px-6 py-16 md:py-24 w-full bg-[#fafafa] dark:bg-neutral-900"
    >
      {/* --- Heading --- */}
      <div className="mb-8 md:mb-10">
        <SectionHeading title="Projects" />
      </div>

      {/* --- Filter bar --- */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex bg-white dark:bg-neutral-800 p-3 md:p-4 mt-6 md:mt-10 rounded-2xl max-w-4xl mx-auto shadow-sm border dark:border-neutral-700 flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-16"
      >
        <div className="w-full text-center mb-1 md:mb-2">
          <span className="font-playpen-sans text-base md:text-lg font-bold text-neutral-700 dark:text-neutral-200">
            Filter by Tags
          </span>
        </div>

        <button
          onClick={() => setActiveTag(null)}
          className={`font-playpen-sans text-xs font-bold tracking-wide px-3 md:px-3.5 py-1.5 rounded-full transition-colors ${
            activeTag === null
              ? 'bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-900'
              : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600'
          }`}
        >
          All
        </button>

        {allTags.map((tag) => {
          const color = getTagColor(tag);
          const isActive = activeTag === tag;
          return (
            <button
              key={tag}
              onClick={() => setActiveTag(isActive ? null : tag)}
              className={`font-playpen-sans text-xs font-bold tracking-wide px-3 md:px-3.5 py-1.5 rounded-full transition-colors ${
                isActive
                  ? `${color.solid} text-white`
                  : `${color.bg} dark:bg-neutral-900 ${color.text} dark:brightness-125 hover:opacity-80`
              }`}
            >
              {tag}
            </button>
          );
        })}
      </motion.div>

      {/* --- Projects List --- */}
      <motion.div layout className="max-w-4xl mx-auto flex flex-col gap-8 md:gap-12">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard
                {...project}
                // Memberikan efek rotasi zig-zag yang halus
                rotate={i % 2 === 0 ? -1 : 1}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <p className="text-center font-playpen-sans text-neutral-400 dark:text-neutral-600 mt-8">
          Belum ada project dengan tag ini.
        </p>
      )}

      {/* --- CTA: View All Projects --- */}
      {hasMore && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-14 md:mt-20"
        >
          <Link
            href="/projects"
            className="group flex flex-col items-center gap-1"
          >
            <div className="inline-flex items-center gap-2 font-playpen-sans text-lg md:text-xl font-bold text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
              <span>View all projects</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="text-xl md:text-2xl leading-none"
              >
                →
              </motion.span>
            </div>

            {/* Garis bawah coretan biar makin estetik */}
            <svg
              width="140"
              height="10"
              viewBox="0 0 120 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors"
            >
              <path
                d="M2 10C35.5 -1.5 84.5 -1.5 118 10"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      )}
    </section>
  );
}
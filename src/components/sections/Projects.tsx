'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionHeading from '@/components/ui/SectionHeading';

const VISIBLE_COUNT = 3;

export default function Projects() {
  const visibleProjects = projects.slice(0, VISIBLE_COUNT);
  const hasMore = projects.length > VISIBLE_COUNT;

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 w-full bg-[#fafafa] bg-[radial-gradient(#eaeaea_2px,transparent_1px)] [background-size:32px_32px]"
    >
      {/* --- Heading --- */}
      <div className="mb-16">
        <SectionHeading title="Projects" />
      </div>

      {/* --- Projects List --- */}
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {visibleProjects.map((project, i) => (
          <ProjectCard 
            key={project.id} 
            {...project} 
            // Memberikan efek rotasi zig-zag yang halus
            rotate={i % 2 === 0 ? -1 : 1} 
          />
        ))}
      </div>

      {/* --- CTA: View All Projects --- */}
      {hasMore && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-20"
        >
          <Link
            href="/projects"
            className="group flex flex-col items-center gap-1"
          >
            <div className="inline-flex items-center gap-2 font-playpen-sans text-xl font-bold text-neutral-600 group-hover:text-neutral-900 transition-colors">
              <span>View all projects</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="text-2xl leading-none"
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
              className="text-neutral-300 group-hover:text-neutral-600 transition-colors"
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
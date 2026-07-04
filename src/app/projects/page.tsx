"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

// Pastikan ubah '@/utils/tagColors' sesuai dengan lokasi file aslinya!
import { getTagColor } from "@/lib/tagColors";

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Ambil semua tag unik otomatis dari data projects

  const allTags = useMemo<string[]>(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.tags?.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, []);

  // Filter project yang tampil sesuai tag yang dipilih
  const filteredProjects = activeTag
    ? projects.filter((p) => p.tags?.includes(activeTag))
    : projects;

  return (
    <main className="min-h-screen w-full bg-[#fafafa] bg-[radial-gradient(#eaeaea_2px,transparent_1px)] [background-size:32px_32px] px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <p className="font-playpen-sans text-sm text-neutral-500 mb-6">
          <Link href="/" className="hover:text-neutral-800">
            Home
          </Link>
          {" / "}
          <span className="text-violet-500">Projects</span>
        </p>

        <h1 className="font-playpen-sans text-4xl md:text-5xl font-extrabold text-neutral-800 mb-3">
          Projects
        </h1>
        <p className="font-playpen-sans text-neutral-500 mb-16">
          A selection of my work.
        </p>

        {/* --- Filter bar --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex bg-white p-4 rounded-2xl max-w-4xl mx-auto shadow-sm border flex-wrap justify-center gap-3 mb-16"
        >
          <div className="w-full text-center mb-1">
            <span className="font-playpen-sans text-sm font-bold text-neutral-400">
              Filter by Tags
            </span>
          </div>

          <button
            onClick={() => setActiveTag(null)}
            className={`font-playpen-sans text-xs font-bold tracking-wide px-3.5 py-1.5 rounded-full transition-colors ${
              activeTag === null
                ? "bg-neutral-800 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
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
                className={`font-playpen-sans text-xs font-bold tracking-wide px-3.5 py-1.5 rounded-full transition-colors ${
                  isActive
                    ? `${color.solid} text-white`
                    : `${color.bg} ${color.text} hover:opacity-80`
                }`}
              >
                {tag}
              </button>
            );
          })}
        </motion.div>

        {/* --- Menampilkan project yang sudah difilter --- */}
        <div className="flex flex-col gap-10">
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              {...project}
              rotate={i % 2 === 0 ? -1 : 1}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

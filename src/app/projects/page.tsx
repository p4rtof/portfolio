"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo<string[]>(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.tags?.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, []);

  const filteredProjects = activeTag
    ? projects.filter((p) => p.tags?.includes(activeTag))
    : projects;

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-6 text-sm text-ink-muted">
          <Link href="/" className="transition-colors hover:text-ink">
            Home
          </Link>
          {" / "}
          <span className="text-ink">Projects</span>
        </p>

        <h1 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
          All projects
        </h1>
        <p className="mt-3 text-ink-muted">A selection of my work.</p>

        <div className="mt-10 mb-4 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`rounded-lg border px-3.5 py-1.5 text-xs font-medium transition-colors ${
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
                className={`rounded-lg border px-3.5 py-1.5 text-xs font-medium transition-colors ${
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

        <div className="flex flex-col">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}

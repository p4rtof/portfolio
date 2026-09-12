"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Download, ArrowUpRight } from "lucide-react";
import {
  academic,
  about,
  experiences,
  name,
  skills,
  socials,
} from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";

type TimelineEntry = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
};

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

function TimelineList({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="space-y-8 border-l border-border pl-6">
      {entries.map((entry, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="relative"
        >
          <span className="absolute -left-[28px] top-1.5 h-2 w-2 rounded-lg bg-accent" />
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
            <h4 className="font-serif text-lg text-ink">{entry.title}</h4>
            <span className="text-xs text-ink-faint">{entry.period}</span>
          </div>
          <p className="mb-1.5 text-sm text-ink-muted">{entry.subtitle}</p>
          <p className="text-sm leading-relaxed text-ink-muted">
            {entry.description}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}

export default function About() {
  const academicTimeline: TimelineEntry[] = academic.map((edu) => ({
    title: edu.univ,
    subtitle: edu.major,
    period: edu.period,
    description: edu.description,
  }));

  const experienceTimeline: TimelineEntry[] = experiences.map((exp) => ({
    title: exp.organization,
    subtitle: exp.role,
    period: exp.period,
    description: exp.description,
  }));

  // Pakai daftar skill sebagai isi scrolling chip strip
  const scrollingTags = skills.map((skill) => skill.name);

  return (
    <section id="about" className="px-6 py-20 pb-10 md:pb-10 md:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="About" title="A bit about me" className="mb-10" />

        {/* Top profile card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 border-black dark:border-white sm:h-24 sm:w-24">
              <Image
                src="/images/profile.jpeg"
                alt={name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-serif text-2xl text-ink sm:text-3xl">
                {name}
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                  CS Student &amp; Developer
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-ink font-medium">
                  <MapPin size={12} />
                  Jakarta, ID
                </span>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted">
                {about}
              </p>
            </div>
          </div>


        </motion.div>

        {/* Two column: Skillsets (left) + Academic/Experience (right) */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">
          {/* Left: Skillsets */}
          {/* Left: Skillsets */}
<div>
  <div className="mb-6 flex items-center justify-between">
    <h3 className="text-xl font-medium text-ink">Skillsets</h3>
  </div>

  <div className="flex flex-wrap gap-2.5">
    {skills.map((skill, i) => (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: i * 0.03 }}
        drag
        dragConstraints={{ top: -20, bottom: 20, left: -20, right: 20 }}
        dragElastic={0.4}
        whileDrag={{ scale: 1.08, zIndex: 10, cursor: "grabbing" }}
        className="flex w-fit shrink-0 cursor-grab items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 transition-colors hover:border-ink-faint active:cursor-grabbing"
      >
        <div className="relative h-5 w-5 shrink-0">
          <Image
            src={`${DEVICON_BASE}/${skill.icon}.svg`}
            alt={skill.name}
            fill
            sizes="20px"
            className="object-contain pointer-events-none"
          />
        </div>
        <span className="whitespace-nowrap text-sm font-medium text-ink pointer-events-none">
          {skill.name}
        </span>
      </motion.div>
    ))}
  </div>
</div>

          {/* Right: Experience + Academic */}
          <div className="space-y-12">
            <div>
              <h3 className="mb-6 text-xl font-medium text-ink">Academic</h3>
              <TimelineList entries={academicTimeline} />
            </div>

            <div>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-medium text-ink">Experience</h3>
              </div>
              <TimelineList entries={experienceTimeline} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
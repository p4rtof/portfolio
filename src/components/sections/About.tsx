"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import {
  academic,
  about,
  experiences,
  name,
  skills,
} from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";

type TimelineEntry = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
};

export default function About() {
  const timeline: TimelineEntry[] = [
    ...academic.map((edu) => ({
      title: edu.univ,
      subtitle: edu.major,
      period: edu.period,
      description: edu.description,
    })),
    ...experiences.map((exp) => ({
      title: exp.organization,
      subtitle: exp.role,
      period: exp.period,
      description: exp.description,
    })),
  ];

  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="About" title="A bit about me" className="mb-14" />

        <div className="grid grid-cols-1 gap-14 md:grid-cols-[220px_1fr]">
          {/* Left column: photo + quick facts */}
          <div className="flex flex-row items-start gap-6 md:flex-col md:gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-border md:h-40 md:w-40"
            >
              <Image
                src="/images/profile.jpeg"
                alt={name}
                fill
                sizes="(max-width: 768px) 96px, 160px"
                className="object-cover"
              />
            </motion.div>

            <div className="flex flex-col gap-2 text-sm text-ink-muted">
              <p className="font-serif text-lg text-ink">{name}</p>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} />
                Jakarta, ID
              </span>
              <span>Front-end focused</span>
              <span>Always learning &amp; building</span>
            </div>
          </div>

          {/* Right column: bio, skills, timeline, resume */}
          <div className="space-y-12">
            <p className="max-w-xl text-base leading-relaxed text-ink-muted">
              {about}
            </p>

            <div>
              <h3 className="mb-4 text-sm font-medium text-ink">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-border px-3.5 py-1.5 text-sm text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-medium text-ink">
                Education &amp; experience
              </h3>
              <ol className="space-y-8 border-l border-border pl-6">
                {timeline.map((entry, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative"
                  >
                    <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                      <h4 className="font-serif text-lg text-ink">
                        {entry.title}
                      </h4>
                      <span className="text-xs text-ink-faint">
                        {entry.period}
                      </span>
                    </div>
                    <p className="mb-1.5 text-sm text-ink-muted">
                      {entry.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {entry.description}
                    </p>
                  </motion.li>
                ))}
              </ol>
            </div>

            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
            >
              <Download size={16} />
              Download resume
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

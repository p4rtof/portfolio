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

              {/* Social icons */}
              <div className="mt-4 flex gap-2.5">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
                  >
                    <social.icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>


        </motion.div>

        {/* Two column: Skillsets (left) + Academic/Experience (right) */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-1">
          {/* Left: Skillsets */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-medium text-ink">Skillsets</h3>
            </div>

            {(() => {
              const half = Math.ceil(skills.length / 2);
              const row1 = skills.slice(0, half);
              const row2 = skills.slice(half);

              return (
                <div className="space-y-2.5">
                  {/* Baris 1 — geser ke kiri */}
                  <div className="relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-bg to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-bg to-transparent" />

                    <div className="skills-marquee-left flex w-max gap-2.5">
                      {[...row1, ...row1].map((skill, i) => (
                        <div
                          key={`row1-${skill.name}-${i}`}
                          className="flex w-fit shrink-0 items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 transition-colors hover:border-ink-faint"
                        >
                          <div className="relative h-5 w-5 shrink-0">
                            <Image
                              src={`${DEVICON_BASE}/${skill.icon}.svg`}
                              alt={skill.name}
                              fill
                              sizes="20px"
                              className="object-contain"
                            />
                          </div>
                          <span className="whitespace-nowrap text-sm font-medium text-ink">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Baris 2 — geser ke kanan */}
                  <div className="relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-bg to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-bg to-transparent" />

                    <div className="skills-marquee-right flex w-max gap-2.5">
                      {[...row2, ...row2].map((skill, i) => (
                        <div
                          key={`row2-${skill.name}-${i}`}
                          className="flex w-fit shrink-0 items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 transition-colors hover:border-ink-faint"
                        >
                          <div className="relative h-5 w-5 shrink-0">
                            <Image
                              src={`${DEVICON_BASE}/${skill.icon}.svg`}
                              alt={skill.name}
                              fill
                              sizes="20px"
                              className="object-contain"
                            />
                          </div>
                          <span className="whitespace-nowrap text-sm font-medium text-ink">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}

            <style>{`
    .skills-marquee-left {
      animation: skills-marquee-left-scroll 22s linear infinite;
    }
    .skills-marquee-left:hover {
      animation-play-state: paused;
    }
    @keyframes skills-marquee-left-scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    .skills-marquee-right {
      animation: skills-marquee-right-scroll 22s linear infinite;
    }
    .skills-marquee-right:hover {
      animation-play-state: paused;
    }
    @keyframes skills-marquee-right-scroll {
      from { transform: translateX(-50%); }
      to { transform: translateX(0); }
    }
  `}</style>
          </div>

          {/* Right: Experience + Academic */}
          <div>
            <h3 className="mb-6 text-xl font-medium text-ink">Academic</h3>
            <TimelineList entries={academicTimeline} />
          </div>
          <div className="">
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
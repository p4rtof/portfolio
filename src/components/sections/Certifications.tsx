"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, Calendar } from "lucide-react";
import { certifications } from "@/data/certifications";
import SectionHeading from "@/components/ui/SectionHeading";

const sortedCertifications = [...certifications].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-20 pb-10 md:pb-10 md:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications"
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {sortedCertifications.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Award size={18} />
                </span>
                <span className="flex items-center gap-1.5 text-xs text-ink-faint">
                  <Calendar size={12} />
                  {cert.date}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-lg leading-snug text-ink">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink-muted">
                  {cert.issuer}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border px-2.5 py-1 text-xs text-ink-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-medium text-ink transition-colors group-hover:text-accent">
                View credential
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
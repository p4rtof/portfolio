"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, Calendar } from "lucide-react";
import { certifications } from "@/data/certifications";

export default function CertificationsPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-6 text-sm text-ink-muted">
          <Link href="/" className="transition-colors hover:text-ink">
            Home
          </Link>
          {" / "}
          <span className="text-ink">Certifications</span>
        </p>

        <h1 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
          All certifications
        </h1>
        <p className="mt-3 text-ink-muted">
          Courses and credentials I&apos;ve completed.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {certifications.map((cert, index) => (
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
              {/* Icon + date */}
              <div className="flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Award size={18} />
                </span>
                <span className="flex items-center gap-1.5 text-xs text-ink-faint">
                  <Calendar size={12} />
                  {cert.date}
                </span>
              </div>

              {/* Title + issuer */}
              <div>
                <h3 className="font-serif text-lg leading-snug text-ink">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink-muted">
                  {cert.issuer}
                </p>
              </div>

              {/* Skills learned */}
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

              {/* Explicit credential link */}
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
    </main>
  );
}
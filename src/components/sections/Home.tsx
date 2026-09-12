"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { name } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-18">
      <div className="mx-auto w-full max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 text-sm text-ink-muted"
        >
          Front-end developer & CS student
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          Hi, I&apos;m {name} — building
          <br className="hidden sm:block" /> calm, considered interfaces.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg"
        >
          I study Computer Science at IPB University and spend most of my time
          shaping web experiences that feel simple, fast, and a little
          crafted.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            View projects
            <ArrowUpRight size={15} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink-faint"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

    </section>
  );
}

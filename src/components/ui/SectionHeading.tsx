'use client';

import { motion } from 'framer-motion';

type SectionHeadingProps = {
  title: string;
  className?: string;
};

export default function SectionHeading({ title, className = "" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center justify-center gap-4 mb-8 ${className}`}
    >
      <span className="h-px w-16 bg-neutral-300 dark:bg-neutral-600" />
      <h2 className="font-playpen-sans text-3xl md:text-4xl font-extrabold text-neutral-700 dark:text-white">
        {title}
      </h2>
      <span className="h-px w-16 bg-neutral-300 dark:bg-neutral-600" />
    </motion.div>
  );
}
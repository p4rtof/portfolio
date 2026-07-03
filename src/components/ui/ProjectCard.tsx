'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/projects';

type ProjectCardProps = Project & {
  rotate?: number;
};

const STAR_POSITIONS = [
  { top: '-6%', left: '5%', size: 14, delay: 0 },
  { top: '-10%', left: '85%', size: 10, delay: 0.1 },
  { top: '50%', left: '-4%', size: 12, delay: 0.15 },
  { top: '90%', left: '95%', size: 16, delay: 0.05 },
  { top: '100%', left: '15%', size: 10, delay: 0.2 },
  { top: '10%', left: '102%', size: 12, delay: 0.25 },
];

export default function ProjectCard({
  slug,
  title,
  description,
  image,
  tag,
  rotate = -1,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/projects/${slug}`} className="block">
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ rotate: 0, y: -4 }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
        style={{ rotate }}
        className="relative border-2 border-neutral-800 bg-white rounded-sm p-4 md:p-5 flex flex-col md:flex-row gap-5 cursor-pointer"
      >
        {STAR_POSITIONS.map((star, i) => (
          <motion.svg
            key={i}
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{
              position: 'absolute',
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            className="text-amber-400 pointer-events-none"
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={
              hovered
                ? { opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0.6], rotate: 180 }
                : { opacity: 0, scale: 0 }
            }
            transition={{
              duration: 1.1,
              delay: star.delay,
              repeat: hovered ? Infinity : 0,
              repeatDelay: 0.4,
            }}
          >
            <path d="M12 0l2.2 8.4L22 12l-7.8 3.6L12 24l-2.2-8.4L2 12l7.8-3.6L12 0z" />
          </motion.svg>
        ))}

        <div className="relative w-full md:w-64 h-48 flex-shrink-0 overflow-hidden rounded-sm border border-neutral-200">
          <Image src={image} alt={title} fill className="object-cover" />
          <span className="absolute bottom-3 left-3 bg-white/90 text-neutral-800 text-[10px] font-bold tracking-wider px-2 py-1 rounded-sm">
            {tag}
          </span>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="font-playpen-sans text-2xl font-bold text-neutral-800 mb-3">
            {title}
          </h3>
          <p className="font-playpen-sans text-sm text-neutral-500 leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
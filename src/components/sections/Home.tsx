"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { name } from "@/data/profile";

export default function Hero() {
  const constraintsRef = useRef(null);

  return (
    <section
      ref={constraintsRef}
      className="relative min-h-screen min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-neutral-900"
    >
      {/* --- Teks Utama --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center z-10 pointer-events-none px-8 sm:px-6"
      >
        <h1 className="text-2xl sm:text-3xl font-playpen-sans md:text-5xl font-extrabold text-neutral-600 dark:text-neutral-200 mb-3 md:mb-4 tracking-tight">
          Hi, I&apos;m {name}
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-playpen-sans text-gray-500 dark:text-neutral-400 italic">
          Front-End Developer crafting web experiences.
        </p>
      </motion.div>

      {/* --- Sticky Note 1: Emoji --- */}
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.05}
        dragConstraints={constraintsRef}
        initial={{ opacity: 0, y: 20, rotate: -25 }}
        animate={{ opacity: 1, y: 0, rotate: -10 }}
        whileHover={{ rotate: -5 }}
        whileDrag={{ scale: 1.02, cursor: "grabbing" }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
        className="absolute top-[12%] left-[6%] md:top-[20%] md:left-[14%] w-20 h-20 md:w-36 md:h-36 bg-[#fdf2d5] shadow-[2px_3px_4px_rgba(0,0,0,0.15)] border-black/5 dark:border-white/10 flex items-center justify-center text-2xl md:text-5xl cursor-grab z-10"
      >
        👋
      </motion.div>

      {/* --- Sticky Note 2: Teks --- */}
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.05}
        dragConstraints={constraintsRef}
        initial={{ opacity: 0, y: 20, rotate: 25 }}
        animate={{ opacity: 1, y: 0, rotate: 6 }}
        whileHover={{ rotate: 12 }}
        whileDrag={{ scale: 1.02, cursor: "grabbing" }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.4 }}
        className="absolute font-playpen-sans bottom-[14%] right-[6%] md:bottom-[20%] md:right-[14%] w-20 h-20 md:w-36 md:h-36 bg-[#bcf5c5] shadow-[2px_3px_4px_rgba(0,0,0,0.15)] border-black/5 dark:border-white/10 flex items-center justify-center p-2 md:p-4 text-center text-xs sm:text-sm md:text-lg text-gray-700 cursor-grab z-10"
      >
        Available
        <br />
        for hiring
      </motion.div>
    </section>
  );
}
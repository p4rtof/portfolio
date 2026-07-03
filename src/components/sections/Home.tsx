"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const constraintsRef = useRef(null);

  return (
    <section
      ref={constraintsRef}
      // Titik dibikin lebih kecil (1px), warna lebih pudar (#eaeaea), dan jarak lebih renggang (32px)
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#fafafa] bg-[radial-gradient(#eaeaea_2px,transparent_1px)] [background-size:32px_32px]"
    >
      {/* --- Teks Utama --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center z-10 pointer-events-none px-6"
      >
        <h1 className="text-3xl font-playpen-sans md:text-5xl font-extrabold text-neutral-600 mb-4 tracking-tight">
          Hi, I&apos;m Aaron
        </h1>
        <p className="text-lg md:text-xl font-playpen-sans text-gray-500 italic">
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
        className="absolute top-[14%] left-[8%] md:top-[20%] md:left-[14%] w-24 h-24 md:w-36 md:h-36 bg-[#fdf2d5] shadow-[2px_3px_4px_rgba(0,0,0,0.15)] border-black/5 flex items-center justify-center text-3xl md:text-5xl cursor-grab z-10"
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
        className="absolute font-playpen-sans bottom-[16%] right-[8%] md:bottom-[20%] md:right-[14%] w-24 h-24 md:w-36 md:h-36 bg-[#bcf5c5] shadow-[2px_3px_4px_rgba(0,0,0,0.15)] border-black/5 flex items-center justify-center p-3 md:p-4 text-center text-sm md:text-lg text-gray-700 cursor-grab z-10"
      >
        Available
        <br />
        for hiring
      </motion.div>
    </section>
  );
}
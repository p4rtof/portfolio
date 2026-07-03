"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
// Import data dari file profile.ts
import { skills, socials, experiences } from "@/data/profile"; 
import SectionHeading from '@/components/ui/SectionHeading';

export default function About() {
  const dragAreaRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 w-full bg-[#fafafa] bg-[radial-gradient(#eaeaea_2px,transparent_1px)] [background-size:32px_32px]"
    >
      {/* --- Section Divider "About" --- */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-4 mb-20 max-w-5xl mx-auto"
      >
        
          <SectionHeading title="About Me" />
        
        
      </motion.div>

      <div
        ref={dragAreaRef}
        className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto"
      >
        {/* =============== KIRI: Foto + Sticky Notes =============== */}
        <div className="relative">
          <div className="relative mb-16 pl-4 flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-neutral-700 shadow-md bg-neutral-200 z-10"
            >
              <img
                src="/images/profile.jpeg"
                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            <div className="absolute top-36 md:top-32 left-32 md:left-48 flex items-end">
              <svg 
                width="70" 
                height="82" 
                viewBox="0 0 70 82" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-600 -rotate-12"
              >
                <path d="M65.133 77.292C55.556 76.999 45.909 77.536 36.428 76.356C26.946 75.176 17.355 72.019 11.286 65.729C3.177 57.326 3.074 44.9 7.858 34.828C12.641 24.756 21.539 16.543 30.48 8.771" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.5 8.708C15.498 8.986 26.958 9.172 36.918 4.5C31.654 9.184 28.014 15.659 26.747 22.59" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-playpen-sans text-2xl font-bold text-neutral-700 whitespace-nowrap ml-2 -mt-4">
                Yours Truly
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-sm relative mx-auto md:mx-0 mt-12 md:mt-0">
            <StickyNote dragAreaRef={dragAreaRef} color="#fdf2d5" rotate={-3}>
              S1 Ilmu Komputer,<br/>IPB University
            </StickyNote>
            <StickyNote dragAreaRef={dragAreaRef} color="#bcf5c5" rotate={4} className="mt-6">
              Front-End<br/>Focused
            </StickyNote>
            <StickyNote dragAreaRef={dragAreaRef} color="#fca5a5" rotate={2} className="row-span-2">
              Crafting immersive & interactive web experiences
            </StickyNote>
            <StickyNote dragAreaRef={dragAreaRef} color="#93c5fd" rotate={-4} className="flex-col gap-1">
              <MapPin size={24} className="mx-auto mb-1 text-neutral-700" />
              Bogor, ID
            </StickyNote>
            <StickyNote dragAreaRef={dragAreaRef} color="#c4b5fd" rotate={5}>
              Always learning & building
            </StickyNote>
          </div>
        </div>

        {/* =============== KANAN: Links, Skills, Experience =============== */}
        <div className="space-y-12">
          
          <div>
            <h3 className="font-fraunces text-2xl font-bold text-neutral-800 mb-6">
              Links
            </h3>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href }, i) => (
                <SocialIcon key={i} icon={Icon} href={href} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-fraunces text-2xl font-bold text-neutral-800 mb-6">
              Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="font-playpen-sans px-5 py-2 rounded-2xl border-2 border-neutral-700 text-neutral-700 font-bold text-base hover:bg-neutral-700 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-fraunces text-2xl font-bold text-neutral-800 mb-6">
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-playpen-sans text-xl font-bold text-neutral-800">
                      {exp.organization}
                    </h4>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mb-2">
                    <span className="font-playpen-sans font-bold text-neutral-600">
                      {exp.role}
                    </span>
                    <span className="hidden md:inline text-neutral-400">•</span>
                    <span className="font-playpen-sans text-neutral-500">
                      {exp.period}
                    </span>
                  </div>
                  <p className="font-playpen-sans text-neutral-600 text-base leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <a
              href="/resume.pdf"
              download
              className="group inline-flex flex-col items-start gap-1"
            >
              <div className="flex items-center gap-2 text-neutral-800 group-hover:text-neutral-900 transition-colors">
                <span className="font-playpen-sans text-2xl font-bold">
                  Download Resume
                </span>
                <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              
              <svg 
                width="140" 
                height="10" 
                viewBox="0 0 120 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-400 group-hover:text-neutral-700 transition-colors"
              >
                <path 
                  d="M2 10C35.5 -1.5 84.5 -1.5 118 10" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* --- Sticky Note & Social Icon Components --- */
function StickyNote({ children, color, rotate = 0, className = "", dragAreaRef }: any) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.05}
      dragConstraints={dragAreaRef}
      initial={{ opacity: 0, y: 10, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      whileHover={{ scale: 1.04, rotate: 0 }}
      whileDrag={{ scale: 1.06, rotate: 0, cursor: "grabbing", zIndex: 20 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      style={{ backgroundColor: color }}
      className={`font-playpen-sans w-full aspect-square p-4 flex items-center justify-center text-center text-lg font-bold text-neutral-800 shadow-[2px_4px_8px_rgba(0,0,0,0.12)] border-2 border-neutral-700/10 rounded-xl cursor-grab select-none ${className}`}
    >
      {children}
    </motion.div>
  );
}

function SocialIcon({ icon: Icon, href }: any) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="relative w-12 h-12 rounded-2xl border-2 border-neutral-700 flex items-center justify-center text-neutral-700 hover:bg-neutral-700 hover:text-white transition-colors overflow-hidden"
    >
      <motion.span animate={{ x: hovered ? -14 : 0, opacity: hovered ? 0 : 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
        <Icon size={18} />
      </motion.span>
      <motion.span initial={{ x: 14, opacity: 0 }} animate={{ x: hovered ? 0 : 14, opacity: hovered ? 1 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="absolute">
        <ArrowUpRight size={18} />
      </motion.span>
    </motion.a>
  );
}
'use client';

import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaDribbble, FaInstagram } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';


const socials = [
  { icon: FaTwitter, href: "https://twitter.com/yourhandle" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/yourhandle" },
  { icon: FaDribbble, href: "https://dribbble.com/yourhandle" },
  { icon: FaInstagram, href: "https://instagram.com/yourhandle" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 w-full bg-[#fafafa] bg-[radial-gradient(#eaeaea_2px,transparent_1px)] [background-size:32px_32px]"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        {/* --- Section Divider "Let's talk" --- */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-10 w-full"
        >
          <SectionHeading title="Let's Talk" />
        </motion.div>

        {/* --- Email & Socials --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-12"
        >
          <a 
            href="mailto:fadhla153@gmail.com"
            className="font-playpen-sans text-3xl md:text-4xl font-light text-neutral-700 mb-8 block hover:text-neutral-900 transition-colors"
          >
            aaron@gmail.com
          </a>
          
          <div className="flex justify-center gap-4">
            {socials.map(({ icon: Icon, href }, i) => (
              <SocialIcon key={i} icon={Icon} href={href} />
            ))}
          </div>
        </motion.div>

        {/* --- Contact Form --- */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-2xl flex flex-col gap-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full md:w-1/2 p-4 rounded-2xl border-2 border-neutral-200 font-playpen-sans placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 bg-transparent text-neutral-700 transition-colors"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full md:w-1/2 p-4 rounded-2xl border-2 border-neutral-200 font-playpen-sans placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 bg-transparent text-neutral-700 transition-colors"
              required
            />
          </div>
          
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full p-4 rounded-2xl border-2 border-neutral-200 font-playpen-sans placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 bg-transparent text-neutral-700 resize-y transition-colors"
            required
          />
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 mt-2 bg-[#474747] text-white rounded-2xl font-playpen-sans font-bold tracking-wide hover:bg-neutral-800 transition-colors"
          >
            Send
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
}

/* --- Icon sosmed dengan panah muncul pas hover (Disesuaikan border 16px) --- */
function SocialIcon({
  icon: Icon,
  href,
}: {
  icon: React.ElementType;
  href: string;
}) {
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
      // Perubahan di sini: rounded-2xl (16px) dan border-2 sesuai HTML Framer
      className="relative w-12 h-12 rounded-2xl border-2 border-neutral-500 flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:border-neutral-900 transition-colors overflow-hidden"
    >
      <motion.span
        animate={{
          x: hovered ? -14 : 0,
          opacity: hovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Icon size={18} />
      </motion.span>

      <motion.span
        initial={{ x: 14, opacity: 0 }}
        animate={{
          x: hovered ? 0 : 14,
          opacity: hovered ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute"
      >
        <ArrowUpRight size={18} />
      </motion.span>
    </motion.a>
  );
}
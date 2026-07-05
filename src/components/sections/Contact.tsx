'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { socials, emailHref } from '@/data/profile';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 sm:px-6 py-16 md:py-24 w-full bg-[#fafafa] dark:bg-neutral-900"
    >
      <Toaster position="top-center" />

      <div className="max-w-3xl mx-auto mb-6 flex flex-col items-center">

        {/* --- Section Divider "Let's talk" --- */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-4 w-full"
        >
          <SectionHeading title="Let's Talk" />
        </motion.div>

        {/* --- Email & Socials --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-8 md:mb-10 w-full px-2"
        >
          <a
            href={emailHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-playpen-sans text-xl sm:text-2xl md:text-4xl font-light text-neutral-700 dark:text-neutral-200 mb-6 md:mb-8 block break-all sm:break-normal hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            fadhla153@gmail.com
          </a>

          <div className="flex justify-center flex-wrap gap-3 md:gap-4">
            {socials.map((social, i) => (
              <SocialIcon key={i} icon={social.icon} href={social.href} />
            ))}
          </div>
        </motion.div>

        {/* --- Contact Form --- */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-2xl flex flex-col gap-3 md:gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);

            const toastId = toast.loading('Mengirim pesan...');

            try {
              const res = await fetch('https://formspree.io/f/mbdvqbqv', {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' },
              });

              if (res.ok) {
                toast.success('Pesan berhasil dikirim!', { id: toastId });
                form.reset();
              } else {
                toast.error('Gagal mengirim pesan, coba lagi.', { id: toastId });
              }
            } catch {
              toast.error('Gagal mengirim pesan, coba lagi.', { id: toastId });
            }
          }}
        >
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full md:w-1/2 p-3.5 md:p-4 rounded-2xl border-2 border-neutral-200 dark:border-neutral-700 font-playpen-sans text-sm md:text-base placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-300 bg-transparent text-neutral-700 dark:text-neutral-100 transition-colors"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full md:w-1/2 p-3.5 md:p-4 rounded-2xl border-2 border-neutral-200 dark:border-neutral-700 font-playpen-sans text-sm md:text-base placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-300 bg-transparent text-neutral-700 dark:text-neutral-100 transition-colors"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="w-full p-3.5 md:p-4 rounded-2xl border-2 border-neutral-200 dark:border-neutral-700 font-playpen-sans text-sm md:text-base placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-300 bg-transparent text-neutral-700 dark:text-neutral-100 resize-y transition-colors"
            required
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3.5 md:py-4 mt-1 md:mt-2 bg-[#474747] dark:bg-neutral-200 text-white dark:text-neutral-900 rounded-2xl font-playpen-sans font-bold tracking-wide hover:bg-neutral-800 dark:hover:bg-white transition-colors"
          >
            Send
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
}

/* --- Icon sosmed dengan panah muncul pas hover --- */
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
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className="relative w-11 h-11 md:w-12 md:h-12 rounded-2xl border-2 border-neutral-500 dark:border-neutral-400 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-900 dark:hover:border-white transition-colors overflow-hidden"
    >
      <motion.span
        animate={{
          x: hovered ? -14 : 0,
          opacity: hovered ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Icon size={18} />
      </motion.span>

      <motion.span
        initial={{ x: 14, opacity: 0 }}
        animate={{
          x: hovered ? 0 : 14,
          opacity: hovered ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="absolute"
      > 
        <ArrowUpRight size={18} />
      </motion.span>
    </motion.a>
  );
}
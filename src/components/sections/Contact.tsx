"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SectionHeading from "@/components/ui/SectionHeading";
import { emailHref, socials } from "@/data/profile";

export default function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <Toaster position="top-center" />

      <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow="Contact" title="Let's talk" className="mb-10" />

        <motion.a
          href={emailHref}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 block font-serif text-2xl text-ink transition-colors hover:text-accent md:text-3xl"
        >
          aaron@gmail.com
        </motion.a>

        <div className="mb-12 flex gap-4">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-6"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            setSending(true);
            const toastId = toast.loading("Sending message...");

            try {
              const res = await fetch("https://formspree.io/f/mbdvqbqv", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
              });

              if (res.ok) {
                toast.success("Message sent!", { id: toastId });
                form.reset();
              } else {
                toast.error("Something went wrong, try again.", { id: toastId });
              }
            } catch {
              toast.error("Something went wrong, try again.", { id: toastId });
            } finally {
              setSending(false);
            }
          }}
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="border-b border-border bg-transparent py-2 text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Email address"
              required
              className="border-b border-border bg-transparent py-2 text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="resize-none border-b border-border bg-transparent py-2 text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none"
          />

          <button
            type="submit"
            disabled={sending}
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            Send message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Mail, Send, Loader2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { emailHref, socials } from "@/data/profile";

export default function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="px-6 py-20 pb-10 md:pb-10 md:py-24">
      <Toaster position="top-center" />

      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Contact" title="Let's talk" className="mb-10" />

        {/* Email + socials row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <a
            href={emailHref}
            className="group inline-flex items-center gap-3 font-serif text-2xl text-ink transition-colors hover:text-accent md:text-3xl"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent transition-transform group-hover:scale-105">
              <Mail size={18} />
            </span>
            fadhla153@gmail.com
          </a>

          <div className="flex gap-3">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink-muted transition-all hover:-translate-y-0.5 hover:border-ink-faint hover:text-ink"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form card */}
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 sm:p-8"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const formData = new FormData(form);
            const payload = {
              name: formData.get("name"),
              email: formData.get("email"),
              message: formData.get("message"),
            };

            setSending(true);
            const toastId = toast.loading("Sending message...");

            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="rounded-lg border border-border bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-ink focus:outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Email address"
              required
              className="rounded-lg border border-border bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-ink focus:outline-none"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="resize-none rounded-lg border border-border bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-ink focus:outline-none"
          />

          <button
            type="submit"
            disabled={sending}
            className="mt-1 inline-flex w-fit items-center gap-2 rounded-lg bg-ink px-6 py-2.5 text-sm font-medium text-bg transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:translate-y-0 disabled:opacity-60"
          >
            {sending ? (
              <>
                <Loader2 size={15} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send message
                <Send size={15} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
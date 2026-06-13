"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitContactForm } from "@/lib/actions";
import { trackContactFormSubmit, trackSocialClick } from "@/lib/analytics";
import { ArrowUpRight, CheckCircle, AlertCircle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Scottsdaaale" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/scotty-peterson/" },
  { name: "Instagram", url: "https://www.instagram.com/scottsdaaale" },
  { name: "Linktree", url: "https://linktr.ee/scottsdaaale" },
];

const inputClass =
  "w-full px-4 py-3 border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-brand disabled:opacity-50 font-sans text-sm";

const labelClass =
  "font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground";

export function Contact() {
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("company", data.company || "");
        formData.append("subject", data.subject);
        formData.append("message", data.message);

        const result = await submitContactForm(formData);

        if (result.success) {
          trackContactFormSubmit();
          setSubmitMessage({
            type: "success",
            message: result.message,
          });
          reset();
        } else {
          setSubmitMessage({
            type: "error",
            message: result.message,
          });
        }

        setTimeout(() => setSubmitMessage(null), 5000);
      } catch {
        setSubmitMessage({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
        setTimeout(() => setSubmitMessage(null), 5000);
      }
    });
  };

  return (
    <section id="contact" className="px-6 md:px-12 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section folio */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between py-4 border-t border-border font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-12"
        >
          <span>
            <span className="text-brand mr-2">04</span>Contact
          </span>
          <span className="hidden sm:block">Actively job searching</span>
        </motion.div>

        {/* Feature headline */}
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] tracking-tight max-w-4xl mb-16"
        >
          Looking for lifecycle marketing, marketing ops, or GTM engineering.{" "}
          <em className="text-brand">Let&apos;s talk.</em>
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0">
          {/* Form */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 lg:pr-12"
          >
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-6">
              <span className="text-brand mr-2">Send</span>a message
            </div>

            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`mb-6 px-4 py-3 border flex items-center gap-3 text-sm ${
                  submitMessage.type === "success"
                    ? "border-brand/40 text-foreground"
                    : "border-red-500/40 text-red-600 dark:text-red-400"
                }`}
              >
                {submitMessage.type === "success" ? (
                  <CheckCircle className="h-4 w-4 shrink-0 text-brand" />
                ) : (
                  <AlertCircle className="h-4 w-4 shrink-0" />
                )}
                <span>{submitMessage.message}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className={labelClass}>
                    Name *
                  </label>
                  <input
                    id="name"
                    {...register("name")}
                    placeholder="Your name"
                    className={`${inputClass} ${errors.name ? "border-red-500" : ""}`}
                    disabled={isPending}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className={labelClass}>
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="you@company.com"
                    className={`${inputClass} ${errors.email ? "border-red-500" : ""}`}
                    disabled={isPending}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className={labelClass}>
                  Company
                </label>
                <input
                  id="company"
                  {...register("company")}
                  placeholder="Optional"
                  className={inputClass}
                  disabled={isPending}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className={labelClass}>
                  Subject *
                </label>
                <input
                  id="subject"
                  {...register("subject")}
                  placeholder="What's this about?"
                  className={`${inputClass} ${errors.subject ? "border-red-500" : ""}`}
                  disabled={isPending}
                />
                {errors.subject && (
                  <p className="text-xs text-red-500">{errors.subject.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className={labelClass}>
                  Message *
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  placeholder="Tell me about the role, the stack, or what you're trying to build..."
                  rows={5}
                  disabled={isPending}
                  className={`${inputClass} resize-y min-h-[140px] ${errors.message ? "border-red-500" : ""}`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] px-6 py-3 border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground transition-colors disabled:opacity-50"
              >
                {isPending ? "Sending..." : "Send message"}
                {!isPending && <ArrowUpRight className="h-3.5 w-3.5" />}
              </button>
            </form>
          </motion.div>

          {/* Index column */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 lg:border-l border-border"
          >
            <div className="lg:pl-8 space-y-10">
              <div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  <span className="text-brand mr-2">Direct</span>Email
                </div>
                <a
                  href="mailto:scottpetersonSE@gmail.com"
                  className="font-display text-xl tracking-tight hover:text-brand transition-colors"
                >
                  scottpetersonSE@gmail.com
                </a>
              </div>

              <div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  <span className="text-brand mr-2">Based</span>in
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  New Haven, Connecticut
                  <br />
                  Remote friendly
                </p>
              </div>

              <div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  <span className="text-brand mr-2">Elsewhere</span>
                </div>
                <ul className="space-y-2">
                  {socialLinks.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackSocialClick(social.name)}
                        className="group inline-flex items-center gap-2 text-sm hover:text-brand transition-colors"
                      >
                        {social.name}
                        <ArrowUpRight
                          className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-8">
                <p className="font-display text-lg leading-snug tracking-tight text-muted-foreground">
                  Always down to talk marketing systems, lifecycle programs,
                  and what&apos;s broken in your stack.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer strip */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="mt-20 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span>Scotty Peterson</span>
          <span>{new Date().getFullYear()}</span>
        </motion.div>
      </div>
    </section>
  );
}

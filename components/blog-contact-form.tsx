"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitContactForm } from "@/lib/actions";
import { trackContactFormSubmit } from "@/lib/analytics";
import { ArrowUpRight, CheckCircle, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const inputClass =
  "w-full px-4 py-3 border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-brand disabled:opacity-50 font-sans text-sm";

const labelClass =
  "font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground";

export function BlogContactForm() {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mt-20 pt-10 border-t border-border"
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-0">
        <div className="lg:col-span-4 lg:pr-12">
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-4">
            <span className="text-brand mr-2">Reach out</span>
          </div>
          <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight mb-4">
            Interested in <em className="text-brand">working together?</em>
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Drop me a message about the role, the stack, or what you&apos;re
            trying to build.
          </p>
        </div>

        <div className="lg:col-span-8 lg:border-l border-border lg:pl-8">
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
                <label htmlFor="blog-name" className={labelClass}>
                  Name *
                </label>
                <input
                  id="blog-name"
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
                <label htmlFor="blog-email" className={labelClass}>
                  Email *
                </label>
                <input
                  id="blog-email"
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
              <label htmlFor="blog-company" className={labelClass}>
                Company
              </label>
              <input
                id="blog-company"
                {...register("company")}
                placeholder="Optional"
                className={inputClass}
                disabled={isPending}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="blog-subject" className={labelClass}>
                Subject *
              </label>
              <input
                id="blog-subject"
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
              <label htmlFor="blog-message" className={labelClass}>
                Message *
              </label>
              <textarea
                id="blog-message"
                {...register("message")}
                placeholder="Tell me about your project or what you'd like to discuss..."
                rows={4}
                disabled={isPending}
                className={`${inputClass} resize-y min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
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
        </div>
      </div>
    </motion.div>
  );
}

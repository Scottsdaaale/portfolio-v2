"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { BlogContactForm } from "@/components/blog-contact-form";

interface BlogPostContentProps {
  title: string;
  description: string;
  publishedAt: string;
  readingTime: number;
  tags?: string[];
  children: ReactNode;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function BlogPostContent({
  title,
  description,
  publishedAt,
  readingTime,
  tags,
  children,
}: BlogPostContentProps) {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = `${window.location.origin}${pathname}`;
    const shareData = {
      title: title,
      text: description,
      url: url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      console.error("Could not share this post:", error);
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (clipboardError) {
        console.error("Clipboard access failed:", clipboardError);
      }
    }
  };

  return (
    <article className="pt-24 px-6 md:px-12 pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Folio strip */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between py-4 border-t border-border font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 hover:text-brand transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            <span>
              <span className="text-brand mr-2">Blog</span>Back to index
            </span>
          </Link>
          <span className="hidden sm:block">
            {formatDate(publishedAt)} · {readingTime} min read
          </span>
        </motion.div>

        {/* Article header */}
        <header className="grid lg:grid-cols-12 gap-8 lg:gap-0 mb-16">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 lg:pr-12"
          >
            <h1 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight text-balance mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-4 lg:border-l border-border lg:pl-8 flex flex-col justify-end gap-8"
          >
            <div className="space-y-4">
              <div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  <span className="text-brand mr-2">Published</span>
                </div>
                <div className="text-sm">{formatDate(publishedAt)}</div>
              </div>
              <div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  <span className="text-brand mr-2">Length</span>
                </div>
                <div className="text-sm">{readingTime} min read</div>
              </div>
              {tags && tags.length > 0 && (
                <div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    <span className="text-brand mr-2">Filed under</span>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground tracking-wide leading-relaxed">
                    {tags.join(" · ")}
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 self-start font-mono text-[0.65rem] uppercase tracking-[0.15em] px-5 py-2.5 border border-border hover:border-brand hover:text-brand transition-colors"
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3" />
                  Copied
                </>
              ) : (
                <>
                  Share
                  <ArrowUpRight className="h-3 w-3" />
                </>
              )}
            </button>
          </motion.div>
        </header>

        {/* Article content */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="border-t border-border pt-10"
        >
          <div className="blog-content max-w-3xl mx-auto">{children}</div>
        </motion.div>

        {/* Contact form */}
        <BlogContactForm />

        {/* Footer strip */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span>Written by Scotty Peterson</span>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 hover:text-brand transition-colors"
          >
            More posts
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </motion.footer>
      </div>
    </article>
  );
}

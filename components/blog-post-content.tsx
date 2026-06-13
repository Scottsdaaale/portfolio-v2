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
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 hover:text-brand transition-colors"
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

        {/* Title, lede, and body share one reading column */}
        <div className="max-w-3xl mx-auto">
          <header className="mb-12">
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.7 }}
              className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight text-balance"
            >
              {title}
            </motion.h1>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground"
            >
              <span>{formatDate(publishedAt)}</span>
              <span className="text-border">·</span>
              <span>{readingTime} min read</span>
              {tags && tags.length > 0 && (
                <>
                  <span className="text-border">·</span>
                  <span>{tags.join(" · ")}</span>
                </>
              )}
            </motion.div>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              {description}
            </motion.p>
          </header>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="border-t border-border pt-10"
          >
            <div className="blog-content">{children}</div>
          </motion.div>
        </div>

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

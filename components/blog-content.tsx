"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { motion } from "framer-motion";

interface BlogPostData {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags?: string[];
  readingTime: number;
}

interface BlogContentProps {
  posts: BlogPostData[];
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function BlogContent({ posts }: BlogContentProps) {
  return (
    <div className="pt-24 px-6 md:px-12 pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Section folio */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between py-4 border-t border-border font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-12"
        >
          <span>
            <span className="text-brand mr-2">Blog</span>Writing
          </span>
          <span className="hidden sm:block">
            {posts.length} {posts.length === 1 ? "entry" : "entries"}
          </span>
        </motion.div>

        {/* Feature headline */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 mb-16">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 lg:pr-12"
          >
            <h1 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] tracking-tight mb-6">
              Notes from <em className="text-brand">the build.</em>
            </h1>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 lg:border-l border-border lg:pl-8 flex items-end"
          >
            <p className="text-muted-foreground leading-relaxed">
              Marketing systems, email infrastructure, and development. Plus
              hiking, music, and whatever else I&apos;m obsessing over at the
              moment.
            </p>
          </motion.div>
        </div>

        {posts.length === 0 ? (
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <div className="border-t border-border py-16">
              <p className="font-display text-2xl tracking-tight mb-2">
                Coming soon.
              </p>
              <p className="text-muted-foreground">
                Posts are in the works. Check back shortly.
              </p>
            </div>
          </motion.div>
        ) : (
          <>
            {/* Index label */}
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                <span className="text-brand mr-2">Index</span>All posts
              </div>
            </motion.div>

            {/* Post ledger */}
            <div className="border-t border-border">
              {posts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
                  viewport={{ once: true }}
                  className="border-b border-border"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid lg:grid-cols-12 gap-3 lg:gap-0 py-8"
                  >
                    <div className="lg:col-span-3 lg:pr-8 flex lg:flex-col gap-3 lg:gap-1 items-baseline lg:items-start">
                      <span className="font-mono text-xs text-brand">
                        {String(posts.length - i).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                        {post.readingTime} min read
                      </span>
                    </div>

                    <div className="lg:col-span-9 lg:border-l border-border lg:pl-8">
                      <h2 className="font-display text-2xl md:text-[1.7rem] leading-tight tracking-tight mb-3 group-hover:text-brand transition-colors flex items-start gap-2">
                        <span className="text-balance">{post.title}</span>
                        <ArrowUpRight className="h-4 w-4 mt-2 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand" />
                      </h2>
                      <p className="text-muted-foreground leading-relaxed max-w-2xl mb-4">
                        {post.description}
                      </p>
                      {post.tags && post.tags.length > 0 && (
                        <p className="font-mono text-xs text-muted-foreground tracking-wide">
                          {post.tags.slice(0, 5).join(" · ")}
                        </p>
                      )}
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

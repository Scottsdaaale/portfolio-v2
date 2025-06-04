"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowLeft, Share2 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface BlogPostContentProps {
  title: string;
  description: string;
  publishedAt: string;
  readingTime: number;
  tags?: string[];
  children: ReactNode;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

export function BlogPostContent({ 
  title, 
  description, 
  publishedAt, 
  readingTime, 
  tags, 
  children 
}: BlogPostContentProps) {
  const pathname = usePathname();

  const handleShare = async () => {
    const url = `${window.location.origin}${pathname}`;
    const shareData = {
      title: title,
      text: description,
      url: url,
    };

    try {
      // Use Web Share API if available (mobile/modern browsers)
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy URL to clipboard
        await navigator.clipboard.writeText(url);
        // Simple feedback without external library
        console.log("Link copied to clipboard!");
        // You could also show a temporary message here
      }
    } catch (error) {
      console.error("Could not share this post:", error);
      // Fallback to just copying URL
      try {
        await navigator.clipboard.writeText(url);
        console.log("Link copied to clipboard as fallback!");
      } catch (clipboardError) {
        console.error("Clipboard access failed:", clipboardError);
      }
    }
  };

  return (
    <motion.article 
      className="pt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Navigation */}
        <motion.div className="mb-8" variants={itemVariants}>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/blog" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Link>
          </Button>
        </motion.div>

        {/* Article Header */}
        <motion.header className="space-y-6 mb-12" variants={itemVariants}>
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl font-bold tracking-tight leading-tight"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          </div>

          <motion.div 
            className="flex items-center justify-between"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CalendarDays className="h-4 w-4" />
                <span>{formatDate(publishedAt)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{readingTime} min read</span>
              </div>
            </div>
            
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </motion.div>

          {tags && tags.length > 0 && (
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={itemVariants}
            >
              {tags.map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.5 + (index * 0.1),
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  <Badge variant="secondary">
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.header>

        {/* Article Content */}
        <motion.div 
          className="blog-content"
          variants={contentVariants}
        >
          {children}
        </motion.div>

        {/* Article Footer */}
        <motion.footer 
          className="mt-12 pt-8 border-t"
          variants={itemVariants}
        >
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Written by <strong>Scott Peterson</strong>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/blog">More Articles</Link>
            </Button>
          </div>
        </motion.footer>
      </div>
    </motion.article>
  );
} 
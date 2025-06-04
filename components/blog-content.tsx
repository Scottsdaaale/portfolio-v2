"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
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

export function BlogContent({ posts }: BlogContentProps) {
  return (
    <motion.div 
      className="pt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div className="space-y-4 mb-12" variants={itemVariants}>
          <motion.h1 
            className="text-4xl font-bold tracking-tight"
            variants={itemVariants}
          >
            Blog
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl"
            variants={itemVariants}
          >
            My thoughts on whatever catches my interest—development and tech, sure, but also camping, hiking, plants, music, guitar, video games, and whatever else I&apos;m obsessing over at the moment. Basically, this is where I write about whatever the hell I want.
          </motion.p>
        </motion.div>

        {posts.length === 0 ? (
          <motion.div 
            className="text-center py-12"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold mb-4">Coming Soon!</h2>
            <p className="text-muted-foreground">
              I&apos;m working on some posts about dev stuff, hiking adventures, guitar progress, and whatever else is on my mind. Check back soon!
            </p>
          </motion.div>
        ) : (
          <motion.div 
            className="grid gap-6"
            variants={containerVariants}
          >
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                variants={cardVariants}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                custom={index}
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <CalendarDays className="h-4 w-4" />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readingTime} min read</span>
                          </div>
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        <div className="flex items-center justify-between">
                          {post.title}
                          <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {post.description}
                      </CardDescription>
                    </CardHeader>
                    {post.tags && post.tags.length > 0 && (
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
} 
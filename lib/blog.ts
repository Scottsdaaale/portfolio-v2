import { ComponentType } from 'react';
import WelcomeToBlog from '@/content/blog/welcome-to-my-blog';
import AIImpostorSyndrome from '@/content/blog/ai-imposter-syndrome';
import WhyRLCSRocks from '@/content/blog/why-rlcs-rocks';
import NewHavenLoveLetter from '@/content/blog/new-haven-love-letter';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
  readingTime: number;
  content: ComponentType;
  draft?: boolean;
}

// This will store our blog posts - you can later move this to a CMS or markdown files
const blogPosts: BlogPost[] = [
  {
    slug: 'new-haven-love-letter',
    title: 'Why New Haven is OP',
    description: 'New Haven is way better than most people think. From Westville\'s walkability to West Rock hiking trails, plus a surprisingly great food scene that nobody talks about.',
    publishedAt: '2025-06-04',
    tags: ['New Haven', 'Connecticut', 'City Life', 'Hiking', 'Food', 'Personal', 'Local'],
    readingTime: 7,
    content: NewHavenLoveLetter,
    draft: false,
  },
  {
    slug: 'why-rlcs-rocks',
    title: 'Why RLCS is the Best Esport You\'re Probably Not Watching (But Should Be)',
    description: 'A passionate but accessible introduction to Rocket League Championship Series. It\'s soccer with rocket cars, and it\'s genuinely incredible to watch—even if you\'re not a gamer.',
    publishedAt: '2025-06-03',
    tags: ['RLCS', 'Esports', 'Rocket League', 'Gaming', 'Sports'],
    readingTime: 5,
    content: WhyRLCSRocks,
    draft: false,
  },
  {
    slug: 'ai-imposter-syndrome',
    title: 'Imposter Syndrome in the Age of AI: I Use Cursor and I Don\'t Feel Bad About It',
    description: 'Honest thoughts on using AI for coding, productivity, and whether it makes you a "real" developer. Spoiler: results matter more than tools.',
    publishedAt: '2025-06-03',
    tags: ['AI', 'Development', 'Imposter Syndrome', 'Productivity', 'Hot Takes'],
    readingTime: 6,
    content: AIImpostorSyndrome,
    draft: false,
  },
  {
    slug: 'welcome-to-my-blog',
    title: 'Welcome to My Corner of the Internet!',
    description: 'An honest introduction to what this blog is really about—development, hiking, music, plants, video games, and whatever else I\'m obsessing over. Fair warning: this isn\'t your typical professional dev blog.',
    publishedAt: '2025-06-03',
    tags: ['Welcome', 'Personal', 'Life', 'Hobbies', 'Development'],
    readingTime: 3,
    content: WelcomeToBlog,
    draft: false,
  },
];

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Filter out draft posts in production
  const posts = process.env.NODE_ENV === 'production' 
    ? blogPosts.filter(post => !post.draft)
    : blogPosts;
  
  // Sort by published date (newest first)
  return posts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts.filter(post => post.tags?.includes(tag));
}

export function getAllTags(): string[] {
  const allTags = blogPosts.flatMap(post => post.tags || []);
  return Array.from(new Set(allTags)).sort();
}

// Helper function to create blog posts from React components
export function createBlogPost(
  slug: string,
  title: string,
  description: string,
  publishedAt: string,
  content: ComponentType,
  options: {
    updatedAt?: string;
    tags?: string[];
    readingTime?: number;
    draft?: boolean;
  } = {}
): BlogPost {
  return {
    slug,
    title,
    description,
    publishedAt,
    content,
    readingTime: options.readingTime || 5,
    ...options,
  };
} 
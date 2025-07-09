import { ComponentType } from 'react';
import WelcomeToBlog from '@/content/blog/welcome-to-my-blog';
import AIImpostorSyndrome from '@/content/blog/ai-imposter-syndrome';
import WhyRLCSRocks from '@/content/blog/why-rlcs-rocks';
import NewHavenLoveLetter from '@/content/blog/new-haven-love-letter';
import EmailCodingBestPractices from '@/content/blog/email-coding-best-practices-for-client-compatibility';
import MyExperienceProgrammingWithADHD from '@/content/blog/my-experience-programming-with-adhd';
import HealthcareComplianceBlogPost from '@/content/blog/heathcare-compliance';
import GoogleDarkPatterns2FAEcosystemTrap from '@/content/blog/google-dark-patterns-2fa-ecosystem-trap';

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
    slug: 'google-dark-patterns-2fa-ecosystem-trap',
    title: 'The Google Ecosystem Trap: How 2FA Becomes a Gateway to Data Harvesting',
    description:
      'How Google weaponizes two-factor authentication requirements to force app installations, trigger automatic photo backups, and push users toward paid storage subscriptions. A deep dive into the dark patterns that turn security into surveillance.',
    publishedAt: '2025-06-27',
    tags: [
      'Google',
      'Dark Patterns',
      'Privacy',
      'Security',
      '2FA',
      'UX Design',
      'Tech Ethics',
      'Data Collection',
    ],
    readingTime: 12,
    content: GoogleDarkPatterns2FAEcosystemTrap,
    draft: false,
  },
  {
    slug: 'building-healthcare-compliance-software',
    title: 'Building Healthcare Compliance Software: Lessons from the Trenches',
    description:
      "How I learned to navigate HIPAA complexities while building enterprise healthcare platforms, and why the market is exploding beyond anyone's expectations.",
    publishedAt: '2025-06-07',
    tags: [
      'Healthcare',
      'HIPAA',
      'Compliance',
      'Enterprise',
      'AWS',
      'Security',
      'Full-Stack',
      'Business',
    ],
    readingTime: 8,
    content: HealthcareComplianceBlogPost,
    draft: false,
  },
  {
    slug: 'my-experience-programming-with-adhd',
    title: 'My Experience Programming with ADHD',
    description:
      'An honest look at how ADHD affects my programming journey, the challenges, the unexpected advantages, and the strategies that actually work. For fellow neurodivergent developers who might be struggling.',
    publishedAt: '2025-06-05',
    tags: [
      'ADHD',
      'Neurodivergence',
      'Personal',
      'Mental Health',
      'Programming',
      'Productivity',
      'Development',
    ],
    readingTime: 9,
    content: MyExperienceProgrammingWithADHD,
    draft: false,
  },
  {
    slug: 'email-coding-best-practices-for-client-compatibility',
    title: 'Email Coding Best Practices for Client Compatibility',
    description:
      'A comprehensive guide to building email templates that work across all major email clients. Learn the tricks, workarounds, and testing strategies that actually work in production.',
    publishedAt: '2025-05-28',
    tags: [
      'Email Development',
      'HTML',
      'CSS',
      'Web Development',
      'Best Practices',
      'Outlook',
      'Technical',
    ],
    readingTime: 8,
    content: EmailCodingBestPractices,
    draft: false,
  },
  {
    slug: 'why-new-haven-is-op',
    title: 'Why New Haven is OP',
    description:
      "New Haven is way better than most people think. From Westville's walkability to West Rock hiking trails, plus a surprisingly great food scene that nobody talks about.",
    publishedAt: '2025-04-15',
    tags: [
      'New Haven',
      'Connecticut',
      'City Life',
      'Hiking',
      'Food',
      'Personal',
      'Local',
    ],
    readingTime: 7,
    content: NewHavenLoveLetter,
    draft: false,
  },
  {
    slug: 'why-rlcs-rocks',
    title:
      "Why RLCS is the Best Esport You're Probably Not Watching (But Should Be)",
    description:
      "A passionate but accessible introduction to Rocket League Championship Series. It's soccer with rocket cars, and it's genuinely incredible to watch, even if you're not a gamer.",
    publishedAt: '2025-03-10',
    tags: ['RLCS', 'Esports', 'Rocket League', 'Gaming', 'Sports'],
    readingTime: 5,
    content: WhyRLCSRocks,
    draft: false,
  },
  {
    slug: 'ai-imposter-syndrome',
    title:
      "Imposter Syndrome in the Age of AI: I Use Cursor and I Don't Feel Bad About It",
    description:
      'Honest thoughts on using AI for coding, productivity, and whether it makes you a "real" developer. Spoiler: results matter more than tools.',
    publishedAt: '2025-02-18',
    tags: [
      'AI',
      'Development',
      'Imposter Syndrome',
      'Productivity',
      'Hot Takes',
    ],
    readingTime: 6,
    content: AIImpostorSyndrome,
    draft: false,
  },
  {
    slug: 'welcome-to-my-blog',
    title: 'Welcome to My Corner of the Internet!',
    description:
      "An honest introduction to what this blog is really about: development, hiking, music, plants, video games, and whatever else I'm obsessing over. Fair warning: this isn't your typical professional dev blog.",
    publishedAt: '2025-01-08',
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
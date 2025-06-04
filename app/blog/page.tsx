import { Metadata } from "next";
import { getBlogPosts } from "@/lib/blog";
import { Navigation } from "@/components/navigation";
import { BlogContent } from "@/components/blog-content";

export const metadata: Metadata = {
  title: "Blog - Scotty Peterson | Developer, Hiker, Musician & More",
  description: "My thoughts on development, tech, camping, hiking, plants, music, guitar, video games, and whatever else catches my interest. Personal stories and insights from a full-stack developer who has way too many hobbies.",
  keywords: [
    "Personal Blog",
    "Web Development", 
    "Hiking",
    "Camping",
    "Nature",
    "Music",
    "Guitar",
    "Video Games",
    "Plants",
    "Technology",
    "Programming",
    "Personal Stories",
    "Developer Life"
  ],
  openGraph: {
    title: "Blog - Scotty Peterson | Developer, Hiker, Musician & More",
    description: "My thoughts on development, tech, nature, music, and whatever else I'm obsessing over at the moment.",
    type: "website",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Scotty Peterson | Developer, Hiker, Musician & More",
    description: "My thoughts on development, tech, nature, music, and whatever else catches my interest.",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  // Transform posts to remove the content function for client component
  const postsData = posts.map(post => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    publishedAt: post.publishedAt,
    tags: post.tags,
    readingTime: post.readingTime,
  }));

  return (
    <div className="min-h-screen">
      <Navigation />
      <BlogContent posts={postsData} />
    </div>
  );
} 
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { Navigation } from "@/components/navigation";
import { BlogPostContent } from "@/components/blog-post-content";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} - Scotty Peterson`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: "Scotty Peterson", url: "https://www.scottypeterson.net" }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Scotty Peterson"],
      tags: post.tags,
      url: `/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: "Scotty Peterson",
                    url: "https://www.scottypeterson.net",
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
                url: `https://www.scottypeterson.net/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
              "@id": `https://www.scottypeterson.net/blog/${post.slug}`,
    },
    publisher: {
      "@type": "Person",
      name: "Scotty Peterson",
    },
    keywords: post.tags?.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        <Navigation />
        <BlogPostContent 
          title={post.title}
          description={post.description}
          publishedAt={post.publishedAt}
          readingTime={post.readingTime}
          tags={post.tags}
        >
          <post.content />
        </BlogPostContent>
      </div>
    </>
  );
} 
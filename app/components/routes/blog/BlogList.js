import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlogCard from './BlogCard';
import { client } from '@/sanity/lib/client';


const fetchPosts = async () => {
  const query = `*[_type == "post"] | order(publishedAt desc){
    title,
    slug,
    publishedAt, 
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    author->{
      name
    }
  }`;

  try {
    const posts = await client.fetch(query, { cache: 'no-store' });
    return posts;
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return [];
  }
};

async function BlogList() {
  const blogData = await fetchPosts();
  return (
    <div className='p-3 grid grid-cols-1 gap-3'>
      {blogData.map((post) => (
        <div key={post.slug.current}>
          <BlogCard
            title={post.title}
            author={post.author.name}
            slug={post.slug.current}
            date={new Date(post.publishedAt).toLocaleDateString()}
            image={post.mainImage.asset.url} 
            alt={post.mainImage.alt}
          />
        </div>
      ))}
    </div>
  );
}

export default BlogList;
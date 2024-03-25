'use client'

import { client } from '@/sanity/lib/client';
import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import { motion } from 'framer-motion';

function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
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
        const data = await client.fetch(query);
        setPosts(data);
      } catch (error) {
        console.error('Sanity fetch error:', error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='p-3 grid grid-cols-1 gap-3'>
      {posts.map((post, index) => (
        <motion.div
          key={post.slug.current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
        >
          <BlogCard
            title={post.title || ''}
            author={(post.author && post.author.name) || ''}
            slug={(post.slug && post.slug.current) || ''}
            date={(post.publishedAt && new Date(post.publishedAt).toLocaleDateString()) || ''}
            image={(post.mainImage && post.mainImage.asset && post.mainImage.asset.url) || ''}
            alt={(post.mainImage && post.mainImage.alt) || ''}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default BlogList;

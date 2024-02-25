import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blogData from './blogData';
import BlogCard from './BlogCard';
import { toKebabCase } from '../../common/toKebabCase';

function BlogList() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {blogData.map((post) => (
        <div key={post.id}>
          <BlogCard id={post.id} image={post.image} title={post.title} />
        </div>
      ))}
    </div>
  );
}

export default BlogList;
import React from 'react';
import blogData from './blogData';
import { toKebabCase } from '../../common/toKebabCase';
import Link from 'next/link';
import Image from 'next/image';

function BlogPost({ params }) {
  const kebabCaseId = toKebabCase(params.slug);
  const post = blogData.find((post) => toKebabCase(post.id) === kebabCaseId);

  if (!post) {
    return <div>Post not found!</div>;
  }

  const renderHTMLContent = () => {
    return { __html: post.content };
  };

  console.log(post);

  return (
    <div>
      <div>
        <Image src={post.image} alt={post.title} />
      </div>
      <div>
        <h1>{post.title}</h1>
      </div>
      <div dangerouslySetInnerHTML={renderHTMLContent()} />
    </div>
  );
}

export default BlogPost;

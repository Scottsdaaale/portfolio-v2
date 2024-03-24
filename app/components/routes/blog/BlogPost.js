'use client'

import React from 'react';
import { client } from '@/sanity/lib/client';
import { projectId, dataset } from '@/sanity/env';
import Image from 'next/image';
import Link from 'next/link';
import './blog.css';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '../../../../sanity/lib/image';
import { urlForGif } from '../../../../sanity/lib/image';

async function getBlogPostData(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0]{ title, mainImage { asset->{ id, url }, alt }, body }`;
  const params = { slug };
  try {
    const post = await client.fetch(query, params);
    return post;
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return null;
  }
}

function BlogPost({ params }) {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      const postData = await getBlogPostData(params.slug, {
        cache: 'no-store',
      });
      setPost(postData);
    };
    fetchPost();
  }, [params.slug]);

  if (!post) {
    return <div>Let me get that for you...</div>;
  }

  // Error checking and fallbacks for mainImage and title
  const mainImageUrl = post.mainImage && post.mainImage.asset && post.mainImage.asset.url;
  const mainImageAlt = post.mainImage && post.mainImage.alt || '';
  const title = post.title || '';

  const myPortableTextComponents = {
    types: {
      image: ({ value }) => {
        if (!value.asset) {
          return null;
        }

        return (
          <Image
            src={urlForGif(value.asset)}
            alt={value.alt || ' '}
            width={300}
            height={300}
            className='mb-4'
          />
        );
      },
      code: ({ value }) => (
        <pre className='codeBlock'>
          <code>{value.code}</code>
        </pre>
      ),
    },
    marks: {
      Color: ({ value, children }) => (
        <span className='textRed'>{children}</span>
      ),
      highlight: ({ value, children }) => (
        <span className='highlighted'>{children}</span>
      ),
      link: ({ value, children }) => (
        <a
          href={value.href}
          target='_blank'
          rel='noopener noreferrer'
          className='link'
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <div className=''>
      <div className='mb-5'>
        {mainImageUrl && (
          <Image
            src={mainImageUrl}
            alt={mainImageAlt}
            width={100}
            height={100}
          />
        )}
      </div>
      <div className='mb-10'>
        <h1>{title}</h1>
      </div>
      <div className='mb-16'>
        <PortableText value={post.body} components={myPortableTextComponents} />
      </div>
    </div>
  );
}

export default BlogPost;
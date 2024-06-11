
'use client';

import React from 'react';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '../../../../sanity/lib/image';
import { urlForGif } from '../../../../sanity/lib/image';
import { motion } from 'framer-motion';
import LoadingAnimation from '../../common/LoadingAnimation';
import getBlogPost from '../../common/getBlogPost';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './blog.css';


// async function getBlogPostData(slug) {
//   const query = `*[_type == "post" && slug.current == $slug][0]{ title, mainImage { asset->{ id, url }, alt }, body }`;
//   const params = { slug };
//   try {
//     const post = await client.fetch(query, params);
//     return post;
//   } catch (error) {
//     console.error('Sanity fetch error:', error);
//     return null;
//   }
// }

function BlogPost({ params }) {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      const postData = await getBlogPost(params.slug, {
        cache: 'no-store',
      });
      setPost(postData);
    };
    fetchPost();
  }, [params.slug]);

  if (!post) {
    return (
      <div>
        <LoadingAnimation />
      </div>
    );
  }

  const hasCodeBlock = post.body.some(
    (block) =>
      block._type === 'block' &&
      block.children.some(
        (child) => child.marks && child.marks.includes('code')
      )
  );

  console.log(hasCodeBlock)
  console.log(post)

  // Error checking and fallbacks for mainImage and title
  const mainImageUrl =
    post.mainImage && post.mainImage.asset && post.mainImage.asset.url;
  const mainImageAlt = (post.mainImage && post.mainImage.alt) || '';
  const title = post.title || '';

  const myPortableTextComponents = {
    // types: {},
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
      code: ({ children }) => {
        const language = 'html'; // Specify the language of the code block

        const renderCodeContent = (content) => {
          return content
            .map((child) => {
              if (typeof child === 'string') {
                return child;
              } else if (React.isValidElement(child)) {
                if (child.type.name === 'DefaultHardBreak') {
                  return '\n';
                } else if (child.props.children) {
                  return renderCodeContent(
                    React.Children.toArray(child.props.children)
                  );
                } else {
                  return '';
                }
              } else {
                return '';
              }
            })
            .join('');
        };

        const codeString = renderCodeContent(React.Children.toArray(children));

        return (
    <div className='flex flex-col bg-[#313131]'>
      <div className='flex justify-end m-2'>
        <button
          className='text-xs text-[#ececec]'
          onClick={() => copyToClipboard(codeString)}
        >
          Copy
        </button>
      </div>
      <div className='bg-[#070707] p-4 overflow-x-auto'>
        <SyntaxHighlighter
          language={language}
          style={tomorrow}
          customStyle={{
            overflowX: 'auto',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
},
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
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.01, duration: 0.5 }}
      className={`px-2 xs:px-0 mx-auto ${
        hasCodeBlock ? 'max-w-[650px]' : 'max-w-[500px]'
      }`}
    >
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
    </motion.div>
  );
}

export default BlogPost;

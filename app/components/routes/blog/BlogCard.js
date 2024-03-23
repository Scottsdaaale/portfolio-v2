import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function BlogCard({ title, author, image, slug, date, alt }) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className='flex flex-row items-center gap-3 p-4 rounded bg-[#2b2b2b] hover:bg-[#414141] transition duration-300 ease-in-out transform hover:scale-105'>
        <Image
          src={image}
          alt={alt}
          className='h-[60px] w-[60px]'
          width={60}
          height={60}
        />
        <div>
          <h3 className='mt-2 overflow-hidden overflow-ellipsis line-clamp-3 text-pretty'>
            {title}
          </h3>
          <p className='text-sm text-gray-400'>
            {author} | {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
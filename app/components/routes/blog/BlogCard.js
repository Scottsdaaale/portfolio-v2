import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { toKebabCase } from '../../common/toKebabCase';

function BlogCard({ title, id, image }) {
  return (
    <Link href={`/blog/${toKebabCase(id)}`}>
      <div className='flex flex-col items-center justify-center w-[200px] h-48 p-5 m-1 bg-[#2b2b2b] rounded'>
        <div className='h-20 flex items-center justify-center'>
          <Image src={image} alt={title} className='w-14 h-14' />
        </div>
        <div className='text-center flex flex-col items-center justify-center'>
          <div className=''>{title}</div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;

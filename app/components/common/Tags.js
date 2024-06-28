import React from 'react';

const Tags = ({ tags }) => {
  return (
    <div className='flex flex-wrap gap-2 mt-2'>
      {tags &&
        tags.map((tag, index) => (
          <span
            key={index}
            className='bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs'
          >
            {tag}
          </span>
        ))}
    </div>
  );
};

export default Tags;

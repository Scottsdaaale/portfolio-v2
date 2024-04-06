import React from 'react';
import BlogPost from '../../../components/routes/blog/BlogPost';
import metadata from '@/app/components/common/metadata';

export async function generateMetadata({ params }) {
  return metadata(params);
}

function page({ params }) {
  return (
    <div>
      <BlogPost params={params} />
    </div>
  );
}

export default page;
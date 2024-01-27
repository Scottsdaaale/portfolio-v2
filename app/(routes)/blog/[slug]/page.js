import React from 'react';
import BlogPost from '../../../components/routes/blog/BlogPost';

function page({ params }) {
  return (
    <div>
      <BlogPost params={params}/>
    </div>
  );
}

export default page;
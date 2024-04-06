import { client } from '../../../sanity/lib/client';

async function getBlogPost(slug) {
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

export default getBlogPost;
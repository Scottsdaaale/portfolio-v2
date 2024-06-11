import { client } from '../sanity/lib/client';

export default async function sitemap() {
  return [
    {
      url: 'https://www.scottypeterson.net',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://www.scottypeterson.net/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://www.scottypeterson.net/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...(await getBlogPostsSitemap()),
  ];
}

async function getBlogPostsSitemap() {
  const query = `*[_type == "post"]{ "slug": slug.current, publishedAt }`;

  try {
    const posts = await client.fetch(query);

    return posts.map((post) => ({
      url: `https://www.scottypeterson.net/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'weekly',
      priority: 0.6,
    }));
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return [];
  }
}

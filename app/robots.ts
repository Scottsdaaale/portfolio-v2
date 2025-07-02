import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.scottypeterson.net'; // Updated with correct domain

  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/_next/static/', // Allow static assets (fonts, CSS, images)
        '/_next/static/media/*.woff2',  // Explicitly allow font files
        '/_next/static/media/*.woff',   // Explicitly allow font files
        '/_next/static/media/*.ttf',    // Explicitly allow font files
        '/_next/image/',                // Allow Next.js image optimization
      ],
      disallow: [
        '/api/',
        '/_next/cache/',
        '/_next/server/',
        '/_next/webpack-hmr',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
} 
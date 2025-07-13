import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-label',
      '@radix-ui/react-slot'
    ],
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
  },

  // 301 REDIRECTS - For content that moved or has replacements
  async redirects() {
    return [
      // === DOMAIN REDIRECTS (Fix redirect issues) ===
      // Force www and https - handle all variations
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'scottypeterson.net', // non-www
          },
        ],
        destination: 'https://www.scottypeterson.net/:path*',
        permanent: true,
      },
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'www.scottypeterson.net',
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.scottypeterson.net/:path*',
        permanent: true,
      },

      // === CONTACT PAGE REDIRECTS ===
      // Redirect to contact section on main page
      {
        source: '/contact',
        destination: '/#contact',
        permanent: true,
      },

      // === BLOG POST REDIRECTS ===
      // For removed blog posts - redirect to existing relevant content
      {
        source: '/blog/elevate-your-workspace-building-the-ultimate-desk-setup',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/supercharge-your-coding-in-vscode-with-these-handy-extensions',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/posts/supercharge-your-coding-in-vscode-with-these-handy-extensions',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/mastering-visual-studio-code-essential-hotkeys-for-productivity',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/navigating-the-web-development-landscape-amidst-ai-a-beginners-perspective',
        destination: '/blog',
        permanent: true,
      },

      // === LEGACY BLOG STRUCTURE ===
      // Handle old /posts/ structure - redirect to blog
      // Note: /posts/woolietv and /posts/how-to-make-a-star-rating-with-react 
      // are handled as 410 Gone in middleware.ts (runs before redirects)
      {
        source: '/posts/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },
    ]
  },

  // Note: 410 Gone responses are now handled in middleware.ts

  // === ADDITIONAL CONFIG ===
  // Optimize font file caching
  async headers() {
    return [
      {
        source: '/_next/static/media/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
};

export default nextConfig;

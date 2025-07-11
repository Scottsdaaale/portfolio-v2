import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "@/components/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Scotty Peterson - Full Stack Developer | React, Next.js, Django Expert",
  description: "Full-stack developer specializing in scalable business solutions. Currently leading an enterprise healthcare compliance platform and managing high-traffic websites. Expert in React, Next.js, Django, AWS, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "React Developer", 
    "Next.js Developer",
    "Django Developer",
    "AWS Expert",
    "Connecticut Developer",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Python",
    "Healthcare Technology",
    "Business Solutions",
    "Freelance Developer",
    "Software Engineer"
  ],
  authors: [{ name: "Scotty Peterson", url: "https://www.scottypeterson.net" }],
  creator: "Scotty Peterson",
  publisher: "Scotty Peterson",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.scottypeterson.net'), // Updated with correct domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Scotty Peterson - Full Stack Developer | React, Next.js, Django Expert",
    description: "Full-stack developer specializing in scalable business solutions. Currently leading an enterprise healthcare compliance platform and managing high-traffic websites.",
    url: 'https://www.scottypeterson.net',
    siteName: 'Scotty Peterson Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Scotty Peterson - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Scotty Peterson - Full Stack Developer",
    description: "Full-stack developer building scalable business solutions with React, Next.js, Django, and AWS.",
    images: ['/og-image.png'],
    creator: '@scottpeterson_dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you set up Google Search Console
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.scottypeterson.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Scotty Peterson",
              jobTitle: "Full Stack Developer",
              url: "https://www.scottypeterson.net",
              email: "scottpetersonSE@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Connecticut",
                addressCountry: "United States"
              },
              sameAs: [
                "https://github.com/Scottsdaaale",
                "https://www.linkedin.com/in/scotty-peterson/",
                "https://www.instagram.com/scottsdaaale"
              ],
              knowsAbout: [
                "React",
                "Next.js", 
                "Django",
                "AWS",
                "JavaScript",
                "TypeScript",
                "Python",
                "Full Stack Development",
                "Web Development",
                "Healthcare Technology"
              ],
              description: "Full-stack developer specializing in scalable business solutions, currently leading an enterprise healthcare compliance platform."
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

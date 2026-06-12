import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "@/components/analytics";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Scotty Peterson - Marketing Technologist | Lifecycle & GTM Engineer",
  description: "Marketing technologist who builds the systems marketing teams run on: lifecycle automation, API and webhook orchestration, email programs, and internal tooling. 187 campaigns to 2M+ recipients last year, built and run by one person.",
  keywords: [
    "Marketing Technologist",
    "Lifecycle Marketing Engineer", 
    "GTM Engineer",
    "Marketing Operations",
    "Marketing Automation",
    "Email Marketing",
    "Lifecycle Marketing",
    "API Integration",
    "Webhook Orchestration",
    "AI-Assisted Development",
    "Brevo",
    "MarTech",
    "Connecticut",
    "Internal Tooling"
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
    title: "Scotty Peterson - Marketing Technologist | Lifecycle & GTM Engineer",
    description: "Marketing technologist who builds the systems marketing teams run on: lifecycle automation, API and webhook orchestration, email programs, and internal tooling.",
    url: 'https://www.scottypeterson.net',
    siteName: 'Scotty Peterson Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Scotty Peterson - Marketing Technologist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Scotty Peterson - Marketing Technologist",
    description: "Marketing technologist building lifecycle automation, integrations, and GTM tooling with Python, Next.js, and AWS.",
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
              jobTitle: "Marketing Technologist",
              url: "https://www.scottypeterson.net",
              email: "scottpetersonSE@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "New Haven",
                addressRegion: "Connecticut",
                addressCountry: "United States"
              },
              sameAs: [
                "https://github.com/Scottsdaaale",
                "https://www.linkedin.com/in/scotty-peterson/",
                "https://www.instagram.com/scottsdaaale"
              ],
              knowsAbout: [
                "Lifecycle Marketing",
                "Marketing Automation", 
                "Marketing Operations",
                "Email Marketing",
                "API Integration",
                "Webhooks",
                "Python",
                "JavaScript",
                "Next.js",
                "AWS",
                "AI-Assisted Development"
              ],
              description: "Marketing technologist who builds the systems marketing teams run on: lifecycle automation, API and webhook orchestration, email programs, and internal tooling."
            })
          }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
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

"use client";

import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main role="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      
      {/* Additional Schema Markup for Portfolio/Professional Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Scotty Peterson - Full Stack Development Services",
            description: "Professional full-stack web development services specializing in React, Next.js, Django, and AWS solutions for businesses.",
            provider: {
              "@type": "Person",
              name: "Scotty Peterson",
              jobTitle: "Full Stack Developer",
              email: "scottpetersonSE@gmail.com",
              url: "https://www.scottypeterson.net"
            },
            serviceType: [
              "Full Stack Web Development",
              "React Development", 
              "Next.js Development",
              "Django Development",
              "AWS Cloud Solutions",
              "Web Application Development",
              "API Development",
              "Database Design"
            ],
            areaServed: {
              "@type": "Country",
              name: "United States"
            },
            availableLanguage: "English"
          })
        }}
      />
    </div>
  );
}

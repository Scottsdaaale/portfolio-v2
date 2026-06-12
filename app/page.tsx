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
            name: "Scotty Peterson - Marketing Systems & GTM Engineering",
            description: "Marketing technology services: lifecycle automation programs, API and webhook integrations, email marketing systems, and internal GTM tooling.",
            provider: {
              "@type": "Person",
              name: "Scotty Peterson",
              jobTitle: "Marketing Technologist",
              email: "scottpetersonSE@gmail.com",
              url: "https://www.scottypeterson.net"
            },
            serviceType: [
              "Lifecycle Marketing Automation",
              "Marketing Operations", 
              "API & Webhook Integration",
              "Email Marketing Systems",
              "Internal Tooling Development",
              "GTM Engineering",
              "AWS Cloud Solutions",
              "AI-Assisted Development"
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

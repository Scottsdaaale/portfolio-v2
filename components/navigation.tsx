"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggleInstant } from "./theme-toggle-instant";
import { trackDownloadResume } from "@/lib/analytics";
import Link from "next/link";

export function Navigation() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleResumeClick = () => {
    trackDownloadResume();
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-bold text-xl hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
        >
          Scott Peterson
        </button>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggleInstant />
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleResumeClick}
            asChild
          >
            <Link href="/resume" target="_blank">
              Resume
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
} 
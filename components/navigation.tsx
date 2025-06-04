"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggleInstant } from "./theme-toggle-instant";
import { trackDownloadResume } from "@/lib/analytics";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  homeLink?: string;
  isLink?: boolean;
}

export function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navItems: NavItem[] = [
    { label: "About", href: "#about", homeLink: "/#about" },
    { label: "Experience", href: "#experience", homeLink: "/#experience" },
    { label: "Skills", href: "#skills", homeLink: "/#skills" },

    { label: "Contact", href: "#contact", homeLink: "/#contact" },
    { label: "Blog", href: "/blog", isLink: true },
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
        <Link
          href="/"
          className="font-bold text-xl hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded flex items-center space-x-3 cursor-pointer"
        >
          <Image
            src="/Me.gif"
            alt="Scotty Peterson"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span>Scotty Peterson</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.isLink ? (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1 cursor-pointer"
              >
                {item.label}
              </Link>
            ) : isHomePage ? (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1 cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.href}
                href={item.homeLink || "/#"}
                className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1 cursor-pointer"
              >
                {item.label}
              </Link>
            )
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
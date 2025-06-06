"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggleInstant } from "./theme-toggle-instant";
import { trackDownloadResume } from "@/lib/analytics";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  homeLink?: string;
  isLink?: boolean;
}

export function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        
        {/* Desktop Navigation */}
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
        
        {/* Desktop Controls */}
        <div className="hidden md:flex items-center space-x-4">
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

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggleInstant />
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            
            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg z-50">
                <div className="py-1">
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/resume"
                    target="_blank"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleResumeClick();
                    }}
                  >
                    Resume
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 
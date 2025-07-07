"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Instagram, Link } from "lucide-react";
import { trackSocialClick } from "@/lib/analytics";

export function Hero() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Scottsdaaale",
      icon: Github,
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/scotty-peterson/",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/scottsdaaale",
      icon: Instagram,
    },
    {
      name: "Linktree",
      url: "https://linktr.ee/scottsdaaale",
      icon: Link,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 pt-28">
      <div className="max-w-4xl mx-auto text-center flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4">
            Available for new projects
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent px-1">
            I build things that actually solve problems
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-normal">
            Full-stack developer delivering <span className="text-foreground font-semibold">enterprise healthcare compliance platforms</span> and 
            managing websites that generate <span className="text-foreground font-semibold">thousands of monthly visitors</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={() => scrollToSection('experience')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <Button 
                key={social.name}
                variant="ghost" 
                size="icon"
                asChild
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick(social.name)}
                  aria-label={`Visit ${social.name} profile`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 mb-4"
      >
        <button 
          onClick={() => scrollToSection('about')}
          className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full p-2"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6 animate-bounce text-muted-foreground" />
        </button>
      </motion.div>
    </section>
  );
} 
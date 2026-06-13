"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { trackSocialClick } from "@/lib/analytics";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Scottsdaaale" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/scotty-peterson/" },
  { name: "Instagram", url: "https://www.instagram.com/scottsdaaale" },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

function IndexLabel({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-2">
      <span className="text-brand mr-2">{num}</span>
      {children}
    </div>
  );
}

export function Hero() {
  const [showPixelAuthor, setShowPixelAuthor] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col px-6 md:px-12 pt-24 pb-8">
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
        {/* Masthead */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between py-4 border-b border-border font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span>Lifecycle Strategy · Marketing Engineering</span>
          <span className="hidden sm:block">New Haven, CT</span>
        </motion.div>

        {/* Cover grid */}
        <div className="flex-1 grid lg:grid-cols-12 gap-10 lg:gap-0 items-center py-12 lg:py-0">
          {/* Primary story */}
          <div className="lg:col-span-8 lg:pr-12">
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[clamp(3rem,7.5vw,6.5rem)] leading-[0.95] tracking-tight mb-8"
            >
              I build the systems
              <br />
              marketing teams{" "}
              <em className="text-brand">run on.</em>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-8"
            >
              Most companies split lifecycle strategy and the systems behind
              it across two people. I do both: design the programs, build the
              integrations, and run the operations as a team of one.
            </motion.p>

            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.3 }}>
              <button
                onClick={() => scrollToSection("experience")}
                className="group inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-brand transition-colors"
              >
                View my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </motion.div>
          </div>

          {/* Index column */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-4 lg:border-l border-border"
          >
            <div className="py-4 lg:pl-8 border-b border-border lg:border-t-0 border-t">
              <IndexLabel num="00">The author</IndexLabel>
              <div className="flex items-center gap-4">
                <div
                  className="relative border border-border shrink-0 size-28 overflow-hidden cursor-pointer group"
                  aria-label="Scotty Peterson"
                  onMouseEnter={() => setShowPixelAuthor(true)}
                  onMouseLeave={() => setShowPixelAuthor(false)}
                >
                  <Image
                    src="/scotty-peterson-headshot.jpg"
                    alt=""
                    fill
                    className={`object-cover transition-opacity duration-300 ${showPixelAuthor ? "opacity-0" : "opacity-100"}`}
                    sizes="112px"
                  />
                  <Image
                    src="/Me.gif"
                    alt=""
                    fill
                    unoptimized
                    className={`object-cover transition-opacity duration-300 [image-rendering:pixelated] ${showPixelAuthor ? "opacity-100" : "opacity-0"}`}
                    sizes="112px"
                  />
                </div>
                <p className="relative font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground leading-relaxed">
                  <span
                    className={`block transition-opacity duration-300 ${showPixelAuthor ? "opacity-0" : "opacity-100"}`}
                  >
                    Fig. 00
                    <br />
                    Scotty Peterson
                  </span>
                  <span
                    className={`absolute left-0 top-0 transition-opacity duration-300 ${showPixelAuthor ? "opacity-100" : "opacity-0"}`}
                  >
                    Fig. 00a
                    <br />
                    Scotty, deprecated
                  </span>
                </p>
              </div>
            </div>

            <div className="py-4 lg:pl-8 border-b border-border">
              <IndexLabel num="01">Status</IndexLabel>
              <div className="flex items-center gap-2.5 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                Actively looking for my next role
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-2 text-sm underline underline-offset-4 decoration-border hover:decoration-brand hover:text-brand transition-colors"
              >
                Get in touch
              </button>
            </div>

            <div className="py-4 lg:pl-8 border-b border-border">
              <IndexLabel num="02">Focus</IndexLabel>
              <p className="text-sm leading-relaxed">
                Program design, segmentation, and nurture strategy on one
                side. APIs, webhooks, and internal tooling on the other.
              </p>
            </div>

            <div className="py-4 lg:pl-8 border-b border-border">
              <IndexLabel num="03">Latest writing</IndexLabel>
              <Link
                href="/blog/lifecycle-marketing-program-from-scratch"
                className="group text-sm leading-snug inline-block hover:text-brand transition-colors"
              >
                How I Built a Lifecycle Marketing Program from Scratch
                <ArrowUpRight className="inline h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="py-4 lg:pl-8">
              <IndexLabel num="04">Elsewhere</IndexLabel>
              <div className="flex items-center gap-5 text-sm">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackSocialClick(social.name)}
                    className="inline-flex items-center gap-0.5 hover:text-brand transition-colors"
                  >
                    {social.name}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

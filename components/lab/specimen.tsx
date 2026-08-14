"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

interface SpecimenProps {
  num: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export function Specimen({ num, title, description, children }: SpecimenProps) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-12 gap-6 lg:gap-0 py-12 border-t border-border"
    >
      <div className="lg:col-span-4 lg:pr-12">
        <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-3">
          <span className="text-brand mr-2">Fig. {num}</span>
        </div>
        <h3 className="font-display text-2xl md:text-[1.75rem] tracking-tight leading-tight mb-3">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      <div className="lg:col-span-8 lg:border-l border-border lg:pl-8">
        {children}
      </div>
    </motion.div>
  );
}

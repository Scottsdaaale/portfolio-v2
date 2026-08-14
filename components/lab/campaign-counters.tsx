"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Stat {
  target: number;
  suffix: string;
  format?: (n: number) => string;
  label: string;
}

const stats: Stat[] = [
  { target: 187, suffix: "", label: "campaigns shipped last year" },
  { target: 2, suffix: "M+", label: "email sends" },
  { target: 1900, suffix: "+", format: (n) => n.toLocaleString("en-US"), label: "webinar registrations" },
  { target: 1200, suffix: "+", format: (n) => n.toLocaleString("en-US"), label: "leads recovered by trigger flows" },
];

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1100;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(stat.target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, stat.target]);

  return (
    <div ref={ref} className="py-6 px-4 first:pl-0">
      <div className="font-display text-4xl md:text-5xl tracking-tight tabular-nums">
        {stat.format ? stat.format(value) : value}
        <span className="text-brand">{stat.suffix}</span>
      </div>
      <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mt-2">
        {stat.label}
      </div>
    </div>
  );
}

export function CampaignCounters() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border border border-border">
      {stats.map((stat) => (
        <Counter key={stat.label} stat={stat} />
      ))}
    </div>
  );
}

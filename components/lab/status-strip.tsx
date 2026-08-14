"use client";

import { useEffect, useState } from "react";
import { BlinkCursor } from "@/components/logo";

export function StatusStrip() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s >= 59 ? 0 : s + 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "webhooks", value: "4 connected" },
    { label: "queue", value: "0 pending" },
    { label: "last sync", value: `${seconds}s ago` },
  ];

  return (
    <div className="border border-border px-4 py-3.5 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[0.72rem]">
      {items.map((item) => (
        <span key={item.label} className="text-muted-foreground">
          <span className="uppercase tracking-[0.15em]">{item.label}</span>
          <span className="mx-2 text-border">·</span>
          <span className="text-foreground tabular-nums">{item.value}</span>
        </span>
      ))}
      <BlinkCursor size={14} className="translate-y-[1px]" />
    </div>
  );
}

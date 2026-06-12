"use client";

import { useEffect, useState } from "react";
import { palettes, paletteCss } from "@/lib/palettes";
import { LogoLockup } from "@/components/logo";

export default function PalettePreviewPage() {
  const [activeId, setActiveId] = useState("vermillion");
  const active = palettes.find((p) => p.id === activeId) ?? palettes[0];

  useEffect(() => {
    const style = document.createElement("style");
    style.setAttribute("data-palette-preview", "");
    style.textContent = paletteCss(active);
    document.head.appendChild(style);
    return () => style.remove();
  }, [active]);

  return (
    <main className="min-h-screen px-6 md:px-12 py-24 max-w-5xl mx-auto">
      <h1 className="font-display text-4xl mb-2">Color palettes</h1>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Three tokens per mode drive everything: paper (background), ink (text),
        and accent (cursor, italics, links). Toggle dark mode to compare both.
        To apply sitewide, change the theme import in{" "}
        <code className="font-mono text-sm">app/globals.css</code>.
      </p>

      <div className="flex flex-wrap gap-2 mb-12">
        {palettes.map((palette) => (
          <button
            key={palette.id}
            type="button"
            onClick={() => setActiveId(palette.id)}
            className={`px-4 py-2 text-sm font-mono border transition-colors ${
              activeId === palette.id
                ? "border-brand bg-brand/10 text-foreground"
                : "border-border text-muted-foreground hover:border-foreground/30"
            }`}
          >
            {palette.name}
          </button>
        ))}
      </div>

      <div className="border border-border p-8 md:p-12 mb-8">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-6">
          {active.name} · {active.description}
        </p>

        <div className="mb-8">
          <LogoLockup cursorSize={22} className="font-display text-2xl tracking-tight" />
        </div>

        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-tight mb-4">
          I build the systems
          <br />
          marketing teams <em className="text-brand">run on.</em>
        </h2>

        <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
          Lifecycle programs, integrations, and internal tools, designed, built,
          and run end to end by one person.
        </p>

        <div className="flex gap-4">
          <span className="bg-foreground text-background px-6 py-3 text-sm font-medium">
            View my work
          </span>
          <span className="text-sm underline underline-offset-4 decoration-border">
            Get in touch
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 font-mono text-xs uppercase tracking-wider">
        <div className="border border-border p-4">
          <div
            className="h-12 w-full mb-3 border border-border/50"
            style={{ background: active.light.paper }}
          />
          <span className="text-muted-foreground">Paper</span>
          <p className="text-[0.65rem] normal-case tracking-normal mt-1 text-muted-foreground/80">
            {active.light.paper}
          </p>
        </div>
        <div className="border border-border p-4">
          <div
            className="h-12 w-full mb-3 border border-border/50"
            style={{ background: active.light.ink }}
          />
          <span className="text-muted-foreground">Ink</span>
          <p className="text-[0.65rem] normal-case tracking-normal mt-1 text-muted-foreground/80">
            {active.light.ink}
          </p>
        </div>
        <div className="border border-border p-4">
          <div
            className="h-12 w-full mb-3 border border-border/50"
            style={{ background: active.light.accent }}
          />
          <span className="text-muted-foreground">Accent</span>
          <p className="text-[0.65rem] normal-case tracking-normal mt-1 text-muted-foreground/80">
            {active.light.accent}
          </p>
        </div>
      </div>

      <p className="mt-8 font-mono text-xs text-muted-foreground">
        Active theme file:{" "}
        <code>app/themes/{active.id}.css</code>
      </p>
    </main>
  );
}

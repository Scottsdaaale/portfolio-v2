"use client";

const stages = [
  { label: "Link clicked", sub: "no booking yet" },
  { label: "24h wait", sub: "one chance to finish" },
  { label: "Recovery sent", sub: "automated, no manual step" },
  { label: "Booked or opted out", sub: "sequence ends either way" },
];

export function RecoveryTimeline() {
  return (
    <div>
      <div className="relative h-1 bg-border mb-6">
        <div className="absolute inset-y-0 left-0 bg-brand lab-recovery-fill" />
        <div className="absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-brand lab-recovery-dot" />
        {[0, 33.33, 66.66, 100].map((pos) => (
          <span
            key={pos}
            className="absolute top-1/2 -translate-y-1/2 h-2.5 w-px bg-background"
            style={{ left: `${pos}%` }}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stages.map((stage) => (
          <div key={stage.label}>
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-foreground mb-1">
              {stage.label}
            </div>
            <div className="text-xs text-muted-foreground leading-relaxed">
              {stage.sub}
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mt-8">
        1,200+ contacts have moved through this exact loop. No one on the
        team has to notice a lead stalled, let alone follow up by hand.
      </p>
    </div>
  );
}

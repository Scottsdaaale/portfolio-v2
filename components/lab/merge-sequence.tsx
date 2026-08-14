"use client";

function Dot({ tone }: { tone: "muted" | "brand" }) {
  return (
    <span
      className={`h-2 w-2 rounded-full shrink-0 ${
        tone === "brand" ? "bg-brand" : "bg-muted-foreground/50"
      }`}
    />
  );
}

function Line({ tone }: { tone: "muted" | "brand" }) {
  return (
    <span
      className={`h-px flex-1 ${
        tone === "brand" ? "bg-brand/40" : "bg-muted-foreground/25"
      }`}
    />
  );
}

function Track({
  steps,
  tone,
  leadSpace = 0,
}: {
  steps: number;
  tone: "muted" | "brand";
  leadSpace?: number;
}) {
  return (
    <div className="flex items-center h-4">
      {leadSpace > 0 && <span style={{ flex: `${leadSpace} 0 0%` }} />}
      {Array.from({ length: steps }).map((_, i) => (
        <div key={i} className="flex items-center flex-1 last:flex-none">
          <Dot tone={tone} />
          {i < steps - 1 && <Line tone={tone} />}
        </div>
      ))}
    </div>
  );
}

export function MergeSequence() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            Without merge logic
          </span>
          <span className="font-mono text-[0.65rem] text-destructive/70">
            duplicate welcome email
          </span>
        </div>
        <Track steps={2} tone="muted" />
        <Track steps={5} tone="muted" leadSpace={2} />
        <p className="text-sm text-muted-foreground leading-relaxed mt-4">
          Customer buys again on day 12, mid-sequence. A system without merge
          logic treats it as a brand new contact and restarts the whole
          sequence from step one.
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-brand">
            Merge, not retrigger
          </span>
          <span className="font-mono text-[0.65rem] text-brand">
            one continuous sequence
          </span>
        </div>
        <Track steps={7} tone="brand" />
        <p className="text-sm text-muted-foreground leading-relaxed mt-4">
          The second purchase merges into the sequence already running
          instead of starting a new one. No duplicate emails, no restart.
        </p>
      </div>
    </div>
  );
}

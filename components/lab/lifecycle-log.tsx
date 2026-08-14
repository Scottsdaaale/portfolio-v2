"use client";

type LogStatus = "default" | "pending" | "done";

interface LogEntry {
  t: string;
  ev: string;
  meta: string;
  status: LogStatus;
}

const entries: LogEntry[] = [
  { t: "09:14:02", ev: "lead.captured", meta: "source=landing_form", status: "default" },
  { t: "09:14:02", ev: "attribution.tagged", meta: "campaign=q3_demo", status: "default" },
  { t: "09:14:03", ev: "sequence.queued", meta: "track=nurture", status: "pending" },
  { t: "09:41:18", ev: "email.sent", meta: "step=2/5", status: "default" },
  { t: "10:03:55", ev: "link.clicked", meta: "target=booking", status: "default" },
  { t: "10:03:55", ev: "booking.incomplete", meta: "-> recovery.triggered", status: "pending" },
  { t: "10:03:56", ev: "sequence.queued", meta: "track=recovery", status: "pending" },
  { t: "11:22:07", ev: "booking.confirmed", meta: "status=synced", status: "done" },
  { t: "11:22:07", ev: "webhook.fired", meta: "target=crm", status: "done" },
  { t: "13:05:44", ev: "purchase.completed", meta: "plan=annual", status: "default" },
  { t: "13:05:44", ev: "sequence.merged", meta: "mode=no_retrigger", status: "done" },
  { t: "15:47:12", ev: "webinar.registered", meta: "dedup=passed", status: "default" },
  { t: "15:47:12", ev: "calendar.invite", meta: "status=sent", status: "done" },
  { t: "16:30:01", ev: "opt_out.received", meta: "sequence=recovery", status: "default" },
  { t: "16:30:01", ev: "contact.suppressed", meta: "status=synced", status: "done" },
];

function LogList() {
  return (
    <ul className="py-3">
      {entries.map((e, i) => (
        <li
          key={i}
          className="flex items-baseline gap-3 px-4 py-1.5 font-mono text-[0.72rem] whitespace-nowrap"
        >
          <span className="text-muted-foreground">{e.t}</span>
          <span
            className={
              e.status === "default"
                ? "text-foreground min-w-[13ch]"
                : "text-foreground font-medium min-w-[13ch]"
            }
          >
            {e.ev}
          </span>
          <span className="text-muted-foreground flex-1 overflow-hidden text-ellipsis hidden sm:inline">
            {e.meta}
          </span>
          <span className="text-brand w-3 text-right">
            {e.status === "pending" ? "●" : e.status === "done" ? "✓" : ""}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function LifecycleLog() {
  return (
    <div className="border border-border">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
        <span>lifecycle.log</span>
        <span className="flex items-center gap-1.5 text-brand normal-case tracking-normal">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-60 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
          </span>
          live
        </span>
      </div>
      <div className="relative h-64 overflow-hidden lab-log-mask">
        <div className="lab-log-scroll">
          <LogList />
          <LogList />
        </div>
      </div>
      <p className="px-4 py-3 border-t border-border font-mono text-[0.65rem] text-muted-foreground text-center">
        One thread of the automation, replayed. Every event type here is real.
      </p>
    </div>
  );
}

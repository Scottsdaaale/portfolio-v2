"use client";

import { motion } from "framer-motion";
import { Specimen } from "@/components/lab/specimen";
import { LifecycleLog } from "@/components/lab/lifecycle-log";
import { CampaignCounters } from "@/components/lab/campaign-counters";
import { MergeSequence } from "@/components/lab/merge-sequence";
import { RecoveryTimeline } from "@/components/lab/recovery-timeline";
import { StatusStrip } from "@/components/lab/status-strip";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function LabContent() {
  return (
    <div className="pt-24 px-6 md:px-12 pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Section folio */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between py-4 border-t border-border font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-12"
        >
          <span>
            <span className="text-brand mr-2">Lab</span>Working notes
          </span>
          <span className="hidden sm:block">5 specimens, running live</span>
        </motion.div>

        {/* Feature headline */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 mb-16">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 lg:pr-12"
          >
            <h1 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] tracking-tight">
              Small pieces of the machine,{" "}
              <em className="text-brand">still running.</em>
            </h1>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 lg:border-l border-border lg:pl-8 flex items-end"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              A working lifecycle program mostly runs where nobody looks:
              webhooks firing, sequences queuing, contacts moving between
              systems. These are a few pieces pulled out and left running so
              you can actually see them work.
            </p>
          </motion.div>
        </div>

        {/* Specimens */}
        <div>
          <Specimen
            num="01"
            title="The event trace"
            description="A single thread of the automation, replayed continuously. Every line is a real event type the program emits."
          >
            <LifecycleLog />
          </Specimen>

          <Specimen
            num="02"
            title="What the program moved last year"
            description="Counted up, not typed in: these tick from zero the first time they scroll into view."
          >
            <CampaignCounters />
          </Specimen>

          <Specimen
            num="03"
            title="Merge, not retrigger"
            description="The specific piece of logic that keeps a returning customer from getting the same welcome sequence twice."
          >
            <MergeSequence />
          </Specimen>

          <Specimen
            num="04"
            title="The recovery loop"
            description="What happens automatically when a lead clicks to book and doesn't finish. No one has to notice or follow up by hand."
          >
            <RecoveryTimeline />
          </Specimen>

          <Specimen
            num="05"
            title="Still typing"
            description="The same blinking cursor from the logo, doing what it does in a status line instead of a name."
          >
            <StatusStrip />
          </Specimen>
        </div>
      </div>
    </div>
  );
}

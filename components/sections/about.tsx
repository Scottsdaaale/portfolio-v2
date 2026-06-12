"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const capabilities = [
  {
    num: "01",
    title: "End-to-end ownership",
    description:
      "I decide what to build based on where the funnel is breaking, then build it. Strategy, program design, and the code behind it come from the same person.",
  },
  {
    num: "02",
    title: "Systems building",
    description:
      "Webhook and API orchestration across Brevo, Pipeline CRM, Stripe, and Calendly. Behavioral email sequences, webinar infrastructure, internal dashboards.",
  },
  {
    num: "03",
    title: "AI-assisted pace",
    description:
      "Claude and Cursor are my development environment. Context documents and reusable integration patterns take most ideas to production in under two weeks.",
  },
];

const deliverables = [
  {
    num: "01",
    label: "Find",
    text: "What's manual, slow, or falling through the cracks in the funnel",
  },
  {
    num: "02",
    label: "Build",
    text: "The integration, automation, or internal tool that removes it",
  },
  {
    num: "03",
    label: "Run",
    text: "Day-to-day operations, monitoring, and fixes. Same person.",
  },
];

export function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section folio */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between py-4 border-t border-border font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-12"
        >
          <span>
            <span className="text-brand mr-2">01</span>About
          </span>
          <span className="hidden sm:block">Strategy + code, same person</span>
        </motion.div>

        {/* Feature headline */}
        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] tracking-tight max-w-4xl mb-16"
        >
          Most teams hire a marketer <em className="text-brand">or</em> an
          engineer.
          <br />
          I design the programs and build what runs them.
        </motion.h2>

        {/* Body grid: narrative left, capabilities right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 mb-20">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 lg:pr-12"
          >
            <p className="text-lg md:text-xl leading-relaxed mb-6 first-letter:font-display first-letter:text-[3.4em] first-letter:float-left first-letter:leading-[0.8] first-letter:mr-3 first-letter:mt-1">
              I started in retail and ecommerce, then made the leap through a
              coding bootcamp in 2022. My first developer role was building a
              company's marketing website from the ground up, including a
              custom CMS so the content team never needed an engineer.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-muted-foreground">
              Then the company decided to go harder on marketing, but the stack
              was empty: no lead capture, no automations, no lifecycle
              infrastructure. As the only technical person, I built the entire
              program from scratch: webhook and API orchestration across four
              platforms, behavioral nurture sequences, and a webinar system
              that handled 1,900+ registrations across 7 events.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              That's where I landed on what I actually am: a marketing
              technologist who ships. I cover what usually takes a marketer
              plus an engineer, and AI-assisted development is how I keep that
              pace as one person.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 lg:border-l border-border"
          >
            {capabilities.map((item, i) => (
              <div
                key={item.num}
                className={`py-6 lg:pl-8 ${
                  i > 0 ? "border-t border-border" : "lg:pt-0"
                }`}
              >
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  <span className="text-brand mr-2">{item.num}</span>
                  {item.title}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="border-t border-border pt-10 grid lg:grid-cols-12 gap-10 lg:gap-0 lg:items-start"
        >
          <div className="lg:col-span-7 lg:pr-12">
            <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight">
              You get one person who can own the technical marketing stack end
              to end: find what's manual and slow, ship the system that removes
              it, and keep it running{" "}
              <em className="text-brand">without a ticket queue.</em>
            </p>
          </div>

          <div className="lg:col-span-5 lg:border-l border-border">
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-4 lg:pl-8">
              <span className="text-brand">How</span> it works
            </div>
            {deliverables.map((item, i) => (
              <div
                key={item.num}
                className={`py-5 lg:pl-8 ${
                  i > 0 ? "border-t border-border" : ""
                }`}
              >
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                  <span className="text-brand mr-2">{item.num}</span>
                  {item.label}
                </div>
                <p className="text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

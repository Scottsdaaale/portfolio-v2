"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const skillCategories = [
  {
    num: "01",
    title: "Lifecycle & automation",
    description: "Programs, segmentation, and the operations behind them",
    skills: [
      "Lifecycle Marketing",
      "Marketing Automation",
      "Marketing Operations",
      "Email Marketing",
      "Customer Segmentation",
      "Behavioral Triggers",
      "Attribution Tracking",
    ],
  },
  {
    num: "02",
    title: "Martech platforms",
    description: "The tools I connect into automated systems",
    skills: [
      "Brevo",
      "HubSpot",
      "Pipeline CRM",
      "Stripe",
      "Calendly",
      "Zapier",
      "Freshdesk",
      "Mercury",
      "MJML",
    ],
  },
  {
    num: "03",
    title: "APIs & integration",
    description: "Connecting platforms so data flows without manual work",
    skills: [
      "REST APIs",
      "Webhooks",
      "Webhook Orchestration",
      "API Integration",
      "Cross-System Attribution",
      "Data Sync",
    ],
  },
  {
    num: "04",
    title: "Languages & frameworks",
    description: "What I build with when the stack needs custom work",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "React",
      "Flask",
      "Tailwind CSS",
    ],
  },
  {
    num: "05",
    title: "Cloud & data",
    description: "Infrastructure for automation and email delivery",
    skills: [
      "AWS Lambda",
      "AWS S3",
      "AWS SES",
      "AWS Amplify",
      "PostgreSQL",
      "SQL",
    ],
  },
  {
    num: "06",
    title: "AI-assisted development",
    description: "How I ship at the pace of a small engineering team",
    skills: [
      "Claude",
      "Cursor",
      "Prompt Engineering",
      "Context Documents",
      "Integration Templates",
      "Rapid Prototyping",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section folio */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between py-4 border-t border-border font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-12"
        >
          <span>
            <span className="text-brand mr-2">03</span>Skills
          </span>
          <span className="hidden sm:block">Platforms, code, and how I connect them</span>
        </motion.div>

        {/* Feature headline */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 mb-16">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 lg:pr-12 font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] tracking-tight"
          >
            The stack behind the programs,{" "}
            <em className="text-brand">integrations,</em>
            <br />
            and internal tools.
          </motion.h2>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 lg:border-l border-border lg:pl-8 flex items-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Martech platforms on one side. APIs, webhooks, and custom
              tooling on the other. Most of my work lives in the wiring
              between them.
            </p>
          </motion.div>
        </div>

        {/* Skill ledger */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-2">
            <span className="text-brand mr-2">Index</span>Capabilities
          </div>
        </motion.div>

        <div className="border-t border-border mb-20">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-12 gap-4 lg:gap-0 py-8 border-b border-border"
            >
              <div className="lg:col-span-4 lg:pr-8 flex items-start gap-4">
                <span className="font-mono text-xs text-brand pt-1">
                  {category.num}
                </span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl tracking-tight leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8 lg:border-l border-border lg:pl-8 flex items-center">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[0.65rem] uppercase tracking-[0.1em] px-3 py-1.5 border border-border text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing strip */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="border-t border-border pt-10 grid lg:grid-cols-12 gap-10 lg:gap-0 lg:items-start"
        >
          <div className="lg:col-span-7 lg:pr-12">
            <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight">
              Claude and Cursor are my development environment. Context
              documents, integration templates, and reusable prompt patterns
              take most ideas to production in{" "}
              <em className="text-brand">under two weeks.</em>
            </p>
          </div>
          <div className="lg:col-span-5 lg:border-l border-border">
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-4 lg:pl-8">
              <span className="text-brand">Platform</span> agnostic
            </div>
            <p className="text-muted-foreground leading-relaxed lg:pl-8">
              I work at the API and webhook layer, underneath whatever
              platform sits on top. Segmentation, triggers, and attribution
              are the same architecture everywhere.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

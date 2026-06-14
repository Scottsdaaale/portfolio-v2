"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const programMetrics = [
  { metric: "187", label: "Campaigns I shipped in one year" },
  { metric: "2M+", label: "Recipients reached by my program" },
  { metric: "01", label: "Person designing and running it" },
];

const projects = [
  {
    num: "01",
    title: "Lifecycle Marketing Automation Program",
    description:
      "Built the automated journey from first touch through renewal by wiring Brevo, Pipeline CRM, Stripe, and Calendly to pass data on every key action. Form submissions create CRM records with source attribution, trigger nurture email, and keep that attribution intact when someone books a demo or checks out. B2B prospect flows handle demo nurture and automatic follow-up when someone clicks a booking link but doesn't finish. B2B customer flows run retention sequences with upsells, renewal reminders, billing touchpoints, and contract-year education. B2C flows send post-purchase onboarding with merge-not-retrigger logic so repeat buyers stay in one sequence instead of restarting.",
    impact:
      "Thousands of users through lead nurture, customer retention, and post-purchase flows",
    tech: "Brevo · Pipeline CRM · Stripe · Calendly · Webhooks · REST APIs",
  },
  {
    num: "02",
    title: "Webinar Registration System",
    description:
      "Registration infrastructure behind the company's webinar program: audience segmentation, multi-webinar deduplication, and confirmation automation including calendar adds and progressive profiling surveys.",
    impact: "7 webinars, 1,900+ registrations, zero manual processing",
    tech: "Brevo · Next.js · Python · REST APIs",
  },
  {
    num: "03",
    title: "Internal Tools Suite",
    description:
      "The internal tooling the company runs on: finance dashboards pulling live data from Mercury, Stripe, and Pipeline CRM, Freshdesk analytics, email automation monitoring, invoice generation, and weekly business review reporting that auto-generates key metrics.",
    impact: "Real-time pipeline and financial visibility, no ticket queue",
    tech: "Next.js · Flask · Mercury API · Stripe API · Freshdesk API",
  },
  {
    num: "04",
    title: "MyMedPath",
    href: "https://mymedpath.com",
    description:
      "Production SaaS for dental practice licensure and compliance management, shipped completely solo. Multi-tenant org management with role-based access, AI-powered document analysis, automated licensure tracking with real-time dashboards, and a state compliance database.",
    impact: "Live production SaaS, built end to end by one person",
    tech: "Next.js · PostgreSQL · AWS Amplify · AI Document Analysis",
  },
  {
    num: "05",
    title: "YourTrainingProvider.com",
    href: "https://yourtrainingprovider.com",
    description:
      "Built yourtrainingprovider.com from scratch (React + Flask): blog, lead capture forms, and expert directory. Built a custom in-house CMS with blog publishing, ad injection, tag-based content recommendations, and expert profile management.",
    impact: "Generates hundreds of qualified leads per year",
    tech: "React · Flask · Custom CMS · Lead Capture · SEO",
  },
];

const earlier = [
  {
    org: "Flatiron School",
    role: "Software Engineering Certification",
    period: "2022",
    note: "Full-stack web development intensive. JavaScript, React, Ruby on Rails, SQL.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section folio */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between py-4 border-t border-border font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-12"
        >
          <span>
            <span className="text-brand mr-2">02</span>Experience
          </span>
          <span className="hidden sm:block">Selected work, 2022–2026</span>
        </motion.div>

        {/* Role header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 mb-16">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 lg:pr-12"
          >
            <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] tracking-tight mb-6">
              Three years building the machine,{" "}
              <em className="text-brand">end to end.</em>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Sole owner of marketing technology at a B2B SaaS company. No
              prior automation, no engineering team, no existing
              infrastructure. Scoped directly with business stakeholders,
              shipped fast, owned it end to end.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 lg:border-l border-border lg:pl-8"
          >
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              <span className="text-brand mr-2">Role</span>
            </div>
            <div className="font-display text-2xl tracking-tight mb-1">
              Technical Marketing &amp; Lifecycle Engineering
            </div>
            <div className="text-sm text-muted-foreground mb-6">
              Training &amp; eTracking Solutions · Remote
              <br />
              Apr 2023 – Jun 2026
            </div>

            <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-3">
              <span className="text-brand">Metrics</span> from the program I
              built and operated
            </div>
            <div className="border border-border">
              {programMetrics.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-4 px-5 py-3.5 ${
                    i > 0 ? "border-t border-border" : ""
                  }`}
                >
                  <span className="font-display text-3xl w-20 shrink-0">
                    {item.metric}
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground leading-snug text-balance">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Project ledger */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-2">
            <span className="text-brand mr-2">Index</span>Selected builds
          </div>
        </motion.div>

        <div className="border-t border-border mb-20">
          {projects.map((project, i) => (
            <motion.article
              key={project.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-12 gap-4 lg:gap-0 py-10 border-b border-border"
            >
              <div className="lg:col-span-4 lg:pr-8 flex items-start gap-4">
                <span className="font-mono text-xs text-brand pt-1.5">
                  {project.num}
                </span>
                <h3 className="font-display text-2xl md:text-[1.7rem] leading-tight tracking-tight">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand transition-colors underline decoration-border underline-offset-4 hover:decoration-brand"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
              </div>

              <div className="lg:col-span-8 lg:border-l border-border lg:pl-8">
                <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                  {project.description}
                </p>
                <p className="text-sm mb-3">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-brand mr-3">
                    Impact
                  </span>
                  {project.impact}
                </p>
                <p className="font-mono text-xs text-muted-foreground tracking-wide">
                  {project.tech}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Earlier */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-2">
            <span className="text-brand mr-2">Prior</span>Earlier work
          </div>
          <div className="border-t border-border">
            {earlier.map((item) => (
              <div
                key={item.org}
                className="grid md:grid-cols-12 gap-2 md:gap-0 py-6 border-b border-border"
              >
                <div className="md:col-span-4 md:pr-8 flex flex-col justify-center">
                  <div className="font-display text-xl tracking-tight">
                    {item.org}
                  </div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground mt-1">
                    {item.role} · {item.period}
                  </div>
                </div>
                <div className="md:col-span-8 md:border-l border-border md:pl-8 flex items-center">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { Download } from "lucide-react";

const metrics = [
  { metric: "187", label: "Campaigns last year" },
  { metric: "2M+", label: "Email recipients" },
  { metric: "1,900+", label: "Webinar registrations" },
  { metric: "1,200+", label: "Leads through recovery flows" },
];

const experiences = [
  {
    title: "Technical Marketing & Lifecycle Engineering",
    company: "Training & eTracking Solutions",
    duration: "Jul 2024 – Jun 2026",
    location: "Remote",
    type: "Full-time",
    description:
      "Sole owner of marketing technology at a B2B company. Built the entire lifecycle automation program from nothing: no prior automation, no engineering team, no existing infrastructure.",
    groups: [
      {
        label: "Lifecycle automation",
        items: [
          "Designed and built lifecycle marketing program connecting Brevo, Pipeline CRM, Stripe, and Calendly via API integration and webhook orchestration",
          "Designed B2B lead journey covering form capture, attribution tagging, demo nurture email sequences, and Calendly-driven booking with cross-system attribution preservation",
          "Built behavioral trigger sequences that identify leads who click a demo booking link without completing the booking, then run an automated recovery sequence until they book or opt out: 1,200+ contacts processed",
          "Built B2C post-purchase email automation with merge-not-retrigger logic for customers who purchase multiple times mid-sequence",
        ],
      },
      {
        label: "Email & campaigns",
        items: [
          "Program delivered 187 campaigns to 2M+ recipients last year",
          "Built webinar registration system handling 7 webinars and 1,900+ registrations, with audience segmentation, multi-webinar deduplication, and confirmation automation including calendar adds and progressive profiling surveys",
          "Built responsive email templates in MJML with dynamic personalization and variable-based content",
        ],
      },
      {
        label: "Engineering & tooling",
        items: [
          "Built API integrations, webhook handlers, and landing pages in Cursor using maintained context documents for company styling, brand guidelines, and integration patterns",
          "Built a suite of internal tools in Next.js + Flask: finance dashboards connected to Mercury, Stripe, and Pipeline CRM; Freshdesk analytics; email automation monitoring; invoice generation; and weekly business review reporting",
          "Managed AWS infrastructure (Lambda, S3, SES) for marketing automation and email delivery",
          "Designed and documented full lifecycle architecture in Figma for cross-team reference",
        ],
      },
    ],
  },
  {
    title: "Contract Web Developer",
    company: "Liquid XYZ",
    duration: "Apr 2023 – Jul 2024",
    location: "Remote",
    type: "Contract",
    description:
      "Built and maintained yourtrainingprovider.com full stack (React + Flask) as sole developer.",
    groups: [
      {
        label: "Highlights",
        items: [
          "Built and maintained the full marketing site: blog, webinar registration pages, lead capture forms, and expert directory",
          "Built a custom in-house CMS: blog post creation, ad creation and injection into blog content, tag-based training recommendations, and expert profile management",
          "Implemented frontend functionality using React, JavaScript, HTML, and CSS",
        ],
      },
    ],
  },
  {
    title: "Business Operations & Customer Success",
    company: "Goodwill Industries & Urban Outfitters",
    duration: "2016 – 2022",
    location: "New York / Connecticut",
    type: "Early career",
    description:
      "Customer-facing operations background that directly informs how I design customer journeys and lifecycle programs today.",
    groups: [
      {
        label: "Highlights",
        items: [
          "Helped build Goodwill's ecommerce department from the ground up; team ranked among the highest earners nationally at the end of year one (2020 – 2022)",
          "Sales and customer service at Urban Outfitters across New York and Chicago (2016 – 2020)",
          "Developed deep understanding of the customer journey and where it breaks down",
        ],
      },
    ],
  },
];

const projects = [
  {
    title: "MyMedPath",
    date: "2025",
    description:
      "Production SaaS for dental practice licensure and compliance management, built completely solo. Multi-tenant org management with role-based access, AI-powered document analysis, automated licensure tracking with real-time dashboards, and state compliance database",
    tech: "Next.js · PostgreSQL · AWS Amplify · AI Document Analysis · Multi-tenant Architecture",
    link: "mymedpath.com",
  },
  {
    title: "Lifecycle Automation Program",
    date: "2024 – 2026",
    description:
      "Full B2B/B2C lifecycle program connecting four platforms via webhook and API orchestration: lead capture, demo nurture, booking recovery, post-purchase onboarding, and renewal flows. 187 campaigns to 2M+ recipients last year",
    tech: "Brevo · Pipeline CRM · Stripe · Calendly · Webhooks · REST APIs",
    link: null,
  },
  {
    title: "Webinar Registration System",
    date: "2024 – 2026",
    description:
      "Registration infrastructure handling 7 webinars and 1,900+ registrations with audience segmentation, multi-webinar deduplication, calendar adds, and progressive profiling surveys",
    tech: "Brevo · AWS Lambda · Webhooks · MJML",
    link: null,
  },
  {
    title: "Internal Tools Suite",
    date: "2024 – 2026",
    description:
      "Finance dashboards pulling live data from Mercury, Stripe, and Pipeline CRM, Freshdesk analytics, email automation monitoring, invoice generation, and automated weekly business review reporting",
    tech: "Next.js · Flask · Mercury API · Stripe API · Freshdesk API",
    link: null,
  },
  {
    title: "Marketing Site + Custom CMS",
    date: "2023 – 2024",
    description:
      "Built yourtrainingprovider.com full stack with a custom in-house CMS: blog management, ad injection into blog content, tag-based training recommendations, and expert profile management",
    tech: "React · Flask · Custom CMS · Lead Capture · SEO",
    link: "yourtrainingprovider.com",
  },
  {
    title: "Transactional Email Infrastructure",
    date: "2024",
    description:
      "Built transactional email delivery infrastructure for the company LMS using AWS SES, SQS, and Lambda, supporting onboarding of the first 100 users",
    tech: "AWS SES · AWS SQS · AWS Lambda",
    link: null,
  },
];

const skillGroups = [
  {
    label: "Lifecycle & Automation",
    skills:
      "Lifecycle Marketing · Marketing Automation · Marketing Operations · Email Marketing · Customer Segmentation · Attribution Tracking · Behavioral Triggers · MarTech",
  },
  {
    label: "Martech Platforms",
    skills:
      "Brevo · HubSpot · Pipeline CRM · Stripe · Calendly · Zapier · Freshdesk · Mercury · MJML",
  },
  {
    label: "Languages & Frameworks",
    skills:
      "Python · JavaScript · TypeScript · Next.js · React · Flask · HTML · CSS · Tailwind CSS",
  },
  {
    label: "APIs & Integration",
    skills:
      "REST APIs · Webhooks · Webhook Orchestration · API Integration · Cross-System Attribution · Data Sync",
  },
  {
    label: "Cloud & Data",
    skills:
      "AWS Lambda · AWS S3 · AWS SES · AWS SQS · AWS Amplify · PostgreSQL · SQL",
  },
  {
    label: "AI-Assisted Development",
    skills:
      "Claude · Cursor · Prompt Engineering · Context Documents · Integration Templates",
  },
];

const education = [
  {
    institution: "Flatiron School",
    degree: "Certification, Software Engineering",
    duration: "Feb 2022 – Jun 2022",
    description:
      "15 week intensive full stack software engineering program. JavaScript (ES6+), React, Ruby on Rails, SQL.",
  },
  {
    institution: "SAE Institute North America",
    degree: "Certification, Audio Engineering",
    duration: "2016",
    description:
      "Professional audio engineering and production. Pro Tools, Logic Pro, Ableton.",
  },
];

const folioLabel =
  "font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground";

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className={`${folioLabel} mb-2`}>
      <span className="text-brand mr-2">{num}</span>
      {title}
    </div>
  );
}

export function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/scotty-peterson-resume.pdf";
    link.download = "Scotty Peterson - Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="px-6 md:px-12 pt-24 pb-16 print:p-0">
      <div className="max-w-5xl mx-auto print:max-w-none">
        {/* Download button */}
        <button
          onClick={handleDownload}
          className="fixed bottom-6 right-6 z-50 print:hidden inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] px-5 py-3 border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground transition-colors shadow-lg"
        >
          <Download className="h-3.5 w-3.5" />
          Download PDF
        </button>

        {/* Folio strip */}
        <div
          className={`flex items-center justify-between py-4 border-t border-border ${folioLabel} mb-10 print:mb-6`}
        >
          <span>
            <span className="text-brand mr-2">CV</span>Resume
          </span>
          <span className="hidden sm:block">Scotty Peterson · 2026</span>
        </div>

        {/* Header */}
        <header className="grid lg:grid-cols-12 gap-8 lg:gap-0 mb-14 print:mb-8 print:grid-cols-12 print:gap-0">
          <div className="lg:col-span-8 lg:pr-12 print:col-span-8 print:pr-8">
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.02] tracking-tight mb-3 print:text-4xl">
              Scotty Peterson
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground print:text-base">
              Lifecycle Marketing Engineer · Marketing Technologist
            </p>
          </div>
          <div className="lg:col-span-4 lg:border-l border-border lg:pl-8 print:col-span-4 print:border-l print:pl-8 flex flex-col justify-center gap-1.5 font-mono text-xs text-muted-foreground">
            <span>scottpetersonSE@gmail.com</span>
            <span>New Haven, CT</span>
            <span>github.com/Scottsdaaale</span>
            <span>linkedin.com/in/scotty-peterson</span>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-12 print:mb-6 print:break-inside-avoid">
          <SectionLabel num="01" title="Summary" />
          <div className="border-t border-border pt-6 grid lg:grid-cols-12 gap-0 print:grid-cols-12">
            <p className="lg:col-span-9 print:col-span-12 leading-relaxed text-foreground/90 print:text-sm">
              Lifecycle marketing engineer who designs and ships the technical
              systems behind marketing automation programs. End-to-end
              ownership of lead capture, CRM integration, email automation,
              post-purchase nurture sequences, and webinar registration
              infrastructure. Connects marketing platforms, CRMs, payment
              systems, and scheduling tools into automated customer journeys
              that run without manual intervention. Leans heavily on
              AI-assisted development to ship at the pace of a small
              engineering team.
            </p>
          </div>
        </section>

        {/* Metrics */}
        <section className="mb-12 print:mb-6 print:break-inside-avoid">
          <SectionLabel num="02" title="Key numbers" />
          <div className="border border-border grid grid-cols-2 md:grid-cols-4 print:grid-cols-4">
            {metrics.map((item, i) => (
              <div
                key={item.label}
                className={`px-5 py-4 print:px-3 print:py-2 ${
                  i > 0 ? "border-t md:border-t-0 md:border-l border-border print:border-t-0 print:border-l" : ""
                } ${i === 2 ? "border-t md:border-t-0" : ""}`}
              >
                <div className="font-display text-2xl md:text-3xl mb-1 print:text-xl">
                  {item.metric}
                </div>
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground leading-snug text-balance">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12 print:mb-6">
          <SectionLabel num="03" title="Experience" />
          <div className="border-t border-border">
            {experiences.map((exp) => (
              <article
                key={exp.company}
                className="py-8 border-b border-border print:py-4"
              >
                {/* Role header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3 print:break-inside-avoid">
                  <div>
                    <h3 className="font-display text-xl leading-tight tracking-tight mb-1 print:text-base">
                      {exp.title}
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      {exp.company}
                    </div>
                  </div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground leading-relaxed sm:text-right shrink-0">
                    {exp.duration}
                    <br />
                    {exp.location} · {exp.type}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl print:mb-3 print:text-xs">
                  {exp.description}
                </p>

                {/* Achievement groups */}
                <div className="border-t border-border">
                  {exp.groups.map((group) => (
                    <div
                      key={group.label}
                      className="grid md:grid-cols-12 gap-2 md:gap-0 py-5 border-b border-border last:border-b-0 last:pb-0 print:grid-cols-12 print:py-3 print:break-inside-avoid"
                    >
                      <div className="md:col-span-3 md:pr-6 print:col-span-3 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-brand pt-0.5">
                        {group.label}
                      </div>
                      <div className="md:col-span-9 md:border-l border-border md:pl-8 print:col-span-9 print:border-l print:pl-6">
                        <ul className="space-y-2 print:space-y-1">
                          {group.items.map((item, i) => (
                            <li
                              key={i}
                              className="text-sm leading-relaxed pl-4 relative print:text-xs text-foreground/90"
                            >
                              <span className="absolute left-0 text-brand">
                                ·
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12 print:mb-6">
          <SectionLabel num="04" title="Technical projects" />
          <div className="border-t border-border grid md:grid-cols-2 print:grid-cols-2">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className={`py-6 print:py-3 print:break-inside-avoid md:pr-8 ${
                  i % 2 === 1 ? "md:border-l border-border md:pl-8 md:pr-0 print:border-l print:pl-6" : ""
                } ${i > 1 ? "border-t border-border print:border-t" : i === 1 ? "border-t md:border-t-0 border-border" : ""}`}
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-display text-lg leading-tight tracking-tight print:text-sm">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground shrink-0">
                    {project.date}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 print:text-xs print:mb-1">
                  {project.description}
                </p>
                <p className="font-mono text-xs text-muted-foreground tracking-wide print:text-[0.6rem]">
                  {project.tech}
                </p>
                {project.link && (
                  <p className="font-mono text-xs text-brand mt-1 print:text-[0.6rem]">
                    {project.link}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12 print:mb-6 print:break-inside-avoid">
          <SectionLabel num="05" title="Skills" />
          <div className="border-t border-border">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="grid md:grid-cols-12 gap-1 md:gap-0 py-4 border-b border-border print:grid-cols-12 print:py-2"
              >
                <div className="md:col-span-4 md:pr-8 print:col-span-4 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground flex items-center">
                  {group.label}
                </div>
                <div className="md:col-span-8 md:border-l border-border md:pl-8 print:col-span-8 print:border-l print:pl-6 text-sm leading-relaxed print:text-xs text-foreground/90">
                  {group.skills}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12 print:mb-0 print:break-inside-avoid">
          <SectionLabel num="06" title="Education & certifications" />
          <div className="border-t border-border">
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="grid md:grid-cols-12 gap-2 md:gap-0 py-6 border-b border-border print:grid-cols-12 print:py-3"
              >
                <div className="md:col-span-4 md:pr-8 print:col-span-4">
                  <div className="font-display text-lg tracking-tight print:text-sm">
                    {edu.institution}
                  </div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground mt-1">
                    {edu.duration}
                  </div>
                </div>
                <div className="md:col-span-8 md:border-l border-border md:pl-8 print:col-span-8 print:border-l print:pl-6 flex flex-col justify-center">
                  <div className="text-sm mb-1 print:text-xs">{edu.degree}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed print:text-xs">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer strip */}
        <div
          className={`pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 ${folioLabel} print:hidden`}
        >
          <span>Scotty Peterson</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Zap, 
  Globe,
  Cog,
  Sparkles
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Lifecycle & Marketing Automation",
      icon: Zap,
      description: "The programs and strategy behind automated customer journeys",
      skills: [
        "Lifecycle Marketing",
        "Marketing Automation",
        "Marketing Operations",
        "Email Marketing",
        "Customer Segmentation",
        "Behavioral Triggers",
        "Attribution Tracking"
      ]
    },
    {
      title: "Martech Platforms",
      icon: Cog,
      description: "The tools I connect into automated systems",
      skills: [
        "Brevo",
        "Pipeline CRM",
        "Stripe",
        "Calendly",
        "Zapier",
        "Freshdesk",
        "Mercury",
        "MJML"
      ]
    },
    {
      title: "APIs & Integration",
      icon: Globe,
      description: "Connecting platforms so data flows without manual work",
      skills: [
        "REST APIs",
        "Webhooks",
        "Webhook Orchestration",
        "API Integration",
        "Cross-System Attribution",
        "Data Sync"
      ]
    },
    {
      title: "Languages & Frameworks",
      icon: Code,
      description: "What I build with",
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "React",
        "Flask",
        "Tailwind CSS"
      ]
    },
    {
      title: "Cloud & Data",
      icon: Database,
      description: "Infrastructure for automation and email delivery",
      skills: [
        "AWS Lambda",
        "AWS S3",
        "AWS SES",
        "AWS Amplify",
        "PostgreSQL",
        "SQL"
      ]
    },
    {
      title: "AI-Assisted Development",
      icon: Sparkles,
      description: "How I ship at the pace of a small engineering team",
      skills: [
        "Claude",
        "Cursor",
        "Prompt Engineering",
        "Context Documents",
        "Integration Templates",
        "Rapid Prototyping"
      ]
    }
  ];

  const topSkills = [
    "Marketing Automation", "API & Webhook Orchestration", "Lifecycle Engineering",
    "Internal Tooling", "Python", "JavaScript", "Next.js", "AWS",
    "AI-Assisted Development"
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Skills
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Marketing Systems Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The stack behind the automation programs, integrations, and internal tools.
          </p>
          
          {/* Top Skills */}
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {topSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline" className="text-sm py-1 px-3">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-xl border bg-card text-card-foreground shadow-sm divide-y divide-border"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.05 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-[280px_1fr] gap-4 md:gap-8 p-6 md:p-8 md:items-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <category.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground md:pl-8">{category.description}</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">How I Build</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Claude and Cursor are my development environment. I keep context documents for every system I build, 
                reusable prompt patterns, and integration templates. Most things go from idea to production in under two weeks.
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">The platforms translate:</span> the architecture behind my work in 
                Brevo and Pipeline CRM maps directly to HubSpot, Iterable, Customer.io, and Braze.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

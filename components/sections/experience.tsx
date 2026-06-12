"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, TrendingUp, Users, Code2, Zap, Video, Workflow } from "lucide-react";

export function Experience() {
  const currentRole = {
    company: "Training & eTracking Solutions",
    position: "Marketing Engineer",
    duration: "Jul 2024 - Jun 2026",
    location: "Remote",
    description: "Sole owner of marketing technology at a B2B SaaS company. Built the entire lifecycle automation program from nothing: no prior automation, no engineering team, no existing infrastructure. Scoped directly with business stakeholders, shipped fast, owned it end to end."
  };

  const projects = [
    {
      title: "Lifecycle Marketing Automation Program",
      description: "Designed and built the full lifecycle program connecting Brevo, Pipeline CRM, Stripe, and Calendly via API integration and webhook orchestration. B2B demo nurture with cross-system attribution, behavioral recovery sequences for leads who click a booking link without completing it, and B2C post-purchase flows with merge-not-retrigger logic for repeat buyers.",
      tech: ["Brevo", "Pipeline CRM", "Stripe", "Calendly", "Webhooks", "REST APIs"],
      impact: "187 campaigns delivered to 2M+ recipients last year. Demo booking recovery sequence processed 1,200+ contacts.",
      icon: Workflow
    },
    {
      title: "Webinar Registration System",
      description: "Built the registration infrastructure behind the company's webinar program: audience segmentation, multi-webinar deduplication, and confirmation automation including calendar adds and progressive profiling surveys.",
      tech: ["Brevo", "AWS Lambda", "Webhooks", "MJML", "Segmentation"],
      impact: "Handled 7 webinars and 1,900+ registrations with zero manual processing.",
      icon: Video
    },
    {
      title: "Internal Tools Suite",
      description: "Built the internal tooling the company runs on: finance dashboards pulling live data from Mercury, Stripe, and Pipeline CRM, Freshdesk analytics, email automation monitoring, invoice generation, and weekly business review reporting that auto-generates key metrics.",
      tech: ["Next.js", "Flask", "Mercury API", "Stripe API", "Pipeline CRM", "Freshdesk API"],
      impact: "Gave leadership real-time pipeline and financial visibility without a ticket queue. Solo build.",
      icon: Code2
    },
    {
      title: "MyMedPath",
      description: (
        <>
          Shipped{" "}
          <a 
            href="https://mymedpath.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            mymedpath.com
          </a>{" "}
          completely solo: a production SaaS for dental practice licensure and compliance management. Multi-tenant org management with role-based access, AI-powered document analysis, automated licensure tracking with real-time dashboards, and a state compliance database.
        </>
      ),
      tech: ["Next.js", "PostgreSQL", "AWS Amplify", "AI Document Analysis", "Multi-tenant Architecture"],
      impact: "Live, fully functional production SaaS built end to end by one person using AI-assisted development.",
      icon: TrendingUp
    }
  ];

  const achievements = [
    {
      metric: "187",
      label: "Campaigns Delivered Last Year",
      icon: Zap
    },
    {
      metric: "2M+",
      label: "Email Recipients",
      icon: Users
    },
    {
      metric: "1,900+",
      label: "Webinar Registrations",
      icon: Video
    },
    {
      metric: "1,200+",
      label: "Leads Through Recovery Flows",
      icon: TrendingUp
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Systems That Ship and Run Themselves
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two years as the sole engineer building the marketing and operations infrastructure at a B2B SaaS company.
          </p>
        </motion.div>

        {/* Current Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-xl sm:text-2xl mb-2">{currentRole.position}</CardTitle>
                  <p className="text-base sm:text-lg font-semibold text-primary mb-3">{currentRole.company}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>{currentRole.duration}</span>
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <span>{currentRole.location}</span>
                  </div>
                </div>
                <Badge variant="outline" className="self-start">Most Recent Role</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{currentRole.description}</p>
              
              {/* Achievement Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 md:p-5 rounded-lg bg-background border border-border/50 hover:border-primary/20 transition-colors"
                  >
                    <achievement.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">{achievement.metric}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Major Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Major Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <project.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-semibold mb-2">Impact:</p>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
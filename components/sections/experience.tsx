"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Building, TrendingUp, Users, Code2, Zap } from "lucide-react";

export function Experience() {
  const currentRole = {
    company: "Training & eTracking Solutions",
    position: "Full Stack Developer",
    duration: "Jul 2024 - Present",
    location: "Remote",
    description: "Full-stack developer building complete business solutions from concept to deployment. Leading high-value projects while managing growth-driving web properties."
  };

  const projects = [
    {
      title: "Healthcare Compliance Platform",
      description: "Leading development of a HIPAA-compliant SaaS platform from scratch. Architecting multi-tenant infrastructure, secure document management, automated compliance tracking, and real-time notifications serving healthcare organizations across 5 states",
      tech: ["Next.js 15", "Django", "PostgreSQL", "AWS S3", "SES", "Multi-tenant Architecture"],
              impact: "Full-stack solo development of enterprise-grade healthcare software with 9.5-week delivery timeline",
      icon: Building
    },
    {
      title: "Company Website Development",
      description: (
        <>
          Built{" "}
          <a 
            href="https://yourtrainingprovider.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            yourtrainingprovider.com
          </a>{" "}
          from scratch and serve as sole developer. I code new product features, maintain automated blog systems, implement SEO strategies, and continuously optimize for lead conversion
        </>
      ),
      tech: ["SEO Optimization", "Lead Capture", "Automated Blog", "Product Integration", "Content Management"],
      impact: "Thousands of monthly visitors, continuous lead generation, and primary company marketing engine",
      icon: TrendingUp
    },
    {
      title: "Comprehensive Admin Platform",
      description: "Built end-to-end business management platform integrating multiple APIs and data sources. Includes finance dashboard with Stripe/Mercury/Pipeline CRM integrations, automated invoice generation, Freshdesk analytics, B2C client management, and AI chatbot functionality",
      tech: ["Stripe API", "Mercury API", "Pipeline CRM", "Freshdesk API", "Invoice Generation", "AI Chatbot"],
      impact: "Complete business operations platform consolidating finances, customer support, client management, and automated workflows",
      icon: Code2
    },
    {
      title: "AI-Powered Course Modernization Initiative",
      description: "Led complete redesign of 63+ training courses using industry-standard Storyline360, implementing AI-powered content generation and custom Python automation scripts. Built comprehensive tracking systems for cycle time analysis and quality assurance workflows",
      tech: ["Storyline360", "AI Content Generation", "Python Scripts", "Performance Analytics", "Quality Assurance"],
      impact: "Dramatically accelerated course production through AI automation, eliminated customer complaints, and transformed learning experience from outdated content to modern, engaging training materials",
      icon: Users
    }
  ];

  const achievements = [
    {
      metric: "Enterprise",
      label: "Healthcare Platform Delivery",
      icon: TrendingUp
    },
    {
      metric: "Thousands",
      label: "Monthly Website Visitors",
      icon: Users
    },
    {
      metric: "Tens of Thousands",
      label: "Cost Savings via AI Integration",
      icon: Zap
    },
    {
      metric: "1,083",
      label: "Course Slides Modernized",
      icon: Code2
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
            Building Solutions That Drive Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Currently leading high-impact projects that deliver real business value.
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
                <Badge variant="outline" className="self-start">Current Role</Badge>
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
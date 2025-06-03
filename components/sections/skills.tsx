"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Palette, 
  Zap, 
  Globe,
  Cog
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Palette,
      description: "Building modern, responsive user interfaces",
      skills: [
        { name: "Next.js", level: 95, featured: true },
        { name: "React", level: 90, featured: true },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 90, featured: true },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Framer Motion", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: Code,
      description: "Scalable server-side solutions and APIs",
      skills: [
        { name: "Django", level: 90, featured: true },
        { name: "Python", level: 85 },
        { name: "Ruby on Rails", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "REST APIs", level: 90, featured: true },
        { name: "API Integration", level: 95 },
        { name: "Ruby", level: 80 },
        { name: "Flask", level: 70 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      description: "Data management and cloud infrastructure",
      skills: [
        { name: "PostgreSQL", level: 85, featured: true },
        { name: "AWS", level: 80, featured: true },
        { name: "SQL", level: 90 },
        { name: "Database Design", level: 85 },
        { name: "Cloud Architecture", level: 75 },
        { name: "Docker", level: 70 }
      ]
    },
    {
      title: "Integrations & Tools",
      icon: Cog,
      description: "Third-party services and development tools",
      skills: [
        { name: "Stripe API", level: 90, featured: true },
        { name: "Freshdesk API", level: 85 },
        { name: "Git", level: 95 },
        { name: "GitHub", level: 90 },
        { name: "SCORM", level: 80 },
        { name: "WordPress", level: 85 },
        { name: "Postman", level: 85 }
      ]
    },
    {
      title: "Business & Analytics",
      icon: Zap,
      description: "Business intelligence and automation",
      skills: [
        { name: "AI Integration", level: 85, featured: true },
        { name: "Financial Analytics", level: 80 },
        { name: "SEO Optimization", level: 85 },
        { name: "Lead Generation", level: 90 },
        { name: "Process Automation", level: 85 },
        { name: "CRM Integration", level: 80 }
      ]
    },
    {
      title: "Specialized",
      icon: Globe,
      description: "Domain-specific expertise",
      skills: [
        { name: "LMS Development", level: 90, featured: true },
        { name: "Healthcare Compliance", level: 85 },
        { name: "Multi-tenant SaaS", level: 80 },
        { name: "E-Learning", level: 85 },
        { name: "Content Management", level: 85 },
        { name: "Audio Engineering", level: 75 }
      ]
    }
  ];

  const topSkills = [
    "Next.js", "React", "Django", "PostgreSQL", "AWS", 
    "Tailwind CSS", "API Integration", "Stripe API", 
    "AI Integration", "LMS Development"
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
            Technical Skills
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Full-Stack Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The technical foundation behind those high-impact business solutions.
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <category.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className={`text-sm ${skill.featured ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
                            {skill.name}
                          </span>
                          {skill.featured && (
                            <Badge variant="secondary" className="text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className="bg-primary h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

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
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Technology evolves fast, and so do I. From diving deep into new frameworks to 
                exploring emerging AI tools, I stay current with what matters for building better solutions.
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">Currently exploring:</span> AI/ML integration, 
                advanced Next.js patterns, and serverless architectures.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
} 
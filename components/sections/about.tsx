"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Workflow, Sparkles } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Target,
      title: "End-to-End Ownership",
      description: "I decide what to build based on where the funnel is breaking, then build it. Strategy, program design, and the code behind it come from the same person."
    },
    {
      icon: Workflow,
      title: "Systems Builder",
      description: "Webhook and API orchestration across Brevo, Pipeline CRM, Stripe, and Calendly. Behavioral email sequences, webinar infrastructure, and internal dashboards."
    },
    {
      icon: Sparkles,
      title: "AI-Assisted Development",
      description: "Claude and Cursor are my development environment. Context documents, reusable prompt patterns, and integration templates mean most things go from idea to production in under two weeks."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            About Me
          </Badge>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            I build the internal tools and automation systems GTM and marketing teams run on. Not as a consultant who hands off a spec. I embed with the business, find what's manual and slow, and ship the thing that removes it.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Strategy and Code From the Same Person
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The technical side is only half of it. I also own program design, attribution, and results analysis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">The Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I started in retail and ecommerce, then made the leap through a coding bootcamp in 2022. 
                My first developer role was building a company's marketing website from the ground up, including a custom CMS so the content team never needed an engineer.
              </p>
              <p>
                Then the company decided to go harder on marketing, and there was nothing there. No lead capture, no automations, no lifecycle infrastructure. 
                As the only technical person, I built the entire program from scratch: <span className="text-foreground font-semibold">webhook and API orchestration across four platforms, behavioral nurture sequences, a webinar system that handled 1,900+ registrations across 7 events</span>.
              </p>
              <p>
                That's where I landed on what I actually am: a marketing technologist who ships. 
                {" "}<span className="text-foreground font-semibold">I cover what usually takes a marketer plus an engineer</span>, and AI-assisted development is how I keep that pace as one person.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <item.icon className="h-8 w-8 mb-4 text-primary" />
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">What This Means For You</h3>
              <p className="text-lg text-muted-foreground mb-6">
                You get one person who can own the technical marketing stack end to end. I find what's manual and slow, ship the system that removes it, and keep it running without a ticket queue.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">Lifecycle Marketing</Badge>
                <Badge variant="outline">Marketing Automation</Badge>
                <Badge variant="outline">API Integration</Badge>
                <Badge variant="outline">Internal Tooling</Badge>
                <Badge variant="outline">AI-Assisted Development</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
} 
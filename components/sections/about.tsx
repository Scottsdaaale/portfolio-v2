"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Coffee, Code, Users } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: User,
      title: "Customer-First Mindset",
      description: "Years in customer service taught me to think about what users actually need, not just what's technically possible."
    },
    {
      icon: Coffee,
      title: "Problem Solver",
      description: "I take messy business problems and turn them into clean, working solutions that people actually want to use."
    },
    {
      icon: Code,
      title: "Full-Stack Builder",
      description: "From React frontends to Django backends, I build complete solutions that solve real business problems."
    },
    {
      icon: Users,
      title: "Business Impact",
      description: "Currently delivering a $30K healthcare platform while managing sites that generate thousands of leads monthly."
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            I Build Solutions That Actually Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My weird background actually helps: I spent years in customer service before getting into development.
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
                I started in customer service and e-commerce, spending years solving problems for real people. 
                That experience taught me something most developers miss: <span className="text-foreground font-semibold">it's not about the code, it's about the solution</span>.
              </p>
              <p>
                When I transitioned to development, I brought that user-focused mindset with me. I don't just build features—I solve problems. 
                Whether it's a custom LMS because the existing one sucked, or an admin platform that pulls data from everywhere into one place that actually makes sense.
              </p>
              <p>
                Plus I have this annoying habit of diving deep into anything that interests me: from guitar to audio engineering to building computers to coding. 
                <span className="text-foreground font-semibold">That curiosity drives better solutions</span>.
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
                You get a developer who doesn't just understand the technical side—I understand your users, your business problems, and what actually makes a solution successful.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">User Experience</Badge>
                <Badge variant="outline">Business Impact</Badge>
                <Badge variant="outline">Problem Solving</Badge>
                <Badge variant="outline">Full-Stack Solutions</Badge>
                <Badge variant="outline">Real Results</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
} 
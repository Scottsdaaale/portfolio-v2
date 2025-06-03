"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Download } from "lucide-react";

export function Resume() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Training & eTracking Solutions",
      duration: "Jul 2024 - Present",
      location: "Remote",
      type: "Full-time",
      description: "Full-stack developer building complete business solutions from concept to deployment. Leading high-value projects while managing growth-driving web properties.",
      achievements: [
        "Leading $30K healthcare compliance platform serving 5 states using Next.js 15, Django, PostgreSQL, and AWS",
        "Built and maintain company website generating thousands of monthly visitors and continuous lead generation",
        "Developed comprehensive admin platform with financial analytics, Freshdesk integration, and AI chatbot functionality", 
        "Architected custom LMS with SCORM tracking, replacing inadequate existing system",
        "Created multi-platform lead generation system aggregating customers from Stripe and other APIs",
        "Modernized 1,083+ course slides and manage newsletter reaching thousands of subscribers",
        "Achieved tens of thousands in cost savings through AI-integrated processes"
      ]
    },
    {
      title: "Full Stack Developer", 
      company: "Liquid XYZ",
      duration: "Jul 2022 - Jul 2024",
      location: "Remote",
      type: "Freelance",
      description: "Freelance full-stack development focused on creating high-impact web applications with emphasis on user experience and performance.",
      achievements: [
        "Created successful page designs and navigation frameworks achieving usability requirements",
        "Managed multiple project priorities and communicated timelines to entire development team",
        "Utilized Jira for project management while implementing front-end code for client applications",
        "Developed high-impact web pages using JavaScript and Object-Oriented Programming principles",
        "Designed effective interfaces using HTML, CSS, XML and modern frameworks"
      ]
    },
    {
      title: "E-commerce Team Member",
      company: "Goodwill Industries International", 
      duration: "2020 - 2022",
      location: "Connecticut, United States",
      type: "Full-time",
      description: "Key team member in building e-commerce department from the ground up, contributing to becoming one of the highest earners in the country.",
      achievements: [
        "Helped build e-commerce department from ground up, reaching top national rankings in first year",
        "Successfully worked within tight deadlines in fast-paced, high-growth environment",
        "Managed client information, order tracking, and shipment monitoring using specialized software",
        "Provided real-time information updates and account management for customer satisfaction"
      ]
    },
    {
      title: "Sales | Customer Service Representative",
      company: "Urban Outfitters",
      duration: "2016 - 2020", 
      location: "New York/Chicago, United States",
      type: "Full-time",
      description: "Provided comprehensive customer service across multiple channels while developing problem-solving skills that later informed development approach.",
      achievements: [
        "Solved customer issues over phone and in-person across multiple store locations",
        "Provided enhanced customer service throughout entire shopping experience journey",
        "Trained as active cashier with comprehensive knowledge of operating system programs",
        "Executed organization and merchandising according to company standards"
      ]
    }
  ];

  const projects = [
    {
      title: "$30K Healthcare Compliance Platform",
      date: "2024 - Present",
      description: "Leading development of multi-tenant SaaS application serving healthcare organizations across 5 states with comprehensive compliance tracking and reporting",
      technologies: ["Next.js 15", "Django", "PostgreSQL", "AWS", "Multi-tenant Architecture"],
      link: null
    },
    {
      title: "Company Website Development", 
      date: "2024",
      description: "Built and maintain yourtrainingprovider.com from ground up, driving thousands of monthly visitors and continuous lead generation pipeline",
      technologies: ["SEO Optimization", "Lead Capture Systems", "Blog Automation", "Analytics Integration"],
      link: null
    },
    {
      title: "Custom LMS Development",
      date: "2024",
      description: "Architected proprietary Learning Management System with SCORM tracking, custom quiz systems, and versioning capabilities, replacing inadequate existing system",
      technologies: ["SCORM Compliance", "Next.js", "Django", "Custom Quiz Engine", "Version Control"],
      link: null
    },
    {
      title: "Comprehensive Admin Platform",
      date: "2024", 
      description: "Built integrated business intelligence platform with financial analytics, invoice generation, Freshdesk analytics, B2C client management, and AI chatbot functionality",
      technologies: ["Financial Analytics", "Freshdesk API", "AI Chatbot", "Invoice Generation", "Client Management"],
      link: null
    },
    {
      title: "Multi-Platform Lead Generation System",
      date: "2024",
      description: "Architected centralized system using APIs to aggregate customers from multiple platforms (Stripe, CRM, etc.) into unified conversion funnel",
      technologies: ["Stripe API", "CRM Integration", "Multi-platform APIs", "Lead Automation", "Conversion Tracking"],
      link: null
    },
    {
      title: "Newsletter & Content Management",
      date: "2024",
      description: "Manage monthly newsletter reaching thousands of subscribers and create technical blog content, modernizing 1,083+ course slides",
      technologies: ["Content Management", "Email Automation", "Slide Modernization", "Technical Writing"],
      link: null
    }
  ];

  const skills = {
    frontend: ["React", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "React Hooks"],
    backend: ["Django", "Python", "Ruby on Rails", "Node.js", "REST APIs", "API Development", "PostgreSQL", "SQL"],
    cloud: ["AWS", "Vercel", "Database Management", "Multi-tenant Architecture"], 
    tools: ["Git", "GitHub", "VS Code", "Postman", "Jira", "Figma"],
    specialties: ["SCORM", "LMS Architecture", "AI Integration", "E-learning (Storyline360)", "Multi-platform APIs"],
    business: ["E-commerce", "Lead Generation", "Customer Service", "Project Management", "Analytics"]
  };

  const education = [
    {
      institution: "Flatiron School",
      degree: "Certification - Software Engineering",
      duration: "Feb 2022 - Jun 2022",
      description: "15 Week Intensive Full Stack Software Engineering Program",
      highlights: ["Front End: JavaScript (ES6+), React.js", "Back End: Ruby, Ruby on Rails, SQL, ORMs & Active Record"]
    },
    {
      institution: "SAE Institute North America", 
      degree: "Certification - Audio Engineering",
      duration: "2016",
      description: "Professional audio engineering and production certification",
      highlights: ["Pro Tools", "Logic Pro", "Ableton", "Digital Audio Workstations"]
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Floating Print Button */}
      <Button
        onClick={handlePrint}
        className="fixed bottom-6 right-6 z-50 print:hidden shadow-lg"
        size="lg"
      >
        <Download className="h-4 w-4 mr-2" />
        Download PDF
      </Button>

      <div className="min-h-screen bg-white text-black p-6 max-w-5xl mx-auto print:p-4 print:max-w-none print:text-sm">
        {/* Header */}
        <div className="text-center mb-6 print:mb-4">
          <h1 className="text-4xl font-bold mb-2 print:text-3xl">Scott Peterson</h1>
          <h2 className="text-xl text-gray-600 mb-3 print:text-lg">Full Stack Developer</h2>
          
          <div className="flex flex-wrap justify-center gap-3 text-sm print:gap-2 print:text-xs">
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4 print:h-3 print:w-3" />
              <span>scottpetersonSE@gmail.com</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 print:h-3 print:w-3" />
              <span>Connecticut, United States</span>
            </div>
            <div className="flex items-center gap-1">
              <Github className="h-4 w-4 print:h-3 print:w-3" />
              <span>github.com/Scottsdaaale</span>
            </div>
            <div className="flex items-center gap-1">
              <Linkedin className="h-4 w-4 print:h-3 print:w-3" />
              <span>linkedin.com/in/scotty-peterson</span>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-6 print:mb-4">
          <h3 className="text-xl font-bold mb-3 border-b-2 border-gray-200 pb-1 print:text-lg print:mb-2">Professional Summary</h3>
          <p className="text-gray-700 leading-relaxed print:text-sm">
            Full-stack developer who builds solutions that actually solve problems. Currently leading a $30K healthcare compliance platform 
            serving 5 states while managing websites that generate thousands of monthly visitors. Unique background transitioning from 
            customer service to development brings user-focused problem-solving to technical solutions. Specializes in building complete 
            business solutions from concept to deployment, with expertise in React, Next.js, Django, and AWS. Proven track record of 
            delivering high-impact projects that drive real business results.
          </p>
        </section>

        {/* Key Achievements */}
        <section className="mb-6 print:mb-4">
          <h3 className="text-xl font-bold mb-3 border-b-2 border-gray-200 pb-1 print:text-lg print:mb-2">Key Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 print:grid-cols-4 print:gap-2">
            <Card className="print:border print:border-gray-300">
              <CardContent className="p-3 print:p-2">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 print:text-base">$30K</div>
                  <div className="text-xs text-gray-600">Independent Project Value</div>
                </div>
              </CardContent>
            </Card>
            <Card className="print:border print:border-gray-300">
              <CardContent className="p-3 print:p-2">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 print:text-base">Thousands</div>
                  <div className="text-xs text-gray-600">Monthly Website Visitors</div>
                </div>
              </CardContent>
            </Card>
            <Card className="print:border print:border-gray-300">
              <CardContent className="p-3 print:p-2">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 print:text-base">Tens of K</div>
                  <div className="text-xs text-gray-600">Cost Savings via AI</div>
                </div>
              </CardContent>
            </Card>
            <Card className="print:border print:border-gray-300">
              <CardContent className="p-3 print:p-2">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 print:text-base">1,083+</div>
                  <div className="text-xs text-gray-600">Course Slides Modernized</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-6 print:mb-4">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-200 pb-1 print:text-lg print:mb-3">Professional Experience</h3>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-6 print:mb-4 print:break-inside-avoid">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold print:text-base">{exp.title}</h4>
                  <p className="text-gray-600 font-medium">{exp.company} • {exp.type}</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-3 print:text-sm print:mb-2">{exp.description}</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 print:text-xs print:space-y-0">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Technical Projects */}
        <section className="mb-6 print:mb-4">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-200 pb-1 print:text-lg print:mb-3">Technical Projects</h3>
          <div className="grid md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
            {projects.map((project, index) => (
              <div key={index} className="print:break-inside-avoid">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold print:text-base">{project.title}</h4>
                  <span className="text-sm text-gray-600">{project.date}</span>
                </div>
                <p className="text-gray-700 mb-2 print:text-sm">{project.description}</p>
                <div className="mb-2">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs print:border-gray-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <p className="text-xs text-blue-600 print:text-xs">{project.link}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-6 print:mb-4">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-200 pb-1 print:text-lg print:mb-3">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-3 print:gap-3">
            <div>
              <h4 className="font-semibold mb-2 print:text-sm">Frontend Development</h4>
              <div className="flex flex-wrap gap-1 mb-3">
                {skills.frontend.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs print:border-gray-400">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <h4 className="font-semibold mb-2 print:text-sm">Backend Development</h4>
              <div className="flex flex-wrap gap-1">
                {skills.backend.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs print:border-gray-400">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 print:text-sm">Cloud & Infrastructure</h4>
              <div className="flex flex-wrap gap-1 mb-3">
                {skills.cloud.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs print:border-gray-400">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <h4 className="font-semibold mb-2 print:text-sm">Development Tools</h4>
              <div className="flex flex-wrap gap-1">
                {skills.tools.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs print:border-gray-400">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="print:block hidden">
              <h4 className="font-semibold mb-2 print:text-sm">Specializations</h4>
              <div className="flex flex-wrap gap-1 mb-3">
                {skills.specialties.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs print:border-gray-400">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <h4 className="font-semibold mb-2 print:text-sm">Business Skills</h4>
              <div className="flex flex-wrap gap-1">
                {skills.business.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs print:border-gray-400">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6 print:mb-4">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-200 pb-1 print:text-lg print:mb-3">Education & Certifications</h3>
          {education.map((edu, index) => (
            <div key={index} className="mb-4 print:mb-3 print:break-inside-avoid">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h4 className="text-lg font-semibold print:text-base">{edu.degree}</h4>
                  <p className="text-gray-600 font-medium">{edu.institution}</p>
                </div>
                <span className="text-sm text-gray-600">{edu.duration}</span>
              </div>
              <p className="text-gray-700 mb-2 print:text-sm">{edu.description}</p>
              <ul className="list-disc list-inside text-gray-700 text-sm print:text-xs">
                {edu.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Print-specific footer */}
        <div className="print:block hidden text-center text-xs text-gray-500 mt-6">
          <p>This resume was generated from scottpeterson.dev</p>
        </div>
      </div>
    </>
  );
} 
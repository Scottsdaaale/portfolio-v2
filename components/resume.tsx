"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Download } from "lucide-react";

export function Resume() {
  const experiences = [
    {
      title: "Technical Marketing & Lifecycle Engineering",
      company: "Training & eTracking Solutions",
      duration: "Jul 2024 - Jun 2026",
      location: "Remote",
      type: "Full-time",
      description: "Sole owner of marketing technology at a B2B company. Built the entire lifecycle automation program from nothing: no prior automation, no engineering team, no existing infrastructure.",
      achievements: [
        "Designed and built lifecycle marketing program connecting Brevo, Pipeline CRM, Stripe, and Calendly via API integration and webhook orchestration",
        "Designed B2B lead journey covering form capture, attribution tagging, demo nurture email sequences, and Calendly-driven booking with cross-system attribution preservation",
        "Built behavioral trigger sequences that identify leads who click a demo booking link without completing the booking, then run an automated recovery sequence until they book or opt out: 1,200+ contacts processed",
        "Built B2C post-purchase email automation with merge-not-retrigger logic for customers who purchase multiple times mid-sequence",
        "Built webinar registration system handling 7 webinars and 1,900+ registrations, with audience segmentation, multi-webinar deduplication, and confirmation automation including calendar adds and progressive profiling surveys",
        "Program delivered 187 campaigns to 2M+ recipients last year",
        "Built API integrations, webhook handlers, and landing pages in Cursor using maintained context documents for company styling, brand guidelines, and integration patterns",
        "Built responsive email templates in MJML with dynamic personalization and variable-based content",
        "Managed AWS infrastructure (Lambda, S3, SES) for marketing automation and email delivery",
        "Designed and documented full lifecycle architecture in Figma for cross-team reference",
        "Built a suite of internal tools in Next.js + Flask: finance dashboards connected to Mercury, Stripe, and Pipeline CRM; Freshdesk analytics; email automation monitoring; invoice generation; and weekly business review reporting"
      ]
    },
    {
      title: "Contract Web Developer", 
      company: "Liquid XYZ",
      duration: "Apr 2023 - Jul 2024",
      location: "Remote",
      type: "Contract",
      description: "Built and maintained yourtrainingprovider.com full stack (React + Flask) as sole developer.",
      achievements: [
        "Built and maintained the full marketing site: blog, webinar registration pages, lead capture forms, and expert directory",
        "Built a custom in-house CMS: blog post creation, ad creation and injection into blog content, tag-based training recommendations, and expert profile management",
        "Implemented frontend functionality using React, JavaScript, HTML, and CSS"
      ]
    }
  ];

  const projects = [
    {
      title: "MyMedPath",
      date: "2025",
      description: "Production SaaS for dental practice licensure and compliance management, built completely solo. Multi-tenant org management with role-based access, AI-powered document analysis, automated licensure tracking with real-time dashboards, and state compliance database",
      technologies: ["Next.js", "PostgreSQL", "AWS Amplify", "AI Document Analysis", "Multi-tenant Architecture"],
      link: "mymedpath.com"
    },
    {
      title: "Lifecycle Automation Program", 
      date: "2024 - 2026",
      description: "Full B2B/B2C lifecycle program connecting four platforms via webhook and API orchestration: lead capture, demo nurture, booking recovery, post-purchase onboarding, and renewal flows. 187 campaigns to 2M+ recipients last year",
      technologies: ["Brevo", "Pipeline CRM", "Stripe", "Calendly", "Webhooks", "REST APIs"],
      link: null
    },
    {
      title: "Webinar Registration System",
      date: "2024 - 2026",
      description: "Registration infrastructure handling 7 webinars and 1,900+ registrations with audience segmentation, multi-webinar deduplication, calendar adds, and progressive profiling surveys",
      technologies: ["Brevo", "AWS Lambda", "Webhooks", "MJML"],
      link: null
    },
    {
      title: "Internal Tools Suite",
      date: "2024 - 2026", 
      description: "Finance dashboards pulling live data from Mercury, Stripe, and Pipeline CRM, Freshdesk analytics, email automation monitoring, invoice generation, and automated weekly business review reporting",
      technologies: ["Next.js", "Flask", "Mercury API", "Stripe API", "Freshdesk API"],
      link: null
    },
    {
      title: "Marketing Site + Custom CMS",
      date: "2023 - 2024",
      description: "Built yourtrainingprovider.com full stack with a custom in-house CMS: blog management, ad injection into blog content, tag-based training recommendations, and expert profile management",
      technologies: ["React", "Flask", "Custom CMS", "Lead Capture", "SEO"],
      link: "yourtrainingprovider.com"
    },
    {
      title: "Transactional Email Infrastructure",
      date: "2024",
      description: "Built transactional email delivery infrastructure for the company LMS using AWS SES, SQS, and Lambda, supporting onboarding of the first 100 users",
      technologies: ["AWS SES", "AWS SQS", "AWS Lambda"],
      link: null
    }
  ];

  const skills = {
    marketing: ["Lifecycle Marketing", "Marketing Automation", "Marketing Operations", "Email Marketing", "Customer Segmentation", "Attribution Tracking", "Behavioral Triggers", "Marketing Technology (MarTech)"],
    platforms: ["Brevo", "Pipeline CRM", "Stripe", "Calendly", "Zapier", "Freshdesk", "Mercury", "MJML"],
    languages: ["Python", "JavaScript", "TypeScript", "Next.js", "React", "Flask", "HTML", "CSS", "Tailwind CSS"], 
    integration: ["REST APIs", "Webhooks", "Webhook Orchestration", "API Integration", "Cross-System Attribution", "Data Sync"],
    cloud: ["AWS Lambda", "AWS S3", "AWS SES", "AWS SQS", "AWS Amplify", "PostgreSQL", "SQL"],
    ai: ["Claude", "Cursor", "Prompt Engineering", "AI-Assisted Development", "Context Documents", "Integration Templates"]
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
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = '/scotty-peterson-resume.pdf';
    link.download = 'Scotty Peterson - Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <style jsx global>{`
        @media print {
          @page {
            margin: 0.5in;
            size: auto;
          }
          
          /* Remove browser-generated headers and footers */
          body::before,
          body::after {
            display: none !important;
          }
        }
      `}</style>
      <div 
        className="min-h-screen"
        style={{
          '--background': 'oklch(1 0 0)',
          '--foreground': 'oklch(0.145 0 0)',
          '--card': 'oklch(1 0 0)',
          '--card-foreground': 'oklch(0.145 0 0)',
          '--popover': 'oklch(1 0 0)',
          '--popover-foreground': 'oklch(0.145 0 0)',
          '--primary': 'oklch(0.205 0 0)',
          '--primary-foreground': 'oklch(0.985 0 0)',
          '--secondary': 'oklch(0.97 0 0)',
          '--secondary-foreground': 'oklch(0.205 0 0)',
          '--muted': 'oklch(0.97 0 0)',
          '--muted-foreground': 'oklch(0.556 0 0)',
          '--accent': 'oklch(0.97 0 0)',
          '--accent-foreground': 'oklch(0.205 0 0)',
          '--destructive': 'oklch(0.577 0.245 27.325)',
          '--border': 'oklch(0.922 0 0)',
          '--input': 'oklch(0.922 0 0)',
          '--ring': 'oklch(0.708 0 0)',
          backgroundColor: 'white',
          color: 'black'
        } as React.CSSProperties}
      >
      <div className="max-w-4xl mx-auto p-6 bg-white text-black print:p-0 print:max-w-none">
        {/* Floating Print Button */}
        <Button
          onClick={handlePrint}
          className="fixed bottom-6 right-6 z-50 print:hidden shadow-lg bg-black text-white hover:bg-gray-800"
          size="lg"
        >
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </Button>

        {/* Header */}
        <div className="text-center mb-6 print:mb-4">
          <h1 className="text-4xl font-bold mb-2 print:text-3xl text-black">Scotty Peterson</h1>
          <h2 className="text-xl text-gray-600 mb-3 print:text-lg">Lifecycle Marketing Engineer | Marketing Technologist</h2>
          
          <div className="flex flex-wrap justify-center gap-3 text-sm print:gap-2 print:text-xs text-black">
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4 print:h-3 print:w-3" />
              <span>scottpetersonSE@gmail.com</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 print:h-3 print:w-3" />
              <span>New Haven, CT</span>
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
          <h3 className="text-xl font-bold mb-3 border-b-2 border-gray-200 pb-1 print:text-lg print:mb-2 text-black">Professional Summary</h3>
          <p className="text-gray-700 leading-relaxed print:text-sm">
            Lifecycle marketing engineer who designs and ships the technical systems behind marketing automation programs. End-to-end ownership of lead capture, 
            CRM integration, email automation, post-purchase nurture sequences, and webinar registration infrastructure. Connects marketing platforms, CRMs, 
            payment systems, and scheduling tools into automated customer journeys that run without manual intervention. Leans heavily on AI-assisted development 
            to ship at the pace of a small engineering team.
          </p>
        </section>

        {/* Key Achievements */}
        <section className="mb-6 print:mb-4">
          <h3 className="text-xl font-bold mb-3 border-b-2 border-gray-200 pb-1 print:text-lg print:mb-2 text-black">Key Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 print:grid-cols-4 print:gap-2">
            <Card className="print:border print:border-gray-300 bg-white border-gray-200">
              <CardContent className="p-3 print:p-2">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 print:text-base">187</div>
                  <div className="text-xs text-gray-600">Campaigns Last Year</div>
                </div>
              </CardContent>
            </Card>
            <Card className="print:border print:border-gray-300 bg-white border-gray-200">
              <CardContent className="p-3 print:p-2">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 print:text-base">2M+</div>
                  <div className="text-xs text-gray-600">Email Recipients</div>
                </div>
              </CardContent>
            </Card>
            <Card className="print:border print:border-gray-300 bg-white border-gray-200">
              <CardContent className="p-3 print:p-2">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 print:text-base">1,900+</div>
                  <div className="text-xs text-gray-600">Webinar Registrations</div>
                </div>
              </CardContent>
            </Card>
            <Card className="print:border print:border-gray-300 bg-white border-gray-200">
              <CardContent className="p-3 print:p-2">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 print:text-base">1,200+</div>
                  <div className="text-xs text-gray-600">Leads Through Recovery Flows</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-6 print:mb-4">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-200 pb-1 print:text-lg print:mb-3 text-black">Professional Experience</h3>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-6 print:mb-4 print:break-inside-avoid">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold print:text-base text-black">{exp.title}</h4>
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

        {/* Early Career Highlights */}
        <section className="mb-6 print:mb-4">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-200 pb-1 print:text-lg print:mb-3 text-black">Early Career Highlights</h3>
          <div className="print:break-inside-avoid">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg font-semibold print:text-base text-black">Business Operations & Customer Success</h4>
                <p className="text-gray-600 font-medium">Goodwill Industries & Urban Outfitters</p>
              </div>
              <div className="text-right text-sm text-gray-600">
                <p>2016 - 2022</p>
                <p>New York/Connecticut</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3 print:text-sm print:mb-2">
              Customer-facing operations background that directly informs how I design customer journeys and lifecycle programs today.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 print:text-xs print:space-y-0">
              <li>Helped build Goodwill&apos;s ecommerce department from the ground up; team ranked among the highest earners nationally at the end of year one (2020 - 2022)</li>
              <li>Sales and customer service at Urban Outfitters across New York and Chicago (2016 - 2020)</li>
              <li>Developed deep understanding of the customer journey and where it breaks down</li>
            </ul>
          </div>
        </section>

        {/* Technical Projects */}
        <section className="mb-6 print:mb-4">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-200 pb-1 print:text-lg print:mb-3 text-black">Technical Projects</h3>
          <div className="grid md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
            {projects.map((project, index) => (
              <div key={index} className="print:break-inside-avoid">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold print:text-base text-black">{project.title}</h4>
                  <span className="text-sm text-gray-600">{project.date}</span>
                </div>
                <p className="text-gray-700 mb-2 print:text-sm">{project.description}</p>
                <div className="mb-2">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs print:border-gray-400 bg-white border-gray-300 text-gray-700">
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
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-200 pb-1 print:text-lg print:mb-3 text-black">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4">
            <div>
              <h4 className="font-semibold mb-2 print:text-sm text-black">Lifecycle & Marketing Automation</h4>
              <div className="flex flex-wrap gap-1 mb-4">
                {skills.marketing.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs print:border-gray-400 bg-white border-gray-300 text-gray-700">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <h4 className="font-semibold mb-2 print:text-sm text-black">Martech Platforms</h4>
              <div className="flex flex-wrap gap-1 mb-4">
                {skills.platforms.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs print:border-gray-400 bg-white border-gray-300 text-gray-700">
                    {skill}
                  </Badge>
                ))}
              </div>

              <h4 className="font-semibold mb-2 print:text-sm text-black">Languages & Frameworks</h4>
              <div className="flex flex-wrap gap-1">
                {skills.languages.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs print:border-gray-400 bg-white border-gray-300 text-gray-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 print:text-sm text-black">APIs & Integration</h4>
              <div className="flex flex-wrap gap-1 mb-4">
                {skills.integration.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs print:border-gray-400 bg-white border-gray-300 text-gray-700">
                    {skill}
                  </Badge>
                ))}
              </div>

              <h4 className="font-semibold mb-2 print:text-sm text-black">Cloud & Data</h4>
              <div className="flex flex-wrap gap-1 mb-4">
                {skills.cloud.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs print:border-gray-400 bg-white border-gray-300 text-gray-700">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <h4 className="font-semibold mb-2 print:text-sm text-black">AI-Assisted Development</h4>
              <div className="flex flex-wrap gap-1">
                {skills.ai.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs print:border-gray-400 bg-white border-gray-300 text-gray-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6 print:mb-4">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-200 pb-1 print:text-lg print:mb-3 text-black">Education & Certifications</h3>
          {education.map((edu, index) => (
            <div key={index} className="mb-4 print:mb-3 print:break-inside-avoid">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h4 className="text-lg font-semibold print:text-base text-black">{edu.degree}</h4>
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
      </div>
    </div>
    </>
  );
} 
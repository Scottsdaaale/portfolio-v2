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
        "Leading enterprise healthcare compliance platform serving 5 states using Next.js 15, Django, PostgreSQL, and AWS",
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
    }
  ];

  const projects = [
    {
      title: "Healthcare Compliance Platform",
      date: "2025 - Present",
      description: "Leading development of multi-tenant SaaS application serving healthcare organizations across 5 states with comprehensive compliance tracking and reporting",
      technologies: ["Next.js 15", "Django", "PostgreSQL", "AWS", "Multi-tenant Architecture"],
      link: null
    },
    {
      title: "Company Website Development", 
      date: "2024 - Present",
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
    frontend: ["React", "React.js", "Next.js", "NextJS", "JavaScript", "JavaScript ES6+", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "React Hooks", "Redux", "Vue.js", "Angular"],
    backend: ["Django", "Python", "Ruby on Rails", "Node.js", "NodeJS", "Express.js", "REST APIs", "RESTful Services", "API Development", "GraphQL", "PostgreSQL", "MySQL", "MongoDB", "SQL", "NoSQL"],
    cloud: ["AWS", "Amazon Web Services", "EC2", "S3", "Lambda", "RDS", "Vercel", "Heroku", "Database Management", "Multi-tenant Architecture", "Cloud Computing", "Serverless"], 
    tools: ["Git", "GitHub", "GitLab", "VS Code", "Cursor IDE", "GitHub Copilot", "Postman", "Jira", "Confluence", "Figma", "Docker", "CI/CD", "Agile", "Scrum"],
    specialties: ["SCORM", "LMS Architecture", "LMS Development", "AI Integration", "AI Automation", "ChatGPT API", "OpenAI API", "Claude API", "Machine Learning", "Prompt Engineering", "AI-Assisted Development", "E-learning", "Storyline360", "Multi-platform APIs", "SaaS Development", "Healthcare Compliance"],
    business: ["E-commerce", "Lead Generation", "Customer Service", "Project Management", "Analytics", "SEO", "CRO", "Digital Marketing", "Business Intelligence", "Data Analysis", "AI Process Optimization", "Workflow Automation"]
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
    link.href = '/Scotty Peterson - Resume _ Full Stack Developer.pdf';
    link.download = 'Scotty Peterson - Resume _ Full Stack Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
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
          <h2 className="text-xl text-gray-600 mb-3 print:text-lg">Full Stack Developer</h2>
          
          <div className="flex flex-wrap justify-center gap-3 text-sm print:gap-2 print:text-xs text-black">
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
          <h3 className="text-xl font-bold mb-3 border-b-2 border-gray-200 pb-1 print:text-lg print:mb-2 text-black">Professional Summary</h3>
          <p className="text-gray-700 leading-relaxed print:text-sm">
            Full-stack software engineer and web developer who builds scalable solutions that solve real business problems. Currently leading an enterprise healthcare compliance SaaS platform 
            serving 5 states while managing high-traffic websites generating thousands of monthly visitors. Proven expertise in modern JavaScript frameworks (React, Next.js), 
            backend development (Django, Python), cloud infrastructure (AWS), and AI integration workflows. Unique background transitioning from customer service to software development brings 
            user-focused problem-solving to technical solutions. Specializes in building complete end-to-end business applications from concept to production deployment, 
            with deep experience in full-stack web development, API development, AI automation, and database design. Leverages AI-assisted development tools and prompt engineering 
            to deliver high-impact software projects that drive measurable business results and cost savings.
          </p>
        </section>

        {/* Key Achievements */}
        <section className="mb-6 print:mb-4">
          <h3 className="text-xl font-bold mb-3 border-b-2 border-gray-200 pb-1 print:text-lg print:mb-2 text-black">Key Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 print:grid-cols-4 print:gap-2">
            <Card className="print:border print:border-gray-300 bg-white border-gray-200">
              <CardContent className="p-3 print:p-2">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 print:text-base">Enterprise</div>
                  <div className="text-xs text-gray-600">Healthcare Platform</div>
                </div>
              </CardContent>
            </Card>
            <Card className="print:border print:border-gray-300 bg-white border-gray-200">
              <CardContent className="p-3 print:p-2">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 print:text-base">Thousands</div>
                  <div className="text-xs text-gray-600">Monthly Website Visitors</div>
                </div>
              </CardContent>
            </Card>
            <Card className="print:border print:border-gray-300 bg-white border-gray-200">
              <CardContent className="p-3 print:p-2">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 print:text-base">Tens of K</div>
                  <div className="text-xs text-gray-600">Cost Savings via AI</div>
                </div>
              </CardContent>
            </Card>
            <Card className="print:border print:border-gray-300 bg-white border-gray-200">
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
              Developed customer-focused problem-solving approach and business operations expertise that directly informs development methodology and user experience design.
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 print:text-xs print:space-y-0">
              <li>Helped build Goodwill&apos;s e-commerce department from ground up, reaching top national rankings in first year</li>
              <li>Successfully operated within tight deadlines in fast-paced, high-growth environment</li>
              <li>Managed comprehensive customer service operations across multiple channels and store locations</li>
              <li>Developed deep understanding of customer journey and user experience pain points</li>
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
              <h4 className="font-semibold mb-2 print:text-sm text-black">Frontend Development</h4>
              <div className="flex flex-wrap gap-1 mb-4">
                {skills.frontend.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs print:border-gray-400 bg-white border-gray-300 text-gray-700">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <h4 className="font-semibold mb-2 print:text-sm text-black">Backend Development</h4>
              <div className="flex flex-wrap gap-1 mb-4">
                {skills.backend.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs print:border-gray-400 bg-white border-gray-300 text-gray-700">
                    {skill}
                  </Badge>
                ))}
              </div>

              <h4 className="font-semibold mb-2 print:text-sm text-black">Cloud & Infrastructure</h4>
              <div className="flex flex-wrap gap-1">
                {skills.cloud.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs print:border-gray-400 bg-white border-gray-300 text-gray-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 print:text-sm text-black">Development Tools</h4>
              <div className="flex flex-wrap gap-1 mb-4">
                {skills.tools.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs print:border-gray-400 bg-white border-gray-300 text-gray-700">
                    {skill}
                  </Badge>
                ))}
              </div>

              <h4 className="font-semibold mb-2 print:text-sm text-black">Specializations</h4>
              <div className="flex flex-wrap gap-1 mb-4">
                {skills.specialties.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs print:border-gray-400 bg-white border-gray-300 text-gray-700">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <h4 className="font-semibold mb-2 print:text-sm text-black">Business Skills</h4>
              <div className="flex flex-wrap gap-1">
                {skills.business.map((skill, index) => (
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

        {/* Print-specific footer */}
        <div className="print:block hidden text-center text-xs text-gray-500 mt-6">
          <p>This resume was generated from scottypeterson.net</p>
        </div>
      </div>
    </div>
  );
} 
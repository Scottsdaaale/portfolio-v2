"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitContactForm } from "@/lib/actions";
import { trackContactFormSubmit, trackSocialClick } from "@/lib/analytics";
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Send,
  CheckCircle,
  ExternalLink,
  Coffee,
  AlertCircle,
  Instagram
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function Contact() {
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('company', data.company || '');
        formData.append('subject', data.subject);
        formData.append('message', data.message);

        const result = await submitContactForm(formData);

        if (result.success) {
          // Track successful form submission
          trackContactFormSubmit();
          
          setSubmitMessage({
            type: 'success',
            message: result.message
          });
          reset();
        } else {
          setSubmitMessage({
            type: 'error',
            message: result.message
          });
        }

        // Clear message after 5 seconds
        setTimeout(() => setSubmitMessage(null), 5000);
      } catch {
        setSubmitMessage({
          type: 'error',
          message: 'Something went wrong. Please try again.'
        });
        setTimeout(() => setSubmitMessage(null), 5000);
      }
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Scottsdaaale",
      icon: Github,
      description: "View my code and projects"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/scotty-peterson/",
      icon: Linkedin,
      description: "Professional background"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/scottsdaaale",
      icon: Instagram,
      description: "Follow my journey"
    },
    {
      name: "Linktree",
      url: "https://linktr.ee/scottsdaaale",
      icon: ExternalLink,
      description: "All my links in one place"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "scottpetersonSE@gmail.com",
      link: "mailto:scottpetersonSE@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Connecticut, United States",
      link: null
    },
    {
      icon: Coffee,
      label: "Coffee Chat",
      value: "Always down to chat about interesting projects",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project? I&apos;m always interested in new opportunities 
            and interesting challenges. Let&apos;s talk about how we can solve your problems together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`mb-6 p-4 border rounded-lg flex items-center gap-2 ${
                      submitMessage.type === 'success'
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400'
                        : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400'
                    }`}
                  >
                    {submitMessage.type === 'success' ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <AlertCircle className="h-5 w-5" />
                    )}
                    <span>{submitMessage.message}</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Your name"
                        className={errors.name ? "border-red-500" : ""}
                        disabled={isPending}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="your@email.com"
                        className={errors.email ? "border-red-500" : ""}
                        disabled={isPending}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      {...register("company")}
                      placeholder="Your company"
                      disabled={isPending}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      placeholder="What's this about?"
                      className={errors.subject ? "border-red-500" : ""}
                      disabled={isPending}
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-500">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tell me about your project or what you'd like to discuss..."
                      rows={5}
                      disabled={isPending}
                      className={`w-full px-3 py-2 border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 ${
                        errors.message ? "border-red-500" : "border-input"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">{item.label}</p>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect with me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => trackSocialClick(social.name)}
                    className="flex items-center justify-between p-3 rounded-lg border hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <social.icon className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{social.name}</p>
                        <p className="text-sm text-muted-foreground">{social.description}</p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </motion.a>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
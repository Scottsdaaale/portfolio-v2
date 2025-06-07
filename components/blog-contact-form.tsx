"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitContactForm } from "@/lib/actions";
import { trackContactFormSubmit } from "@/lib/analytics";
import { 
  Send,
  CheckCircle,
  AlertCircle,
  MessageCircle
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function BlogContactForm() {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-12 pt-8 border-t"
    >
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Interested in working together?
          </CardTitle>
          <p className="text-muted-foreground">
            I&apos;d love to hear about your project. Drop me a message and let&apos;s discuss how I can help.
          </p>
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
                <Label htmlFor="blog-name">Name *</Label>
                <Input
                  id="blog-name"
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
                <Label htmlFor="blog-email">Email *</Label>
                <Input
                  id="blog-email"
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
              <Label htmlFor="blog-company">Company (Optional)</Label>
              <Input
                id="blog-company"
                {...register("company")}
                placeholder="Your company"
                disabled={isPending}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="blog-subject">Subject *</Label>
              <Input
                id="blog-subject"
                {...register("subject")}
                placeholder="What would you like to discuss?"
                className={errors.subject ? "border-red-500" : ""}
                disabled={isPending}
              />
              {errors.subject && (
                <p className="text-sm text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="blog-message">Message *</Label>
              <textarea
                id="blog-message"
                {...register("message")}
                placeholder="Tell me about your project or what you'd like to discuss..."
                rows={4}
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
  );
} 
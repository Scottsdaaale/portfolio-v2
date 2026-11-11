"use server";

import { z } from "zod";
import { Resend } from "resend";
import { headers } from "next/headers";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const contactFormToEmail = (
  process.env.CONTACT_FORM_TO_EMAIL ?? "scottpetersonse@gmail.com"
).toLowerCase();

const contactFormFromEmail =
  process.env.CONTACT_FORM_FROM_EMAIL ?? "portfolio-inquiry@resend.dev";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(254),
  company: z.string().trim().max(100).optional(),
  subject: z.string().trim().min(5, "Subject must be at least 5 characters").max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000),
});

// Escape user input before it goes into the HTML email body.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Subjects are a single header line: drop CR/LF and other control chars.
function toHeaderSafe(value: string): string {
  return value.replace(/[\u0000-\u001f\u007f]+/g, " ").trim();
}

// Best-effort per-IP rate limit. State lives in this server instance's
// memory, so it resets on cold starts and isn't shared across instances,
// but it does stop a single client from hammering the form.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (recent.length >= RATE_LIMIT_MAX) {
    submissionsByIp.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissionsByIp.set(ip, recent);
  if (submissionsByIp.size > 10_000) {
    for (const [key, times] of submissionsByIp) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) submissionsByIp.delete(key);
    }
  }
  return false;
}

const SUCCESS_MESSAGE = "Message sent successfully! I'll get back to you soon.";

export async function submitContactForm(formData: FormData) {
  try {
    // Honeypot: real visitors never see this field. Pretend it worked.
    const honeypot = formData.get("website");
    if (typeof honeypot === "string" && honeypot.trim() !== "") {
      return { success: true, message: SUCCESS_MESSAGE };
    }

    const headerList = await headers();
    const ip =
      headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headerList.get("x-real-ip") ||
      "unknown";
    if (isRateLimited(ip)) {
      return {
        success: false,
        message: "Too many messages. Please wait a few minutes and try again.",
      };
    }

    const field = (key: string) => {
      const value = formData.get(key);
      return typeof value === "string" ? value : "";
    };

    // Parse and validate form data
    const formValues = {
      name: field("name"),
      email: field("email"),
      company: field("company") || undefined,
      subject: field("subject"),
      message: field("message"),
    };

    const validatedData = contactSchema.parse(formValues);
    const safe = {
      name: escapeHtml(validatedData.name),
      email: escapeHtml(validatedData.email),
      company: validatedData.company ? escapeHtml(validatedData.company) : "",
      subject: escapeHtml(validatedData.subject),
      message: escapeHtml(validatedData.message).replace(/\r?\n/g, "<br>"),
    };

    // Skip email sending if no API key (local dev)
    if (!resend) {
      console.log("📧 Email would be sent (no API key configured):", validatedData);
      return { success: true, message: SUCCESS_MESSAGE };
    }

    // Send email using Resend (returns { data, error } and does not throw on API errors)
    const { data: emailData, error: sendError } = await resend.emails.send({
      from: contactFormFromEmail,
      to: contactFormToEmail,
      replyTo: validatedData.email,
      subject: `Portfolio Contact: ${toHeaderSafe(validatedData.subject)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${safe.name}</p>
            <p><strong>Email:</strong> ${safe.email}</p>
            <p><strong>Company:</strong> ${safe.company || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${safe.subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
              ${safe.message}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
            <p>This message was sent from your portfolio contact form.</p>
            <p>Reply directly to this email to respond to ${safe.name}.</p>
          </div>
        </div>
      `,
    });

    if (sendError) {
      console.error("Resend API error:", sendError);
      return {
        success: false,
        message: "Failed to send message. Please try again or email me directly.",
      };
    }

    console.log("Contact form email sent:", emailData?.id);
    return { success: true, message: SUCCESS_MESSAGE };
  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        message: "Please check your form data.",
        errors: error.issues 
      };
    }
    
    return { 
      success: false, 
      message: "Failed to send message. Please try again or email me directly." 
    };
  }
} 
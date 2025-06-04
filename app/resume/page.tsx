import { Resume } from "@/components/resume";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scotty Peterson - Resume | Full Stack Developer",
  description: "Professional resume of Scotty Peterson, Full Stack Developer specializing in React, Next.js, Django, and AWS solutions.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResumePage() {
  return <Resume />;
} 
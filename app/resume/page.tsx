import { Resume } from "@/components/resume";
import { Navigation } from "@/components/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scotty Peterson - Resume | Lifecycle Marketing Engineer",
  description: "Resume of Scotty Peterson, lifecycle marketing engineer and marketing technologist. Marketing automation, API and webhook orchestration, email programs, and internal tooling.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Resume />
    </div>
  );
} 
import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { LabContent } from "@/components/lab-content";

export const metadata: Metadata = {
  title: "Lab - Scotty Peterson | Marketing Technologist",
  description:
    "Small, live pieces of the lifecycle automation systems Scotty Peterson builds: an event trace, recovery loop, merge logic, and more, running on the page instead of described on it.",
  alternates: {
    canonical: "/lab",
  },
};

export default function LabPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <LabContent />
    </div>
  );
}

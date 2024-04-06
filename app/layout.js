import Header from "./components/global/Header";
import { Toaster } from "@/components/ui/toaster"

import "./globals.css";


export const metadata = {
  title: "Scott Peterson's Portfolio",
  description: "Hello! I'm Scotty, a passionate web developer specializing in creating responsive and user-friendly websites. Let's collaborate on your next web project!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}

"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggleInstant() {
  const { setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        // Toggle between light and dark
        const html = document.documentElement;
        if (html.classList.contains('dark')) {
          html.classList.remove('dark');
          setTheme('light');
        } else {
          html.classList.add('dark');
          setTheme('dark');
        }
      }}
    >
      {/* Show sun in light mode, moon in dark mode */}
      <Sun className="h-5 w-5 block dark:hidden" />
      <Moon className="h-5 w-5 hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
} 
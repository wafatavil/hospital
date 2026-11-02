"use client";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { useSiteTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useSiteTheme();
  const { text } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={
        theme === "dark" ? text.nav.lightTheme : text.nav.darkTheme
      }
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
}

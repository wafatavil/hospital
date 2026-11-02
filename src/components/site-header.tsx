"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import { Brain, Menu, Phone, X } from "lucide-react";
import { LanguageSelect } from "@/components/language-select";
import { useLanguage } from "@/components/language-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const navigationLinks = [
  { href: "#hakkimda", labelKey: "about" },
  { href: "#uzmanlik", labelKey: "specialties" },
  { href: "#bilgi", labelKey: "guide" },
  { href: "#iletisim", labelKey: "contact" },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { text } = useLanguage();

  function handleAppointmentClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setIsMenuOpen(false);

    const contactSection = document.getElementById("iletisim");
    if (!contactSection) return;

    window.history.pushState(null, "", "#iletisim");
    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#anasayfa"
          className="flex items-center gap-3"
          aria-label={text.nav.home}
        >
          <span className="grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground">
            <Brain className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-tight">
              {text.hero.title}
            </span>
            <span className="mt-1 block text-[10px] tracking-[.17em] text-muted-foreground">
              {text.hero.specialty}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label={text.nav.mainMenu}
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-muted-foreground transition hover:text-primary"
            >
              {text.nav[link.labelKey]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSelect />
          <ThemeToggle />
          <Button asChild size="sm">
            <a href="#iletisim" onClick={handleAppointmentClick}>
              <Phone className="size-4" />
              {text.nav.appointment}
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <LanguageSelect />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen ? text.nav.closeMenu : text.nav.openMenu
            }
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className="border-t border-border bg-background px-5 py-4 md:hidden"
          aria-label={text.nav.mobileMenu}
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-xl px-3 py-3 text-sm font-medium hover:bg-accent"
            >
              {text.nav[link.labelKey]}
            </Link>
          ))}
          <Button asChild className="mt-3 w-full">
            <a href="#iletisim" onClick={handleAppointmentClick}>
              {text.nav.appointmentRequest}
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}

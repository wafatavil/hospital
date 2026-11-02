"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  Building2,
  GraduationCap,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { Specialties } from "@/components/specialties";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const patientArticleIcons = [CalendarDays, BookOpen, ShieldCheck];

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

function SectionIntro({
  eyebrow,
  title,
  description,
}: SectionIntroProps) {
  return (
    <Reveal>
      <p className="text-xs font-bold tracking-[.2em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  );
}

function HeroSection() {
  const { text } = useLanguage();

  return (
    <section id="anasayfa" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-48 -top-44 size-[600px] rounded-full bg-sky-100/70 blur-3xl dark:bg-sky-900/20" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.04fr_.96fr] lg:gap-14 lg:py-20">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-3.5 py-2 text-[10px] font-semibold tracking-[.12em] text-primary">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            {text.hero.badge}
          </div>

          <h1 className="mt-7 max-w-2xl text-[2.75rem] font-semibold leading-[1.08] tracking-[-.045em] sm:text-6xl">
            {text.hero.titleStart}{" "}
            <span className="text-primary">{text.hero.titleAccent}</span>{" "}
            {text.hero.titleEnd}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
            {text.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="#iletisim">
                <CalendarDays className="size-4" />
                {text.hero.appointment}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#uzmanlik">
                {text.hero.explore}
                <ArrowDown className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <BadgeCheck className="size-4 text-primary" />
              {text.hero.benefitOne}
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" />
              {text.hero.benefitTwo}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-sky-100 to-transparent dark:from-sky-950/50" />

            <div className="relative aspect-[.96] overflow-hidden rounded-[2rem] bg-[#e7f1f3]">
              <Image
                src={`${basePath}/images/abdulhalim-tavil-surgery.png`}
                alt={text.hero.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover object-[center_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102b3c]/65 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
                <p className="text-[10px] font-semibold tracking-[.2em] text-white/75">
                  {text.hero.specialty}
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight">
                  {text.hero.title}
                </p>
                <p className="mt-1 text-sm text-white/75">
                  {text.hero.role}
                </p>
              </div>

              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-3 py-2 text-[10px] font-semibold text-slate-700 backdrop-blur">
                <span className="size-2 rounded-full bg-emerald-500" />
                {text.hero.badgeText}
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutSection() {
  const { text } = useLanguage();

  return (
    <section
      id="hakkimda"
      className="scroll-mt-24 py-24 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal>
          <p className="text-xs font-bold tracking-[.2em] text-primary">
            {text.about.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {text.about.title}
          </h2>
          <p className="mt-6 text-sm leading-7 text-muted-foreground">
            {text.about.paragraphOne}
          </p>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {text.about.paragraphTwo}
          </p>
          <Button asChild variant="outline" className="mt-7">
            <a
              href="https://www.linkedin.com/in/abdulhalim-tavil-85a22830b/"
              target="_blank"
              rel="noreferrer"
            >
              {text.about.linkedin}
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-4">
            <div className="rounded-3xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="size-6 shrink-0 text-primary" />
                <h3 className="text-sm font-semibold">
                  {text.about.educationTitle}
                </h3>
              </div>

              <div className="mt-5 grid gap-6 sm:grid-cols-[1fr_.85fr] sm:items-stretch">
                <ol className="timeline-list space-y-5 border-l border-border ps-4">
                  <li className="relative">
                    <span className="timeline-marker absolute -left-[21px] top-1 size-2 rounded-full bg-primary" />
                    <p className="text-xs font-semibold">
                      {text.about.medicalDegree}
                    </p>
                    <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
                      {text.about.medicalDegreeDetails}
                    </p>
                  </li>
                  <li className="relative">
                    <span className="timeline-marker absolute -left-[21px] top-1 size-2 rounded-full bg-primary" />
                    <p className="text-xs font-semibold">
                      {text.about.residency}
                    </p>
                    <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
                      {text.about.residencyDetails}
                    </p>
                  </li>
                  <li className="relative">
                    <span className="timeline-marker absolute -left-[21px] top-1 size-2 rounded-full bg-primary" />
                    <p className="text-xs font-semibold">
                      {text.about.currentHospital}
                    </p>
                    <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
                      {text.about.currentHospitalDetails}
                    </p>
                  </li>
                </ol>

                <div className="relative min-h-[260px] overflow-hidden rounded-2xl bg-secondary">
                  <Image
                    src={`${basePath}/images/abdulhalim-tavil-microscope.png`}
                    alt={text.about.imageAlt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 320px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-secondary p-5">
              <p className="text-3xl font-semibold tracking-tight text-primary">
                27
              </p>
              <p className="mt-2 text-[10px] font-medium text-muted-foreground">
                {text.about.experience}
              </p>
            </div>
            <div className="rounded-2xl bg-secondary p-5">
              <p className="text-3xl font-semibold tracking-tight text-primary">
                600+
              </p>
              <p className="mt-2 text-[10px] font-medium text-muted-foreground">
                {text.about.operations}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PatientGuideSection() {
  const { text } = useLanguage();

  return (
    <section
      id="bilgi"
      className="scroll-mt-24 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionIntro
            eyebrow={text.guide.eyebrow}
            title={text.guide.title}
            description={text.guide.intro}
          />
          <Link
            href="#sss"
            className="inline-flex items-center gap-2 pb-1 text-xs font-semibold text-primary"
          >
            {text.guide.allQuestions}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_.85fr]">
          <div className="grid gap-4 sm:grid-cols-3">
            {text.guide.articles.map((article, index) => {
              const Icon = patientArticleIcons[index];

              return (
                <Reveal key={article.title} delay={index * 0.07}>
                  <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-5 transition hover:shadow-lg">
                    <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary">
                      <Icon className="size-5" />
                    </span>
                    <p className="mt-6 text-[9px] font-bold tracking-[.14em] text-primary">
                      {article.tag}
                    </p>
                    <h3 className="mt-2 text-sm font-semibold leading-6">
                      {article.title}
                    </h3>
                    <p className="mt-2 flex-1 text-xs leading-6 text-muted-foreground">
                      {article.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-[10px] font-semibold text-primary">
                      {text.guide.articleLink}
                      <ArrowUpRight className="size-3" />
                    </span>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <div id="sss" className="scroll-mt-28">
            <h3 className="text-lg font-semibold tracking-tight">
              {text.guide.faqTitle}
            </h3>
            <Accordion type="single" collapsible className="mt-3">
              {text.guide.questions.map((item, index) => (
                <AccordionItem
                  value={"item-" + index}
                  key={item.question}
                >
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent className="pb-5 leading-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { text } = useLanguage();

  return (
    <section
      id="iletisim"
      className="scroll-mt-24 bg-secondary/55 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          eyebrow={text.contact.eyebrow}
          title={text.contact.title}
          description={text.contact.intro}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <ContactForm />

          <Reveal delay={0.1}>
            <div className="h-fit rounded-3xl border border-border bg-card">
              <div className="p-6 sm:p-8">
                <p className="text-xs font-bold tracking-[.15em] text-primary">
                  {text.contact.clinicEyebrow}
                </p>
                <h3 className="mt-3 text-xl font-semibold">
                  {text.contact.clinicTitle}
                </h3>

                <div className="mt-6 space-y-5">
                  <a
                    href="tel:+905398935923"
                    className="flex items-center gap-4 text-sm hover:text-primary"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary">
                      <Phone className="size-4" />
                    </span>
                    <span>
                      <span className="block text-[10px] text-muted-foreground">
                        {text.contact.clinicPhone}
                      </span>
                      <span className="mt-1 block font-medium">
                        +90 539 893 59 23
                      </span>
                    </span>
                  </a>

                  <div className="flex items-center gap-4 text-sm">
                    <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary">
                      <Building2 className="size-4" />
                    </span>
                    <span>
                      <span className="block text-[10px] text-muted-foreground">
                        {text.contact.clinicName}
                      </span>
                      <span className="mt-1 block font-medium">
                        International Medical Centre (IMC)
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  const { text } = useLanguage();

  return (
    <footer id="gizlilik" className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-[10px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-semibold text-foreground">
            {text.hero.title}{" "}
            <span className="font-normal text-muted-foreground">
              {text.footer.specialty}
            </span>
          </p>
          <p className="mt-2 max-w-xl leading-5">
            {text.footer.disclaimer}
          </p>
        </div>

        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/abdulhalim-tavil-85a22830b/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            {text.footer.linkedin}
          </a>
          <Link href="#iletisim" className="hover:text-primary">
            {text.footer.contact}
          </Link>
          <a href="tel:112" className="hover:text-primary">
            {text.footer.emergency}
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const { text } = useLanguage();

  return (
    <>
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-card focus:p-4"
      >
        {text.nav.skipToContent}
      </a>

      <SiteHeader />
      <main id="icerik">
        <HeroSection />
        <AboutSection />
        <Specialties />
        <PatientGuideSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

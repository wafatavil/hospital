"use client";

import { useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Bone,
  Brain,
  ScanLine,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const specialtyIcons = [Brain, Bone, Activity, ScanLine];

export function Specialties() {
  const { text } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedSpecialty =
    selectedIndex === null ? null : text.specialties.items[selectedIndex];
  const SelectedIcon =
    selectedIndex === null ? null : specialtyIcons[selectedIndex];

  function closeDialog() {
    setSelectedIndex(null);
  }

  function goToContact() {
    closeDialog();
    document.querySelector("#iletisim")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section
      id="uzmanlik"
      className="scroll-mt-24 bg-secondary/55 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold tracking-[.2em] text-primary">
                {text.specialties.eyebrow}
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
                {text.specialties.title}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              {text.specialties.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {text.specialties.items.map((specialty, index) => {
            const Icon = specialtyIcons[index];

            return (
              <Reveal key={specialty.title} delay={index * 0.07}>
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="group flex h-full w-full flex-col rounded-3xl border border-border bg-card p-6 text-start transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-sky-950/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span className="mt-7 text-[10px] font-bold tracking-[.15em] text-primary">
                    {specialty.tag}
                  </span>
                  <span className="mt-3 text-lg font-semibold tracking-tight">
                    {specialty.title}
                  </span>
                  <span className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                    {specialty.description}
                  </span>
                  <span className="mt-6 flex items-center gap-2 text-xs font-semibold text-primary">
                    {text.specialties.explore}
                    <ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Dialog
          open={selectedSpecialty !== null}
          onOpenChange={(isOpen) => !isOpen && closeDialog()}
        >
          <DialogContent>
            <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-accent text-primary">
              {SelectedIcon && <SelectedIcon className="size-5" />}
            </div>
            <p className="text-[10px] font-bold tracking-[.16em] text-primary">
              {selectedSpecialty?.tag}
            </p>
            <DialogTitle className="mt-2 text-2xl font-semibold">
              {selectedSpecialty?.title}
            </DialogTitle>
            <DialogDescription className="mt-4 text-sm leading-7">
              {selectedSpecialty?.details}
            </DialogDescription>
            <p className="mt-4 text-xs leading-6 text-muted-foreground">
              {text.specialties.disclaimer}
            </p>
            <Button className="mt-6" onClick={goToContact}>
              {text.specialties.appointment}
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

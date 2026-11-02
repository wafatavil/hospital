"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { DropdownSelect } from "@/components/ui/dropdown-select";
import { Input } from "@/components/ui/input";

export function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const { text } = useLanguage();
  const formText = text.contact.form;
  const topicOptions = formText.topics.map((label) => ({
    value: label,
    label,
  }));

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(formText.submit);
    const message = [
      formText.name + ": " + formData.get("name"),
      formText.email + ": " + formData.get("email"),
      formText.phone + ": " + (formData.get("phone") || "—"),
      formText.topic + ": " +
        (formData.get("topic") || formText.topicPlaceholder),
      formText.message + ": " + formData.get("message"),
    ].join("\n");
    const body = encodeURIComponent(message);

    window.location.href =
      "https://wa.me/905398935923?text=" + subject + "%0A" + body;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-semibold">
          {formText.name}
          <Input
            name="name"
            autoComplete="name"
            placeholder={formText.namePlaceholder}
            value={fullName}
            maxLength={80}
            onChange={(event) => {
              const cleanedName = event.target.value.replace(
                /[^\p{L}\p{M}\s.'’-]/gu,
                "",
              );
              setFullName(cleanedName);
            }}
            required
          />
        </label>

        <label className="grid gap-2 text-xs font-semibold">
          {formText.email}
          <Input
            type="email"
            name="email"
            autoComplete="email"
            placeholder={formText.emailPlaceholder}
            autoCapitalize="none"
            spellCheck={false}
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,}"
            title={formText.emailPatternHint}
            required
          />
        </label>

        <label className="grid gap-2 text-xs font-semibold">
          {formText.phone}
          <Input
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            placeholder={formText.phonePlaceholder}
            value={phone}
            maxLength={20}
            pattern="[0-9+() -]{7,20}"
            title={formText.phonePatternHint}
            onChange={(event) => {
              const cleanedPhone = event.target.value
                .replace(/[^0-9+()\s-]/g, "")
                .replace(/(?!^)\+/g, "");
              setPhone(cleanedPhone);
            }}
          />
        </label>

        <label className="grid gap-2 text-xs font-semibold">
          {formText.topic}
          <DropdownSelect
            id="contact-topic"
            name="topic"
            value={topic}
            options={topicOptions}
            placeholder={formText.topicPlaceholder}
            ariaLabel={formText.topic}
            onValueChange={setTopic}
          />
        </label>

        <label className="grid gap-2 text-xs font-semibold sm:col-span-2">
          {formText.message}
          <textarea
            name="message"
            required
            rows={4}
            placeholder={formText.messagePlaceholder}
            className="resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-muted-foreground">
        <input required type="checkbox" className="mt-1 accent-primary" />
        <span>
          {formText.consent}{" "}
          <a
            href="#gizlilik"
            className="text-primary underline underline-offset-2"
          >
            {formText.privacy}
          </a>
        </span>
      </label>

      <Button type="submit" className="mt-6 w-full sm:w-auto">
        {formText.submit}
        <ArrowUpRight className="size-4" />
      </Button>

      <p className="mt-4 text-xs leading-5 text-muted-foreground">
        {formText.whatsappNote}
      </p>

      <p className="mt-4 text-[10px] leading-5 text-muted-foreground">
        {formText.emergency}
      </p>
    </form>
  );
}

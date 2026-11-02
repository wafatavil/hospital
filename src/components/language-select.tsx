"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { DropdownSelect } from "@/components/ui/dropdown-select";
import type { Language } from "@/lib/messages";

export function LanguageSelect() {
  const { language, setLanguage, text } = useLanguage();
  const options = [
    { value: "tr", label: text.languageNames.tr },
    { value: "en", label: text.languageNames.en },
    { value: "ar", label: text.languageNames.ar },
  ];

  return (
    <DropdownSelect
      value={language}
      options={options}
      ariaLabel={text.language}
      onValueChange={(value) => setLanguage(value as Language)}
      leadingIcon={<Languages aria-hidden="true" className="size-4" />}
      compactOnMobile
    />
  );
}

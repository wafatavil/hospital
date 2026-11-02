"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  messages,
  type Language,
  type TranslationMessages,
} from "@/lib/messages";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  text: TranslationMessages;
};

const LanguageContext = createContext<LanguageContextValue>({
  language: "tr",
  setLanguage: () => {},
  text: messages.tr,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("tr");
  const text = messages[language];

  useEffect(() => {
    const savedLanguage = localStorage.getItem("site-language");
    const initialLanguage: Language =
      savedLanguage === "en" || savedLanguage === "ar" || savedLanguage === "tr"
        ? savedLanguage
        : "tr";

    setLanguageState(initialLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.title = text.seoTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", text.seoDescription);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", text.seoTitle);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", text.seoDescription);
  }, [language, text.seoDescription, text.seoTitle]);

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);
    localStorage.setItem("site-language", nextLanguage);
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, text }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Op. Dr. Abdulhalim Tavil | Beyin ve Sinir Cerrahisi",
    template: "%s | Op. Dr. Abdulhalim Tavil",
  },
  description:
    "Op. Dr. Abdulhalim Tavil, beyin ve omurilik cerrahisi alanındaki deneyimini güncel bilimsel gelişmeler ve hasta odaklı yaklaşımla buluşturuyor.",
  openGraph: {
    title: "Op. Dr. Abdulhalim Tavil | Beyin ve Omurilik Cerrahisi",
    description:
      "Güncel bilimsel gelişmeler ve hastaların bireysel hikâyelerini temel alan beyin ve omurilik cerrahisi yaklaşımı.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

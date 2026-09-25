import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_KR, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { SiteNav } from "@/components/nav/SiteNav";
import { profile } from "@/content/profile";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexSansKr = IBM_Plex_Sans_KR({
  variable: "--font-plex-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${profile.name.en} — ${profile.title.en}`,
  description: profile.summary.en,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${plexSans.variable} ${plexSansKr.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <SiteNav />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

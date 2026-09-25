"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n";
import { profile } from "@/content/profile";
import { LanguageToggle } from "./LanguageToggle";

const navItems = [
  { href: "/#about", label: { ko: "소개", en: "About" } },
  { href: "/#experience", label: { ko: "경력", en: "Experience" } },
  { href: "/#works", label: { ko: "프로젝트", en: "Works" } },
  { href: "/resume", label: { ko: "이력서", en: "Résumé" } },
  { href: "/portfolio", label: { ko: "포트폴리오", en: "Portfolio" } },
];

export function SiteNav() {
  const { t } = useLanguage();
  const pathname = usePathname();

  return (
    <header className="no-print sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {t(profile.name)}
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`hidden rounded-full px-3 py-1.5 text-sm transition-colors sm:inline-block ${
                  active
                    ? "text-accent"
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                {t(item.label)}
              </Link>
            );
          })}
          <div className="ml-1 sm:ml-2">
            <LanguageToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

"use client";

import { useLanguage } from "@/lib/i18n";
import { profile, education } from "@/content/profile";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-20 border-b border-border px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-[1.3fr_1fr]">
        <ScrollReveal>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            {t({ ko: "소개", en: "About" })}
          </span>
          <p className="mt-6 text-2xl leading-relaxed text-foreground sm:text-3xl">
            {t(profile.summary)}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded-[var(--radius-lg)] border border-border bg-background-card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground-muted">
              {t({ ko: "학력", en: "Education" })}
            </h3>
            <ul className="mt-4 space-y-5">
              {education.map((entry) => (
                <li key={t(entry.school)} className="group">
                  <p className="text-xs text-foreground-subtle">{entry.period}</p>
                  <p className="mt-1 font-medium text-foreground transition-colors group-hover:text-accent">
                    {t(entry.school)}
                  </p>
                  <p className="text-sm text-foreground-muted">{t(entry.degree)}</p>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

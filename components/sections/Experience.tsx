"use client";

import { useLanguage } from "@/lib/i18n";
import { experience } from "@/content/experience";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-20 border-b border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            {t({ ko: "경력", en: "Experience" })}
          </span>
        </ScrollReveal>

        <div className="mt-10 space-y-16">
          {experience.map((entry) => (
            <div key={t(entry.company)}>
              <ScrollReveal>
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {t(entry.company)}
                      <span className="text-foreground-muted"> · {t(entry.department)}</span>
                    </h3>
                    <p className="mt-1 text-accent">{t(entry.role)}</p>
                  </div>
                  <p className="text-sm text-foreground-subtle">{entry.period}</p>
                </div>
              </ScrollReveal>

              <ol className="relative mt-8 space-y-10 border-l border-border pl-8">
                {entry.highlights.map((highlight, index) => (
                  <ScrollReveal key={t(highlight.title)} delay={index * 0.05}>
                    <li className="relative">
                      <span className="absolute -left-[2.28rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                      <h4 className="font-medium text-foreground">{t(highlight.title)}</h4>
                      <ul className="mt-3 space-y-2">
                        {highlight.bullets.map((bullet) => (
                          <li
                            key={t(bullet)}
                            className="flex gap-2 text-sm leading-relaxed text-foreground-muted"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground-subtle" />
                            {t(bullet)}
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ScrollReveal>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

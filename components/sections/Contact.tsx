"use client";

import { useLanguage } from "@/lib/i18n";
import { profile, awards } from "@/content/profile";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            {t({ ko: "연락하기", en: "Contact" })}
          </span>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t({
              ko: "새로운 문제, 함께 풀어보고 싶습니다.",
              en: "Let's structure the next hard problem together.",
            })}
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton
              href={`mailto:${profile.email}`}
              external={false}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background"
            >
              {profile.email}
            </MagneticButton>
            <MagneticButton
              href={profile.github}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
            >
              GitHub ↗
            </MagneticButton>
            <MagneticButton
              href={profile.linkedin}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
            >
              LinkedIn ↗
            </MagneticButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-16 rounded-[var(--radius-lg)] border border-border bg-background-card p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground-muted">
              {t({ ko: "수상 경력", en: "Awards" })}
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {awards.map((award) => (
                <li key={t(award.title)} className="text-sm">
                  <span className="text-foreground">{t(award.title)}</span>
                  <span className="text-foreground-subtle"> · {award.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <footer className="mt-16 flex flex-col gap-2 border-t border-border pt-8 text-xs text-foreground-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {t(profile.name)}</p>
          <p>{t({ ko: "Next.js · Framer Motion으로 제작", en: "Built with Next.js & Framer Motion" })}</p>
        </footer>
      </div>
    </section>
  );
}

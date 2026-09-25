"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { coreCompetencies } from "@/content/skills";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            {t({ ko: "핵심 역량", en: "Core Competencies" })}
          </span>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {coreCompetencies.map((group, index) => (
            <ScrollReveal key={t(group.title)} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full rounded-[var(--radius-lg)] border border-border bg-background-card p-6"
              >
                <h3 className="font-semibold text-foreground">{t(group.title)}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-background-elevated px-2.5 py-1 text-xs text-foreground-muted transition-colors hover:bg-accent/10 hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

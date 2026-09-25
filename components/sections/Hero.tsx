"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent as ReactMouseEvent } from "react";
import { useLanguage } from "@/lib/i18n";
import { profile } from "@/content/profile";
import { heroSkillTags } from "@/content/skills";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  const { t } = useLanguage();

  const glowX = useSpring(useMotionValue(50), { stiffness: 60, damping: 20 });
  const glowY = useSpring(useMotionValue(35), { stiffness: 60, damping: 20 });
  const background = useMotionTemplate`radial-gradient(680px circle at ${glowX}% ${glowY}%, rgba(251, 191, 36, 0.14), transparent 60%)`;

  function handleMouseMove(event: ReactMouseEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    glowX.set(((event.clientX - bounds.left) / bounds.width) * 100);
    glowY.set(((event.clientY - bounds.top) / bounds.height) * 100);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden border-b border-border px-6"
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(167,139,250,0.10),transparent_45%)]" />

      <div className="relative mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background-elevated px-4 py-1.5 text-xs font-medium tracking-wide text-foreground-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {t({ ko: "빅밸류 · 데이터 사이언티스트", en: "BigValue · Data Scientist" })}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
        >
          {t(profile.name)}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-xl font-medium text-accent sm:text-2xl"
        >
          {t(profile.title)}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted"
        >
          {t(profile.tagline)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <MagneticButton
            href={`mailto:${profile.email}`}
            external={false}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform"
          >
            {t({ ko: "이메일 보내기", en: "Get in touch" })}
          </MagneticButton>
          <MagneticButton
            href={profile.github}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
          >
            GitHub
          </MagneticButton>
          <MagneticButton
            href={profile.linkedin}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
          >
            LinkedIn
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-14 flex flex-wrap gap-2"
        >
          {heroSkillTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-foreground-subtle transition-colors hover:border-accent/50 hover:text-accent"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

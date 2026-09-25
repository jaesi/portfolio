"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { MouseEvent as ReactMouseEvent } from "react";
import { useLanguage } from "@/lib/i18n";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  onSelect?: (id: string) => void;
};

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const { t } = useLanguage();

  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowBackground = useMotionTemplate`radial-gradient(320px circle at ${glowX}% ${glowY}%, rgba(251, 191, 36, 0.15), transparent 70%)`;

  function handleMouseMove(event: ReactMouseEvent<HTMLButtonElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width;
    const py = (event.clientY - bounds.top) / bounds.height;

    rotateY.set((px - 0.5) * 10);
    rotateX.set((0.5 - py) * 10);
    glowX.set(px * 100);
    glowY.set(py * 100);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      style={{ perspective: 1000 }}
    >
      <motion.button
        type="button"
        onClick={() => onSelect?.(project.id)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        className="group relative w-full overflow-hidden rounded-[var(--radius-lg)] border border-border bg-background-card p-6 text-left transition-colors hover:border-accent/50 sm:p-8"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: glowBackground }}
        />
        <div className="relative flex flex-col gap-4">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex w-fit items-center rounded-full border border-border px-3 py-1 text-xs font-medium tracking-wide text-foreground-muted uppercase">
              {t(project.category)}
            </span>
            <span className="text-xs text-foreground-subtle">{project.meta.period}</span>
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {t(project.title)}
          </h3>

          <p className="text-sm leading-relaxed text-foreground-muted">
            {t(project.summary)}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-background-elevated px-2.5 py-1 text-xs text-foreground-muted transition-colors group-hover:text-accent"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
            {t({ ko: "자세히 보기", en: "View case study" })}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </motion.button>
    </motion.div>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n";
import type { Project } from "@/content/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!project) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-10 backdrop-blur-sm sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-2xl rounded-[var(--radius-lg)] border border-border bg-background-card p-6 sm:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-wide text-foreground-muted">
                  {t(project.category)}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-foreground">
                  {t(project.title)}
                </h3>
                <p className="mt-2 text-sm text-foreground-subtle">
                  {project.meta.period} · {t(project.meta.team)}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="shrink-0 rounded-full border border-border p-2 text-foreground-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-background-elevated px-2.5 py-1 text-xs text-foreground-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-7">
              <ModalBlock title={t({ ko: "문제", en: "Problem" })} items={project.problem.map(t)} />
              <ModalBlock title={t({ ko: "과정", en: "Process" })} items={project.process.map(t)} />
              <ModalBlock title={t({ ko: "결과", en: "Result" })} items={project.result.map(t)} accent />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalBlock({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground-muted">
        {title}
      </h4>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-foreground-muted">
            <span
              className={`mt-2 h-1 w-1 shrink-0 rounded-full ${accent ? "bg-accent" : "bg-foreground-subtle"}`}
            />
            <span className={accent ? "text-foreground" : ""}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

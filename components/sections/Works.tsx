"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Works() {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = projects.find((project) => project.id === selectedId) ?? null;

  return (
    <section id="works" className="scroll-mt-20 border-b border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            {t({ ko: "선정 프로젝트", en: "Selected Works" })}
          </span>
          <p className="mt-4 max-w-xl text-foreground-muted">
            {t({
              ko: "실무, 공모전, 개인 프로젝트, 연구를 아우르는 5개의 대표 작업입니다. 카드를 클릭하면 문제-과정-결과를 자세히 볼 수 있습니다.",
              en: "Five representative projects spanning professional work, competitions, side projects, and research. Click a card for the full problem → process → result breakdown.",
            })}
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelectedId}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelectedId(null)} />
    </section>
  );
}

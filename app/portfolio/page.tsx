"use client";

import { useLanguage } from "@/lib/i18n";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { PrintButton } from "@/components/ui/PrintButton";

export default function PortfolioPage() {
  const { t } = useLanguage();

  return (
    <main className="flex-1 px-6 py-16">
      <div className="print-page mx-auto max-w-3xl">
        <div className="no-print mb-8 flex items-center justify-between">
          <p className="text-sm text-foreground-muted">
            {t({
              ko: "브라우저 인쇄 대화상자에서 “PDF로 저장”을 선택하세요.",
              en: "In the print dialog, choose “Save as PDF”.",
            })}
          </p>
          <PrintButton />
        </div>

        <header className="print-avoid-break border-b border-border pb-6">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {t({ ko: "포트폴리오", en: "Portfolio" })}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground">{t(profile.name)}</h1>
          <p className="mt-1 text-lg text-foreground-muted">{t(profile.title)}</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground-muted">{t(profile.tagline)}</p>
        </header>

        <ol className="mt-10 space-y-14">
          {projects.map((project, index) => (
            <li key={project.id} className="print-avoid-break border-t border-border pt-10 first:border-none first:pt-0">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground-subtle">
                  {String(index + 1).padStart(2, "0")} · {t(project.category)}
                </span>
                <span className="text-xs text-foreground-subtle">
                  {project.meta.period} · {t(project.meta.team)}
                </span>
              </div>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                {t(project.title)}
              </h2>

              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-background-elevated px-2.5 py-0.5 text-xs text-foreground-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-foreground-muted">{t(project.summary)}</p>

              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <Block title={t({ ko: "문제", en: "Problem" })} items={project.problem.map(t)} />
                <Block title={t({ ko: "과정", en: "Process" })} items={project.process.map(t)} />
                <Block title={t({ ko: "결과", en: "Result" })} items={project.result.map(t)} accent />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}

function Block({ title, items, accent }: { title: string; items: string[]; accent?: boolean }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground-subtle">{title}</p>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-1.5 text-xs leading-relaxed text-foreground-muted">
            <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${accent ? "bg-accent" : "bg-foreground-subtle"}`} />
            <span className={accent ? "text-foreground" : ""}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

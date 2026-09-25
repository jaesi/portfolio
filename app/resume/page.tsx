"use client";

import { useLanguage } from "@/lib/i18n";
import { profile, education, awards, certifications, publications, languages } from "@/content/profile";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { coreCompetencies, technicalSkills } from "@/content/skills";
import { PrintButton } from "@/components/ui/PrintButton";

export default function ResumePage() {
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

        {/* Header */}
        <header className="print-avoid-break border-b border-border pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">{t(profile.name)}</h1>
          <p className="mt-1 text-lg text-accent">{t(profile.title)}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-foreground-muted">
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
            <span>{profile.github.replace("https://", "")}</span>
            <span>{profile.linkedin.replace("https://www.", "")}</span>
          </div>
        </header>

        {/* Summary */}
        <Section title={t({ ko: "요약", en: "Professional Summary" })}>
          <p className="text-sm leading-relaxed text-foreground-muted">{t(profile.summary)}</p>
        </Section>

        {/* Core competencies */}
        <Section title={t({ ko: "핵심 역량", en: "Core Competencies" })}>
          <div className="grid gap-4 sm:grid-cols-3">
            {coreCompetencies.map((group) => (
              <div key={t(group.title)} className="print-avoid-break">
                <p className="text-sm font-semibold text-foreground">{t(group.title)}</p>
                <p className="mt-1 text-xs leading-relaxed text-foreground-muted">
                  {group.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section title={t({ ko: "경력", en: "Work Experience" })}>
          {experience.map((entry) => (
            <div key={t(entry.company)} className="mb-6 last:mb-0">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <p className="font-semibold text-foreground">
                  {t(entry.company)} <span className="text-foreground-muted">· {t(entry.department)}</span>
                </p>
                <p className="text-xs text-foreground-subtle">{entry.period}</p>
              </div>
              <p className="text-sm text-accent">{t(entry.role)}</p>
              <div className="mt-3 space-y-3">
                {entry.highlights.map((highlight) => (
                  <div key={t(highlight.title)} className="print-avoid-break">
                    <p className="text-sm font-medium text-foreground">{t(highlight.title)}</p>
                    <ul className="mt-1 space-y-1">
                      {highlight.bullets.map((bullet) => (
                        <li key={t(bullet)} className="flex gap-2 text-xs leading-relaxed text-foreground-muted">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground-subtle" />
                          {t(bullet)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Section>

        {/* Key projects (condensed) */}
        <Section title={t({ ko: "주요 프로젝트", en: "Key Projects" })}>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="print-avoid-break">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <p className="text-sm font-medium text-foreground">{t(project.title)}</p>
                  <p className="text-xs text-foreground-subtle">{project.meta.period}</p>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-foreground-muted">{t(project.summary)}</p>
                <p className="mt-1 text-xs text-foreground-subtle">{project.tags.join(" · ")}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Technical skills */}
        <Section title={t({ ko: "기술 스택", en: "Technical Skills" })}>
          <div className="grid gap-3 sm:grid-cols-2">
            {technicalSkills.map((group) => (
              <div key={t(group.title)} className="print-avoid-break">
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                  {t(group.title)}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-foreground-muted">
                  {group.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title={t({ ko: "학력", en: "Education" })}>
          <div className="space-y-3">
            {education.map((entry) => (
              <div key={t(entry.school)} className="flex flex-wrap items-baseline justify-between gap-1 print-avoid-break">
                <div>
                  <p className="text-sm font-medium text-foreground">{t(entry.school)}</p>
                  <p className="text-xs text-foreground-muted">{t(entry.degree)}</p>
                </div>
                <p className="text-xs text-foreground-subtle">{entry.period}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Awards & certifications */}
        <Section title={t({ ko: "수상 & 교육 이수", en: "Awards & Certifications" })}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                {t({ ko: "수상 경력", en: "Awards" })}
              </p>
              <ul className="mt-2 space-y-1.5">
                {awards.map((award) => (
                  <li key={t(award.title)} className="text-xs leading-relaxed text-foreground-muted">
                    {t(award.title)} <span className="text-foreground-subtle">({award.period})</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                {t({ ko: "교육 이수", en: "Certifications" })}
              </p>
              <div className="mt-2 space-y-2">
                {certifications.map((group) => (
                  <div key={group.issuer}>
                    <p className="text-xs font-medium text-foreground">{group.issuer}</p>
                    <p className="text-xs text-foreground-muted">{group.items.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Publications & languages */}
        <Section title={t({ ko: "논문 & 언어", en: "Publications & Languages" })}>
          <ul className="space-y-2">
            {publications.map((pub) => (
              <li key={t(pub.title)} className="text-xs leading-relaxed text-foreground-muted print-avoid-break">
                <span className="text-foreground">{t(pub.title)}</span> — {t(pub.venue)}, {pub.date}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-foreground-muted">
            {languages.map((l) => `${t(l.label)}: ${t(l.level)}`).join(" · ")}
          </p>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-accent">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

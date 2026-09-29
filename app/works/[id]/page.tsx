"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "@/lib/i18n";
import { projects } from "@/content/projects";
import { DoStockArchitecture } from "@/components/case-studies/DoStockArchitecture";

const designPrinciples = [
  {
    ko: "공시 원문 근거",
    en: "Grounded in the filing itself",
    sub: {
      ko: "노드·엣지는 사업보고서에 근거 없는 것은 넣지 않음",
      en: "No node or edge is added unless it is backed by the annual report",
    },
  },
  {
    ko: "귀납적 도출",
    en: "Inductive, not prescriptive",
    sub: {
      ko: "데이터에서 패턴을 먼저 뽑은 뒤 구조를 확정",
      en: "Patterns are pulled from the data first, then the schema is finalized",
    },
  },
  {
    ko: "출처 추적 가능",
    en: "Every edge is traceable",
    sub: {
      ko: "모든 관계에 evidence(원문 발췌)를 함께 저장",
      en: "Every relationship stores the source excerpt (evidence) alongside it",
    },
  },
  {
    ko: "데이터 손실 없음",
    en: "Nothing is dropped at write time",
    sub: {
      ko: "필터링은 쿼리 시점에만, 저장 단계에서는 버리지 않음",
      en: "Filtering happens only at query time — the write path never discards data",
    },
  },
  {
    ko: "LLM 역할 최소화",
    en: "LLM does extraction only",
    sub: {
      ko: "구조화 추출만 맡기고, 정규화·판단·필터링은 별도 로직으로 분리",
      en: "The LLM only structures raw text — normalization, judgment, and filtering are separate logic",
    },
  },
  {
    ko: "정규화는 가산적",
    en: "Normalization is additive",
    sub: {
      ko: "유사 노드는 SIMILAR_TO 엣지로 연결하고, 원본 노드는 삭제하지 않음",
      en: "Similar nodes are linked via a SIMILAR_TO edge — originals are never deleted",
    },
  },
];

export default function WorkDetailPage() {
  const { t } = useLanguage();
  const params = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <main className="flex-1 px-6 py-24 text-center">
        <p className="text-foreground-muted">
          {t({ ko: "프로젝트를 찾을 수 없습니다.", en: "Project not found." })}
        </p>
        <Link href="/#works" className="mt-4 inline-block text-accent hover:underline">
          {t({ ko: "← 프로젝트 목록으로", en: "← Back to projects" })}
        </Link>
      </main>
    );
  }

  const isDoStock = project.id === "dostock";

  return (
    <main className="flex-1 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#works"
          className="inline-flex items-center gap-1.5 text-sm text-foreground-muted transition-colors hover:text-accent"
        >
          ← {t({ ko: "프로젝트 목록", en: "All projects" })}
        </Link>

        <header className="mt-6 border-b border-border pb-8">
          <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-wide text-foreground-muted">
            {t(project.category)}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t(project.title)}
          </h1>
          <p className="mt-3 text-foreground-muted">{t(project.summary)}</p>
          <p className="mt-4 text-sm text-foreground-subtle">
            {project.meta.period} · {t(project.meta.team)}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-background-elevated px-2.5 py-1 text-xs text-foreground-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          {isDoStock && (
            <a
              href="https://dostock.outstanding-pros.xyz"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              dostock.outstanding-pros.xyz ↗
            </a>
          )}
        </header>

        {isDoStock && (
          <section className="mt-12">
            <h2 className="text-lg font-semibold text-foreground">
              {t({ ko: "왜 지금의 형태가 됐는가", en: "Why it looks like this" })}
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground-muted">
              <p>
                {t({
                  ko: "처음엔 여러 퀀트 전략을 조합해 종목을 추천하는 B2C 서비스로 시작했습니다. 전략 조합 자체로는 차별화가 약했고, 지속 가능한 비즈니스로 이어지지 않았습니다.",
                  en: "It started as a B2C service recommending stocks by combining several quant strategies. The strategy combination itself was not differentiated enough, and it did not sustain a business.",
                })}
              </p>
              <p>
                {t({
                  ko: "피벗의 방향은 단순했습니다: 전략이 아니라 데이터 자체를 상품화하자. 공시와 뉴스를 온톨로지 기반 지식그래프로 구조화하면, 그 그래프는 종목 추천뿐 아니라 딜 소싱, 리서치 등 훨씬 넓은 용도로 팔 수 있습니다.",
                  en: "The pivot was simple: instead of selling a strategy, productize the underlying data. Once filings and news are structured into an ontology-driven knowledge graph, that graph sells into far more use cases than stock recommendation alone — deal sourcing, research, and more.",
                })}
              </p>
            </div>
          </section>
        )}

        {isDoStock && (
          <section className="mt-12">
            <h2 className="text-lg font-semibold text-foreground">
              {t({ ko: "아키텍처", en: "Architecture" })}
            </h2>
            <p className="mt-2 text-sm text-foreground-muted">
              {t({
                ko: "공시(DART)와 뉴스, 두 입력이 각각 그래프와 시계열로 구조화되고 결합되는 과정입니다.",
                en: "How the two inputs, filings and news, are each structured and then combined.",
              })}
            </p>
            <div className="mt-5">
              <DoStockArchitecture />
            </div>
          </section>
        )}

        {isDoStock && (
          <section className="mt-12">
            <h2 className="text-lg font-semibold text-foreground">
              {t({ ko: "온톨로지 설계 원칙", en: "Ontology Design Principles" })}
            </h2>
            <p className="mt-2 text-sm text-foreground-muted">
              {t({
                ko: "Tendril-KO 그래프를 설계하며 지킨 원칙들입니다. 특히 LLM 역할을 구조화 추출로 제한한 것이 데이터 신뢰도의 핵심이었습니다.",
                en: "Principles kept while designing the Tendril-KO graph. Limiting the LLM to structuring alone was the key to data reliability.",
              })}
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {designPrinciples.map((p) => (
                <div
                  key={p.ko}
                  className="rounded-[var(--radius-md)] border border-border bg-background-card p-4"
                >
                  <h3 className="text-sm font-semibold text-foreground">{t(p)}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-foreground-muted">{t(p.sub)}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 space-y-8">
          <DetailBlock title={t({ ko: "문제", en: "Problem" })} items={project.problem.map(t)} />
          <DetailBlock title={t({ ko: "과정", en: "Process" })} items={project.process.map(t)} />
          <DetailBlock title={t({ ko: "결과", en: "Result" })} items={project.result.map(t)} accent />
        </section>

        <section className="mt-14 border-t border-border pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground-muted">
            {t({ ko: "기술 스택", en: "Stack" })}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.meta.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border px-3 py-1 text-xs text-foreground-muted"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-16 flex justify-between border-t border-border pt-8 text-sm">
          <Link href="/#works" className="text-foreground-muted transition-colors hover:text-accent">
            ← {t({ ko: "다른 프로젝트 보기", en: "See other projects" })}
          </Link>
          <Link href="/resume" className="text-foreground-muted transition-colors hover:text-accent">
            {t({ ko: "이력서 보기", en: "View résumé" })} →
          </Link>
        </div>
      </div>
    </main>
  );
}

function DetailBlock({
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
      <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground-muted">
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
            <span
              className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent ? "bg-accent" : "bg-foreground-subtle"}`}
            />
            <span className={accent ? "text-foreground" : ""}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

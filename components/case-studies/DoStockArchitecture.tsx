"use client";

import { useLanguage } from "@/lib/i18n";
import type { Localized } from "@/lib/i18n";

type Box = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: Localized;
  sub?: Localized;
  variant?: "input" | "process" | "store" | "output" | "channel";
};

const boxes: Box[] = [
  // Row 1 — inputs
  { x: 30, y: 20, w: 350, h: 56, variant: "input", title: { ko: "DART 공시 원문 (사업보고서)", en: "DART Filings (Annual Reports)" } },
  { x: 460, y: 20, w: 350, h: 56, variant: "input", title: { ko: "실시간 뉴스 스트림", en: "Real-Time News Stream" } },

  // Row 2 — processing
  { x: 30, y: 140, w: 350, h: 56, variant: "process", title: { ko: "LLM 추출 에이전트", en: "LLM Extraction Agent" }, sub: { ko: "종목별 개별 검토 · 공시 근거만 반영", en: "Reviewed company-by-company, grounded in filings only" } },
  { x: 460, y: 140, w: 350, h: 56, variant: "process", title: { ko: "실시간 임베딩 파이프라인", en: "Real-Time Embedding Pipeline" }, sub: { ko: "종목·이벤트 단위 시그널 변환", en: "Converts to stock/event-level signals" } },

  // Row 3 — storage
  { x: 30, y: 264, w: 350, h: 76, variant: "store", title: { ko: "Tendril-KO", en: "Tendril-KO" }, sub: { ko: "Neo4j 그래프DB · 기업·주주·계열·밸류체인", en: "Neo4j graph DB · company, shareholder, affiliate, value chain" } },
  { x: 460, y: 264, w: 350, h: 76, variant: "store", title: { ko: "Bloom-KO", en: "Bloom-KO" }, sub: { ko: "실시간 뉴스 임베딩 시계열", en: "Real-time news-embedding time series" } },

  // Row 4 — merged product
  { x: 220, y: 410, w: 400, h: 64, variant: "output", title: { ko: "통합 데이터 상품 · API", en: "Unified Data Product · API" } },

  // Row 5 — channels
  { x: 30, y: 548, w: 245, h: 68, variant: "channel", title: { ko: "딜 어드바이저리", en: "Deal Advisory" }, sub: { ko: "삼일PwC 제안", en: "Samil PwC proposal" } },
  { x: 297, y: 548, w: 245, h: 68, variant: "channel", title: { ko: "헤지펀드 · 퀀트팀", en: "Hedge Fund Quant Teams" }, sub: { ko: "Point72 데이터소싱팀 등", en: "e.g. Point72 data sourcing" } },
  { x: 564, y: 548, w: 245, h: 68, variant: "channel", title: { ko: "헤지펀드 · 펀더멘털팀", en: "Hedge Fund Fundamental Teams" } },
];

const variantFill: Record<NonNullable<Box["variant"]>, string> = {
  input: "var(--background-elevated)",
  process: "var(--background-elevated)",
  store: "rgba(251, 191, 36, 0.08)",
  output: "rgba(251, 191, 36, 0.14)",
  channel: "var(--background-elevated)",
};
const variantStroke: Record<NonNullable<Box["variant"]>, string> = {
  input: "var(--border)",
  process: "var(--border)",
  store: "var(--accent)",
  output: "var(--accent)",
  channel: "var(--border)",
};

function BoxNode({ box, t }: { box: Box; t: (v: Localized) => string }) {
  const variant = box.variant ?? "input";
  const titleY = box.sub ? box.y + box.h / 2 - 6 : box.y + box.h / 2 + 5;
  return (
    <g>
      <rect
        x={box.x}
        y={box.y}
        width={box.w}
        height={box.h}
        rx={10}
        fill={variantFill[variant]}
        stroke={variantStroke[variant]}
        strokeWidth={1.5}
      />
      <text
        x={box.x + box.w / 2}
        y={titleY}
        textAnchor="middle"
        fontSize={14}
        fontWeight={600}
        fill="var(--foreground)"
      >
        {t(box.title)}
      </text>
      {box.sub && (
        <text
          x={box.x + box.w / 2}
          y={box.y + box.h / 2 + 14}
          textAnchor="middle"
          fontSize={11}
          fill="var(--foreground-muted)"
        >
          {t(box.sub)}
        </text>
      )}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="var(--foreground-subtle)"
      strokeWidth={1.5}
      markerEnd="url(#arrowhead)"
    />
  );
}

export function DoStockArchitecture() {
  const { t } = useLanguage();

  return (
    <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-border bg-background-card p-4 sm:p-6">
      <svg viewBox="0 0 840 640" className="mx-auto w-full min-w-[640px] max-w-[840px]" role="img" aria-label="DoStock architecture diagram">
        <defs>
          <marker id="arrowhead" markerWidth={8} markerHeight={8} refX={6} refY={4} orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="var(--foreground-subtle)" />
          </marker>
        </defs>

        {/* input -> process */}
        <Arrow x1={205} y1={76} x2={205} y2={140} />
        <Arrow x1={635} y1={76} x2={635} y2={140} />
        {/* process -> store */}
        <Arrow x1={205} y1={196} x2={205} y2={264} />
        <Arrow x1={635} y1={196} x2={635} y2={264} />
        {/* store <-> store link */}
        <line x1={380} y1={302} x2={460} y2={302} stroke="var(--accent)" strokeWidth={1.5} strokeDasharray="4 4" />
        <text x={420} y={294} textAnchor="middle" fontSize={10} fill="var(--accent)">
          {t({ ko: "연결", en: "linked" })}
        </text>
        {/* store -> merged product */}
        <Arrow x1={205} y1={340} x2={370} y2={410} />
        <Arrow x1={635} y1={340} x2={470} y2={410} />
        {/* product -> channels */}
        <Arrow x1={330} y1={474} x2={152} y2={548} />
        <Arrow x1={420} y1={474} x2={420} y2={548} />
        <Arrow x1={510} y1={474} x2={686} y2={548} />

        {boxes.map((box) => (
          <BoxNode key={t(box.title)} box={box} t={t} />
        ))}
      </svg>
      <p className="mt-4 text-center text-xs text-foreground-subtle">
        {t({
          ko: "공시·뉴스 두 입력이 각각 온톨로지 그래프(Tendril-KO)와 시계열 시그널(Bloom-KO)로 구조화되고, 결합된 데이터가 세 채널로 공급됩니다.",
          en: "Filings and news are each structured into an ontology graph (Tendril-KO) and a time-series signal (Bloom-KO), then combined and supplied across three channels.",
        })}
      </p>
    </div>
  );
}

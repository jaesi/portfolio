"use client";

import { useLanguage } from "@/lib/i18n";

export function PrintButton() {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03] active:scale-95"
    >
      {t({ ko: "PDF로 저장 (인쇄)", en: "Save as PDF (Print)" })}
      <span aria-hidden>↓</span>
    </button>
  );
}

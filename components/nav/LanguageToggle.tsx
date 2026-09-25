"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  const isKo = lang === "ko";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle language"
      className="relative flex h-8 w-16 items-center rounded-full border border-border bg-background-elevated p-1 transition-colors hover:border-accent/50"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute z-10 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-background"
        style={{ left: isKo ? 4 : 32 }}
      >
        {isKo ? "KO" : "EN"}
      </motion.span>
      <span className="flex w-full justify-between px-1.5 text-[10px] font-medium text-foreground-subtle">
        <span className={isKo ? "opacity-0" : ""}>KO</span>
        <span className={isKo ? "" : "opacity-0"}>EN</span>
      </span>
    </button>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function BrandMark() {
  return (
    <Link href="/" aria-label="Home" className="group inline-flex">
      <motion.span
        whileHover={{ rotate: 6, scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 320, damping: 16 }}
        className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-accent/25 via-background-elevated to-accent-secondary/20 text-[13px] font-bold tracking-tight text-accent shadow-[0_0_0_0_rgba(0,0,0,0)] transition-shadow group-hover:border-accent/60 group-hover:shadow-[0_0_24px_-6px_var(--accent)]"
      >
        JM
      </motion.span>
    </Link>
  );
}

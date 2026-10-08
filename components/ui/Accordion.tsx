"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function Accordion({ items, defaultOpen = 0 }: { items: { q: string; a: string }[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <ul className="divide-y divide-white/10">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li key={it.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className={clsx("font-display text-lg transition-colors sm:text-xl", isOpen ? "text-brand-300" : "text-ink")}>{it.q}</span>
              <span className={clsx("grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300", isOpen ? "rotate-45 bg-brand-500 text-white" : "bg-brand-500/10 text-brand-200")}>
                <Plus size={18} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden"
                >
                  <p className="max-w-[62ch] pb-6 text-sub">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}

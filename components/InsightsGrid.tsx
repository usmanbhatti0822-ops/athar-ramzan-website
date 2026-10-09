"use client";

import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { POST_CATEGORIES } from "@/lib/data";
import { ARTICLES } from "@/lib/site";
import Cover from "./ui/Cover";

export default function InsightsGrid() {
  const [cat, setCat] = useState("All");
  const items = ARTICLES.map((a, i) => ({ ...a, i })).filter((a) => cat === "All" || a.category === cat);

  return (
    <>
      <div className="-mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
        <div role="group" aria-label="Filter by topic" className="flex w-max gap-2 sm:w-auto sm:flex-wrap sm:justify-center">
          {POST_CATEGORIES.map((c) => (
            <button
              key={c} aria-pressed={cat === c} onClick={() => setCat(c)}
              className={clsx("relative whitespace-nowrap rounded-full border px-5 py-2 text-sm font-medium transition-colors", cat === c ? "border-transparent text-white" : "border-black/10 bg-card text-ink hover:border-brand-400")}
            >
              {cat === c && <motion.span layoutId="cat-pill" className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-700 to-brand-500" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.ul layout className="mt-12 grid min-h-[200px] gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {items.map((a) => (
            <motion.li key={a.slug} layout initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.35 }}>
              <Link href={`/insights/${a.slug}`} className="group block">
                <div className="overflow-hidden rounded-3xl shadow-card">
                  <Cover index={a.i} label={a.category} className="aspect-[4/3] w-full transition duration-700 group-hover:scale-105" />
                </div>
                <h2 className="mt-5 text-xl transition-colors group-hover:text-brand-700">{a.title}</h2>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  {a.href ? "Read article" : "Coming soon"} <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      {items.length === 0 && <p className="mt-10 text-center text-sub">No articles in this topic yet. Check back soon.</p>}
    </>
  );
}

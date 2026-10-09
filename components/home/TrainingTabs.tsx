"use client";

import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PROGRAMS } from "@/lib/site";
import Button from "../ui/Button";
import Cover from "../ui/Cover";
import Reveal from "../ui/Reveal";
import SectionHead from "../ui/SectionHead";

export default function TrainingTabs() {
  const list = PROGRAMS.slice(0, 5);
  const [active, setActive] = useState(0);
  const current = list[active];

  return (
    <section className="section">
      <div className="container-x">
        <SectionHead
          badge="Training" title="Programs that bankers can use the next day" accent="next day" align="left"
          lead="Practical sessions for individuals and teams, shaped around your audience."
          action={<Button href="/training" variant="outline">All programs</Button>}
        />
        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <ul role="tablist" aria-label="Training programs" className="space-y-2">
              {list.map((p, i) => (
                <li key={p.slug}>
                  <button
                    role="tab" aria-selected={active === i} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)}
                    className={clsx("relative flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left transition-colors", active === i ? "text-white" : "text-ink hover:bg-brand-500/20")}
                  >
                    {active === i && <motion.span layoutId="train-pill" className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-700 to-brand-500 shadow-soft" transition={{ type: "spring", stiffness: 340, damping: 32 }} />}
                    <span className="relative font-display text-lg sm:text-xl">{p.title}</span>
                    <ArrowUpRight size={20} className={clsx("relative shrink-0 transition", active === i ? "opacity-100" : "opacity-30")} />
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-full min-h-[340px] overflow-hidden rounded-[2rem] shadow-soft">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.slug} className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}
                >
                  <Cover index={active} className="h-full w-full" />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-950/70 via-transparent to-transparent p-7 text-white sm:p-9">
                    <h3 className="text-2xl !text-white sm:text-3xl">{current.title}</h3>
                    <p className="mt-3 max-w-[40ch] text-white/85">{current.blurb}</p>
                    <Link href={`/training/${current.slug}`} className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-semibold text-brand-800 transition hover:bg-brand-500/20">
                      View program <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

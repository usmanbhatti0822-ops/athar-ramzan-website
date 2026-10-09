"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

type Item = { role: string; org: string; period: string; text: string };

/** Vertical timeline whose line draws itself as you scroll. */
export default function CareerTimeline({ items }: { items: Item[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
<<<<<<< HEAD
    <ol ref={ref} className="relative ml-3 space-y-8 border-l border-black/10 pl-8 sm:ml-0 sm:pl-12">
=======
    <ol ref={ref} className="relative ml-3 space-y-8 border-l border-white/10 pl-8 sm:ml-0 sm:pl-12">
>>>>>>> 801b4d79c37d6d0bc384fe628275771cfd8fce03
      <motion.span aria-hidden style={{ scaleY }} className="absolute -left-px top-0 h-full w-[2px] origin-top bg-gradient-to-b from-brand-500 to-brand-300" />
      {items.map((it, i) => (
        <li key={it.role + it.period} className="relative">
          <span aria-hidden className="absolute -left-[41px] top-7 grid h-5 w-5 place-items-center rounded-full bg-card ring-4 ring-brand-500/30 sm:-left-[57px]">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
          </span>
          <Reveal x={30} y={0} delay={Math.min(i, 3) * 0.05}>
            <div className="card p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7">
<<<<<<< HEAD
              <p className="text-sm font-semibold text-brand-700">{it.period}</p>
=======
              <p className="text-sm font-semibold text-brand-300">{it.period}</p>
>>>>>>> 801b4d79c37d6d0bc384fe628275771cfd8fce03
              <h3 className="mt-2 text-xl sm:text-2xl">{it.role}</h3>
              <p className="mt-1 text-sm font-semibold text-sub">{it.org}</p>
              <p className="mt-3 text-sub">{it.text}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

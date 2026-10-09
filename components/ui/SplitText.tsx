"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { Fragment, type ElementType } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Headline where every word slides up from a mask.
 * `accent` = words (space separated) that get the teal gradient.
 * `instant` = play on load (hero) instead of on scroll.
 */
export default function SplitText({
  text, as = "h2", className, delay = 0, accent, instant = false,
}: { text: string; as?: "h1" | "h2" | "h3" | "p" | "span"; className?: string; delay?: number; accent?: string; instant?: boolean }) {
  const Tag = as as ElementType;
  const words = text.split(" ");
  const accented = new Set(accent ? accent.split(" ") : []);
  const trigger = instant
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, margin: "-60px" } };

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        aria-hidden
        className="inline"
        initial="hidden"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: delay } } }}
        {...trigger}
      >
        {words.map((w, i) => (
          <Fragment key={i}>
            <span className="inline-block overflow-hidden pb-[0.14em] align-bottom">
              <motion.span
                className={clsx("inline-block", accented.has(w) && "bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent")}
                variants={{ hidden: { y: "115%", rotate: 4 }, show: { y: 0, rotate: 0, transition: { duration: 0.9, ease } } }}
              >
                {w}
              </motion.span>
            </span>
            {i < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </motion.span>
    </Tag>
  );
}

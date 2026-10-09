"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Scroll-triggered entrance. Honors prefers-reduced-motion via MotionConfig in EnquiryProvider. */
export default function Reveal({
  children, delay = 0, y = 28, x = 0, scale = 1, className, as = "div",
}: { children: ReactNode; delay?: number; y?: number; x?: number; scale?: number; className?: string; as?: "div" | "li" }) {
  const Tag = (as === "li" ? motion.li : motion.div) as typeof motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

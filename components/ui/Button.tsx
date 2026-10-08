"use client";

import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "light" | "outline";

const body: Record<Variant, string> = {
  solid: "bg-brand-600 text-white shadow-soft hover:bg-brand-500",
  light: "bg-white text-brand-900 shadow-card hover:bg-brand-100",
  outline: "border border-brand-400/40 bg-white/5 text-brand-100 backdrop-blur hover:bg-white/10",
};
const dot: Record<Variant, string> = {
  solid: "bg-brand-400 text-brand-950",
  light: "bg-brand-500 text-white",
  outline: "bg-brand-500 text-white",
};

export type ButtonProps = {
  children: ReactNode; href?: string; onClick?: () => void; variant?: Variant;
  className?: string; type?: "button" | "submit"; disabled?: boolean; arrow?: boolean;
};

/** Pill button with a circular arrow that turns on hover and a light sweep. */
export default function Button({ children, href, onClick, variant = "solid", className, type = "button", disabled, arrow = true }: ButtonProps) {
  const cls = clsx(
    "group relative inline-flex items-center gap-3 overflow-hidden rounded-full py-1.5 pl-6 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70",
    arrow ? "pr-1.5" : "pr-6",
    body[variant], className
  );
  const inner = (
    <>
      <span aria-hidden className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
      {arrow && (
        <span className={clsx("relative grid h-9 w-9 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45", dot[variant])}>
          <ArrowUpRight size={17} />
        </span>
      )}
    </>
  );
  if (href) {
    const external = /^(https?:|tel:|mailto:)/.test(href);
    return external
      ? <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{inner}</a>
      : <Link href={href} className={cls}>{inner}</Link>;
  }
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{inner}</button>;
}

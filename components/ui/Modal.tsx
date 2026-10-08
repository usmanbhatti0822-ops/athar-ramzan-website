"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

/** Shared overlay: centered dialog (bottom sheet on phones) or right-hand drawer. */

let lockCount = 0;
const stack: string[] = [];
const FOCUSABLE =
  'a[href],button:not([disabled]),textarea:not([disabled]),input:not([disabled]):not([type="hidden"]),select:not([disabled]),[tabindex]:not([tabindex="-1"])';

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  variant?: "dialog" | "drawer";
  size?: "md" | "lg" | "xl";
  children: ReactNode;
};

const backdrop: Variants = {
  hidden: { opacity: 0, transition: { duration: 0.2 } },
  show: { opacity: 1, transition: { duration: 0.25 } },
};
const dialogPanel: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.97, transition: { duration: 0.18, ease: "easeIn" } },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", damping: 28, stiffness: 320 } },
};
const drawerPanel: Variants = {
  hidden: { x: "100%", transition: { duration: 0.26, ease: "easeIn" } },
  show: { x: 0, transition: { type: "spring", damping: 34, stiffness: 320 } },
};

export default function Modal({ open, onClose, title, description, variant = "dialog", size = "lg", children }: ModalProps) {
  const id = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    stack.push(id);
    if (lockCount++ === 0) document.body.style.overflow = "hidden";

    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape" && stack[stack.length - 1] === id) closeRef.current();
    };
    window.addEventListener("keydown", onKey);
    const raf = requestAnimationFrame(() => panelRef.current?.focus());

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
      stack.splice(stack.indexOf(id), 1);
      if (--lockCount === 0) document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, [open, id]);

  const trapTab = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab") return;
    const items = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
    if (!items || items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && (active === first || active === panelRef.current)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
  };

  if (!mounted) return null;
  const isDrawer = variant === "drawer";
  const width = { md: "sm:max-w-lg", lg: "sm:max-w-2xl", xl: "sm:max-w-4xl" }[size];

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          className={clsx("fixed inset-0 z-[100] flex", isDrawer ? "justify-end" : "items-end justify-center sm:items-center sm:p-6")}
          initial="hidden" animate="show" exit="hidden"
        >
          <motion.div variants={backdrop} className="absolute inset-0 bg-brand-950/50 backdrop-blur-sm" onClick={onClose} aria-hidden />
          <motion.div
            ref={panelRef}
            variants={isDrawer ? drawerPanel : dialogPanel}
            role="dialog" aria-modal="true" aria-labelledby={`${id}-title`} tabIndex={-1} onKeyDown={trapTab}
            className={clsx(
              "relative flex w-full flex-col border-white/10 bg-card outline-none shadow-2xl shadow-brand-950/30",
              isDrawer
                ? "h-[100dvh] max-w-md border-l sm:rounded-l-2xl"
                : clsx("max-h-[90dvh] rounded-t-2xl border sm:rounded-2xl", width)
            )}
          >
            <header className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-5 sm:px-7">
              <div>
                <h2 id={`${id}-title`} className="text-2xl leading-tight sm:text-[1.75rem]">{title}</h2>
                {description && <p className="mt-1.5 max-w-[52ch] text-sm text-sub">{description}</p>}
              </div>
              <button
                onClick={onClose} aria-label="Close"
                className="-mr-2 -mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full text-sub transition hover:rotate-90 hover:bg-brand-500/20 hover:text-ink"
              >
                <X size={20} />
              </button>
            </header>
            <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-7">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

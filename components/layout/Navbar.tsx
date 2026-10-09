"use client";

import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Menu, Phone, X, Youtube } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE, SOCIAL } from "@/lib/data";
import { ALL_PAGES, MAIN_NAV } from "@/lib/site";
import { useEnquiry } from "../EnquiryProvider";
import Button from "../ui/Button";

const ICONS = { LinkedIn: Linkedin, YouTube: Youtube, Facebook, Instagram };
const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const socials = SOCIAL.filter((s) => s.url);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-brand-800 focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>

      {/* Top info bar */}
      <div className="hidden bg-brand-600 text-[13px] text-white/90 md:block">
        <div className="container-x flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-white"><Phone size={14} />{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white"><Mail size={14} />{SITE.email}</a>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2"><MapPin size={14} />{SITE.location}</span>
            {socials.map((s) => {
              const Icon = ICONS[s.name];
              return <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="hover:text-white"><Icon size={15} /></a>;
            })}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
        <div
          className={clsx(
            "mx-auto flex max-w-[1240px] items-center justify-between rounded-full border bg-card/75 py-2 pl-4 pr-2 backdrop-blur-xl transition-all duration-500",
            scrolled ? "border-black/10 shadow-card" : "border-black/10 shadow-none"
          )}
        >
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-700 to-brand-400 font-display text-[15px] font-bold text-white shadow-soft">AR</span>
            <span className="font-display text-lg font-semibold">{SITE.name}</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {MAIN_NAV.map((n) => (
              <Link key={n.href} href={n.href} className={clsx("relative rounded-full px-4 py-2 text-sm font-medium transition-colors", isActive(n.href) ? "text-brand-800" : "text-sub hover:text-ink")}>
                {isActive(n.href) && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-0 rounded-full bg-brand-500/20" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <span className="relative">{n.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button onClick={() => openEnquiry()} className="hidden sm:inline-flex">Book a session</Button>
            <button
              onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-full bg-brand-500/10 text-brand-800 transition hover:bg-brand-500/30"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu" role="dialog" aria-modal="true" aria-label="Site menu"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)", transition: { duration: 0.8, ease } }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)", transition: { duration: 0.55, ease } }}
            className="fixed inset-0 z-[70] overflow-y-auto bg-gradient-to-br from-surface via-mist to-brand-50"
          >
            <div className="container-x relative flex min-h-full flex-col py-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold">{SITE.name}</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-full bg-brand-600 text-white transition hover:rotate-90">
                  <X size={20} />
                </button>
              </div>

              <div className="my-auto grid gap-12 py-10 lg:grid-cols-[1.4fr_0.6fr]">
                <motion.ul initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.25 } } }} className="grid gap-x-10 sm:grid-cols-2">
                  {ALL_PAGES.map((p) => (
                    <motion.li key={p.href} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}>
                      <Link href={p.href} onClick={() => setOpen(false)} className="group flex items-baseline justify-between border-b border-black/10 py-3.5">
                        <span className={clsx("font-display text-3xl transition-all duration-300 group-hover:translate-x-2 group-hover:text-brand-700 sm:text-4xl", isActive(p.href) && "text-brand-700")}>{p.label}</span>
                        <span className="text-sm text-sub">{p.note}</span>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.7, ease } }} className="self-end rounded-3xl bg-card/80 p-6 shadow-card backdrop-blur">
                  <p className="font-display text-xl">Ready to talk?</p>
                  <p className="mt-2 text-sm text-sub">Training, mentoring or a talk for your team.</p>
                  <div className="mt-5 space-y-2 text-sm">
                    <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-brand-700"><Phone size={15} />{SITE.phone}</a>
                    <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 break-all hover:text-brand-700"><Mail size={15} />{SITE.email}</a>
                  </div>
                  <Button onClick={() => { setOpen(false); setTimeout(() => openEnquiry(), 350); }} className="mt-6">Send an enquiry</Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

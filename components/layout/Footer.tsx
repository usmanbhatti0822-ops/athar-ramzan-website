"use client";

import { ArrowUp, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Link from "next/link";
import { SITE, SOCIAL } from "@/lib/data";
import { ALL_PAGES } from "@/lib/site";

const ICONS = { LinkedIn: Linkedin, YouTube: Youtube, Facebook, Instagram };

export default function Footer() {
  const socials = SOCIAL.filter((s) => s.url);
  return (
    <footer className="px-3 pb-3 sm:px-6 sm:pb-6">
      <div className="grad-brand relative isolate mx-auto max-w-[1360px] overflow-hidden rounded-[2rem] text-white">
        <div className="container-x pt-14 sm:pt-20">
          <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <p className="font-display text-3xl !text-white sm:text-4xl">{SITE.name}</p>
              <p className="mt-4 max-w-[38ch] text-white/75">Senior banking professional, trainer, mentor and speaker, based in {SITE.location}.</p>
              {socials.length > 0 && (
                <div className="mt-6 flex gap-2">
                  {socials.map((s) => {
                    const Icon = ICONS[s.name];
                    return <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="grid h-10 w-10 place-items-center rounded-full bg-white/15 transition hover:-translate-y-1 hover:bg-white hover:text-brand-800"><Icon size={17} /></a>;
                  })}
                </div>
              )}
            </div>
            <nav aria-label="Footer">
              <p className="font-display text-lg !text-white">Pages</p>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-white/80">
                {ALL_PAGES.map((p) => <li key={p.href}><Link href={p.href} className="transition hover:text-white hover:underline hover:underline-offset-4">{p.label}</Link></li>)}
              </ul>
            </nav>
            <div>
              <p className="font-display text-lg !text-white">Contact</p>
              <ul className="mt-4 space-y-3 text-white/80">
                <li><a href={SITE.phoneHref} className="flex items-center gap-2.5 hover:text-white"><Phone size={16} />{SITE.phone}</a></li>
                <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 break-all hover:text-white"><Mail size={16} />{SITE.email}</a></li>
                <li className="flex items-center gap-2.5"><MapPin size={16} />{SITE.location}</li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/20 pt-6 text-sm text-white/70 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
            <p>Independent professional website. Not affiliated with any bank or regulator.</p>
          </div>

          <div className="relative select-none">
            <p aria-hidden className="bg-gradient-to-b from-white/40 to-white/0 bg-clip-text pb-2 pt-6 text-center font-display text-[clamp(3rem,15.5vw,13rem)] font-bold leading-[0.9] tracking-tight text-transparent">
              Athar Ramzan
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"
              className="absolute bottom-6 right-0 grid h-12 w-12 place-items-center rounded-full bg-white text-brand-800 shadow-card transition hover:-translate-y-1"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

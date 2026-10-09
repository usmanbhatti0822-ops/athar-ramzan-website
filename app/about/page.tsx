import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { ABOUT, SITE, WHY_EXPERIENCE } from "@/lib/data";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import Tilt from "@/components/ui/Tilt";

export const metadata: Metadata = { title: "About", description: SITE.description };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Athar Ramzan" tagline="Experience that turns into practical learning."
        crumbs={[{ label: "About" }]} text={[ABOUT[0], ABOUT[1]]}
      />

      <section className="section">
        <div className="container-x grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Tilt className="mx-auto max-w-[420px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
                <Image src="/athar-ramzan.png" alt="Athar Ramzan" fill sizes="(min-width:1024px) 420px, 90vw" className="object-cover" style={{ objectPosition: "50% 10%" }} />
              </div>
            </Tilt>
            <ul className="mx-auto mt-8 flex max-w-[420px] flex-wrap gap-2">
              {SITE.roles.map((r) => <li key={r} className="rounded-full bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-800">{r}</li>)}
            </ul>
          </Reveal>

          <div>
            <Reveal><span className="badge">My story</span></Reveal>
            <Reveal delay={0.1}><h2 className="mt-5 text-[clamp(2rem,4vw,3rem)]">From the bank desk to the training room</h2></Reveal>
            <div className="mt-6 space-y-5 text-lg text-sub">
              {ABOUT.map((p, i) => <Reveal key={i} delay={0.1 + i * 0.08}><p>{p}</p></Reveal>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-surface via-mist to-surface">
        <div className="container-x">
          <SectionHead badge="Why work with me" title="Experience you can rely on" accent="rely on" />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_EXPERIENCE.map((w, i) => (
              <Reveal as="li" key={w} delay={(i % 3) * 0.07} className="card flex h-full items-start gap-4 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-500 text-white"><Check size={16} /></span>
                  <span className="font-medium">{w}</span>
                </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

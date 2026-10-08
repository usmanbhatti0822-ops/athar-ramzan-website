import type { Metadata } from "next";
import EnquiryButton from "@/components/ui/EnquiryButton";
import Link from "next/link";
import { ArrowUpRight, Building2, Users } from "lucide-react";
import { BUSINESS_TOPICS, CORPORATE_FOR, TRAINING_FOR } from "@/lib/data";
import { PROCESS, PROGRAMS } from "@/lib/site";
import CtaBand from "@/components/ui/CtaBand";
import Cover from "@/components/ui/Cover";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import Tilt from "@/components/ui/Tilt";

export const metadata: Metadata = { title: "Training", description: "Practical banking training in credit, trade finance, UCP-600, SBP regulations, KYC/AML, relationship and branch management." };

export default function TrainingPage() {
  return (
    <>
      <PageHero
        title="Banking training" tagline="Practical sessions, not textbook lectures."
        crumbs={[{ label: "Training" }]}
        text={["Training for individuals and teams across credit, trade finance, regulation and relationship management.", "Every program is explained through real banking situations."]}
      />

      <section className="section">
        <div className="container-x">
          <SectionHead badge="Programs" title="Choose a program to explore" accent="program" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <Tilt className="h-full">
                  <Link href={`/training/${p.slug}`} className="card group flex h-full flex-col overflow-hidden shadow-card transition-shadow duration-300 hover:shadow-soft">
                    <Cover index={i} className="h-36 w-full" />
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="text-xl">{p.title}</h2>
                      <p className="mt-3 flex-1 text-sub">{p.blurb}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
                        View program <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-surface via-mist to-surface">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-8 shadow-card">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/20 text-brand-300"><Users size={26} /></span>
              <h2 className="mt-6 text-2xl">Who it is for</h2>
              <p className="mt-3 text-sub">Learn. Apply. Grow. Banking is not learned only from books. Real professional growth comes from understanding how knowledge is applied in actual banking situations.</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {TRAINING_FOR.map((t) => <li key={t} className="rounded-full bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-200">{t}</li>)}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card h-full p-8 shadow-card">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/20 text-brand-300"><Building2 size={26} /></span>
              <h2 className="mt-6 text-2xl">Corporate programs</h2>
              <p className="mt-4 text-sub">Custom programs for: {CORPORATE_FOR}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead badge="For business owners" title="Learn how banks look at your business" accent="banks look" lead="Sessions that help entrepreneurs and SMEs understand banking from the lender's side." />
          <ul className="mt-12 flex flex-wrap justify-center gap-3">
            {BUSINESS_TOPICS.map((t, i) => (
              <Reveal as="li" key={t} delay={(i % 6) * 0.04} y={16} className="rounded-full border border-white/10 bg-card px-5 py-2.5 text-sm shadow-sm">{t}</Reveal>
            ))}
          </ul>
          <Reveal className="mt-8 text-center">
  <p className="mx-auto max-w-[60ch] text-sm text-sub">
    Consultations build understanding. They do not promise loan approval, financing approval or regulatory outcomes.
  </p>
  <div className="mt-6 flex justify-center">
    <EnquiryButton service="Business / banking consultation">Book a business consultation</EnquiryButton>
  </div>
</Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <SectionHead badge="How it works" title="From first message to lasting skills" accent="lasting skills" />
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.08} className="card h-full p-7 shadow-card">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-600 font-display text-sm font-semibold text-white">{i + 1}</span>
                  <h3 className="mt-5 text-xl">{s.title}</h3>
                  <p className="mt-3 text-sub">{s.text}</p>
                </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand service="Request corporate training" />
    </>
  );
}

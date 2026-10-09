import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { PROGRAMS, programOutcomes, programOverview } from "@/lib/site";
import CtaBand from "@/components/ui/CtaBand";
import Cover from "@/components/ui/Cover";
import EnquiryButton from "@/components/ui/EnquiryButton";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

export const dynamicParams = false;
export const generateStaticParams = () => PROGRAMS.map((p) => ({ slug: p.slug }));

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = PROGRAMS.find((x) => x.slug === params.slug);
  return p ? { title: p.title, description: p.blurb } : {};
}

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const p = PROGRAMS.find((x) => x.slug === params.slug);
  if (!p) notFound();

  return (
    <>
      <PageHero
        title={p.title} tagline="A practical program for banking professionals."
        crumbs={[{ label: "Training", href: "/training" }, { label: p.title }]}
        text={[p.blurb, "Format, length and depth are agreed with you before the program starts."]}
      />

      <section className="section">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1.6fr_0.9fr]">
          <div>
            <Reveal><Cover index={p.i} className="aspect-[16/8] w-full rounded-[2rem] shadow-soft" /></Reveal>
            <Reveal><h2 className="mt-10 text-3xl">Program overview</h2></Reveal>
            <Reveal delay={0.1}><p className="mt-4 text-lg text-sub">{programOverview(p.blurb)}</p></Reveal>

            <Reveal><h3 className="mt-12 text-2xl">What participants take away</h3></Reveal>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {programOutcomes.map((o, i) => (
                <Reveal as="li" key={o} delay={i * 0.07} className="flex items-start gap-3 rounded-2xl bg-mist p-5">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-500 text-white"><Check size={15} /></span>
                    <span>{o}</span>
                  </Reveal>
              ))}
            </ul>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="card p-6 shadow-card">
              <h3 className="text-xl">Other programs</h3>
              <ul className="mt-4 space-y-2">
                {PROGRAMS.filter((x) => x.slug !== p.slug).slice(0, 6).map((x) => (
                  <li key={x.slug}>
                    <Link href={`/training/${x.slug}`} className="group flex items-center justify-between gap-3 rounded-2xl border border-black/10 px-4 py-3 text-sm transition hover:border-brand-400 hover:bg-brand-500/20">
                      <span>{x.title}</span>
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-500 text-white transition group-hover:rotate-45"><ArrowUpRight size={14} /></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grad-brand rounded-3xl p-7 text-white shadow-soft">
              <h3 className="text-2xl !text-white">Book this program</h3>
              <p className="mt-3 text-white/80">Share your audience and preferred date. You will get a clear reply.</p>
              <EnquiryButton variant="light" service={p.title} className="mt-6">Send an enquiry</EnquiryButton>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand service={p.title} />
    </>
  );
}

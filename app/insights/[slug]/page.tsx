import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { ARTICLES, articleOutline } from "@/lib/site";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";
import Cover from "@/components/ui/Cover";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

export const dynamicParams = false;
export const generateStaticParams = () => ARTICLES.map((a) => ({ slug: a.slug }));

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = ARTICLES.find((x) => x.slug === params.slug);
  return a ? { title: a.title, description: `${a.category}: ${a.title}` } : {};
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const idx = ARTICLES.findIndex((x) => x.slug === params.slug);
  if (idx < 0) notFound();
  const a = ARTICLES[idx];
  const related = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={a.title} tagline={a.category}
        crumbs={[{ label: "Insights", href: "/insights" }, { label: a.category }]}
        text={["By Athar Ramzan.", a.href ? "This article is published. Read the full version using the button below." : "This article is being prepared. The outline below shows what it will cover."]}
      />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1.6fr_0.8fr]">
          <article>
            <Reveal><Cover index={idx} label={a.category} className="aspect-[16/8] w-full rounded-[2rem] shadow-soft" /></Reveal>
            <Reveal><h2 className="mt-10 text-3xl">{a.href ? "Read the full article" : "What this article will cover"}</h2></Reveal>
            {a.href ? (
              <Reveal delay={0.1}><div className="mt-6"><Button href={a.href}>Open article</Button></div></Reveal>
            ) : (
              <ul className="mt-6 space-y-3">
                {articleOutline.map((o, i) => (
                  <Reveal as="li" key={o} delay={i * 0.07} className="flex items-start gap-3 rounded-2xl bg-mist p-5">
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-500 text-white"><Check size={15} /></span>{o}
                    </Reveal>
                ))}
              </ul>
            )}
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card p-6 shadow-card">
              <h3 className="text-xl">More articles</h3>
              <ul className="mt-4 space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/insights/${r.slug}`} className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 px-4 py-3 text-sm transition hover:border-brand-400 hover:bg-brand-500/20">
                      <span>{r.title}</span>
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-500 text-white transition group-hover:rotate-45"><ArrowUpRight size={14} /></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

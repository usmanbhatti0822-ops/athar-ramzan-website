import Link from "next/link";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

/** Header block for every inner page: breadcrumb, big title, tagline, intro text. */
export default function PageHero({
  title, tagline, text, crumbs,
}: { title: string; tagline: string; text: string[]; crumbs: { label: string; href?: string }[] }) {
  return (
    <section className="relative isolate overflow-hidden rounded-b-[2.5rem] bg-gradient-to-b from-mist to-surface pb-16 pt-10 sm:pb-24 sm:pt-14">
      <div className="container-x">
        <Reveal y={10}>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-sub">
            <Link href="/" className="hover:text-brand-700">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <span aria-hidden>/</span>
                {c.href ? <Link href={c.href} className="hover:text-brand-700">{c.label}</Link> : <span className="font-semibold text-brand-700">{c.label}</span>}
              </span>
            ))}
          </nav>
        </Reveal>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-between gap-10">
            <SplitText as="h1" instant text={title} className="text-[clamp(2.4rem,6vw,4.6rem)]" />
            <Reveal delay={0.35}><p className="max-w-[26ch] font-display text-xl leading-snug sm:text-2xl">{tagline}</p></Reveal>
          </div>
          <Reveal delay={0.25} className="md:pt-3">
            <span className="badge shadow-card"><span className="h-2 w-2 animate-pulseDot rounded-full bg-brand-500" />Athar Ramzan</span>
            <div className="mt-5 space-y-4 text-[15px] text-sub">{text.map((t, i) => <p key={i}>{t}</p>)}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

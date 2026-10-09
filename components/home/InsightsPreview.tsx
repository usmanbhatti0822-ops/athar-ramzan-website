import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ARTICLES } from "@/lib/site";
import Button from "../ui/Button";
import Cover from "../ui/Cover";
import Reveal from "../ui/Reveal";
import SectionHead from "../ui/SectionHead";

export default function InsightsPreview() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHead
          badge="Insights" title="Ideas on banking, credit and careers" accent="banking, credit" align="left"
          lead="Short articles that explain banking topics in plain, practical language."
          action={<Button href="/insights" variant="outline">All articles</Button>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ARTICLES.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.1}>
              <Link href={`/insights/${a.slug}`} className="group block">
                <div className="overflow-hidden rounded-3xl">
                  <Cover index={i} label={a.category} className="aspect-[4/3] w-full transition duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-5 text-xl transition-colors group-hover:text-brand-700">{a.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  {a.href ? "Read article" : "Coming soon"} <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

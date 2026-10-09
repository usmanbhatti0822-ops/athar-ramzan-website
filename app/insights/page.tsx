import type { Metadata } from "next";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { SOCIAL } from "@/lib/data";
import InsightsGrid from "@/components/InsightsGrid";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "Insights", description: "Articles on banking, credit, trade finance, SME banking, SBP regulations, leadership and careers." };
const ICONS = { LinkedIn: Linkedin, YouTube: Youtube, Facebook, Instagram };

export default function InsightsPage() {
  const links = SOCIAL.filter((s) => s.url);
  return (
    <>
      <PageHero
        title="Insights and articles" tagline="Banking ideas in plain language."
        crumbs={[{ label: "Insights" }]}
        text={["Short lessons on credit, trade finance, regulation, leadership and careers.", "New articles are being prepared. Topics below show what is coming."]}
      />
      <section className="section">
        <div className="container-x">
          <InsightsGrid />
          <Reveal className="mt-20">
            <div className="rounded-3xl bg-mist p-8 text-center sm:p-12">
              <h2 className="text-3xl">Follow my professional journey</h2>
              <p className="mx-auto mt-3 max-w-[56ch] text-sub">Short banking lessons, credit tips, trade finance education, SBP regulatory awareness, career advice and leadership lessons.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {links.length > 0
                  ? links.map((s) => { const Icon = ICONS[s.name]; return <Button key={s.name} href={s.url} variant="outline" arrow={false}><span className="flex items-center gap-2"><Icon size={16} />{s.name}</span></Button>; })
                  : <Button href="/contact" variant="outline">Get in touch</Button>}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

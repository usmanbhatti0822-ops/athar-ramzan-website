import type { Metadata } from "next";
import { EXPERTISE } from "@/lib/data";
import CtaBand from "@/components/ui/CtaBand";
import { EXPERTISE_ICONS } from "@/components/ui/icons";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Tilt from "@/components/ui/Tilt";

export const metadata: Metadata = {
  title: "Expertise",
  description: "Corporate banking, credit analysis, trade finance, relationship management, branch management and SBP regulatory compliance.",
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        title="Banking expertise" tagline="Fourteen areas, one practical approach."
        crumbs={[{ label: "Expertise" }]}
        text={[
          "Over two decades, the work has covered credit, trade, relationships, branches, controls and regulation.",
          "Each area below is something I have handled directly and now teach in plain, usable language.",
        ]}
      />
      <section className="section">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERTISE.map(([title, text], i) => {
            const Icon = EXPERTISE_ICONS[i];
            return (
              <Reveal key={title} delay={(i % 3) * 0.08}>
                <Tilt className="h-full">
                  <div className="card h-full p-7 shadow-card transition-shadow duration-300 hover:shadow-soft">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-900 to-brand-950 text-brand-300"><Icon size={26} /></span>
                    <h2 className="mt-6 text-xl">{title}</h2>
                    <p className="mt-3 text-sub">{text}</p>
                  </div>
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

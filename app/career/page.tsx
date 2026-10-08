import type { Metadata } from "next";
import { ACHIEVEMENTS, CAREER } from "@/lib/data";
import CareerTimeline from "@/components/ui/CareerTimeline";
import CountUp from "@/components/ui/CountUp";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import Tilt from "@/components/ui/Tilt";

export const metadata: Metadata = { title: "Career", description: "Career history and achievements in corporate banking, credit and trade finance." };

export default function CareerPage() {
  return (
    <>
      <PageHero
        title="Career and achievements" tagline="Roles, results and responsibility."
        crumbs={[{ label: "Career" }]}
        text={["From sales and marketing to credit, foreign trade, branch management and corporate relationships.", "Each role added a new layer of practical banking understanding."]}
      />

      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHead badge="Experience" title="A career built role by role" accent="role by role" align="left" lead="Scroll to follow the path from earliest role to today." />
          </div>
          <CareerTimeline items={CAREER} />
        </div>
      </section>

      <section className="section bg-gradient-to-b from-surface via-mist to-surface">
        <div className="container-x">
          <SectionHead badge="Achievements" title="Highlights from the stated career period" accent="Highlights" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ACHIEVEMENTS.map((a, i) => (
              <Reveal key={a.label} delay={(i % 3) * 0.08}>
                <Tilt className="h-full">
                  <div className="card h-full p-7 shadow-card">
                    <p className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text font-display text-4xl font-semibold text-transparent sm:text-5xl">
                      {a.to !== undefined ? <CountUp prefix={a.prefix} to={a.to} decimals={a.decimals} suffix={a.suffix} /> : a.text}
                    </p>
                    <p className="mt-4 text-sub">{a.label}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

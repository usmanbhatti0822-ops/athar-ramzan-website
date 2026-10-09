import type { Metadata } from "next";
import { Compass } from "lucide-react";
import { MENTORING_TOPICS } from "@/lib/data";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import Tilt from "@/components/ui/Tilt";

export const metadata: Metadata = { title: "Mentoring", description: "One-to-one banking career mentoring: interview preparation, credit and trade skills, communication and leadership." };

export default function MentoringPage() {
  return (
    <>
      <PageHero
        title="Banking mentoring" tagline="One-to-one guidance for your banking career."
        crumbs={[{ label: "Mentoring" }]}
        text={["Personal sessions for young bankers and professionals moving into senior roles.", "We work on the skills and decisions that matter most for your next step."]}
      />
      <section className="section">
        <div className="container-x">
          <SectionHead badge="Mentoring topics" title="What we can work on together" accent="work on" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MENTORING_TOPICS.map((t, i) => (
              <Reveal key={t} delay={(i % 3) * 0.07}>
                <Tilt className="h-full">
                  <div className="card flex h-full items-center gap-5 p-6 shadow-card transition-shadow hover:shadow-soft">
<<<<<<< HEAD
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-500/20 text-brand-700"><Compass size={22} /></span>
=======
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-500/20 text-brand-300"><Compass size={22} /></span>
>>>>>>> 801b4d79c37d6d0bc384fe628275771cfd8fce03
                    <h2 className="text-lg">{t}</h2>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand service="Book a mentoring session" />
    </>
  );
}

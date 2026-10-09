import type { Metadata } from "next";
import { Mic } from "lucide-react";
import { SPEAKING_TOPICS } from "@/lib/data";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import Tilt from "@/components/ui/Tilt";

export const metadata: Metadata = { title: "Speaking", description: "Experience-based talks on career building, leadership, ethics and growth mindset for banks, universities and gatherings." };

export default function SpeakingPage() {
  return (
    <>
      <PageHero
        title="Speaking and talks" tagline="Honest stories and lessons from a banking career."
        crumbs={[{ label: "Speaking" }]}
        text={["Talks for banks, universities, institutes and professional gatherings.", "Each talk mixes experience with ideas the audience can apply."]}
      />
      <section className="section">
        <div className="container-x">
          <SectionHead badge="Talk topics" title="Topics I speak on" accent="speak on" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SPEAKING_TOPICS.map((t, i) => (
              <Reveal key={t} delay={(i % 3) * 0.07}>
                <Tilt className="h-full">
                  <div className="card h-full p-7 shadow-card transition-shadow hover:shadow-soft">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 text-white"><Mic size={22} /></span>
                    <h2 className="mt-5 text-xl">{t}</h2>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand service="Invite me as a speaker" />
    </>
  );
}

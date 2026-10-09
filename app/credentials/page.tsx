import type { Metadata } from "next";
import { Award, GraduationCap } from "lucide-react";
import { CREDENTIALS, PD_TOPICS } from "@/lib/data";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

export const metadata: Metadata = { title: "Credentials", description: "Banking certifications, degrees and professional development." };

export default function CredentialsPage() {
  return (
    <>
      <PageHero
        title="Credentials" tagline="Learning that goes beyond the job."
        crumbs={[{ label: "Credentials" }]}
        text={["Professional banking certifications from Pakistan and the United Kingdom, supported by an MBA and a commerce degree.", "Continuing professional development keeps the knowledge current."]}
      />
      <section className="section">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2">
            {CREDENTIALS.map(([title, org, year], i) => (
              <Reveal key={title} delay={(i % 2) * 0.08}>
                <div className="card group flex h-full items-start gap-5 p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-500/20 text-brand-700 transition group-hover:bg-brand-500 group-hover:text-white"><GraduationCap size={26} /></span>
                  <div className="flex-1">
                    <h2 className="text-xl">{title}</h2>
                    <p className="mt-2 text-sub">{org}</p>
                  </div>
                  <span className="rounded-full bg-brand-500/10 px-3 py-1 text-sm font-semibold text-brand-800">{year}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-24">
            <SectionHead badge="Professional development" title="Courses completed along the way" accent="Courses completed" />
            <ul className="mt-12 flex flex-wrap justify-center gap-3">
              {PD_TOPICS.map((t, i) => (
                <Reveal as="li" key={t} delay={(i % 6) * 0.04} y={16} className="flex items-center gap-2 rounded-full border border-black/10 bg-card px-5 py-2.5 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-brand-400">
                    <Award size={15} className="text-brand-500" />{t}
                  </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

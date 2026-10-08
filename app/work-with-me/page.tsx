import type { Metadata } from "next";
import { BookOpen, Briefcase, Building2, Compass, Handshake, Mic } from "lucide-react";
import { SERVICES } from "@/lib/data";
import EnquiryButton from "@/components/ui/EnquiryButton";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Tilt from "@/components/ui/Tilt";

export const metadata: Metadata = { title: "Work with me", description: "Training, corporate programs, speaking, mentoring, consultation and partnerships." };
const ICONS = [BookOpen, Building2, Mic, Compass, Briefcase, Handshake];

export default function WorkWithMePage() {
  return (
    <>
      <PageHero
        title="Work with me" tagline="Choose a service, or tell me what you need."
        crumbs={[{ label: "Work with me" }]}
        text={["Training, mentoring, talks, consultation and partnerships.", "Pick the option closest to your need and send a short enquiry."]}
      />
      <section className="section">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={s.title} delay={(i % 3) * 0.08}>
                  <Tilt className="h-full">
                    <div className="card flex h-full flex-col p-7 shadow-card transition-shadow hover:shadow-soft">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 text-white"><Icon size={26} /></span>
                      <h2 className="mt-6 text-xl">{s.title}</h2>
                      <p className="mt-3 flex-1 text-sub">{s.text}</p>
                      <div className="mt-6"><EnquiryButton service={s.title} variant="outline">Enquire</EnquiryButton></div>
                    </div>
                  </Tilt>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-16">
            <div className="rounded-3xl bg-mist p-8 text-center sm:p-12">
              <h2 className="text-3xl">Not sure what you need?</h2>
              <p className="mx-auto mt-3 max-w-[52ch] text-sub">Tell me about your requirement and we can explore the right way to work together.</p>
              <div className="mt-6 flex justify-center"><EnquiryButton>Send a general enquiry</EnquiryButton></div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
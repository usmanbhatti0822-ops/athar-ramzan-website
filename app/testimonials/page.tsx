import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import CtaBand from "@/components/ui/CtaBand";
import EnquiryButton from "@/components/ui/EnquiryButton";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Tilt from "@/components/ui/Tilt";

export const metadata: Metadata = { title: "Testimonials", description: "Feedback from participants, mentees and organizations." };

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Testimonials" tagline="What participants and partners say."
        crumbs={[{ label: "Testimonials" }]}
        text={["Feedback from bankers, students and organizations who have attended sessions.", "Add real feedback in lib/data.ts and it appears here automatically."]}
      />
      <section className="section">
        <div className="container-x">
          {TESTIMONIALS.length === 0 ? (
            <Reveal>
              <div className="mx-auto max-w-2xl rounded-[2rem] bg-mist p-10 text-center sm:p-14">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 text-white"><Quote size={28} /></span>
                <h2 className="mt-6 text-3xl">Be the first to share feedback</h2>
                <p className="mt-3 text-sub">Testimonials from past sessions will be published here. If you have attended a session, your words would help others decide.</p>
                <div className="mt-7 flex justify-center"><EnquiryButton>Share your feedback</EnquiryButton></div>
              </div>
            </Reveal>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name + i} delay={(i % 3) * 0.08}>
                  <Tilt className="h-full">
                    <figure className="card flex h-full flex-col p-7 shadow-card">
                      <Quote size={30} className="text-brand-400" />
                      <blockquote className="mt-4 flex-1 text-lg">{t.quote}</blockquote>
                      <figcaption className="mt-6 border-t border-white/10 pt-4">
                        <p className="font-display text-lg">{t.name}</p>
                        <p className="text-sm text-sub">{t.role}</p>
                      </figcaption>
                    </figure>
                  </Tilt>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import Accordion from "@/components/ui/Accordion";
import CtaBand from "@/components/ui/CtaBand";
import EnquiryButton from "@/components/ui/EnquiryButton";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { FAQ_FLAT, FAQS } from "@/lib/site";

export const metadata: Metadata = { title: "FAQ", description: "Answers about banking training, mentoring, speaking and how to work with Athar Ramzan." };

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_FLAT.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <PageHero
        title="Frequently asked questions" tagline="Clear answers before you get in touch."
        crumbs={[{ label: "FAQ" }]}
        text={["Common questions about programs, mentoring, talks and working together.", "Cannot find your answer? Send an enquiry and you will get a reply."]}
      />
      <section className="section">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32">
            <Reveal><h2 className="text-[clamp(2rem,4vw,3rem)]">Your questions, answered</h2></Reveal>
            <Reveal delay={0.1}><p className="mt-4 max-w-[40ch] text-sub">Quick answers about how sessions work and who they are for.</p></Reveal>
            <Reveal delay={0.2} className="mt-7"><EnquiryButton>Ask a question</EnquiryButton></Reveal>
          </div>
          <div className="space-y-6">
            {FAQS.map((g, i) => (
              <Reveal key={g.group} delay={i * 0.06}>
                <div className="rounded-3xl bg-mist p-6 sm:p-8">
                  <h3 className="text-xl">{g.group}</h3>
                  <Accordion items={g.items} defaultOpen={i === 0 ? 0 : null} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

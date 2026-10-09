import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/data";
import EnquiryForm from "@/components/EnquiryForm";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Tilt from "@/components/ui/Tilt";

export const metadata: Metadata = { title: "Contact", description: "Contact Athar Ramzan for banking training, mentoring, speaking and consultation." };

const INFO = [
  { icon: Phone, label: "Phone", value: SITE.phone, href: SITE.phoneHref },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: "Location", value: SITE.location },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact" tagline="Let's talk about your goals."
        crumbs={[{ label: "Contact" }]}
        text={["Whether it is a training program, a mentoring session or a talk, send a few details and you will get a reply.", "You can also call or email directly."]}
      />
      <section className="section">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {INFO.map(({ icon: Icon, label, value, href }, i) => (
              <Reveal key={label} delay={i * 0.08}>
                <Tilt>
                  <div className="card flex items-center gap-5 p-6 shadow-card">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 text-white"><Icon size={24} /></span>
                    <div className="min-w-0">
                      <p className="text-sm text-sub">{label}</p>
<<<<<<< HEAD
                      {href ? <a href={href} className="break-all font-display text-lg hover:text-brand-700">{value}</a> : <p className="font-display text-lg">{value}</p>}
=======
                      {href ? <a href={href} className="break-all font-display text-lg hover:text-brand-200">{value}</a> : <p className="font-display text-lg">{value}</p>}
>>>>>>> 801b4d79c37d6d0bc384fe628275771cfd8fce03
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
<<<<<<< HEAD
            <div className="relative isolate overflow-hidden rounded-[2rem] border border-black/10 bg-card p-6 shadow-soft sm:p-10">
=======
            <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-card p-6 shadow-soft sm:p-10">
>>>>>>> 801b4d79c37d6d0bc384fe628275771cfd8fce03
              <h2 className="text-3xl">Send an enquiry</h2>
              <p className="mb-7 mt-2 text-sub">Tell me what you need. I will review it and get back to you.</p>
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

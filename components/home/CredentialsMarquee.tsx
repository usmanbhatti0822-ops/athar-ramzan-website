import { GraduationCap } from "lucide-react";
import { CREDENTIALS } from "@/lib/data";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import SectionHead from "../ui/SectionHead";

export default function CredentialsMarquee() {
  const row = [...CREDENTIALS, ...CREDENTIALS];
  return (
    <section className="section overflow-hidden bg-gradient-to-b from-surface via-mist to-surface">
      <div className="container-x">
        <SectionHead
          badge="Credentials" title="Qualified by leading banking institutes" accent="banking institutes"
          lead="Professional certifications and degrees from respected institutions in Pakistan and the United Kingdom."
        />
      </div>
      <Reveal className="mt-14">
        <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-5 py-4 [animation-duration:55s] group-hover:[animation-play-state:paused]">
            {row.map(([title, org, year], i) => (
              <div key={i} className="card flex w-[320px] shrink-0 items-start gap-4 p-6 shadow-card">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-500/20 text-brand-700"><GraduationCap size={22} /></span>
                <div>
                  <p className="font-display text-lg leading-snug">{title}</p>
                  <p className="mt-1 text-sm text-sub">{org}</p>
                  <p className="mt-2 text-sm font-semibold text-brand-700">{year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-10 text-center"><Button href="/credentials" variant="outline">View all credentials</Button></Reveal>
    </section>
  );
}

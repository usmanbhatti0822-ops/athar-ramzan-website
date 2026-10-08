import { EXPERTISE } from "@/lib/data";
import Button from "../ui/Button";
import { EXPERTISE_ICONS } from "../ui/icons";
import Reveal from "../ui/Reveal";
import SectionHead from "../ui/SectionHead";
import Tilt from "../ui/Tilt";

export default function ExpertisePreview() {
  return (
    <section className="section bg-gradient-to-b from-surface via-mist to-surface">
      <div className="container-x">
        <SectionHead
          badge="Expertise" title="Banking knowledge built on real desk experience" accent="real desk experience"
          lead="From credit proposals to trade documents, these are the areas where experience turns into practical guidance."
          action={<Button href="/expertise" variant="outline">All expertise</Button>} align="left"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERTISE.slice(0, 6).map(([title, text], i) => {
            const Icon = EXPERTISE_ICONS[i];
            return (
              <Reveal key={title} delay={(i % 3) * 0.08}>
                <Tilt className="h-full">
                  <div className="card h-full bg-card/90 p-7 shadow-card transition-shadow duration-300 hover:shadow-soft">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-900 to-brand-950 text-brand-300"><Icon size={26} /></span>
                    <h3 className="mt-6 text-xl">{title}</h3>
                    <p className="mt-3 text-sub">{text}</p>
                  </div>
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

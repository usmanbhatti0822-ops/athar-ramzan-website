import { EXPERTISE, TRAINING } from "@/lib/data";
import { CREDENTIALS } from "@/lib/data";
import CountUp from "../ui/CountUp";
import Reveal from "../ui/Reveal";
import ScrollWords from "../ui/ScrollWords";

const STATS = [
  { to: 20, suffix: "+", label: "Years of banking experience" },
  { to: EXPERTISE.length, suffix: "", label: "Areas of banking expertise" },
  { to: TRAINING.length, suffix: "", label: "Training topics on offer" },
  { to: CREDENTIALS.length, suffix: "", label: "Degrees and certifications" },
];

export default function Intro() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal><span className="badge">About Athar</span></Reveal>
        <ScrollWords
          className="mt-6 max-w-[30ch] font-display text-[clamp(1.9rem,4.4vw,3.6rem)] font-semibold leading-[1.15] tracking-tight sm:max-w-[34ch]"
          text="Complex banking made simple. With two decades across credit, trade finance and branch leadership, Athar helps bankers and businesses make better decisions with practical, usable knowledge."
        />
<<<<<<< HEAD
        <dl className="mt-16 grid grid-cols-2 gap-y-10 border-t border-black/10 pt-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <dt className="font-display text-5xl font-semibold text-brand-700 sm:text-6xl">
=======
        <dl className="mt-16 grid grid-cols-2 gap-y-10 border-t border-white/10 pt-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <dt className="font-display text-5xl font-semibold text-brand-200 sm:text-6xl">
>>>>>>> 801b4d79c37d6d0bc384fe628275771cfd8fce03
                <CountUp to={s.to} suffix={s.suffix} />
              </dt>
              <dd className="mt-2 max-w-[18ch] text-sm text-sub">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

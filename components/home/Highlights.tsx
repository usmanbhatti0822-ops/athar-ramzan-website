import { ACHIEVEMENTS } from "@/lib/data";
import CountUp from "../ui/CountUp";
import Reveal from "../ui/Reveal";
import SplitText from "../ui/SplitText";
import Button from "../ui/Button";

export default function Highlights() {
  return (
    <section className="px-3 sm:px-6">
      <div className="grad-brand relative isolate mx-auto max-w-[1360px] overflow-hidden rounded-[2rem] py-20 text-white sm:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal><span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3.5 py-1 text-xs font-semibold">Career highlights</span></Reveal>
              <SplitText text="Results that come from steady, careful banking" className="mt-5 max-w-[20ch] text-[clamp(2rem,4.6vw,3.4rem)] !text-white" />
            </div>
            <Reveal delay={0.2}><Button href="/career" variant="light">See full career</Button></Reveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ACHIEVEMENTS.map((a, i) => (
              <Reveal key={a.label} delay={i * 0.07}>
                <div className="h-full rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-md transition duration-300 hover:-translate-y-1.5 hover:bg-white/15">
                  <p className="font-display text-4xl font-semibold sm:text-5xl">
                    {a.to !== undefined ? <CountUp prefix={a.prefix} to={a.to} decimals={a.decimals} suffix={a.suffix} /> : a.text}
                  </p>
                  <p className="mt-4 text-white/75">{a.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

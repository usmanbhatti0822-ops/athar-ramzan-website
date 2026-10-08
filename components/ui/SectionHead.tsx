import clsx from "clsx";
import type { ReactNode } from "react";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

export default function SectionHead({
  badge, title, accent, lead, align = "center", action,
}: { badge: string; title: string; accent?: string; lead?: string; align?: "center" | "left"; action?: ReactNode }) {
  const center = align === "center";
  return (
    <div className={clsx("flex flex-col gap-6", center ? "items-center text-center" : "md:flex-row md:items-end md:justify-between")}>
      <div className={clsx(center && "mx-auto")}>
        <Reveal><span className="badge">{badge}</span></Reveal>
        <SplitText text={title} accent={accent} className={clsx("mt-5 text-[clamp(2rem,4.6vw,3.4rem)]", center ? "mx-auto max-w-[20ch]" : "max-w-[22ch]")} />
        {lead && <Reveal delay={0.15}><p className={clsx("mt-5 max-w-[56ch] text-sub", center && "mx-auto")}>{lead}</p></Reveal>}
      </div>
      {action && <Reveal delay={0.2}>{action}</Reveal>}
    </div>
  );
}

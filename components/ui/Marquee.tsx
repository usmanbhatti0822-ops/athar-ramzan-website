import { Sparkles } from "lucide-react";

/** Endless scrolling ribbon of short phrases. Pauses on hover. */
export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
        {row.map((t, i) => (
<<<<<<< HEAD
          <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-xl text-brand-700 sm:text-2xl">
=======
          <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-xl text-brand-100/80 sm:text-2xl">
>>>>>>> 801b4d79c37d6d0bc384fe628275771cfd8fce03
            {t}
            <Sparkles size={18} className="text-brand-500" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}

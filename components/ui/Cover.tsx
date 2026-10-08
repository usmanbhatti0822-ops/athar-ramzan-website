import clsx from "clsx";

const GRADS = [
  "from-brand-700 to-brand-400",
  "from-brand-900 to-brand-500",
  "from-brand-600 to-brand-300",
  "from-brand-800 to-brand-400",
];

/** Gradient cover with wave lines. Use until real photos are added. */
export default function Cover({ index = 0, label, className }: { index?: number; label?: string; className?: string }) {
  const paths = Array.from({ length: 9 }, (_, i) => `M0 ${70 + i * 12} C 110 ${20 + i * 14}, 240 ${150 + i * 6}, 400 ${60 + i * 12}`);
  return (
    <div className={clsx("relative overflow-hidden bg-gradient-to-br", GRADS[index % GRADS.length], className)}>
      <svg aria-hidden viewBox="0 0 400 240" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        {paths.map((d, i) => <path key={i} d={d} fill="none" stroke="white" strokeOpacity={0.14 + i * 0.02} strokeWidth="1" />)}
      </svg>
      <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
      {label && <span className="absolute bottom-4 left-4 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-brand-100">{label}</span>}
    </div>
  );
}

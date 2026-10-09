import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="px-3 py-6 sm:px-6">
      <div className="grad-brand relative isolate mx-auto grid min-h-[70vh] max-w-[1360px] place-items-center overflow-hidden rounded-[2rem] px-6 py-20 text-white">
        <div className="grid items-center gap-10 text-center md:grid-cols-2 md:text-left">
          <p aria-hidden className="font-display text-[clamp(7rem,24vw,16rem)] font-bold leading-none text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.55)]">404</p>
          <div>
            <h1 className="text-4xl !text-white sm:text-5xl">Page not found</h1>
            <p className="mt-4 max-w-[36ch] text-white/80">This page does not exist or has moved. Head back home and pick up from there.</p>
            <Button href="/" variant="light" className="mt-8">Back to homepage</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

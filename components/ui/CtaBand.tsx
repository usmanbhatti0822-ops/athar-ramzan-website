import EnquiryButton from "./EnquiryButton";
import Button from "./Button";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

/** Closing call to action used at the bottom of every page. */
export default function CtaBand({
  title = "Let's build stronger banking skills together", text = "Tell me about your team, audience or goal. I will reply with a clear plan for training, mentoring or a talk.", service,
}: { title?: string; text?: string; service?: string }) {
  return (
    <section className="section pb-10 sm:pb-14">
      <div className="container-x">
        <Reveal scale={0.97}>
          <div className="grad-brand relative isolate overflow-hidden rounded-[2rem] px-6 py-16 text-center text-white sm:px-14 sm:py-20">
            <SplitText text={title} className="mx-auto max-w-[20ch] text-[clamp(2rem,5vw,3.6rem)] !text-white" />
            <Reveal delay={0.2}><p className="mx-auto mt-5 max-w-[52ch] text-white/80">{text}</p></Reveal>
            <Reveal delay={0.3} className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <EnquiryButton variant="light" service={service}>Send an enquiry</EnquiryButton>
              <Button href="/contact" variant="outline" className="!border-white/40 !bg-white/10 !text-white hover:!bg-white/20">Contact details</Button>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

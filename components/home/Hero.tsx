"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import CountUp from "../ui/CountUp";
import EnquiryButton from "../ui/EnquiryButton";
import SplitText from "../ui/SplitText";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-mist via-surface to-surface">
      <div className="container-x grid items-start gap-10 pb-16 pt-6 sm:pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-24 lg:pt-10">
        <div>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }} className="badge">
            <span className="h-2 w-2 rounded-full bg-brand-400" />
            Banking trainer, mentor and speaker
          </motion.span>

          <SplitText
            as="h1" instant delay={0.1}
            text="Turning banking experience into practical knowledge"
            accent="practical knowledge"
            className="mt-5 text-[clamp(2.4rem,5.6vw,4.5rem)]"
          />

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease }} className="mt-5 max-w-[52ch] text-base leading-7 text-sub sm:text-lg">
            Athar Ramzan brings more than 20 years of corporate banking, credit and trade finance experience to training, mentoring and speaking for banks, businesses and young professionals.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5, ease }} className="mt-9 flex flex-wrap items-center gap-3">
            <EnquiryButton service="Book a training session">Book a training session</EnquiryButton>
            <Button href="/training" variant="outline">Explore training</Button>
          </motion.div>

          <motion.dl initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }} className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
            {[
              { n: 20, s: "+", l: "Years in banking" },
              { n: 5, s: "", l: "SBP audits concluded without penalty" },
            ].map((x) => (
              <div key={x.l}>
                <dt className="font-display text-4xl font-semibold text-brand-700"><CountUp to={x.n} suffix={x.s} /></dt>
                <dd className="mt-1 max-w-[20ch] text-sm text-sub">{x.l}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Portrait: static, no floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0], rotate: [0, 0.5, 0] }}
          transition={{ duration: 0.7, delay: 0.15, ease, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
          className="relative mx-auto mt-6 w-full max-w-[420px] lg:mt-14"
        >
          <div aria-hidden className="absolute -inset-4 -z-10 rotate-6 rounded-[2.5rem] bg-gradient-to-br from-brand-600 to-brand-900" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-brand-900 shadow-soft">
            <Image src="/athar-ramzan.png" alt="Athar Ramzan" fill priority sizes="(min-width:1024px) 460px, 90vw" className="object-cover" style={{ objectPosition: "50% 10%" }} />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-950/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

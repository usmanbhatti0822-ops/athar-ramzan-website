"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { SERVICE_OPTIONS, SITE } from "@/lib/data";
import Button from "./ui/Button";

type Status = "idle" | "sending" | "done" | "error";

export default function EnquiryForm({ defaultService, onClose }: { defaultService?: string; onClose?: () => void }) {
  const options = useMemo(() => {
    const list = [...SERVICE_OPTIONS];
    if (defaultService && !list.includes(defaultService)) list.push(defaultService);
    return list;
  }, [defaultService]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || "The enquiry could not be sent.");
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "The enquiry could not be sent. Please try again.");
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === "done" ? (
        <motion.div key="done" role="status" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex min-h-[320px] flex-col items-start justify-center">
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}>
            <CheckCircle2 size={52} className="text-brand-500" />
          </motion.span>
          <h3 className="mt-5 text-3xl">Enquiry received</h3>
          <p className="mt-2 text-sub">Thank you. Athar Ramzan will review your request and contact you on the email or phone you provided.</p>
          {onClose && <Button onClick={onClose} variant="outline" className="mt-6">Close</Button>}
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" exit={{ opacity: 0 }}>
          <div><label className="label" htmlFor="q-name">Name</label><input id="q-name" name="name" required autoComplete="name" className="field" /></div>
          <div><label className="label" htmlFor="q-org">Organization</label><input id="q-org" name="organization" autoComplete="organization" className="field" /></div>
          <div><label className="label" htmlFor="q-role">Designation</label><input id="q-role" name="designation" autoComplete="organization-title" className="field" /></div>
          <div><label className="label" htmlFor="q-email">Email</label><input id="q-email" name="email" type="email" required autoComplete="email" className="field" /></div>
          <div><label className="label" htmlFor="q-phone">Phone</label><input id="q-phone" name="phone" type="tel" autoComplete="tel" className="field" /></div>
          <div><label className="label" htmlFor="q-date">Preferred date</label><input id="q-date" name="date" type="date" className="field" /></div>
          <div className="sm:col-span-2">
            <label className="label" htmlFor="q-service">Service required</label>
            <select id="q-service" name="service" required defaultValue={defaultService ?? options[0]} className="field">
              {options.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2"><label className="label" htmlFor="q-msg">Message</label><textarea id="q-msg" name="message" rows={4} className="field resize-y" /></div>
          {/* Honeypot: real visitors never see or fill this */}
          <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
          <label className="flex items-start gap-3 text-sm text-sub sm:col-span-2">
            <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-brand-600" />
            I agree to be contacted regarding my enquiry.
          </label>
          {status === "error" && (
            <p role="alert" className="rounded-2xl border border-red-500/30 bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2">
              {error} You can also email {SITE.email} directly.
            </p>
          )}
          <div className="sm:col-span-2">
            <Button type="submit" disabled={status === "sending"} arrow={status !== "sending"}>
              {status === "sending" ? <span className="flex items-center gap-2"><Loader2 size={16} className="animate-spin" />Sending</span> : "Send enquiry"}
            </Button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

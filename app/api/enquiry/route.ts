import { NextResponse } from "next/server";

export const runtime = "nodejs";

const clean = (v: unknown, max = 2000) => String(v ?? "").trim().slice(0, max);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success and drop it.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const payload = {
    name: clean(body.name, 120),
    organization: clean(body.organization, 160),
    designation: clean(body.designation, 120),
    email: clean(body.email, 160),
    phone: clean(body.phone, 40),
    service: clean(body.service, 200),
    date: clean(body.date, 20),
    message: clean(body.message, 4000),
  };

  if (!payload.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email) || !payload.service) {
    return NextResponse.json({ ok: false, error: "Please enter your name, a valid email and a service." }, { status: 400 });
  }

  const endpoint = process.env.FORMSPREE_ENDPOINT;
  if (!endpoint) {
    // Development fallback: no email service configured yet.
    console.log("[enquiry]", payload);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Upstream ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[enquiry] delivery failed", err);
    return NextResponse.json({ ok: false, error: "The enquiry could not be delivered." }, { status: 502 });
  }
}

# Athar Ramzan: Professional Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Where to edit content

Everything (text, career, credentials, training topics, articles, testimonials, social links) is in **`lib/data.ts`**.
No other file needs to change for content updates.

- **Testimonials**: add `{ quote, name, role }` objects to `TESTIMONIALS`. The empty-state message is replaced automatically.
- **Articles**: add a third item (URL) to an entry in `POSTS`. "Coming soon" becomes "Read".
- **Social links**: paste URLs in `SOCIAL`. Empty ones stay hidden.
- **Portrait**: replace `public/athar-ramzan.jpg` (4:5 ratio works best).

## Enquiry form

Submissions go to `POST /api/enquiry`. To receive them by email:

1. Create a free form at https://formspree.io and copy its endpoint.
2. Copy `.env.example` to `.env.local` and set `FORMSPREE_ENDPOINT=...`.
3. Set `NEXT_PUBLIC_SITE_URL` to the live domain (used for link previews).

Without `FORMSPREE_ENDPOINT` the form works but enquiries are only printed in the server log, so set it before launch.

## Deploy

Push to GitHub and import into Vercel. Add the two environment variables above in project settings.

## Design system

- Palette: light teal `brand` scale in `tailwind.config.ts` (white, mist, teal gradient). Light theme only.
- Type: Syne (headings) + Manrope (body) via next/font in `app/layout.tsx`.
- Long content opens in animated dialogs (`components/ui/Modal.tsx`); the menu and enquiry form use the same component as right-hand drawers.
- Motion respects `prefers-reduced-motion`.

## Confirm with Athar before launch

Career history gap (Oct 2014 to May 2020), the "20+ years" wording, context for the achievement figures, his bank's outside-activity policy, testimonials, social links and first articles.

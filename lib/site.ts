/**
 * Multi-page structure + temporary placeholder content.
 * Real content stays in lib/data.ts. Everything here derives from it
 * or is clearly generic, so you can replace it page by page later.
 */
import { POSTS, TRAINING } from "./data";

export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** Shown in the desktop pill nav */
export const MAIN_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Training", href: "/training" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

/** Shown in the full-screen menu and the footer */
export const ALL_PAGES = [
  { label: "Home", href: "/", note: "Start here" },
  { label: "About", href: "/about", note: "Who I am" },
  { label: "Expertise", href: "/expertise", note: "What I know" },
  { label: "Career", href: "/career", note: "Roles and results" },
  { label: "Credentials", href: "/credentials", note: "Qualifications" },
  { label: "Training", href: "/training", note: "Programs" },
  { label: "Mentoring", href: "/mentoring", note: "One to one" },
  { label: "Speaking", href: "/speaking", note: "Talks" },
  { label: "Work with me", href: "/work-with-me", note: "Services" },
  { label: "Insights", href: "/insights", note: "Articles" },
  { label: "Testimonials", href: "/testimonials", note: "Feedback" },
  { label: "FAQ", href: "/faq", note: "Answers" },
  { label: "Contact", href: "/contact", note: "Get in touch" },
];

export const PROGRAMS = TRAINING.map(([title, blurb], i) => ({ slug: slugify(title), title, blurb, i }));
export const ARTICLES = POSTS.map(([category, title, href]) => ({ slug: slugify(title), category, title, href }));

export const PROCESS = [
  { title: "Share your need", text: "Tell me who the audience is, what they need to learn and what the bank or business wants to achieve." },
  { title: "Shape the program", text: "I outline topics, depth and format so the sessions fit your people, not a generic syllabus." },
  { title: "Learn through practice", text: "Concepts are explained with real banking situations, documents and common mistakes, so they are easy to remember." },
  { title: "Apply and follow up", text: "Participants leave with clear takeaways they can use at work, and a way to ask follow-up questions." },
];

export const FAQS: { group: string; items: { q: string; a: string }[] }[] = [
  {
    group: "Getting started",
    items: [
      { q: "Who are the programs for?", a: "Young bankers, relationship managers, credit officers, trade officers, branch managers, operations professionals, SME and corporate bankers, and banking students." },
      { q: "How do I book a session?", a: "Use the enquiry form on any page. Share your topic, audience and preferred date, and you will get a reply on the email or phone you provide." },
      { q: "Can programs be customised?", a: "Yes. Corporate programs are shaped around your bank, institution or organization, so topics and depth match your team." },
    ],
  },
  {
    group: "Training and mentoring",
    items: [
      { q: "Which topics do you teach?", a: "Credit analysis, trade finance, UCP-600, credit documentation, SBP prudential regulations, KYC and AML, relationship management, branch management, SME banking and recovery." },
      { q: "Do you offer one-to-one mentoring?", a: "Yes. Mentoring covers career planning, interview preparation, credit and trade skills, communication and the move into senior banking roles." },
      { q: "Can I invite you to speak at an event?", a: "Yes. Talks cover career building, discipline, leadership, ethics and growth mindset, for banks, universities and gatherings." },
    ],
  },
  {
    group: "Working together",
    items: [
      { q: "Which organizations do you work with?", a: "Commercial banks, microfinance banks, financial institutions, corporate organizations, SMEs, universities, business schools, training institutes and banking academies." },
      { q: "Where are you based?", a: "Lahore, Pakistan. Format and location for sessions are agreed with you." },
      { q: "Can business owners learn how banks work?", a: "Yes. There are sessions on how banks evaluate businesses, credit proposals, funded and non-funded facilities, and working capital finance." },
    ],
  },
];
export const FAQ_FLAT = FAQS.flatMap((g) => g.items);

/** Temporary program detail text. Replace per program when ready. */
export const programOutcomes = [
  "A clear grasp of the core concepts, without jargon",
  "Worked examples taken from everyday banking work",
  "The common mistakes and how to avoid them",
  "Checklists and habits you can use at work",
];
export const programOverview = (blurb: string) =>
  `${blurb} Sessions use practical examples from real banking work, so participants can apply what they learn straight away. Duration and format are agreed with you before the program starts.`;

/** Temporary article outline shown until real articles are published. */
export const articleOutline = [
  "Why this topic matters in day-to-day banking",
  "The key ideas, explained in practical terms",
  "Common mistakes and how to avoid them",
  "A short checklist to apply at work",
];

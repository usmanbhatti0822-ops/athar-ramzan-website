# Naya design lagane ka tareeqa (file by file)

Koi naya package install nahi karna. Purane project ke wahi packages kaafi hain
(next, react, framer-motion, lucide-react, clsx, tailwindcss).

Is zip ka folder structure purane project jaisa hi hai. Har file ko usi path par copy karo.

## 1. In files ko REPLACE karo (purani file ka content badal do)
- tailwind.config.ts
- app/globals.css
- app/layout.tsx
- app/page.tsx
- app/icon.svg
- app/opengraph-image.tsx
- components/EnquiryForm.tsx
- components/ui/Modal.tsx
- components/ui/Reveal.tsx

## 2. In files ko NEW add karo (naye folders/files)
lib/site.ts
app/template.tsx, app/not-found.tsx
app/about/page.tsx
app/expertise/page.tsx
app/career/page.tsx
app/credentials/page.tsx
app/training/page.tsx
app/training/[slug]/page.tsx
app/mentoring/page.tsx
app/speaking/page.tsx
app/insights/page.tsx
app/insights/[slug]/page.tsx
app/testimonials/page.tsx
app/faq/page.tsx
app/contact/page.tsx
components/InsightsGrid.tsx
components/layout/Navbar.tsx
components/layout/Footer.tsx
components/home/Hero.tsx, Intro.tsx, ExpertisePreview.tsx, Highlights.tsx,
                TrainingTabs.tsx, CredentialsMarquee.tsx, InsightsPreview.tsx
components/ui/Accordion.tsx, Button.tsx, CareerTimeline.tsx, Cover.tsx, CtaBand.tsx,
              EnquiryButton.tsx, Marquee.tsx, Orbs.tsx, PageHero.tsx, ScrollProgress.tsx,
              ScrollWords.tsx, SectionHead.tsx, SplitText.tsx, Tilt.tsx, WaveField.tsx, icons.ts

## 3. Jo files BILKUL NA BADLO
- lib/data.ts (saara content yahin rahega; naye pages isi se data lete hain)
- app/api/enquiry/route.ts
- components/EnquiryProvider.tsx
- components/ui/CountUp.tsx
- public/athar-ramzan.jpg, .env.example, package.json

## 4. In PURANI files ko DELETE karo (ab use nahi hoti)
components/About.tsx, Achievements.tsx, Career.tsx, Contact.tsx, Credentials.tsx,
Expertise.tsx, FinalCta.tsx, Hero.tsx, Insights.tsx, LearnBusiness.tsx, Mentoring.tsx,
Speaking.tsx, Testimonials.tsx, Training.tsx, WhyExperience.tsx, WorkWithMe.tsx,
Navbar.tsx, Footer.tsx
components/ui/SectionHeading.tsx, Stagger.tsx, Timeline.tsx, ThemeToggle.tsx

## 5. Chalao
npm install
npm run dev      # http://localhost:3000
npm run build    # deploy se pehle ek baar zaroor chalao

## Pages ki list
/  /about  /expertise  /career  /credentials  /training  /training/<program>
/mentoring  /speaking  /insights  /insights/<article>  /testimonials  /faq  /contact

## Baad mein kya badalna hai
- Asli text/data: lib/data.ts
- Training detail aur FAQ ka temporary text: lib/site.ts
- Rang: tailwind.config.ts mai `brand` colours
- Reference jaisi photos: public/ mai daalo aur Cover (components/ui/Cover.tsx) ki jagah <Image> lagao

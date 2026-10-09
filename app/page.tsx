import CredentialsMarquee from "@/components/home/CredentialsMarquee";
import ExpertisePreview from "@/components/home/ExpertisePreview";
import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/Highlights";
import InsightsPreview from "@/components/home/InsightsPreview";
import Intro from "@/components/home/Intro";
import TrainingTabs from "@/components/home/TrainingTabs";
import CtaBand from "@/components/ui/CtaBand";
import Marquee from "@/components/ui/Marquee";

const TOPICS = [
  "Credit Analysis", "Trade Finance", "UCP-600", "SBP Regulations", "SME Banking",
  "KYC / AML", "Relationship Management", "Branch Management", "Portfolio Recovery",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="border-y border-black/10 bg-card py-6"><Marquee items={TOPICS} /></div>
      <Intro />
      <ExpertisePreview />
      <Highlights />
      <TrainingTabs />
      <CredentialsMarquee />
      <InsightsPreview />
      <CtaBand />
    </>
  );
}

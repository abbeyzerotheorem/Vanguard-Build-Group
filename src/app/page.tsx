import { constructionConfig } from "@/data/construction";
import Header from "@/components/Header";
import SafetyBanner from "@/sections/SafetyBanner";
import HeroSection from "@/sections/HeroSection";
import MetricsBoard from "@/sections/MetricsBoard";
import PortfolioShowcase from "@/sections/PortfolioShowcase";
import CoreServices from "@/sections/CoreServices";
import EstimateSection from "@/sections/EstimateSection";
import AboutSection from "@/sections/AboutSection";
import TrustVaultSection from "@/sections/TrustVaultSection";
import MilestoneSection from "@/sections/MilestoneSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import FAQSection from "@/sections/FAQSection";
import FooterSection from "@/sections/FooterSection";
import MobileRibbon from "@/sections/MobileRibbon";

export default function HomePage() {
  const { promotional } = constructionConfig;

  return (
    <>
      <Header />
      {promotional.bannerVisible && <SafetyBanner />}

      <main>
        <HeroSection />
        {/* Ambient gradient bridge between dark hero and light sections */}
        <div className="relative h-24 -mt-24 bg-gradient-to-b from-ink to-transparent pointer-events-none" aria-hidden="true" />
        <MetricsBoard />
        <PortfolioShowcase />
        <CoreServices />
        <EstimateSection />
        <AboutSection />
        <TrustVaultSection />
        <MilestoneSection />
        <TestimonialsSection />
        <FAQSection />
      </main>

      <FooterSection />
      <MobileRibbon />
    </>
  );
}

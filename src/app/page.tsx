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

import { AboutSection } from "@/components/landing/AboutSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { CompositionSection } from "@/components/landing/CompositionSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { HowToServeSection } from "@/components/landing/HowToServeSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <CompositionSection />
        <BenefitsSection />
        <HowToServeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

import { AboutSection } from "@/components/landing/AboutSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { CalculatorSection } from "@/components/landing/CalculatorSection";
import { CompositionSection } from "@/components/landing/CompositionSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { HowToServeSection } from "@/components/landing/HowToServeSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { SectionWrapper } from "@/components/landing/SectionWrapper";
import { GallerySection } from "@/components/landing/GallerySection";
import { StorySection } from "@/components/landing/StorySection";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SectionWrapper>
          <AboutSection />
        </SectionWrapper>
        <SectionWrapper>
          <StorySection />
        </SectionWrapper>
        <SectionWrapper>
          <CompositionSection />
        </SectionWrapper>
        <SectionWrapper>
          <BenefitsSection />
        </SectionWrapper>
        <SectionWrapper>
           <HowToServeSection />
        </SectionWrapper>
        <SectionWrapper>
          <CalculatorSection />
        </SectionWrapper>
        <SectionWrapper>
          <GallerySection />
        </SectionWrapper>
        <SectionWrapper>
          <ContactSection />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}

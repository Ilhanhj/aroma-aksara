
import { AboutSection } from "@/components/landing/AboutSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { CompositionSection } from "@/components/landing/CompositionSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { HowToServeSection } from "@/components/landing/HowToServeSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { SectionWrapper } from "@/components/landing/SectionWrapper";
import { GallerySection } from "@/components/landing/GallerySection";
import { StorySection } from "@/components/landing/StorySection";
import { WelcomeOverlay } from "@/components/landing/WelcomeOverlay";
import { FloatingLinkButton } from "@/components/landing/FloatingLinkButton";
import { ThemeLinkSection } from "@/components/landing/ThemeLinkSection";
import { FaqSection } from "@/components/landing/FaqSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <WelcomeOverlay />
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
          <GallerySection />
        </SectionWrapper>
        <SectionWrapper>
          <FaqSection />
        </SectionWrapper>
        <SectionWrapper>
          <ThemeLinkSection />
        </SectionWrapper>
        <SectionWrapper>
          <ContactSection />
        </SectionWrapper>
      </main>
      <FloatingLinkButton />
      <Footer />
    </div>
  );
}

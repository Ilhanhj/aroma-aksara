"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee } from "lucide-react";
import { SteamRevealImage } from "./SteamRevealImage";
import { gsap } from "gsap";
import coffeProduct from "@/public/images/products/coffe-5.jpg";

const ctaOptions = ["Order Sekarang", "Coba Sekarang", "Dapatkan Promo Hari Ini"];

export function HeroSection() {
  const [ctaText, setCtaText] = useState(ctaOptions[0]);
  const heroContentRef = useRef(null);

  useEffect(() => {
    // This logic needs to be client-side only
    const randomIndex = Math.floor(Math.random() * ctaOptions.length);
    setCtaText(ctaOptions[randomIndex]);

    const el = heroContentRef.current;
    if (el) {
      gsap.fromTo(
        (el as HTMLElement).querySelectorAll(".animate-in"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }
  }, []);

  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] pt-12 pb-12 md:pt-16 md:pb-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12">
        <div ref={heroContentRef} className="text-center lg:text-left max-w-xl z-10">
          <div className="inline-flex items-center gap-2 bg-accent/50 text-accent-foreground px-4 py-1 rounded-full text-sm mb-4 animate-in">
            <Coffee className="w-4 h-4" />
            <span>100% Arabica Dukuh Ibun</span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight mb-4 md:mb-6 animate-in">
            Aroma Aksara – Harmoni Rasa dari Perbukitan Ibun
          </h1>
          <p className="mt-4 mb-8 text-lg text-muted-foreground leading-relaxed md:mt-6 md:mb-10 animate-in">
            Awali harimu dengan secangkir Arabica Dukuh Ibun. Perpaduan manis alami, sentuhan citrus, dan hangatnya rempah lembut menghadirkan harmoni rasa yang bersih dan berkesan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <a href="#contact">
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#about">Pelajari Lebih Lanjut</a>
            </Button>
          </div>
        </div>
        <div className="relative w-full max-w-sm lg:max-w-lg h-96 lg:h-[400px] z-10 mb-8 md:mb-0">
          <SteamRevealImage src={coffeProduct} alt="Kemasan Produk Green Bean Coffee" data-ai-hint="coffee package" imgClassName="object-cover drop-shadow-2xl rounded-xl" priority />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-background to-secondary/10 z-0"></div>
    </section>
  );
}

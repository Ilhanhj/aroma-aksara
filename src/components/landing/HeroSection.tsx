"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight, Coffee } from 'lucide-react';

const ctaOptions = ["Order Sekarang", "Coba Sekarang", "Dapatkan Promo Hari Ini"];

export function HeroSection() {
  const [ctaText, setCtaText] = useState(ctaOptions[0]);

  useEffect(() => {
    // This effect runs only on the client, avoiding hydration mismatch for random values.
    const randomIndex = Math.floor(Math.random() * ctaOptions.length);
    setCtaText(ctaOptions[randomIndex]);
  }, []);

  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] pt-20 pb-10">
        <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12">
            <div className="text-center lg:text-left max-w-xl z-10">
                <div className="inline-flex items-center gap-2 bg-accent/50 text-accent-foreground px-4 py-1 rounded-full text-sm mb-4">
                    <Coffee className="w-4 h-4"/>
                    <span>Kopi Herbal Alami Indonesia</span>
                </div>
                <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-tight">
                    Nikmati Sehatnya, Rasakan Bedanya!
                </h1>
                <p className="mt-6 mb-10 text-lg text-muted-foreground leading-relaxed">
                    Awali harimu dengan secangkir GREEN BEAN COFFEE, perpaduan sempurna rasa nikmat dan manfaat kesehatan dari alam.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
            <div className="relative w-full max-w-sm lg:max-w-md h-96 lg:h-[500px] z-10">
                <Image
                    src="https://placehold.co/500x600.png"
                    alt="Produk Green Bean Coffee"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    data-ai-hint="coffee product package"
                />
            </div>
        </div>
         <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/20 to-background z-0"></div>
    </section>
  );
}

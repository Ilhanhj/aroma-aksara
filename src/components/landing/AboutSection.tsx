import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Membantu menurunkan berat badan",
  "Kaya akan antioksidan untuk melawan radikal bebas",
  "Menurunkan tekanan darah dan kadar gula darah",
  "Meningkatkan metabolisme tubuh secara alami",
  "Sebagai antiinflamasi dan meningkatkan daya tahan tubuh",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
             <Image
                src="https://placehold.co/600x600.png"
                alt="Wanita sehat menikmati kopi"
                fill
                className="rounded-xl object-cover shadow-lg"
                data-ai-hint="healthy woman coffee"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent p-4 rounded-lg shadow-xl hidden sm:block">
                  <p className="text-sm text-accent-foreground font-semibold">100% Bahan Alami</p>
              </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Rahasia Tubuh Sehat & Ideal dalam Secangkir Kopi
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              GREEN BEAN COFFEE adalah perpaduan unik biji kopi hijau pilihan dengan rempah-rempah alami Indonesia seperti jahe dan kayu manis. Diformulasikan khusus untuk Anda yang ingin menjaga kesehatan dan mencapai berat badan ideal dengan cara yang nikmat dan alami.
            </p>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

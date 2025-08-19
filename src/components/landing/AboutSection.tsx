import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import coffeProduct from "@/public/images/products/coffe-product-7.jpg";

const benefits = [
  "100% Arabica Single-Origin — biji pilihan dari kebun lokal Dukuh Ibun.",

  "Profil rasa seimbang — manis alami, sedikit acidity cerah, dan hint warm spice.",

  "Proses tradisional & berkualitas — diproses oleh petani setempat dengan standar specialty.",

  "Aroma memikat & aftertaste bersih — cocok dinikmati pagi atau sore.",

  "Mendukung petani lokal — setiap pembelian membantu kesejahteraan komunitas setempa.",
];

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
            <Image src={coffeProduct} alt="Wanita sehat menikmati secangkir kopi di pagi hari" data-ai-hint="woman coffee" fill className="rounded-xl object-cover shadow-lg" />
            <div className="absolute -bottom-4 -right-4 bg-accent p-4 rounded-lg shadow-xl hidden sm:block">
              <p className="text-sm text-accent-foreground font-semibold">100% Bahan Alami</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 md:mb-6">Rahasia Harmoni Rasa dari Perbukitan Ibun</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Aroma Aksara — Arabica Dukuh Ibun adalah kopi single-origin hasil pegunungan Dukuh Ibun. Setiap biji diproses dengan teliti untuk menghasilkan cita rasa manis alami, sentuhan citrus, dan hangatnya rempah lembut. Nikmati
              secangkir yang meninggalkan aftertaste bersih dan kenangan rasa yang tahan lama.
            </p>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

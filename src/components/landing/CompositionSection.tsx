import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import coffe1 from "@/public/images/ingredients/coffe1.jpg";

export function CompositionSection() {
  return (
    <section id="composition" className="py-20 md:py-32 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <Badge className="px-3 py-1 text-sm rounded-full mb-4 bg-primary/10 text-primary shadow-sm">Komposisi Utama</Badge>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">Satu Biji, Sejuta Manfaat</h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Kami percaya pada kesederhanaan. Hanya <span className="font-semibold text-primary">biji kopi Ibun murni</span>, tanpa campuran lain. Kaya akan <span className="font-semibold">asam klorogenat</span> dan antioksidan, kopi Ibun
            membantu metabolisme, mendukung energi, dan menjaga tubuh tetap bugar secara alami.
          </p>
        </div>

        {/* Fancy Card */}
        <Card className="overflow-hidden rounded-3xl shadow-xl backdrop-blur bg-[#a67954] border-0 max-w-3xl mx-auto group">
          <div className="relative h-[380px] md:h-[460px] overflow-hidden">
            <Image src={coffe1} alt="Kopi Ibun" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80"></div>
          </div>
          <CardContent className="p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Biji Kopi Premium</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Dipetik langsung dari biji kopi pilihan yang belum dipanggang, menjaga nutrisi alami agar tetap utuh untuk kesehatan tubuh Anda.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

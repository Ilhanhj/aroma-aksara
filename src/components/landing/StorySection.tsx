
import { Card } from "@/components/ui/card";
import { Mountain, Sprout, FlaskConical, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const storyParts = [
  {
    icon: <Mountain className="w-8 h-8 text-primary" />,
    title: "Dari Petani Lokal Terbaik",
    description:
      "Perjalanan kami dimulai dari lereng subur di pedesaan Indonesia. Kami bekerja sama langsung dengan petani kopi lokal yang berdedikasi untuk menanam biji kopi hijau berkualitas tinggi secara organik dan berkelanjutan.",
  },
  {
    icon: <Sprout className="w-8 h-8 text-primary" />,
    title: "Proses Tradisional yang Terjaga",
    description:
      "Setiap biji kopi dipanen dan diproses dengan metode tradisional yang diwariskan turun-temurun. Tanpa pemanggangan berlebih, kami menjaga kandungan asam klorogenat alami yang menjadi kunci manfaat kesehatan kopi hijau.",
  },
  {
    icon: <FlaskConical className="w-8 h-8 text-primary" />,
    title: "Inspirasi Resep Warisan",
    description:
      "Terinspirasi dari resep jamu warisan nenek moyang, kami memadukan kopi hijau dengan kehangatan jahe dan aroma kayu manis. Lahirlah sebuah minuman fungsional yang tidak hanya nikmat, tapi juga menyehatkan.",
  },
];

export function StorySection() {
  return (
    <section id="story" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
            Cerita di Balik Green Bean Coffee
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Lebih dari sekadar kopi, ini adalah dedikasi kami untuk kesehatan
            dan warisan alam Indonesia.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>

          <div className="space-y-12">
            {storyParts.map((part, index) => (
              <div
                key={index}
                className="relative flex items-start group"
              >
                {/* Icon Circle */}
                <div
                  className={cn(
                    "absolute left-4 md:left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border-4 border-background",
                    "flex-shrink-0 z-10"
                  )}
                >
                  <div className="bg-accent rounded-full p-3">{part.icon}</div>
                </div>

                {/* Card Content Wrapper */}
                <div className={cn(
                    "w-full flex",
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                )}>
                  <div className={cn(
                      "pl-12 md:pl-0 md:w-5/12",
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  )}>
                    <Card className="p-6 rounded-xl shadow-lg bg-card hover:shadow-xl transition-shadow duration-300 w-full">
                      <h3 className={cn("font-headline text-xl text-primary mb-3", index % 2 === 0 ? "md:text-left" : "md:text-right")}>
                        {part.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-left">
                        {part.description}
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16 md:mt-24">
            <Quote className="w-8 h-8 text-secondary mx-auto mb-4" />
            <p className="font-headline text-2xl text-primary italic font-semibold max-w-md mx-auto">
            "Dari Desa, Untuk Tubuh yang Lebih Sehat."
            </p>
        </div>

      </div>
    </section>
  );
}

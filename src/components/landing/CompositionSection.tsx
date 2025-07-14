import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ingredients = [
  {
    name: "Kopi Hijau",
    description: "Mengandung asam klorogenat & kafein, antioksidan tinggi yang efektif membantu metabolisme dan pembakaran lemak.",
    image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=2817&auto=format&fit=crop",
    aiHint: "green coffee beans",
  },
  {
    name: "Kayu Manis",
    description: "Dengan senyawa cinnamaldehyde, bersifat anti-inflamasi, membantu mengatur gula darah, dan memberikan aroma khas yang kuat.",
    image: "https://images.unsplash.com/photo-1556910110-a5a6350d3958?q=80&w=2940&auto=format&fit=crop",
    aiHint: "cinnamon sticks",
  },
  {
    name: "Jahe",
    description: "Kandungan gingerol di dalamnya bersifat anti-inflamasi, melancarkan pencernaan, dan efektif meningkatkan imunitas tubuh.",
    image: "https://images.unsplash.com/photo-1628695245842-1496a1a14132?q=80&w=2825&auto=format&fit=crop",
    aiHint: "ginger root",
  },
];

export function CompositionSection() {
  return (
    <section id="composition" className="py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
            100% Komposisi Alami Pilihan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Kami hanya menggunakan bahan-bahan terbaik dari alam, tanpa tambahan bahan kimia, untuk memastikan Anda mendapatkan manfaat maksimal.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((ingredient) => (
            <Card key={ingredient.name} className="overflow-hidden group rounded-xl">
              <div className="relative h-56">
                <Image
                  src={ingredient.image}
                  alt={ingredient.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={ingredient.aiHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{ingredient.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{ingredient.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

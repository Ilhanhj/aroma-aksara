import { Card } from "@/components/ui/card";
import { Mountain, Sprout, FlaskConical, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const storyParts = [
  {
    icon: <Mountain className="w-8 h-8 text-primary" />,
    title: "Dari Petani Lokal Terbaik",
    description:
      "Bersumber dari lereng subur Dukuh Ibun, ditanam dengan ketelatenan. Kami bekerja langsung dengan petani kopi lokal yang menjaga kebun secara berkelanjutan. Setiap panen dipilih cermat agar hanya biji Arabica terbaik yang sampai ke cangkir Anda.",
  },
  {
    icon: <Sprout className="w-8 h-8 text-primary" />,
    title: "Proses Tradisional yang Terjaga",
    description:
      "Dikelola dengan kepiawaian, diproses dengan standar specialty. Mulai dari pemetikan selektif, pencucian, hingga penyangraian presisi—tiap tahap menjaga karakter asli biji. Hasilnya adalah profil rasa seimbang dengan aroma memikat dan body yang bersih.",
  },
  {
    icon: <FlaskConical className="w-8 h-8 text-primary" />,
    title: "Inspirasi Rasa yang Hangat",
    description: "Nuansa rasa yang familiar namun istimewa. Aroma Aksara menghadirkan manis keemasan, sentuhan citrus segar, dan kehangatan 'warm spice' yang halus—menginspirasi ritual kopi harian yang sederhana, tenang, dan bermakna.",
  },
];

export function StorySection() {
  return (
    <section id="story" className="py-16 md:py-28 lg:py-36 relative">
      <div className="container mx-auto px-4 sm:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">Cerita di Balik Aroma Aksara</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
            Lebih dari sekadar kopi, ini adalah perayaan rasa dan jejak alam Nusantara. Kami meramu kopi single-origin dari perbukitan Dukuh Ibun menjadi secangkir pengalaman—manis alami, bisikan citrus, dan hangatnya rempah lembut.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute hidden md:block left-1/2 top-0 bottom-0 w-1 
      bg-gradient-to-b from-primary/40 via-secondary/40 to-primary/40 
      -translate-x-1/2 rounded-full"
          />

          <div className="space-y-20 md:space-y-28">
            {storyParts.map((part, index) => (
              <div key={index} className={cn("relative flex flex-col md:flex-row items-center md:items-start gap-6", index % 2 === 0 ? "md:flex-row-reverse" : "")}>
                {/* Icon floating in center line */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-2 md:top-1/2 md:-translate-y-1/2 z-10">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary text-white 
              rounded-full p-4 flex items-center justify-center shadow-xl 
              ring-4 ring-background hover:scale-110 hover:shadow-2xl 
              transition-all duration-300"
                  >
                    {part.icon}
                  </div>
                </div>

                {/* Card */}
                <div className={cn("md:w-5/12 w-full mt-16 md:mt-0", index % 2 === 0 ? "md:mr-auto text-right" : "md:ml-auto text-left")}>
                  <Card
                    className="backdrop-blur-md bg-card/70 border border-border/40 shadow-lg 
              hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 
              rounded-2xl p-8"
                  >
                    <h3 className="font-headline text-xl md:text-2xl text-primary mb-3 font-semibold">{part.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">{part.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-20 md:mt-28">
          <Quote className="w-10 h-10 text-secondary mx-auto mb-6" />
          <p className="font-headline text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic font-bold max-w-2xl mx-auto leading-relaxed">
            “Alami dari Desa, Sehatkan Tubuh, Tenangkan Rasa”
          </p>
        </div>
      </div>
    </section>
  );
}

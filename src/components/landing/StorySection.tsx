import { Card } from "@/components/ui/card";
import { Mountain, Sprout, FlaskConical, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const storyParts = [
  {
    icon: <Mountain className="w-8 h-8 text-primary" />,
    title: "Proses Tradisional yang Terjaga",
    description:
      "Dikelola dengan kepiawaian, diproses dengan standar specialty. Mulai dari pemetikan selektif, pencucian, hingga penyangraian presisi—tiap tahap menjaga karakter asli biji. Hasilnya adalah profil rasa seimbang dengan aroma memikat dan body yang bersih.",
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
    <section id="story" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-8">
<<<<<<< HEAD
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
            Cerita di Balik Green Bean Coffee
          </h2>
=======
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">Cerita di Balik Aroma Aksara</h2>
>>>>>>> 1f75dca (editing content)
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Lebih dari sekadar kopi, ini adalah perayaan rasa dan jejak alam Nusantara. Kami meramu kopi single-origin dari perbukitan Dukuh Ibun menjadi secangkir pengalaman—manis alami, bisikan citrus, dan hangatnya rempah lembut—yang
            meninggalkan aftertaste bersih dan berkesan.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>

          <div className="space-y-12">
            {storyParts.map((part, index) => (
<<<<<<< HEAD
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
=======
              <div key={index} className="relative flex items-start md:items-center">
                <div className={cn("w-full md:w-1/2 ml-10 md:ml-0", index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:order-2")}>
                  <Card className="p-6 rounded-xl shadow-lg bg-card hover:shadow-xl transition-shadow w-full">
                    <h3 className={cn("font-headline text-xl text-primary mb-3", index % 2 === 0 ? "md:text-right" : "md:text-left")}>{part.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-left">{part.description}</p>
                  </Card>
                </div>

                {/* Icon in the middle */}
                <div className={cn("absolute left-4 md:left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border-4 border-background", index % 2 === 0 ? "" : "md:order-1")}>
>>>>>>> 1f75dca (editing content)
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
<<<<<<< HEAD
        
        <div className="text-center mt-16 md:mt-24">
            <Quote className="w-8 h-8 text-secondary mx-auto mb-4" />
            <p className="font-headline text-2xl text-primary italic font-semibold max-w-md mx-auto">
            "Dari Desa, Untuk Tubuh yang Lebih Sehat."
            </p>
        </div>
=======
>>>>>>> 1f75dca (editing content)

        <div className="text-center mt-16 md:mt-20">
          <Quote className="w-8 h-8 text-secondary mx-auto mb-4" />
          <p className="font-headline text-2xl text-primary italic font-semibold max-w-md mx-auto">“Alami dari Desa, Sehatkan Tubuh, Tenangkan Rasa”</p>
        </div>
      </div>
    </section>
  );
}

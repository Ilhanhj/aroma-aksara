import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export function ThemeLinkSection() {
  return (
    <section id="theme-link" className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-8">
        <Card className="bg-gradient-to-br from-card to-accent/20 border-2 border-accent/30 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="flex-shrink-0">
              <div className="p-4 bg-primary/10 rounded-full">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                Penasaran sama website utama proyek KKN kami?
              </h3>
              <p className="text-muted-foreground">
                Yuk, kunjungi untuk melihat lebih banyak tentang inisiatif dan cerita di balik project ini!
              </p>
            </div>
            <div className="flex-shrink-0 mt-4 md:mt-0">
              <Button
                asChild
                size="lg"
                className="transition-transform duration-300 hover:scale-105"
              >
                <a
                  href="https://aksara-muda-website.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kunjungi website utama proyek tema KKN kami untuk informasi lebih lanjut"
                >
                  Kunjungi Website Tema KKN Kami
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

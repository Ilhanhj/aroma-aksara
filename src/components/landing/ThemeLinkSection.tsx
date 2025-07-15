import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, ArrowRight } from "lucide-react";

export function ThemeLinkSection() {
  return (
    <section id="theme-link" className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-8">
        <Card className="max-w-3xl mx-auto p-8 md:p-10 text-center bg-card shadow-lg rounded-2xl overflow-hidden">
            <div className="flex justify-center mb-6">
                <div className="p-4 bg-accent rounded-full text-primary">
                    <Users className="w-8 h-8" />
                </div>
            </div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4">
                Sebuah Karya dari Proyek KKN Kami
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
                Produk ini adalah bagian dari program Kuliah Kerja Nyata kami. Penasaran dengan website utama proyek kami? Yuk, kunjungi di sini!
            </p>
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <a href="https://aksara-muda-website.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Kunjungi website utama tema KKN kami di tab baru">
                    Kunjungi Website Tema KKN Kami
                    <ArrowRight className="ml-2 h-5 w-5" />
                </a>
            </Button>
        </Card>
      </div>
    </section>
  );
}

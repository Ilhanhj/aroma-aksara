import { Facebook, Instagram } from "lucide-react";
import { Logo } from "../icons/Logo";
import { WhatsappIcon } from "../icons/WhatsappIcon";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="text-muted-foreground mt-4 text-sm max-w-xs">
              Kopi herbal alami untuk mendukung gaya hidup sehat Anda.
            </p>
          </div>
          <div>
            <h4 className="font-headline font-semibold text-primary mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Tentang Produk</a></li>
              <li><a href="#composition" className="text-muted-foreground hover:text-primary transition-colors">Komposisi</a></li>
              <li><a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">Manfaat</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Pesan</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold text-primary mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">Email: kontak@kopihijaualami.com</p>
              <p className="text-muted-foreground text-sm">WA: +62 812 3456 7890</p>
              <div className="flex justify-center md:justify-start space-x-2 mt-2">
                 <Button asChild variant="ghost" size="icon">
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </a>
                 </Button>
                 <Button asChild variant="ghost" size="icon">
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </a>
                 </Button>
                 <Button asChild variant="ghost" size="icon">
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <WhatsappIcon className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </a>
                 </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kopi Hijau Alami. Semua Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}

import { Instagram, Users } from "lucide-react";
import { Logo } from "../icons/Logo";
import { WhatsappIcon } from "../icons/WhatsappIcon";
import { Button } from "../ui/button";
import { TiktokIcon } from "../icons/TiktokIcon";

export function Footer() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <Logo />
            <p className="text-muted-foreground mt-4 text-sm max-w-xs leading-relaxed">Kopi herbal alami untuk mendukung gaya hidup sehat Anda.</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h4 className="font-headline font-semibold text-primary mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  Tentang Produk
                </a>
              </li>
              <li>
                <a href="#composition" className="text-muted-foreground hover:text-primary transition-colors">
                  Komposisi
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">
                  Manfaat
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Pesan
                </a>
              </li>
              <li>
                <a href="https://aksara-muda-website.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Website Tim
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold text-primary mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">Email: kknaksaramuda22@gmail.com</p>
              <p className="text-muted-foreground text-sm">WA: +62 812 3456 7890</p>
              <div className="flex justify-center md:justify-start space-x-2 mt-2">
                <Button asChild variant="ghost" size="icon">
                  <a href="https://www.instagram.com/kkn_aksaramuda?igsh=MWh4OWJscTI3dWU2MQ%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <a href="https://www.tiktok.com/@kkn_aksaramuda?_t=ZS-8x5OVdm4Z73&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.0004 2V8.41396C10.5947 8.33909 10.1768 8.3 9.75039 8.3C5.96724 8.3 2.90039 11.3668 2.90039 15.15C2.90039 18.9332 5.96724 22 9.75039 22C13.5335 22 16.6004 18.9332 16.6004 15.15V11.4136C17.6366 11.8539 18.7662 12.1 20.0005 12.1H21.0005V6.5H20.0005C18.0966 6.5 16.6004 4.96259 16.6004 3V2H11.0004ZM13.0004 4H14.688C15.0818 6.22009 16.7673 7.99607 19.0005 8.4091V10.0282C17.9624 9.87602 17.0253 9.48645 16.1567 8.905L14.6004 7.86327V15.15C14.6004 17.8286 12.429 20 9.75039 20C7.07181 20 4.90039 17.8286 4.90039 15.15C4.90039 12.4714 7.07181 10.3 9.75039 10.3C9.83431 10.3 9.91769 10.3021 10.0005 10.3063V11.9095C9.91795 11.9032 9.83454 11.9 9.75039 11.9C7.95547 11.9 6.50039 13.3551 6.50039 15.15C6.50039 16.9449 7.95547 18.4 9.75039 18.4C11.5453 18.4 13.0004 16.9449 13.0004 15.15C13.0004 11.4334 12.9992 7.71665 13.0004 4ZM8.50039 15.15C8.50039 14.4596 9.06003 13.9 9.75039 13.9C10.4407 13.9 11.0004 14.4596 11.0004 15.15C11.0004 15.8404 10.4407 16.4 9.75039 16.4C9.06003 16.4 8.50039 15.8404 8.50039 15.15Z"></path>
                    </svg>{" "}
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <WhatsappIcon className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <a href="https://aksara-muda-website.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Website Tim">
                    <Users className="h-5 w-5 text-muted-foreground hover:text-primary" />
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

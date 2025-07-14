"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '../icons/Logo';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: '#about', label: 'Tentang' },
  { href: '#composition', label: 'Komposisi' },
  { href: '#benefits', label: 'Manfaat' },
  { href: '#contact', label: 'Pesan' },
];

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItems = () => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setMobileMenuOpen(false)}
          className="font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      hasScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <a href="#home" aria-label="Ke Halaman Utama">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <NavItems />
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <a href="#contact">Order Sekarang</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="p-6 h-full flex flex-col">
                <div className="mb-8">
                    <Logo />
                </div>
                <nav className="flex flex-col gap-6 text-lg">
                  <NavItems />
                </nav>
                 <Button asChild className="mt-auto">
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Order Sekarang</a>
                 </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

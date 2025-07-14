"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '../icons/Logo';
import { Button } from '../ui/button';
import { Menu, Moon, Sun, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTheme } from 'next-themes';

const navLinks = [
  { href: '#about', label: 'Tentang' },
  { href: '#story', label: 'Cerita' },
  { href: '#composition', label: 'Komposisi' },
  { href: '#benefits', label: 'Manfaat' },
  { href: '#calculator', label: 'Kalkulator' },
  { href: '#contact', label: 'Pesan' },
];

function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

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
          className="font-medium text-muted-foreground hover:text-primary transition-colors duration-300 py-2 md:py-0"
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      hasScrolled ? 'shadow-md' : ''
    )}>
      <div className={cn(
        "absolute inset-0 -z-10 transition-opacity",
        hasScrolled 
          ? 'opacity-100 bg-gradient-to-b from-background to-accent/20 dark:from-card dark:to-background/80 backdrop-blur-sm' 
          : 'opacity-0'
      )}></div>
      <div className="container mx-auto px-4 sm:px-8 h-20 flex justify-between items-center">
        <a href="#home" aria-label="Ke Halaman Utama">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <NavItems />
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Button asChild>
              <a href="#contact">Order Sekarang</a>
            </Button>
          </div>
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Buka menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-0">
                <div className="p-6 h-full flex flex-col">
                  <div className="mb-8">
                      <a href="#home" onClick={() => setMobileMenuOpen(false)}><Logo /></a>
                  </div>
                  <nav className="flex flex-col gap-2 text-lg">
                    <NavItems />
                  </nav>
                   <Button asChild size="lg" className="mt-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Promo Hari Ini!</a>
                   </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}


"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    src: "https://placehold.co/800x600.png",
    alt: "Kemasan produk Green Bean Coffee",
    aiHint: "coffee package flatlay",
  },
  {
    src: "https://placehold.co/800x600.png",
    alt: "Biji kopi hijau dengan jahe dan kayu manis",
    aiHint: "green coffee beans",
  },
  {
    src: "https://placehold.co/800x600.png",
    alt: "Secangkir kopi herbal panas",
    aiHint: "cup coffee steam",
  },
  {
    src: "https://placehold.co/800x600.png",
    alt: "Wanita tersenyum sambil memegang produk",
    aiHint: "woman holding product",
  },
  {
    src: "https://placehold.co/800x600.png",
    alt: "Penyajian kopi herbal",
    aiHint: "coffee serving tray",
  },
];

export function GallerySection() {
  const [mainImage, setMainImage] = useState(galleryImages[0]);

  return (
    <section id="gallery" className="py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
            Galeri Produk
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Lihat lebih dekat bagaimana GREEN BEAN COFFEE dapat menjadi bagian dari gaya hidup sehat Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-4 relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={mainImage.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt}
                  fill
                  className="object-cover"
                  data-ai-hint={mainImage.aiHint}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-1 gap-4 lg:col-span-1">
            {galleryImages.map((image) => (
              <button
                key={image.src}
                onClick={() => setMainImage(image)}
                className={cn(
                  "relative aspect-square w-full overflow-hidden rounded-lg outline-none ring-offset-2 ring-offset-card focus:ring-2 focus:ring-primary transition-all",
                  mainImage.src === image.src ? "ring-2 ring-primary" : "hover:opacity-80"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  data-ai-hint={image.aiHint}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

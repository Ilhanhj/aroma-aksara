
"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1511920183353-3c2c54533a18?q=80&w=2787&auto=format&fit=crop",
    alt: "Kemasan produk Green Bean Coffee",
    aiHint: "coffee package flatlay",
  },
  {
    src: "https://images.unsplash.com/photo-1610632380597-8177b6b15526?q=80&w=2864&auto=format&fit=crop",
    alt: "Biji kopi hijau dengan jahe dan kayu manis",
    aiHint: "green coffee beans",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d713b22e8b4?q=80&w=2940&auto=format&fit=crop",
    alt: "Secangkir kopi herbal panas",
    aiHint: "cup coffee steam",
  },
  {
    src: "https://images.unsplash.com/photo-1528740561666-dc2479707504?q=80&w=2853&auto=format&fit=crop",
    alt: "Wanita tersenyum sambil memegang produk",
    aiHint: "woman holding product",
  },
  {
    src: "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?q=80&w=2848&auto=format&fit=crop",
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

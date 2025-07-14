
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1511920183353-3c2c54533a18?q=80&w=1887&auto=format&fit=crop",
    alt: "Kemasan produk Green Bean Coffee",
    aiHint: "coffee package flatlay",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1610632380597-8177b6b15526?q=80&w=1887&auto=format&fit=crop",
    alt: "Biji kopi hijau dengan jahe dan kayu manis",
    aiHint: "green coffee beans",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d713b22e8b4?q=80&w=2070&auto=format&fit=crop",
    alt: "Secangkir kopi herbal panas",
    aiHint: "cup coffee steam",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?q=80&w=1887&auto=format&fit=crop",
    alt: "Penyajian kopi herbal",
    aiHint: "coffee serving tray",
    className: "col-span-1 row-span-1",
  },
   {
    src: "https://images.unsplash.com/photo-1528740561666-dc2479707504?q=80&w=1853&auto=format=fit,crop",
    alt: "Wanita tersenyum sambil memegang produk",
    aiHint: "woman holding product",
    className: "col-span-1 row-span-1",
  },
];

export function GallerySection() {
  const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

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

        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4 md:gap-6 h-[600px] md:h-[700px]">
          {galleryImages.map((image, index) => (
             <motion.div
              key={image.src}
              className={cn("relative overflow-hidden rounded-xl shadow-lg group", image.className)}
              variants={variants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                data-ai-hint={image.aiHint}
              />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

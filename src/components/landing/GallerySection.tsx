
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SteamRevealImage } from "./SteamRevealImage";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1511920183353-3c9c93da54e2?q=80&w=2787",
    alt: "Green Bean Coffee Product 1",
    className: "col-span-2 row-span-2",
    hint: "coffee product lifestyle"
  },
  {
    src: "https://images.unsplash.com/photo-1559441312-c4e1f7050b91?q=80&w=2864",
    alt: "Green Bean Coffee Product 2",
    className: "col-span-1 row-span-1",
    hint: "coffee beans"
  },
  {
    src: "https://images.unsplash.com/photo-1621289846222-1444b023f0e2?q=80&w=2787",
    alt: "Green Bean Coffee Product 3",
    className: "col-span-1 row-span-1",
    hint: "coffee ingredients"
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d713b20e5f9?q=80&w=2940",
    alt: "Green Bean Coffee Product 4",
    className: "col-span-1 row-span-1",
    hint: "brewing coffee"
  },
   {
    src: "https://images.unsplash.com/photo-1528699633785-c91814a809ab?q=80&w=2940",
    alt: "Green Bean Coffee Product 5",
    className: "col-span-1 row-span-1",
    hint: "packaged coffee"
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
              key={index}
              className={cn("relative overflow-hidden rounded-xl shadow-lg group", image.className)}
              variants={variants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SteamRevealImage
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.hint}
                imgClassName="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

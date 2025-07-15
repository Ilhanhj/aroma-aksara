
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    src: "/assets/images/products/coffe-product-1.jpg",
    alt: "Green Bean Coffee Product 1",
    aiHint: "coffee package flatlay",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/assets/images/products/coffe-product-2.jpg",
    alt: "Green Bean Coffee Product 2",
    aiHint: "green coffee beans",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/images/products/coffe-product-3.jpg",
    alt: "Green Bean Coffee Product 3",
    aiHint: "cup coffee steam",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/images/products/coffe-product-4.jpg",
    alt: "Green Bean Coffee Product 4",
    aiHint: "coffee serving tray",
    className: "col-span-1 row-span-1",
  },
   {
    src: "/assets/images/products/coffe-product-5.jpg",
    alt: "Green Bean Coffee Product 5",
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

"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Hand, RefreshCcw } from "lucide-react";

export function DragToBrewSection() {
  const beanRef = useRef<HTMLDivElement>(null);
  const cupRef = useRef<HTMLDivElement>(null);
  const liquidRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isBrewed, setIsBrewed] = useState(false);
  const [draggableInstance, setDraggableInstance] = useState<Draggable[] | null>(null);

  useEffect(() => {
    gsap.registerPlugin(Draggable);

    const onDrop = function() {
      gsap.to(beanRef.current, { 
        duration: 0.5, 
        opacity: 0, 
        scale: 0.5,
        ease: "power2.in" 
      });
      
      const tl = gsap.timeline();
      tl.to(liquidRef.current, { 
        duration: 1.2, 
        height: "100%", 
        ease: "power2.out" 
      })
      .to(textRef.current, { 
        duration: 0.8, 
        opacity: 1, 
        scale: 1, 
        ease: "back.out(1.7)" 
      }, "-=0.5");

      setIsBrewed(true);
      (this as any).disable();
    };

    const instance = Draggable.create(beanRef.current, {
      type: "x,y",
      bounds: "body",
      inertia: true,
      onDragEnd: function() {
        if (this.hitTest(cupRef.current, "50%")) {
            onDrop.call(this);
        }
      }
    });

    setDraggableInstance(instance);

    return () => {
      instance[0].kill();
    };
  }, []);

  const handleReset = () => {
    if (!draggableInstance) return;

    const tl = gsap.timeline();
    tl.to(textRef.current, { duration: 0.3, opacity: 0, scale: 0.8, ease: "power2.in" })
      .to(liquidRef.current, { duration: 0.6, height: "0%", ease: "power2.in" })
      .set(beanRef.current, { x: 0, y: 0, opacity: 1, scale: 1 });
      
    draggableInstance[0].enable();
    setIsBrewed(false);
  };

  return (
    <section id="drag-to-brew" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-8 flex justify-center">
        <Card className="w-full max-w-3xl shadow-lg rounded-xl bg-card/50 overflow-hidden">
          <CardHeader className="text-center">
             <div className="mx-auto bg-accent rounded-full p-3 w-max mb-4">
                <Hand className="w-8 h-8 text-primary" />
             </div>
            <CardTitle className="font-headline text-3xl md:text-4xl text-primary">Buat Kopimu Sendiri!</CardTitle>
            <CardDescription>
              Seret biji kopi ke dalam cangkir untuk menyeduhnya.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-64 flex justify-center items-center gap-8 md:gap-16">
              
              {/* Bean */}
              <div ref={beanRef} className="z-10 cursor-grab active:cursor-grabbing">
                <Image src="https://placehold.co/100x100.png" data-ai-hint="coffee bean icon" width={80} height={80} alt="Biji Kopi" className="drop-shadow-lg" />
              </div>
              
              {/* Cup */}
              <div ref={cupRef} className="relative w-32 h-32 md:w-40 md:h-40">
                  <Image src="https://placehold.co/200x200.png" data-ai-hint="empty coffee cup top" fill alt="Cangkir Kopi Kosong" className="z-0 object-contain" />
                  <div className="absolute bottom-[20%] left-[10%] w-[80%] h-[70%] rounded-b-3xl overflow-hidden z-[-1]">
                      <div ref={liquidRef} className="absolute bottom-0 left-0 w-full h-0 bg-primary/80"></div>
                  </div>
              </div>
            </div>

            <div className="mt-8 text-center h-16 flex flex-col items-center justify-center">
                <div ref={textRef} className="opacity-0 scale-90">
                    <p className="text-xl md:text-2xl font-bold text-primary mb-4">
                        Kopi kamu siap diseruput!
                    </p>
                </div>
                {isBrewed && (
                  <Button onClick={handleReset} variant="outline" className="transition-all duration-300">
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    Seduh Ulang
                  </Button>
                )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

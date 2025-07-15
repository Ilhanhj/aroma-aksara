
"use client";

import React, { useRef, useEffect } from "react";
import Image, { type ImageProps } from "next/image";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type SteamRevealImageProps = Omit<ImageProps, "className"> & {
  containerClassName?: string;
  imgClassName?: string;
};

export function SteamRevealImage({
  containerClassName,
  imgClassName,
  ...props
}: SteamRevealImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const steamRef = useRef<SVGSVGElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    gsap.set(steamRef.current, { autoAlpha: 1 });

    tl.current = gsap.timeline({ paused: true }).to(steamRef.current, {
      autoAlpha: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    const currentContainerRef = containerRef.current;

    const handleMouseEnter = () => tl.current?.play();
    const handleMouseLeave = () => tl.current?.reverse();

    if (currentContainerRef) {
      currentContainerRef.addEventListener("mouseenter", handleMouseEnter);
      currentContainerRef.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (currentContainerRef) {
        currentContainerRef.removeEventListener("mouseenter", handleMouseEnter);
        currentContainerRef.removeEventListener("mouseleave", handleMouseLeave);
      }
      tl.current?.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden", containerClassName)}
    >
      <Image
        fill
        {...props}
        className={cn("transition-transform duration-500 ease-in-out group-hover:scale-105", imgClassName)}
      />
      <svg
        ref={steamRef}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="steam-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02 0.05"
              numOctaves="2"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="10"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <rect
          width="100"
          height="100"
          fill="hsla(var(--background)/0.8)"
          className="dark:fill-black/60"
          filter="url(#steam-filter)"
        />
      </svg>
    </div>
  );
}

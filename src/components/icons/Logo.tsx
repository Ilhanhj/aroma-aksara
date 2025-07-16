import { cn } from "@/lib/utils";
import React from "react";

export const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-2", className)}>
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      <path
        d="M8 14s1.5 2 4 2 4-2 4-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 7.5c.667-1.333 1.333-2 2.5-2s2.5 1 2.5 3-1.25 3.5-2.5 3.5-2-1.5-2.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 7.5c-.667-1.333-1.333-2-2.5-2s-2.5 1-2.5 3 1.25 3.5 2.5 3.5 2-1.5 2.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 19h20c0-4-4-6-10-6S2 15 2 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="font-headline text-xl font-bold text-primary">
        Green covery
    </span>
  </div>
);
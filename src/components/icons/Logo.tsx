import { cn } from "@/lib/utils";
import React from "react";

export const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-2", className)}>
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
        <path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 12C7 12 8 15 12 15C16 15 17 12 17 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 2L9 4" stroke="hsl(var(--accent-foreground))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 2L15 4" stroke="hsl(var(--accent-foreground))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="font-headline text-xl font-bold text-primary">
        Green covery
    </span>
  </div>
);

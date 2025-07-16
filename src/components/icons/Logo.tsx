import { cn } from "@/lib/utils";
import { Coffee } from "lucide-react";
import React from "react";

export const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-2", className)}>
    <Coffee className="h-8 w-8 text-primary" />
    <span className="font-headline text-xl font-bold text-primary">
      Kopi Hijau Alami
    </span>
  </div>
);

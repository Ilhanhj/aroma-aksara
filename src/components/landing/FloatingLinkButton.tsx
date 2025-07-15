
"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function FloatingLinkButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.a
            href="https://aksara-muda-website.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kenali Tim Kami"
            className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
          >
            <Users className="h-6 w-6" />
          </motion.a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-card text-card-foreground border-border">
          <p>Kenali Tim Kami</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

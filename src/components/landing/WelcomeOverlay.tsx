
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, CloudRain, Users, Waves } from "lucide-react";
import { Logo } from "../icons/Logo";
import { cn } from "@/lib/utils";

type OptionKey = "garden" | "rain" | "friends" | "beach";

const options: {
  key: OptionKey;
  icon: React.ReactNode;
  text: string;
}[] = [
  { key: "garden", icon: <Leaf />, text: "Di taman belakang rumah" },
  { key: "rain", icon: <CloudRain />, text: "Di tengah hujan sore" },
  { key: "friends", icon: <Users />, text: "Bareng teman di teras" },
  { key: "beach", icon: <Waves />, text: "Di pinggir pantai" },
];

const responses: Record<OptionKey, string> = {
  garden:
    "Wah, pecinta suasana tenang nih! Kopi herbal bakal makin nikmat sambil dengerin suara dedaunan.",
  rain: "Uh, suasana hujan + kopi hangat = combo terbaik! Kita racikkan yang spesial buat kamu.",
  friends:
    "Ngopi rame-rame emang paling seru! Siap sediakan Green Bean Coffee buat nongkrong santai.",
  beach:
    "Asli, vibes kopi di pinggir pantai tuh gak ada obat! Waktunya menikmati kopi sehat di suasana santai.",
};

export function WelcomeOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionKey | null>(null);

  useEffect(() => {
    // This effect runs only on the client side
    const hasSeenOverlay = sessionStorage.getItem("welcomeOverlayShown");
    if (!hasSeenOverlay) {
      setIsOpen(true);
    }
  }, []);

  const handleSelect = (key: OptionKey) => {
    setSelectedOption(key);
    sessionStorage.setItem("welcomeOverlayShown", "true");
    setTimeout(() => {
      setIsOpen(false);
    }, 2500); // Wait 2.5 seconds before closing
  };

  if (!isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.5 } }}
            className="w-full max-w-lg mx-auto p-8 text-center"
          >
            <AnimatePresence mode="wait">
              {!selectedOption ? (
                <motion.div
                  key="question"
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Logo className="justify-center mb-8" />
                  <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-8 leading-tight">
                    Kalau kamu bisa menikmati secangkir kopi sekarang, suasana apa yang paling kamu inginkan?
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {options.map((option) => (
                      <Button
                        key={option.key}
                        variant="outline"
                        size="lg"
                        className="h-auto py-4 text-base justify-start transition-all duration-300 hover:scale-105 hover:bg-accent/80 hover:border-primary"
                        onClick={() => handleSelect(option.key)}
                      >
                        {option.icon}
                        <span className="ml-3">{option.text}</span>
                      </Button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="response"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-center mb-8">
                    {options.find(o => o.key === selectedOption)?.icon}
                  </div>
                  <p className="text-xl text-foreground/90 leading-relaxed">
                    {responses[selectedOption]}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

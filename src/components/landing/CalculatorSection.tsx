
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, RefreshCw } from "lucide-react";

const GRAMS_PER_CUP = 25;

export function CalculatorSection() {
  const [cups, setCups] = useState<string>("1");
  const [totalGrams, setTotalGrams] = useState<number>(GRAMS_PER_CUP);

  useEffect(() => {
    const numCups = parseInt(cups, 10);
    if (!isNaN(numCups) && numCups > 0) {
      setTotalGrams(numCups * GRAMS_PER_CUP);
    } else {
      setTotalGrams(0);
    }
  }, [cups]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only non-negative integers
    if (/^\d*$/.test(value)) {
      setCups(value);
    }
  };

  const handleReset = () => {
    setCups("1");
  };

  return (
    <section id="calculator" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-8 flex justify-center">
        <Card className="w-full max-w-2xl shadow-lg rounded-xl bg-card/50">
          <CardHeader className="text-center">
            <div className="mx-auto bg-accent rounded-full p-3 w-max mb-4">
              <Calculator className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="font-headline text-3xl md:text-4xl text-primary">Kalkulator Kopi</CardTitle>
            <CardDescription className="max-w-md mx-auto">
              Hitung kebutuhan Green Bean Coffee Anda berdasarkan konsumsi harian.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="flex-grow w-full sm:w-auto">
                <label htmlFor="cups-input" className="sr-only">Jumlah cangkir per hari</label>
                <Input
                  id="cups-input"
                  type="number"
                  min="1"
                  value={cups}
                  onChange={handleInputChange}
                  placeholder="Jumlah cangkir per hari"
                  className="text-center text-lg h-14"
                />
              </div>
              <Button onClick={handleReset} variant="outline" size="icon" className="h-14 w-14 flex-shrink-0">
                  <RefreshCw className="h-6 w-6"/>
                  <span className="sr-only">Reset</span>
              </Button>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-2">Total kebutuhan Green Bean Coffee Anda:</p>
              <div className="text-4xl md:text-5xl font-bold text-primary h-16 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={totalGrams}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                  >
                    {totalGrams}
                  </motion.span>
                </AnimatePresence>
                <span className="ml-2">gram</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

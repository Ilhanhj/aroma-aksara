"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Coffee, Shield, TrendingUp, Weight, Heart, User, Sparkles, Brain, Loader2 } from "lucide-react";
import type { CoffeeCalculatorInput, CoffeeCalculatorOutput } from "@/ai/flows/calculator-flow";
import { coffeeCalculator } from "@/ai/flows/calculator-flow";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  weight: z.number().min(30, { message: "Berat badan minimal 30 kg." }).max(200, { message: "Berat badan maksimal 200 kg." }),
  age: z.number().min(18, { message: "Umur minimal 18 tahun." }).max(80, { message: "Umur maksimal 80 tahun." }),
  coffeeHabit: z.enum(["1", "2", "3", "4+"], { required_error: "Pilih kebiasaan minum kopi." }),
  goal: z.enum(["Turun Berat Badan", "Antioksidan", "Jaga Imun"], { required_error: "Pilih tujuan kesehatan Anda." }),
});

type FormValues = z.infer<typeof formSchema>;

const goalIcons = {
  "Turun Berat Badan": <TrendingUp className="w-5 h-5" />,
  "Antioksidan": <Sparkles className="w-5 h-5" />,
  "Jaga Imun": <Shield className="w-5 h-5" />,
};

const coffeeHabitIcons = {
  "1": <Coffee className="w-5 h-5" />,
  "2": <Coffee className="w-5 h-5" />,
  "3": <Coffee className="w-5 h-5" />,
  "4+": <Coffee className="w-5 h-5" />,
};

export function CalculatorSection() {
  const { toast } = useToast();
  const [result, setResult] = React.useState<CoffeeCalculatorOutput | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weight: 60,
      age: 30,
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await coffeeCalculator(values as CoffeeCalculatorInput);
      setResult(response);
    } catch (error) {
      console.error("Calculator error:", error);
      toast({
        title: "Oops! Terjadi Kesalahan",
        description: "Tidak dapat menghitung rekomendasi. Coba lagi nanti.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="calculator" className="py-12 md:py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
            Kalkulator Kopi Sehat
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cari tahu takaran ideal GREEN BEAN COFFEE untuk mencapai tujuan kesehatan Anda.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-6 md:p-8 shadow-lg rounded-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-lg"><Weight/>Berat Badan (kg)</FormLabel>
                        <FormControl>
                          <div className="flex items-center gap-4">
                            <Slider
                              value={[field.value]}
                              onValueChange={(value) => field.onChange(value[0])}
                              min={30}
                              max={200}
                              step={1}
                            />
                            <Input
                              type="number"
                              className="w-20"
                              {...field}
                              onChange={e => field.onChange(Number(e.target.value))}
                             />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-lg"><User/>Umur</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="cth: 25" {...field} onChange={e => field.onChange(Number(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-8">
                  <FormField
                    control={form.control}
                    name="coffeeHabit"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="flex items-center gap-2 text-lg"><Coffee/>Kebiasaan Minum Kopi (per hari)</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="grid grid-cols-2 gap-4"
                          >
                            {["1", "2", "3", "4+"].map(value => (
                              <FormItem key={value} className="flex-1">
                                <FormControl>
                                  <RadioGroupItem value={value} id={`habit-${value}`} className="sr-only" />
                                </FormControl>
                                <FormLabel htmlFor={`habit-${value}`} className="flex items-center justify-center gap-2 p-3 rounded-lg border-2 border-muted bg-transparent cursor-pointer hover:border-primary data-[state=checked]:border-primary data-[state=checked]:bg-primary/10 transition-colors">
                                  {coffeeHabitIcons[value as keyof typeof coffeeHabitIcons]}
                                  <span>{value} cangkir</span>
                                </FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="goal"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="flex items-center gap-2 text-lg"><Heart/>Tujuan Utama Anda</FormLabel>
                         <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                          >
                            {(["Turun Berat Badan", "Antioksidan", "Jaga Imun"] as const).map(value => (
                              <FormItem key={value} className="flex-1">
                                <FormControl>
                                  <RadioGroupItem value={value} id={`goal-${value}`} className="sr-only" />
                                </FormControl>
                                <FormLabel htmlFor={`goal-${value}`} className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border-2 border-muted bg-transparent cursor-pointer hover:border-primary data-[state=checked]:border-primary data-[state=checked]:bg-primary/10 transition-colors h-full">
                                   {goalIcons[value]}
                                  <span className="text-center text-sm">{value}</span>
                                </FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full transition-transform hover:scale-105" size="lg" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
                {isLoading ? 'Menghitung...' : 'Hitung Sekarang'}
              </Button>
            </form>
          </Form>
        </Card>
        
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <Card className="max-w-4xl mx-auto shadow-lg rounded-xl bg-gradient-to-br from-accent/20 to-background">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary text-center">Hasil Rekomendasi Untuk Anda</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-background">
                    <h3 className="font-semibold mb-2">Rekomendasi Takaran</h3>
                    <p className="text-3xl font-bold text-secondary">{result.recommendation.gramsPerDay}gr</p>
                    <p className="text-sm text-muted-foreground">per hari</p>
                  </div>
                   <div className="flex flex-col items-center p-4 rounded-lg bg-background">
                    <h3 className="font-semibold mb-2">Estimasi Kalori Terbakar</h3>
                    <p className="text-3xl font-bold text-secondary">{result.calories.burnedPerDay}</p>
                    <p className="text-sm text-muted-foreground">kalori per hari</p>
                  </div>
                   <div className="flex flex-col items-center p-4 rounded-lg bg-background">
                    <h3 className="font-semibold mb-2">Waktu Minum Terbaik</h3>
                    <p className="text-lg font-bold text-secondary">{result.timing.bestTime}</p>
                    <p className="text-sm text-muted-foreground">{result.timing.reason}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Facebook, Instagram, Send } from "lucide-react";
import { WhatsappIcon } from "../icons/WhatsappIcon";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nama harus memiliki setidaknya 2 karakter.",
  }),
  phone: z.string().min(10, {
    message: "Nomor telepon harus memiliki setidaknya 10 digit.",
  }),
  message: z.string().min(10, {
    message: "Pesan harus memiliki setidaknya 10 karakter.",
  }),
});

export function ContactSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "Halo, saya tertarik dengan produk GREEN BEAN COFFEE.",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Kami akan segera merespons.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                 <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Pesan Sekarang & Rasakan Manfaatnya!</h2>
                <p className="text-muted-foreground mt-4 mb-8 leading-relaxed">
                    Jangan tunda lagi untuk hidup lebih sehat. Pesan GREEN BEAN COFFEE hari ini atau hubungi kami jika ada pertanyaan. Tim kami siap membantu Anda!
                </p>
                <div className="flex flex-col gap-4">
                    <Button asChild size="lg" className="justify-start">
                        <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                            <WhatsappIcon className="mr-2 h-6 w-6" />
                            <span>Order Cepat via WhatsApp</span>
                        </a>
                    </Button>
                     <div className="flex items-center gap-4 mt-4">
                        <p className="text-sm font-medium">Ikuti kami:</p>
                        <Button asChild variant="outline" size="icon">
                            <a href="#" target="_blank" aria-label="Instagram">
                                <Instagram className="h-4 w-4" />
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="icon">
                            <a href="#" target="_blank" aria-label="Facebook">
                                <Facebook className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
             <Card className="w-full max-w-lg shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Atau tinggalkan pesan</CardTitle>
                    <CardDescription>Isi form di bawah ini dan kami akan menghubungi Anda.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Nama Anda</FormLabel>
                                <FormControl>
                                    <Input placeholder="cth: Budi Hartono" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Nomor WhatsApp</FormLabel>
                                <FormControl>
                                    <Input placeholder="cth: 081234567890" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Pesan Anda</FormLabel>
                                <FormControl>
                                    <Textarea rows={4} {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <Button type="submit" className="w-full" size="lg">
                                Kirim Pesan
                                <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}

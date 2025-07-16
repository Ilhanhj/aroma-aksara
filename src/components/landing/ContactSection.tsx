"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Instagram, Send } from "lucide-react";
import { WhatsappIcon } from "../icons/WhatsappIcon";
import { TiktokIcon } from "../icons/TiktokIcon";

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
    <section id="contact" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">Pesan Sekarang & Rasakan Manfaatnya!</h2>
            <p className="text-muted-foreground mt-4 mb-8 leading-relaxed">Jangan tunda lagi untuk hidup lebih sehat. Pesan GREEN BEAN COFFEE hari ini atau hubungi kami jika ada pertanyaan. Tim kami siap membantu Anda!</p>
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
                  <a href="https://www.instagram.com/kkn_aksaramuda?igsh=MWh4OWJscTI3dWU2MQ%3D%3D" target="_blank" aria-label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a href="https://www.tiktok.com/@kkn_aksaramuda?_t=ZS-8x5OVdm4Z73&_r=1" target="_blank" aria-label="TikTok">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.0004 2V8.41396C10.5947 8.33909 10.1768 8.3 9.75039 8.3C5.96724 8.3 2.90039 11.3668 2.90039 15.15C2.90039 18.9332 5.96724 22 9.75039 22C13.5335 22 16.6004 18.9332 16.6004 15.15V11.4136C17.6366 11.8539 18.7662 12.1 20.0005 12.1H21.0005V6.5H20.0005C18.0966 6.5 16.6004 4.96259 16.6004 3V2H11.0004ZM13.0004 4H14.688C15.0818 6.22009 16.7673 7.99607 19.0005 8.4091V10.0282C17.9624 9.87602 17.0253 9.48645 16.1567 8.905L14.6004 7.86327V15.15C14.6004 17.8286 12.429 20 9.75039 20C7.07181 20 4.90039 17.8286 4.90039 15.15C4.90039 12.4714 7.07181 10.3 9.75039 10.3C9.83431 10.3 9.91769 10.3021 10.0005 10.3063V11.9095C9.91795 11.9032 9.83454 11.9 9.75039 11.9C7.95547 11.9 6.50039 13.3551 6.50039 15.15C6.50039 16.9449 7.95547 18.4 9.75039 18.4C11.5453 18.4 13.0004 16.9449 13.0004 15.15C13.0004 11.4334 12.9992 7.71665 13.0004 4ZM8.50039 15.15C8.50039 14.4596 9.06003 13.9 9.75039 13.9C10.4407 13.9 11.0004 14.4596 11.0004 15.15C11.0004 15.8404 10.4407 16.4 9.75039 16.4C9.06003 16.4 8.50039 15.8404 8.50039 15.15Z"></path>
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <Card className="w-full max-w-lg shadow-lg rounded-xl">
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

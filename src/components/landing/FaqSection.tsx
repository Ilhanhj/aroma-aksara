import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react";
  
  const faqs = [
    {
      question: "Apa bedanya Green Bean Coffee dengan kopi hitam biasa?",
      answer: "Green Bean Coffee dibuat dari biji kopi yang tidak dipanggang, sehingga kandungan asam klorogenatnya tetap tinggi. Asam klorogenat inilah yang memiliki banyak manfaat kesehatan, terutama untuk membantu menurunkan berat badan dan sebagai antioksidan."
    },
    {
      question: "Apakah aman dikonsumsi setiap hari?",
      answer: "Ya, aman untuk dikonsumsi setiap hari dalam jumlah yang wajar (1-2 cangkir per hari). Seperti kopi pada umumnya, konsumsi berlebihan tidak dianjurkan, terutama bagi yang sensitif terhadap kafein."
    },
    {
      question: "Bagaimana rasa dari kopi ini?",
      answer: "Rasanya lebih ringan dan herbal dibandingkan kopi hitam biasa, dengan sentuhan hangat dari jahe dan kayu manis. Rasanya unik dan menyegarkan."
    },
    {
      question: "Apakah produk ini sudah terdaftar dan halal?",
      answer: "Tentu. Produk kami telah melalui proses sertifikasi dan terjamin kualitas serta kehalalannya. Kami berkomitmen untuk menyediakan produk yang aman dan terpercaya untuk Anda."
    },
    {
      question: "Kapan waktu terbaik untuk mengonsumsi kopi ini?",
      answer: "Waktu terbaik adalah di pagi hari untuk meningkatkan metabolisme atau sebelum berolahraga untuk menambah energi. Hindari mengonsumsi terlalu dekat dengan waktu tidur jika Anda sensitif terhadap kafein."
    }
  ];
  
  export function FaqSection() {
    return (
      <section id="faq" className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <div className="mx-auto bg-accent rounded-full p-3 w-max mb-4">
                <HelpCircle className="w-8 h-8 text-primary" />
             </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tidak menemukan jawaban Anda? Hubungi kami langsung melalui halaman kontak.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  }
  
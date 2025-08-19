import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Apa keistimewaan Kopi Dukuh Ibun Premium?",
    answer:
      "Kopi ini ditanam langsung di lereng subur Desa Ibun, Majalaya. Rasa dan aromanya khas karena berasal dari perawatan alami tanpa campuran tambahan. Jadi yang Anda nikmati adalah kopi murni, otentik, dan penuh cerita dari petani lokal.",
  },
  {
    question: "Apakah bisa diminum setiap hari?",
    answer: "Tentu bisa! 1–2 cangkir per hari aman untuk sebagian besar orang. Malah jadi rutinitas nikmat buat memulai hari atau menemani kerja. Yang penting jangan berlebihan, biar tubuh tetap nyaman.",
  },
  {
    question: "Rasanya kayak gimana sih?",
    answer: "Rasanya rich, bold, dengan aroma earthy yang khas kopi pegunungan. Kalau diseduh hangat, ada aftertaste yang halus dan bikin nagih. Cocok banget buat pecinta kopi asli tanpa ribet.",
  },
  {
    question: "Apakah sudah terjamin kualitas dan halal?",
    answer: "Yes, 100%! Kopi Dukuh Ibun Premium sudah melalui proses sortir ketat dan terjamin kualitasnya. Produk juga bersertifikat halal, jadi aman dan tenang untuk dinikmati setiap hari.",
  },
  {
    question: "Kapan waktu terbaik untuk menikmati kopi ini?",
    answer: "Waktu favorit banyak orang adalah pagi hari biar lebih segar, atau sore hari ditemani camilan. Tapi balik lagi ke selera masing-masing—yang penting jangan minum terlalu dekat dengan jam tidur, ya.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <div className="mx-auto bg-accent rounded-full p-3 w-max mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">Tidak menemukan jawaban Anda? Hubungi kami langsung melalui halaman kontak.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

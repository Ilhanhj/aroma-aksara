import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, HeartPulse, Leaf, Scale, ShieldCheck, Zap } from "lucide-react";

const benefits = [
  {
    icon: <Scale className="w-8 h-8 text-primary" />,
    title: "Energi yang Tahan Lama",
    description: "Kafein alami kopi membantu tubuh tetap fokus dan bersemangat sepanjang hari.",
  },

  {
    icon: <Leaf className="w-8 h-8 text-primary" />,
    title: "Sumber Antioksidan Tinggi",
    description: "Melindungi tubuh dari kerusakan sel akibat radikal bebas.",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-primary" />,
    title: "Meningkatkan Konsentrasi",
    description: "Aroma dan rasa kopi yang khas mampu menstimulasi otak untuk berpikir lebih jernih dan kreatif.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "  Menjaga Suasana Hati",
    description: "Secangkir kopi hangat bisa mengurangi stres ringan dan membuat mood jadi lebih positif.",
  },

  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Mendukung Metabolisme Tubuh",
    description: "Kandungan alami kopi membantu memperlancar metabolisme sehingga tubuh terasa lebih ringan.",
  },
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "Ritual Relaksasi Sehari-hari",
    description: "Menikmati Kopi Dukuh Ibun Premium bukan hanya soal rasa, tapi juga momen tenang untuk diri sendiri.",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-8 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">Manfaat Terbaik dari Alam</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">Setiap tegukan Kopi Dukuh Ibun Premium memberikan kebaikan alami yang dibutuhkan tubuh Anda setiap hari. </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center flex flex-col items-center p-6 border-2 border-transparent hover:border-secondary hover:shadow-lg transition-all duration-300 rounded-xl bg-background/50 hover:bg-background">
              <CardHeader className="p-0 mb-4">
                <div className="bg-accent rounded-full p-4 mb-4 w-max mx-auto transition-transform duration-300 group-hover:scale-110">{benefit.icon}</div>
                <CardTitle className="font-headline text-xl text-primary">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

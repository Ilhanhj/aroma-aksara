import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Droplets, Thermometer } from "lucide-react";

const steps = [
    {
        icon: <Coffee className="w-8 h-8 text-primary" />,
        title: "Satu Sendok Takar",
        description: "Masukkan satu sendok takar (sekitar 5gr) GREEN BEAN COFFEE ke dalam cangkir."
    },
    {
        icon: <Droplets className="w-8 h-8 text-primary" />,
        title: "Air Panas",
        description: "Tuangkan 150ml air panas (bukan mendidih, sekitar 90°C) ke dalam cangkir."
    },
    {
        icon: <Thermometer className="w-8 h-8 text-primary" />,
        title: "Aduk & Nikmati",
        description: "Aduk hingga merata, diamkan sejenak, dan kopi sehat siap dinikmati."
    }
]

export function HowToServeSection() {
    return (
        <section id="serving" className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                        Cara Penyajian Mudah
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                        Hanya butuh 3 langkah sederhana untuk menikmati secangkir kopi sehat.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center">
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-y-1/2 w-full h-px bg-border -z-10"></div>
                            )}
                             <div className="bg-accent rounded-full p-4 mb-4 w-max z-10 border-4 border-background">
                                {step.icon}
                            </div>
                            <h3 className="font-headline text-xl font-semibold text-primary">{step.title}</h3>
                            <p className="text-muted-foreground mt-2">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

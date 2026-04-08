import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        quote:
            "A DataLabs transformou completamente a forma como analisamos nossos resultados. Saímos de planilhas confusas para dashboards claros em menos de uma semana.",
        author: "Mariana Costa",
        role: "Diretora de Operações",
        company: "Grupo Horizonte",
    },
    {
        quote:
            "A velocidade com que a equipe entendeu nosso negócio e entregou os painéis foi impressionante. Hoje tomamos decisões que antes levariam dias em minutos.",
        author: "Rafael Mendes",
        role: "CEO",
        company: "TechNova",
    },
    {
        quote:
            "O suporte é excepcional. Sempre que precisamos de um novo relatório ou ajuste, a entrega é rápida e com qualidade. Parceiro estratégico de verdade.",
        author: "Camila Oliveira",
        role: "Head de Marketing",
        company: "Lojas Vitrine",
    },
];

export function Testimonials() {
    return (
        <section id="resultados" className="border-y border-border/50 bg-card/30 py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Quem usa,{" "}
                        <span className="text-primary">recomenda</span>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Empresas de diversos setores confiam na DataLabs para guiar suas
                        decisões.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {TESTIMONIALS.map((t) => (
                        <Card
                            key={t.author}
                            className="border-border/50 bg-card/80 transition-colors hover:border-primary/20"
                        >
                            <CardContent className="flex flex-col p-6">
                                <Quote className="size-8 text-primary/30" />
                                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                                <div className="mt-6 border-t border-border/50 pt-4">
                                    <p className="text-sm font-semibold">{t.author}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {t.role} · {t.company}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

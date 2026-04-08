import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const PLANS = [
    {
        name: "Starter",
        description: "Para empresas que estão começando com dados",
        highlight: false,
        features: [
            "Até 3 dashboards",
            "1 fonte de dados",
            "Atualizações diárias",
            "Suporte por e-mail",
        ],
    },
    {
        name: "Business",
        description: "Para operações que dependem de dados em tempo real",
        highlight: true,
        features: [
            "Dashboards ilimitados",
            "Fontes de dados ilimitadas",
            "Atualizações em tempo real",
            "Suporte prioritário",
            "Relatórios automáticos",
            "Controle de acesso por equipe",
        ],
    },
    {
        name: "Enterprise",
        description: "Para organizações com requisitos avançados",
        highlight: false,
        features: [
            "Tudo do Business",
            "Infraestrutura dedicada",
            "SLA personalizado",
            "Consultoria de dados",
            "Treinamento da equipe",
            "Integração com SSO",
        ],
    },
];

export function Pricing() {
    return (
        <section id="planos" className="py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Planos que{" "}
                        <span className="text-primary">escalam com você</span>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Escolha o plano ideal para o momento do seu negócio. Todos incluem
                        setup completo e onboarding.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {PLANS.map((plan) => (
                        <Card
                            key={plan.name}
                            className={`relative flex flex-col ${plan.highlight
                                    ? "border-primary/50 bg-card shadow-lg shadow-primary/5"
                                    : "border-border/50 bg-card/80"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <Badge className="bg-primary text-primary-foreground">
                                        Mais popular
                                    </Badge>
                                </div>
                            )}
                            <CardContent className="flex flex-1 flex-col p-6 pt-8">
                                <h3 className="text-xl font-bold">{plan.name}</h3>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    {plan.description}
                                </p>

                                <ul className="mt-6 flex-1 space-y-3">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2 text-sm">
                                            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={plan.highlight ? "default" : "outline"}
                                    className="mt-8 w-full gap-2"
                                    nativeButton={false}
                                    render={<a href="#contato" />}
                                >
                                    Falar com vendas
                                    <ArrowRight className="size-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

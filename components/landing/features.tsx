import { Card, CardContent } from "@/components/ui/card";
import {
    LayoutDashboard,
    Database,
    ShieldCheck,
    Zap,
    RefreshCw,
    Users,
} from "lucide-react";

const FEATURES = [
    {
        icon: LayoutDashboard,
        title: "Dashboards sob medida",
        description:
            "Painéis personalizados para o seu negócio com visualizações claras e interativas construídas no Apache Superset.",
    },
    {
        icon: Database,
        title: "Conexão com qualquer fonte",
        description:
            "Integração direta com seus bancos de dados, ERPs, planilhas e APIs — sem mover ou duplicar seus dados.",
    },
    {
        icon: Zap,
        title: "Dados em tempo real",
        description:
            "Atualizações automáticas e consultas performáticas que garantem decisões baseadas nos dados mais recentes.",
    },
    {
        icon: ShieldCheck,
        title: "Segurança corporativa",
        description:
            "Controle granular de acesso, autenticação integrada e criptografia ponta a ponta para proteger seus dados.",
    },
    {
        icon: RefreshCw,
        title: "Automação de relatórios",
        description:
            "Relatórios enviados automaticamente por e-mail com a periodicidade que você precisa, sem esforço manual.",
    },
    {
        icon: Users,
        title: "Suporte dedicado",
        description:
            "Equipe especialista em dados disponível para ajudar na modelagem, análise e evolução dos seus dashboards.",
    },
];

export function Features() {
    return (
        <section id="funcionalidades" className="py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Tudo que você precisa para{" "}
                        <span className="text-primary">dominar seus dados</span>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Uma plataforma completa que combina tecnologia de ponta com
                        simplicidade para entregar resultados reais.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map((feature) => (
                        <Card
                            key={feature.title}
                            className="group border-border/50 bg-card/80 transition-colors hover:border-primary/30 hover:bg-card"
                        >
                            <CardContent className="p-6">
                                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                                    <feature.icon className="size-5 text-primary" />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

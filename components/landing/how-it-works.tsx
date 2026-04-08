import { Badge } from "@/components/ui/badge";

const STEPS = [
    {
        step: "01",
        title: "Conectamos seus dados",
        description:
            "Integramos direto nas suas fontes — bancos de dados, ERPs, planilhas — sem complicação e sem mover dados desnecessariamente.",
    },
    {
        step: "02",
        title: "Criamos seus dashboards",
        description:
            "Nossa equipe modela e cria painéis personalizados com as métricas e KPIs que fazem diferença para o seu negócio.",
    },
    {
        step: "03",
        title: "Você toma decisões",
        description:
            "Acesse seus dashboards de qualquer lugar, receba relatórios automáticos e tome decisões com confiança e velocidade.",
    },
];

export function HowItWorks() {
    return (
        <section id="como-funciona" className="border-y border-border/50 bg-card/30 py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Simples de começar,{" "}
                        <span className="text-primary">poderoso de usar</span>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Em três etapas, seus dados se transformam em inteligência de negócio.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {STEPS.map((step, index) => (
                        <div key={step.step} className="relative flex flex-col items-start">
                            {/* Connector line */}
                            {index < STEPS.length - 1 && (
                                <div className="absolute left-[calc(100%_-_1rem)] top-5 hidden h-px w-[calc(100%_-_2rem)] bg-gradient-to-r from-primary/40 to-transparent md:block" />
                            )}
                            <Badge
                                variant="outline"
                                className="mb-4 border-primary/30 font-mono text-xs text-primary"
                            >
                                {step.step}
                            </Badge>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

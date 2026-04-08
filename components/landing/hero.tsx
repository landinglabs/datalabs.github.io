import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
            {/* Background gradient effects */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />
                <div className="absolute bottom-0 left-0 h-[400px] w-[600px] rounded-full bg-primary/5 blur-[100px]" />
            </div>

            {/* Grid pattern overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
                <Badge variant="outline" className="mb-6 border-primary/30 px-4 py-1.5 text-primary">
                    Powered by Apache Superset
                </Badge>

                <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Transforme dados em{" "}
                    <span className="bg-gradient-to-r from-primary via-blue-400 to-violet-400 bg-clip-text text-transparent">
                        decisões estratégicas
                    </span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                    Dashboards interativos e análises sob medida que transformam a
                    complexidade dos seus dados em clareza para o seu negócio.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" className="gap-2 px-6 text-base" nativeButton={false} render={<a href="#contato" />}>
                        Começar agora
                        <ArrowRight className="size-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2 px-6 text-base" nativeButton={false} render={<a href="#como-funciona" />}>
                        <Play className="size-4" />
                        Ver como funciona
                    </Button>
                </div>

                {/* Dashboard mockup */}
                <div className="relative mx-auto mt-20 max-w-4xl">
                    <div className="absolute -inset-4 rounded-2xl bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-xl" />
                    <div className="relative overflow-hidden rounded-xl border border-border/60 bg-card shadow-2xl shadow-primary/5">
                        {/* Browser chrome */}
                        <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
                            <div className="flex gap-1.5">
                                <div className="size-3 rounded-full bg-red-500/80" />
                                <div className="size-3 rounded-full bg-yellow-500/80" />
                                <div className="size-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="ml-4 flex-1 rounded-md bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
                                dashboard.datalabs.com.br
                            </div>
                        </div>
                        {/* Dashboard content */}
                        <div className="grid grid-cols-4 gap-3 p-4 sm:p-6">
                            {/* KPI cards */}
                            {[
                                { label: "Receita Mensal", value: "R$ 2.4M", change: "+12.5%" },
                                { label: "Novos Clientes", value: "384", change: "+8.2%" },
                                { label: "Taxa de Conversão", value: "3.8%", change: "+2.1%" },
                                { label: "Ticket Médio", value: "R$ 6.250", change: "+5.7%" },
                            ].map((kpi) => (
                                <div
                                    key={kpi.label}
                                    className="col-span-2 rounded-lg border border-border/40 bg-muted/30 p-3 sm:col-span-1 sm:p-4"
                                >
                                    <p className="text-[10px] text-muted-foreground sm:text-xs">{kpi.label}</p>
                                    <p className="mt-1 text-sm font-bold sm:text-lg">{kpi.value}</p>
                                    <p className="text-[10px] text-emerald-400 sm:text-xs">{kpi.change}</p>
                                </div>
                            ))}
                            {/* Chart placeholder */}
                            <div className="col-span-4 flex h-32 items-end gap-1 rounded-lg border border-border/40 bg-muted/30 p-4 sm:col-span-3 sm:h-40">
                                {[40, 55, 35, 65, 50, 80, 60, 75, 90, 70, 85, 95].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 rounded-t bg-gradient-to-t from-primary/60 to-primary transition-all"
                                        style={{ height: `${h}%` }}
                                    />
                                ))}
                            </div>
                            {/* Pie chart placeholder */}
                            <div className="col-span-4 flex items-center justify-center rounded-lg border border-border/40 bg-muted/30 p-4 sm:col-span-1">
                                <div className="relative size-20 sm:size-24">
                                    <svg viewBox="0 0 100 100" className="size-full -rotate-90">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="12" className="text-muted/50" />
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="12" strokeDasharray="175 251" className="text-primary" />
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="12" strokeDasharray="50 251" strokeDashoffset="-175" className="text-violet-400" />
                                    </svg>
                                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">70%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

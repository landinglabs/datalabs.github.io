const METRICS = [
    { value: "150+", label: "Dashboards entregues" },
    { value: "40+", label: "Empresas atendidas" },
    { value: "99.9%", label: "Uptime garantido" },
    { value: "<48h", label: "Tempo de setup" },
];

export function Metrics() {
    return (
        <section className="border-y border-border/50 bg-card/50">
            <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border/50 px-6 md:grid-cols-4">
                {METRICS.map((metric) => (
                    <div key={metric.label} className="flex flex-col items-center gap-1 py-10 text-center">
                        <span className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                            {metric.value}
                        </span>
                        <span className="text-sm text-muted-foreground">{metric.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

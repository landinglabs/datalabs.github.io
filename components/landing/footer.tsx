import { Separator } from "@/components/ui/separator";
import { BarChart3 } from "lucide-react";

const FOOTER_LINKS = [
    {
        title: "Produto",
        links: [
            { label: "Funcionalidades", href: "#funcionalidades" },
            { label: "Como Funciona", href: "#como-funciona" },
            { label: "Planos", href: "#planos" },
        ],
    },
    {
        title: "Contato",
        links: [
            { label: "contato@datalabs.com.br", href: "mailto:contato@datalabs.com.br" },
            { label: "WhatsApp", href: "https://wa.me/5500000000000" },
        ],
    },
];

export function Footer() {
    return (
        <footer className="border-t border-border/50 bg-card/30">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="grid place-items-center gap-8 text-center sm:grid-cols-2 md:grid-cols-3">
                    <div className="sm:col-span-2 md:col-span-1">
                        <a href="#" className="flex items-center justify-center gap-2 text-lg font-bold tracking-tight">
                            <BarChart3 className="size-5 text-primary" />
                            <span>DataLabs</span>
                        </a>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            Inteligência de dados para empresas que querem crescer com
                            precisão.
                        </p>
                    </div>

                    {FOOTER_LINKS.map((group) => (
                        <div key={group.title}>
                            <h4 className="text-sm font-semibold">{group.title}</h4>
                            <ul className="mt-3 space-y-2">
                                {group.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <Separator className="my-8 bg-border/50" />

                <p className="text-center text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} DataLabs. Todos os direitos
                    reservados.
                </p>
            </div>
        </footer>
    );
}

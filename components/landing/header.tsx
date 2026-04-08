"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BarChart3, Menu, X } from "lucide-react";

const NAV_LINKS = [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Resultados", href: "#resultados" },
    { label: "Planos", href: "#planos" },
];

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight">
                    <BarChart3 className="size-6 text-primary" />
                    <span>DataLabs</span>
                </a>

                <nav className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <Button size="sm" nativeButton={false} render={<a href="#contato" />}>
                        Agendar Demo
                    </Button>
                </div>

                <button
                    className="flex items-center justify-center md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
            </div>

            {menuOpen && (
                <div className="border-t border-border/50 bg-background px-6 pb-6 pt-4 md:hidden">
                    <nav className="flex flex-col gap-4">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button size="sm" className="mt-2 w-full" nativeButton={false} render={<a href="#contato" />}>
                            Agendar Demo
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}

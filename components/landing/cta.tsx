import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section id="contato" className="relative overflow-hidden py-24">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-3xl px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Pronto para transformar{" "}
                    <span className="text-primary">seus dados</span> em resultados?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Agende uma demonstração gratuita e descubra como a DataLabs pode
                    acelerar a inteligência do seu negócio.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" className="gap-2 px-8 text-base" nativeButton={false} render={<a href="mailto:contato@datalabs.com.br" />}>
                        Agendar demonstração
                        <ArrowRight className="size-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="px-8 text-base" nativeButton={false} render={<a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" />}>
                        Falar no WhatsApp
                    </Button>
                </div>
                <p className="mt-6 text-xs text-muted-foreground">
                    Sem compromisso · Setup em até 48h · Cancele quando quiser
                </p>
            </div>
        </section>
    );
}

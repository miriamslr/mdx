"use client";

import { Section, Container } from "@/components/ds";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <Section className="bg-gradient-to-b from-muted/50 to-background border-b">
      <Container className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Base otimizada para SEO e monetização</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Micro sites inteligentes para{" "}
            <span className="text-primary">conteúdo, SEO</span> e monetização
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Uma base em Next.js para criar sites de nicho com artigos, guias,
            comparativos, ferramentas simples e estrutura preparada para
            crescimento orgânico.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/blog">
                Explorar artigos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/ferramentas">Ver ferramentas</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

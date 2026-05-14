"use client";

import { Section, Container } from "@/components/ds";
import { siteConfig } from "@/lib/site.config";
import {
  Brain,
  Zap,
  TrendingUp,
  Wrench,
  FileText,
  Calculator,
  Scale,
  Mail,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Zap,
  TrendingUp,
  Wrench,
};

const features = [
  {
    title: "Artigos Otimizados",
    description: "Conteúdo estruturado para ranquear nos mecanismos de busca",
    icon: FileText,
    href: "/blog",
  },
  {
    title: "Ferramentas Simples",
    description: "Utilitários interativos que geram tráfego e leads",
    icon: Calculator,
    href: "/ferramentas",
  },
  {
    title: "Comparativos",
    description: "Tabelas comparativas com oportunidades de afiliados",
    icon: Scale,
    href: "/comparativos",
  },
  {
    title: "Captura de Leads",
    description: "CTAs estratégicos para converter visitantes",
    icon: Mail,
    href: "#lead-capture",
  },
];

export const FeatureGrid = () => {
  return (
    <Section>
      <Container>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Estrutura completa para crescer online
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para criar um micro site de conteúdo que
              gera tráfego e receita
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="group p-6 rounded-xl border bg-card hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export const CategoryGrid = () => {
  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="space-y-8">
          <h2 className="text-2xl font-bold tracking-tight text-center">
            Categorias principais
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteConfig.categories.map((category) => {
              const Icon = iconMap[category.icon] || FileText;
              return (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className="group p-5 rounded-lg border bg-background hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{category.name}</h3>
                      <p className="text-sm text-muted-foreground leading-snug">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

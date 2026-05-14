import { notFound } from "next/navigation";
import { CheckCircle2, Wrench, AlertCircle } from "lucide-react";

import { Container, Main, Section } from "@/components/ds";
import { CTABox } from "@/components/monetization/CTABox";
import { JsonLdScript } from "@/components/shared/JsonLdScript";
import { Badge } from "@/components/ui/badge";
import { getIAUseCaseBySlug, iaUseCases } from "@/data/pseo/ia-use-cases";
import {
  createBreadcrumbJsonLd,
  createMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";

interface GuiaPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return iaUseCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: GuiaPageProps) {
  const { slug } = await params;
  const useCase = getIAUseCaseBySlug(slug);

  if (!useCase) {
    return createMetadata({ title: "Guia não encontrado", path: `/guias/${slug}` });
  }

  return createMetadata({
    title: useCase.title,
    description: useCase.description,
    path: `/guias/${useCase.slug}`,
    tags: ["IA", "pequenos negócios", useCase.audience],
  });
}

export default async function GuiaPage({ params }: GuiaPageProps) {
  const { slug } = await params;
  const useCase = getIAUseCaseBySlug(slug);

  if (!useCase) notFound();

  const jsonLd = [
    createWebPageJsonLd({
      title: useCase.title,
      description: useCase.description,
      path: `/guias/${useCase.slug}`,
    }),
    createBreadcrumbJsonLd([
      { name: "Início", path: "/" },
      { name: "Guias", path: "/guias" },
      { name: useCase.title, path: `/guias/${useCase.slug}` },
    ]),
  ];

  return (
    <Main>
      <JsonLdScript data={jsonLd} />
      <Section className="border-b bg-gradient-to-b from-muted/60 to-background">
        <Container className="py-12">
          <div className="max-w-3xl space-y-5">
            <Badge variant="secondary">Guia programático</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {useCase.title}
            </h1>
            <p className="text-xl leading-8 text-muted-foreground">
              {useCase.description}
            </p>
            <p className="text-sm text-muted-foreground">
              Público ideal: <strong>{useCase.audience}</strong>
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-12">
          <section className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="sticky top-6 rounded-xl border bg-card p-5">
                <h2 className="font-semibold tracking-tight">Resumo do guia</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Uma página gerada por dados para validar oportunidades de SEO
                  programático sem criar conteúdo duplicado manualmente.
                </p>
              </div>
            </div>

            <div className="space-y-10 lg:col-span-2">
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Principais dores
                  </h2>
                </div>
                <div className="grid gap-3">
                  {useCase.painPoints.map((painPoint) => (
                    <div key={painPoint} className="rounded-lg border bg-muted/30 p-4">
                      {painPoint}
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Benefícios práticos
                  </h2>
                </div>
                <div className="grid gap-3">
                  {useCase.benefits.map((benefit) => (
                    <div key={benefit} className="flex gap-3 rounded-lg border p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <Wrench className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Ferramentas recomendadas
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {useCase.tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="px-3 py-1">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </section>

              <CTABox
                title={useCase.cta.title}
                description={useCase.cta.description}
                buttonText={useCase.cta.buttonText}
                href={useCase.cta.href}
                variant="highlight"
              />
            </div>
          </section>
        </Container>
      </Section>
    </Main>
  );
}

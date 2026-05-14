import Link from "next/link";

import { Container, Main, Section } from "@/components/ds";
import { Button } from "@/components/ui/button";
import { iaUseCases } from "@/data/pseo/ia-use-cases";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Guias de IA por nicho",
  description:
    "Páginas programáticas com casos de uso de IA para diferentes tipos de pequenos negócios.",
  path: "/guias",
});

export default function GuiasPage() {
  return (
    <Main>
      <Section className="border-b bg-muted/40">
        <Container className="py-12">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Guias de IA por nicho
            </h1>
            <p className="text-lg text-muted-foreground">
              Exemplos de páginas geradas por dados para validar SEO
              programático com estrutura escalável.
            </p>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {iaUseCases.map((item) => (
              <article key={item.slug} className="flex h-full flex-col rounded-xl border bg-card p-5">
                <div className="flex-1">
                  <h2 className="font-semibold tracking-tight">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <Button asChild className="mt-5">
                  <Link href={`/guias/${item.slug}`}>Abrir guia</Link>
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </Main>
  );
}

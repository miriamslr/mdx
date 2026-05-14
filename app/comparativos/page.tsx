import Link from "next/link";
import { Scale } from "lucide-react";

import { Container, Main, Section } from "@/components/ds";
import { AffiliateDisclosure } from "@/components/monetization/AffiliateDisclosure";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Comparativos",
  description:
    "Comparativos simples para ajudar visitantes a escolher ferramentas e criar oportunidades de monetização com afiliados.",
  path: "/comparativos",
});

export default function ComparativosPage() {
  return (
    <Main>
      <Section className="border-b bg-muted/40">
        <Container className="py-12">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Comparativos</h1>
            <p className="text-lg text-muted-foreground">
              Páginas comparativas para educar o visitante e apoiar decisões de
              compra com transparência.
            </p>
            <AffiliateDisclosure variant="inline" />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <article className="rounded-xl border bg-card p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Scale className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-semibold tracking-tight">
              Ferramentas de IA para pequenos negócios
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Compare ChatGPT, Claude, Gemini e Copilot para entender qual faz
              mais sentido para diferentes rotinas de trabalho.
            </p>
            <Button asChild className="mt-5">
              <Link href="/comparativos/ferramentas-ia-pequenos-negocios">
                Ver comparativo
              </Link>
            </Button>
          </article>
        </Container>
      </Section>
    </Main>
  );
}

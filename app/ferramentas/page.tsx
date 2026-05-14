import Link from "next/link";
import { MessageSquare } from "lucide-react";

import { Container, Main, Section } from "@/components/ds";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Ferramentas gratuitas",
  description:
    "Ferramentas simples para gerar tráfego, ajudar visitantes e capturar leads em micro sites SEO.",
  path: "/ferramentas",
});

export default function FerramentasPage() {
  return (
    <Main>
      <Section className="border-b bg-muted/40">
        <Container className="py-12">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Ferramentas</h1>
            <p className="text-lg text-muted-foreground">
              Utilitários simples para entregar valor, aumentar tempo na página
              e converter visitantes em leads.
            </p>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <article className="rounded-xl border bg-card p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-semibold tracking-tight">
              Gerador de resposta para cliente
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Cole uma mensagem de cliente, escolha o tom e gere uma resposta
              simulada para usar como ponto de partida.
            </p>
            <Button asChild className="mt-5">
              <Link href="/ferramentas/gerador-resposta-cliente">
                Abrir ferramenta
              </Link>
            </Button>
          </article>
        </Container>
      </Section>
    </Main>
  );
}

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Container, Main, Section } from "@/components/ds";
import { getAllTags, getPostsByTag, slugifyTag } from "@/lib/posts";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Tags",
  description:
    "Explore artigos por assunto e encontre conteúdos sobre IA, produtividade, atendimento, ferramentas e monetização.",
  path: "/tags",
});

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <Main>
      <Section className="border-b bg-muted/40">
        <Container className="py-12">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Tags</h1>
            <p className="text-lg text-muted-foreground">
              Navegue pelos principais temas do micro site e descubra artigos
              relacionados.
            </p>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Link key={tag} href={`/tags/${slugifyTag(tag)}`}>
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  {tag} ({getPostsByTag(tag).length})
                </Badge>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </Main>
  );
}

import { notFound } from "next/navigation";

import { Container, Main, Section } from "@/components/ds";
import { PostList } from "@/components/posts/PostList";
import { getAllTags, getPostsByTag, slugifyTag, unslugifyTag } from "@/lib/posts";
import { createMetadata } from "@/lib/seo";

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: slugifyTag(tag) }));
}

export async function generateMetadata({ params }: TagPageProps) {
  const { tag } = await params;
  const tagName = unslugifyTag(tag);

  return createMetadata({
    title: `Artigos sobre ${tagName}`,
    description: `Conteúdos, guias e comparativos relacionados a ${tagName}.`,
    path: `/tags/${tag}`,
    tags: [tagName],
  });
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const tagName = unslugifyTag(tag);
  const posts = getPostsByTag(tagName);

  if (!posts.length) notFound();

  return (
    <Main>
      <Section className="border-b bg-muted/40">
        <Container className="py-12">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-medium text-primary">Tag</p>
            <h1 className="text-4xl font-bold tracking-tight">{tagName}</h1>
            <p className="text-lg text-muted-foreground">
              {posts.length} artigo{posts.length === 1 ? "" : "s"} publicado
              {posts.length === 1 ? "" : "s"} sobre este tema.
            </p>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <PostList posts={posts} />
        </Container>
      </Section>
    </Main>
  );
}

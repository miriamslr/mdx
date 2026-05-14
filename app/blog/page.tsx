import { Container, Main, Section } from "@/components/ds";
import { PostList } from "@/components/posts/PostList";
import { getAllPosts } from "@/lib/posts";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Artigos, guias e comparativos para criar micro sites, aplicar IA em pequenos negócios e monetizar conteúdo com SEO.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Main>
      <Section className="border-b bg-muted/40">
        <Container className="py-12">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Guias práticos, comparativos e estratégias para transformar
              conteúdo em tráfego orgânico, leads e receita.
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

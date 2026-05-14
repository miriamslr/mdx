import { Section, Container } from "@/components/ds";
import { Item } from "@/components/posts/item";

import type { Post } from "#site/content";

export const List = ({ posts }: { posts: Post[] }) => {
  const recentPosts = posts.slice(0, 6);

  return (
    <Section className="bg-muted/20">
      <Container className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Artigos recentes</h2>
            <p className="text-muted-foreground mt-1">
              Guias práticos para aplicar no seu negócio
            </p>
          </div>
        </div>
        {recentPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Item
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                excerpt={post.description}
                tags={post.tags}
              />
            ))}
          </div>
        ) : (
          <NoPosts />
        )}
      </Container>
    </Section>
  );
};

const NoPosts = () => {
  return (
    <p className="text-muted-foreground">
      No posts yet. Create your first post in the{" "}
      <code className="rounded bg-muted px-2 py-1 font-mono text-sm">
        content/
      </code>
      directory.
    </p>
  );
};

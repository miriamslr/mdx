import { PostList } from "@/components/posts/PostList";

import type { Post } from "#site/content";

interface RelatedPostsProps {
  posts: Post[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null;

  return (
    <section className="space-y-5 border-t pt-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Artigos relacionados
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Continue explorando temas parecidos.
        </p>
      </div>
      <PostList posts={posts} />
    </section>
  );
}

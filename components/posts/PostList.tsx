import { Item } from "@/components/posts/item";
import { getReadingTime } from "@/lib/posts";

import type { Post } from "#site/content";

interface PostListProps {
  posts: Post[];
  emptyMessage?: string;
}

export function PostList({
  posts,
  emptyMessage = "Nenhum artigo publicado ainda.",
}: PostListProps) {
  if (!posts.length) {
    return <p className="text-muted-foreground">{emptyMessage}</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Item
          key={post.slug}
          slug={post.slug}
          title={post.title}
          date={post.date}
          excerpt={post.description}
          tags={post.tags}
          readingTime={getReadingTime(post)}
        />
      ))}
    </div>
  );
}

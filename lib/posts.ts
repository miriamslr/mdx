import { posts } from ".velite";

import type { Post } from "#site/content";

export function slugifyTag(tag: string) {
  return tag
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function unslugifyTag(slug: string) {
  const tag = getAllTags().find((item) => slugifyTag(item) === slug);
  return tag || slug.replace(/-/g, " ");
}

export function getReadingTime(post: Pick<Post, "body" | "description" | "title">) {
  const text = `${post.title} ${post.description || ""} ${post.body}`
    .replace(/<[^>]*>/g, " ")
    .replace(/[^a-zA-ZÀ-ÿ0-9\s]/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function getPostCategory(post: Pick<Post, "slug" | "tags">) {
  return post.tags?.[0] || post.slug.split("/")[0] || "Artigo";
}

/**
 * Get all published posts sorted by date (newest first)
 */
export function getAllPosts() {
  return posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single post by its slug path
 * @param slug - The slug path (e.g., "example" or "blog/getting-started")
 */
export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

/**
 * Get all posts from a specific directory/prefix
 * @param prefix - The directory prefix (e.g., "blog", "docs")
 */
export function getPostsByPrefix(prefix: string) {
  return posts
    .filter((post) => post.published && post.slug.startsWith(prefix))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get all unique tags from published posts
 */
export function getAllTags() {
  const tags = new Set<string>();
  posts.forEach((post) => {
    if (post.published && post.tags) {
      post.tags.forEach((tag) => tags.add(tag));
    }
  });
  return Array.from(tags).sort();
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string) {
  return posts
    .filter(
      (post) =>
        post.published &&
        post.tags?.some((postTag) => slugifyTag(postTag) === slugifyTag(tag))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRelatedPosts(currentPost: Post, limit = 3) {
  if (!currentPost.tags?.length) return [];

  const currentTags = new Set(currentPost.tags.map(slugifyTag));

  return getAllPosts()
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => ({
      post,
      score:
        post.tags?.filter((tag) => currentTags.has(slugifyTag(tag))).length ||
        0,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

export function getPostNeighbors(currentSlug: string) {
  const allPosts = getAllPosts();
  const index = allPosts.findIndex((post) => post.slug === currentSlug);

  return {
    previous: index >= 0 ? allPosts[index + 1] : undefined,
    next: index > 0 ? allPosts[index - 1] : undefined,
  };
}

import { Main, Section, Container, Prose } from "@/components/ds";
import { MDXContent } from "@/components/markdown/mdx-content";
import { Meta } from "@/components/markdown/meta";
import { PostNavigation } from "@/components/posts/PostNavigation";
import { RelatedPosts } from "@/components/posts/RelatedPosts";
import { JsonLdScript } from "@/components/shared/JsonLdScript";

import {
  getAllPosts,
  getPostBySlug,
  getPostNeighbors,
  getReadingTime,
  getRelatedPosts,
} from "@/lib/posts";
import {
  createArticleJsonLd,
  createBreadcrumbJsonLd,
  createMetadata,
} from "@/lib/seo";
import { notFound } from "next/navigation";

import type { Metadata } from "next";
import type { Post } from ".velite";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post: Post) => ({
    slug: post.slug.split("/"),
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug.join("/");
  const post = getPostBySlug(slug);

  if (!post) {
    return createMetadata({
      title: "Não encontrado",
      path: `/${slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    path: post.permalink,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.date,
    authors: post.author ? [post.author] : undefined,
    tags: post.tags,
  });
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const slug = params.slug.join("/");
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);
  const { previous, next } = getPostNeighbors(post.slug);
  const jsonLd = [
    createArticleJsonLd({
      title: post.title,
      description: post.description,
      date: post.date,
      slug: post.slug,
      author: post.author,
      tags: post.tags,
    }),
    createBreadcrumbJsonLd([
      { name: "Início", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: post.permalink },
    ]),
  ];

  return (
    <Main>
      <JsonLdScript data={jsonLd} />
      <Meta
        title={post.title}
        description={post.description}
        date={post.date}
        author={post.author}
        tags={post.tags}
        slug={post.slug}
        readingTime={getReadingTime(post)}
      />
      <Section>
        <Container className="space-y-12">
          <Prose isArticle isSpaced>
            <MDXContent code={post.body} />
          </Prose>
          <RelatedPosts posts={relatedPosts} />
          <PostNavigation previous={previous} next={next} />
        </Container>
      </Section>
    </Main>
  );
}

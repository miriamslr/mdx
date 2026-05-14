import { List } from "@/components/posts/list";
import { Hero } from "@/components/marketing/Hero";
import { FeatureGrid, CategoryGrid } from "@/components/marketing/FeatureGrid";
import { LeadCTA } from "@/components/marketing/LeadCTA";
import { Main } from "@/components/ds";

import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <Main>
      <Hero />
      <FeatureGrid />
      <CategoryGrid />
      <List posts={posts} />
      <LeadCTA />
    </Main>
  );
}

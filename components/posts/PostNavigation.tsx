import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import type { Post } from "#site/content";

interface PostNavigationProps {
  previous?: Post;
  next?: Post;
}

export function PostNavigation({ previous, next }: PostNavigationProps) {
  if (!previous && !next) return null;

  return (
    <nav className="grid gap-4 border-t pt-8 md:grid-cols-2" aria-label="Navegação entre artigos">
      {previous ? (
        <Link
          href={previous.permalink}
          className="group rounded-xl border p-4 transition-colors hover:bg-muted/50"
        >
          <span className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
            <ArrowLeft className="h-4 w-4" />
            Artigo anterior
          </span>
          <span className="font-medium group-hover:text-primary">
            {previous.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.permalink}
          className="group rounded-xl border p-4 text-left transition-colors hover:bg-muted/50 md:text-right"
        >
          <span className="mb-2 flex items-center gap-2 text-sm text-muted-foreground md:justify-end">
            Próximo artigo
            <ArrowRight className="h-4 w-4" />
          </span>
          <span className="font-medium group-hover:text-primary">{next.title}</span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}

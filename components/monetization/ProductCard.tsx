import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  description: string;
  priceLabel?: string;
  href: string;
  badge?: string;
  buttonText?: string;
  className?: string;
}

export function ProductCard({
  name,
  description,
  priceLabel,
  href,
  badge,
  buttonText = "Ver opção",
  className,
}: ProductCardProps) {
  return (
    <article className={cn("flex h-full flex-col rounded-xl border bg-card p-5", className)}>
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
            {priceLabel && (
              <p className="mt-1 text-sm font-medium text-primary">{priceLabel}</p>
            )}
          </div>
          {badge && <Badge variant="secondary">{badge}</Badge>}
        </div>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </div>
      <Button asChild className="mt-5 w-full gap-2">
        <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
          {buttonText}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </Button>
    </article>
  );
}

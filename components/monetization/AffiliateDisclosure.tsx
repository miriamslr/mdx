import { siteConfig } from "@/lib/site.config";
import { cn } from "@/lib/utils";
import { Link2 } from "lucide-react";

interface AffiliateDisclosureProps {
  className?: string;
  variant?: "box" | "inline" | "footer";
}

export const AffiliateDisclosure = ({
  className,
  variant = "box",
}: AffiliateDisclosureProps) => {
  const text = siteConfig.affiliate.disclosure;

  if (variant === "inline") {
    return (
      <p
        className={cn(
          "text-sm text-muted-foreground italic",
          className
        )}
      >
        {text}
      </p>
    );
  }

  if (variant === "footer") {
    return (
      <div
        className={cn(
          "text-xs text-muted-foreground border-t pt-4 mt-8",
          className
        )}
      >
        <p>{text}</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 rounded-lg bg-muted/50 border text-sm",
        className
      )}
    >
      <Link2 className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
      <p className="text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
};

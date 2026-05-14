import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTABoxProps {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
  variant?: "default" | "highlight" | "subtle";
  className?: string;
}

export const CTABox = ({
  title = "Quer aplicar isso no seu negócio?",
  description = "Baixe um checklist gratuito para começar com mais clareza.",
  buttonText = "Baixar checklist",
  href = "#",
  variant = "default",
  className,
}: CTABoxProps) => {
  const variants = {
    default: "bg-primary/5 border-primary/20",
    highlight: "bg-primary text-primary-foreground",
    subtle: "bg-muted border-transparent",
  };

  return (
    <div
      className={cn(
        "my-8 p-6 rounded-xl border",
        variants[variant],
        className
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1">
          <h4 className="font-semibold text-lg">{title}</h4>
          <p
            className={cn(
              "text-sm",
              variant === "highlight"
                ? "text-primary-foreground/80"
                : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        </div>
        <Button
          asChild
          variant={variant === "highlight" ? "secondary" : "default"}
          className="shrink-0 gap-2"
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

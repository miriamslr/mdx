import Link from "next/link";
import { formatDate } from "@/lib/mdx";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Clock } from "lucide-react";

interface PostItemProps {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  className?: string;
  tags?: string[];
  readingTime?: number;
}

const PostDate = ({ date }: { date: string }) => {
  return (
    <time dateTime={date} className="text-xs text-muted-foreground">
      {formatDate(date)}
    </time>
  );
};

const PostTags = ({ tags }: { tags: string[] }) => {
  if (!tags.length) return null;

  return (
    <div className="flex gap-1 flex-wrap">
      {tags.map((tag) => (
        <Badge variant="outline" key={tag}>
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export const Item = ({
  slug,
  title,
  date,
  excerpt,
  className,
  tags,
  readingTime,
}: PostItemProps) => {
  return (
    <Link
      href={`/${slug}`}
      className={cn(
        "group flex flex-col h-full p-5 rounded-xl border bg-card",
        "transition-all hover:shadow-md hover:border-primary/30",
        className
      )}
    >
      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <PostDate date={date} />
          {readingTime && (
            <>
              <span aria-hidden="true">•</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {readingTime} min
              </span>
            </>
          )}
        </div>
        <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {excerpt && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {excerpt}
          </p>
        )}
      </div>

      <div className="mt-4 pt-4 border-t">
        {tags ? (
          <PostTags tags={tags} />
        ) : (
          <span className="text-xs text-muted-foreground">Leia mais →</span>
        )}
      </div>
    </Link>
  );
};

import Image from "next/image";
import { cn } from "@/lib/utils";

export function CardLayoutB({
  imageUrl,
  title,
  description,
  skillTags,
  resultCount,
  variant = "article",
  dateLabel,
  authorAvatarUrl,
  showMoreLabel,
  className,
}: {
  imageUrl: string;
  title: string;
  description: string;
  skillTags: string[];
  resultCount?: number;
  variant?: "event" | "article" | "media";
  dateLabel?: string;
  authorAvatarUrl?: string;
  showMoreLabel?: string;
  className?: string;
}) {
  const showAuthor = Boolean(authorAvatarUrl && variant !== "media");

  return (
    <div className={cn("flex h-full flex-col", className)}>
      <div className="relative h-[200px] overflow-hidden">
        {variant === "media" ? (
          <div className="flex h-full items-center justify-center bg-neutral-black/90">
            <div className="flex size-16 items-center justify-center rounded-full border-4 border-white/80 text-2xl text-white">
              ▶
            </div>
          </div>
        ) : (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="304px"
          />
        )}

        {variant === "event" && dateLabel ? (
          <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 font-heading text-p text-foreground shadow-card">
            {dateLabel}
          </div>
        ) : null}

        {showAuthor ? (
          <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-card">
            <Image
              src={authorAvatarUrl ?? imageUrl}
              alt="author"
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col px-4 pt-4">
        <h3 className="line-clamp-2 font-heading text-h6 text-foreground">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 font-body text-p text-foreground/70">
          {description}
        </p>

        {showMoreLabel ? (
          <button
            type="button"
            className="mt-2 text-left font-body text-p text-primary-blue underline underline-offset-2"
          >
            {showMoreLabel}
          </button>
        ) : null}
      </div>

      <div className="flex items-center justify-between gap-2 border-t border-border px-4 py-3">
        <div className="flex min-w-0 items-center gap-2 overflow-hidden">
          {skillTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-black bg-background px-2 py-1 font-body text-[11px] text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="shrink-0 font-heading text-p text-foreground">
          {resultCount ?? 24}
        </span>
      </div>
    </div>
  );
}

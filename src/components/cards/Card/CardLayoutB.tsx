import Image from "next/image";
import { cn, entityAccentClasses, type EntityType } from "@/lib/utils";

export function CardLayoutB({
  imageUrl,
  title,
  description,
  skillTags,
  resultCount,
  variant = "article",
  entityType,
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
  entityType?: EntityType;
  dateLabel?: string;
  authorAvatarUrl?: string;
  showMoreLabel?: string;
  className?: string;
}) {
  const resolvedEntity = entityType ?? (variant === "event" ? "event" : variant === "media" ? "media" : "article");
  const accent = entityAccentClasses[resolvedEntity];
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
          <div className="absolute left-4 bottom-[-18px] z-10 rounded-full bg-neutral-black px-5 py-3 font-heading text-p text-neutral-white shadow-card">
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

      <div className="flex flex-1 flex-col px-4 pt-8">
        <h3 className="line-clamp-2 font-heading text-h6 text-foreground">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 font-body text-p text-foreground/70">
          {description}
        </p>

        {showMoreLabel ? (
          <span className="mt-2 w-fit font-body text-p text-primary-blue underline underline-offset-2 transition-colors hover:text-primary-lila">
            {showMoreLabel}
          </span>
        ) : null}
      </div>

      <div className="flex items-center justify-between gap-2 border-t border-border px-4 py-3">
        <ul className="flex min-w-0 items-center gap-2 overflow-hidden">
          {skillTags.map((tag) => (
            <li
              key={tag}
              className={cn(
                "shrink-0 rounded-full border-2 bg-background px-3 py-1 font-body text-p",
                accent.tagBorder,
                accent.tagText,
              )}
            >
              {tag}
            </li>
          ))}
        </ul>
        <span className={cn("shrink-0 font-heading text-p", accent.count)}>
          {resultCount ?? 24}..
        </span>
      </div>
    </div>
  );
}

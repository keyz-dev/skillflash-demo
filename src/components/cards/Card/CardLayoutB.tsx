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
  const resolvedEntity = entityType ?? "event";
  const accent = entityAccentClasses[resolvedEntity];
  const showAuthor = Boolean(authorAvatarUrl);

  return (
    <div className={cn("relative flex h-full min-h-0 flex-col", className)}>
      <div className="absolute inset-x-0 bottom-18 top-0">
        <Image
          src={imageUrl}
          alt=""
          fill
          className="object-cover"
          sizes="304px"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-card-fade"
        />
      </div>

      {showAuthor ? (
        <div className="absolute left-4 top-8 z-10 size-14 overflow-hidden rounded-full border-2 border-white bg-white shadow-card">
          <Image
            src={authorAvatarUrl ?? imageUrl}
            alt=""
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
      ) : null}

      {dateLabel ? (
        <div className="absolute left-4 top-28 z-10 rounded-full bg-neutral-black px-4 py-2 font-heading text-p text-neutral-white shadow-card">
          {dateLabel}
        </div>
      ) : null}

      <div
        className={cn(
          "relative z-10 flex min-h-0 flex-1 flex-col px-4",
          variant === "article" ? "pt-38" : "pt-41",
        )}
      >
        <h3 className="line-clamp-2 font-heading text-h6 text-foreground">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 font-body text-p text-foreground">
          {description}
        </p>

        {showMoreLabel ? (
          <span className="mt-2 w-fit font-body text-p text-primary-blue underline underline-offset-2 transition-colors hover:text-primary-lila">
            {showMoreLabel}
          </span>
        ) : null}
      </div>

      <footer className="relative z-10 flex h-18 shrink-0 items-center justify-between gap-2 bg-background px-4">
        <ul className="flex min-w-0 items-center gap-2 overflow-hidden">
          {skillTags.map((tag) => (
            <li
              key={tag}
              className={cn(
                "shrink-0 rounded-full border-2 bg-background px-3 py-1 font-body text-p shadow-card",
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
      </footer>
    </div>
  );
}

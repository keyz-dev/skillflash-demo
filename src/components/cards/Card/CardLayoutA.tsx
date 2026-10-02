import Image from "next/image";
import type { ReactNode } from "react";
import { cn, entityAccentClasses, type EntityType } from "@/lib/utils";

export function CardLayoutA({
  avatarUrl,
  title,
  subtitle,
  skillTags,
  resultCount,
  entityType = "expert",
  className,
}: {
  avatarUrl: string;
  title: string;
  subtitle: ReactNode;
  skillTags: string[];
  resultCount?: number;
  entityType?: EntityType;
  className?: string;
}) {
  const accent = entityAccentClasses[entityType];

  return (
    <div
      className={cn(
        "flex h-full flex-col items-center px-4 pb-4 pt-12",
        className,
      )}
    >
      <div className="relative mb-5 flex size-40 items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-card">
        <Image
          src={avatarUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="128px"
        />
      </div>

      <div className="text-center">
        <h3 className="font-heading text-h6 text-foreground">{title}</h3>
        <p className="mt-2 font-body text-p text-foreground/70">{subtitle}</p>
      </div>

      <div className="mt-auto flex w-full items-center justify-between gap-2 pt-4">
        <ul className="flex min-w-0 flex-1 items-center gap-2">
          {skillTags.map((tag) => (
            <li
              key={tag}
              className={cn(
                "min-w-0 rounded-full border-2 bg-background px-3 py-1 font-body text-p font-bold shadow-skill-tag",
                accent.tagBorder,
                accent.tagText,
              )}
            >
              <span className="block truncate">{tag}</span>
            </li>
          ))}
        </ul>
        <span
          className={cn("shrink-0 font-heading text-p font-bold", accent.count)}
        >
          {resultCount ?? 24}..
        </span>
      </div>
    </div>
  );
}

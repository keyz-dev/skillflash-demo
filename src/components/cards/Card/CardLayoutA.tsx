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
        "flex h-full flex-col items-center px-4 pb-4 pt-6",
        className,
      )}
    >
      <div className="relative mb-5 flex size-32 items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-card">
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

      <div className="mt-auto flex w-full items-center justify-between gap-2 border-t border-border pt-4">
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

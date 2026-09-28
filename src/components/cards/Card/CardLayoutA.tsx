import Image from "next/image";
import { cn } from "@/lib/utils";

export function CardLayoutA({
  avatarUrl,
  title,
  subtitle,
  skillTags,
  resultCount,
  className,
}: {
  avatarUrl: string;
  title: string;
  subtitle: string;
  skillTags: string[];
  resultCount?: number;
  className?: string;
}) {
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

"use client";

import { ChevronRight, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type SearchBarProps = {
  variant: "header" | "hero";
  className?: string;
  solid?: boolean;
};

export function SearchBar({ variant, className, solid = true }: SearchBarProps) {
  const tHero = useTranslations("hero");
  const tSearch = useTranslations("search");
  const isHero = variant === "hero";

  const translucentHeader = variant === "header" && !solid;

  return (
    <form
      action="/search"
      className={cn(
        "flex w-full items-center rounded-full",
        translucentHeader ? "bg-white/20" : "bg-background shadow-card",
        isHero ? "h-14 max-w-xl px-2 md:h-16" : "h-11 max-w-xs px-1.5 md:max-w-sm",
        className,
      )}
    >
      <span
        className={cn(
          "flex size-10 shrink-0 items-center justify-center",
          translucentHeader ? "text-white" : "text-muted",
        )}
      >
        <Search aria-hidden className="size-5" />
      </span>
      <label className="sr-only" htmlFor={`skillflash-search-${variant}`}>
        {tSearch("heading")}
      </label>
      <input
        id={`skillflash-search-${variant}`}
        name="q"
        type="search"
        placeholder={
          isHero ? tHero("searchPlaceholder") : tHero("searchPlaceholderShort")
        }
        className={cn(
          "min-w-0 flex-1 bg-transparent focus:outline-none",
          translucentHeader
            ? "text-white placeholder:text-white/70"
            : "text-foreground placeholder:text-muted",
          isHero ? "font-body text-body-input" : "font-body text-p",
        )}
      />
      <button
        type="submit"
        aria-label={tSearch("submit")}
        className={cn(
          "flex shrink-0 items-center justify-center rounded-[10px] bg-primary-orange text-white transition-opacity hover:opacity-90",
          isHero ? "size-11 md:size-12" : "size-9",
        )}
      >
        <ChevronRight aria-hidden className="size-5" />
      </button>
    </form>
  );
}

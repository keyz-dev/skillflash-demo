"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { FontAwesomeGradientIcon } from "@/components/ui/FontAwesomeGradientIcon";

type SearchBarProps = {
  variant: "header" | "hero";
  className?: string;
  solid?: boolean;
};

export function SearchBar({
  variant,
  className,
  solid = true,
}: SearchBarProps) {
  const tHero = useTranslations("hero");
  const tSearch = useTranslations("search");
  const isHero = variant === "hero";

  const translucentHeader = variant === "header" && !solid;
  const scrolledHeader = variant === "header" && solid;

  return (
    <form
      action="/search"
      className={cn(
        "flex w-full items-center rounded-control shadow-card",
        translucentHeader ? "bg-header-glass" : "bg-background",
        isHero
          ? "h-14 max-w-xl px-2 md:h-16"
          : "h-14 max-w-xs px-1.5 md:max-w-sm",
        className,
      )}
    >
      <span
        className={cn(
          "flex size-10 shrink-0 items-center justify-center",
          translucentHeader ? "text-neutral-white" : "text-muted",
        )}
      >
        {translucentHeader ? (
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            aria-hidden="true"
            className="size-5 text-neutral-white"
          />
        ) : (
          <FontAwesomeGradientIcon
            icon={faMagnifyingGlass}
            gradient
            className="size-5"
          />
        )}
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
            ? "text-neutral-white placeholder:text-neutral-white/70"
            : "text-foreground placeholder:text-muted",
          isHero ? "font-body text-body-input" : "font-body text-p",
        )}
      />
      <button
        type="submit"
        aria-label={tSearch("submit")}
        className={cn(
          "flex shrink-0 items-center justify-center rounded-control transition-colors duration-200",
          scrolledHeader
            ? "bg-secondary-fade text-neutral-white"
            : "bg-transparent hover:bg-primary-orange hover:text-neutral-white focus-visible:bg-primary-orange focus-visible:text-neutral-white",
          scrolledHeader || translucentHeader
            ? "text-neutral-white"
            : "text-primary-orange",
          isHero ? "size-11 md:size-12" : "size-9",
        )}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          aria-hidden="true"
          className="size-5"
        />
      </button>
    </form>
  );
}

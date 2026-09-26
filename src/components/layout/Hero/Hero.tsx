"use client";

import { Filter } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useHeroCollapse } from "@/components/layout/HeroCollapseContext";
import { SearchBar } from "@/components/layout/Header/SearchBar";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  const t = useTranslations("hero");
  const tButtons = useTranslations("buttons");
  const { collapsed, setCollapsed } = useHeroCollapse();
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setCollapsed(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [setCollapsed]);

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden transition-all duration-300",
        collapsed ? "min-h-[12rem] md:min-h-[14rem]" : "min-h-[34rem] md:min-h-[40rem]",
      )}
    >
      <HeroBackground />
      <div
        ref={sentinelRef}
        className="pointer-events-none absolute top-[7.5rem] h-px w-full"
        aria-hidden
      />

      <div
        className={cn(
          "relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center transition-all duration-300 md:px-8",
          collapsed ? "pb-6 pt-16 md:pt-20" : "pb-24 pt-24 md:pt-28",
        )}
      >
        <div
          className={cn(
            "flex w-full flex-col items-center transition-all duration-300",
            collapsed
              ? "pointer-events-none max-h-0 -mt-2 overflow-hidden opacity-0"
              : "max-h-[40rem] opacity-100",
          )}
        >
          <h1 className="font-heading text-h6 text-white md:text-h1">
            {t("headline")}
          </h1>
          <p className="mt-4 max-w-2xl font-body text-p text-white md:text-body-lg">
            {t("subheadline")}
          </p>
        </div>

        <button
          type="button"
          className={cn(
            "font-body order-1 transition-all duration-300",
            collapsed
              ? "mb-3 rounded-full bg-background px-4 py-2 text-p text-primary-orange shadow-card"
              : "order-last mt-6 mb-0 flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-p text-white md:mt-8",
          )}
        >
          <Filter aria-hidden className="size-4" />
          {tButtons("configureSearch")}
        </button>

        <SearchBar
          variant="hero"
          className={cn(
            "order-2 w-full transition-all duration-300",
            collapsed ? "mt-0" : "mt-8",
          )}
        />
      </div>
    </section>
  );
}

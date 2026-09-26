"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { useHeaderScroll } from "@/components/layout/HeaderScrollContext";
import { SearchBar } from "@/components/layout/Header/SearchBar";
import { StickyFilterBar } from "@/components/layout/StickyFilterBar";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  const t = useTranslations("hero");
  const { setScrolled } = useHeaderScroll();
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [setScrolled]);

  return (
    <section className="relative isolate z-30 min-h-[34rem] md:min-h-[40rem]">
      <HeroBackground />
      <div
        ref={sentinelRef}
        className="pointer-events-none absolute top-[7.5rem] h-px w-full"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex flex-col items-center px-4 pb-24 pt-24 text-center md:px-8 md:pt-28">
        <div className="flex w-full flex-col items-center">
          <h1 className="font-heading text-h6 text-neutral-white md:text-h1">
            {t("headline")}
          </h1>
          <p className="mt-4 font-body text-p text-neutral-white md:text-body-lg">
            {t("subheadline")}
          </p>
        </div>

        <SearchBar variant="hero" className="mt-8 w-full" />
        <StickyFilterBar />
      </div>
    </section>
  );
}

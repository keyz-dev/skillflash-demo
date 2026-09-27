"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useHeaderScroll } from "@/components/layout/HeaderScrollContext";
import { FontAwesomeGradientIcon } from "@/components/ui/FontAwesomeGradientIcon";

export function StickyFilterBar() {
  const t = useTranslations("buttons");
  const { scrolled, headerHeight } = useHeaderScroll();
  const sentinelRef = useRef<HTMLSpanElement>(null);
  const [pinned, setPinned] = useState(false);
  const pinGap = 24;

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || headerHeight <= 0) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const topBoundary = entry.rootBounds?.top ?? headerHeight + pinGap;
        setPinned(
          !entry.isIntersecting && entry.boundingClientRect.top <= topBoundary,
        );
      },
      {
        rootMargin: `-${Math.round(headerHeight + pinGap)}px 0px 0px 0px`,
        threshold: 0,
      },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [headerHeight, pinGap]);

  return (
    <div className="relative mt-6 flex min-h-10 justify-center px-4">
      <span
        ref={sentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 h-px w-px"
      />
      <button
        type="button"
        style={pinned ? { top: headerHeight + pinGap } : undefined}
        className={cn(
          "flex h-10 items-center gap-2 rounded-control px-4 py-2 font-heading text-p shadow-card transition-colors duration-200",
          pinned && "fixed left-1/2 z-40 -translate-x-1/2",
          scrolled
            ? "bg-neutral-white text-foreground"
            : "bg-header-glass/10 text-neutral-white",
        )}
      >
        <span
          className={cn(
            "text-body-lg",
            scrolled ? "text-gradient-fade" : undefined,
          )}
        >
          {t("configureSearch")}
        </span>
        {scrolled ? (
          <FontAwesomeGradientIcon
            icon={faFilter}
            gradient
            className="size-4"
          />
        ) : (
          <FontAwesomeIcon
            icon={faFilter}
            aria-hidden="true"
            className="size-4"
          />
        )}
      </button>
    </div>
  );
}

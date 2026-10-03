"use client";

import { useEffect, useRef } from "react";
import { useHeaderScroll } from "@/components/layout/HeaderScrollContext";

export function ExpertPageHeroObserver() {
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
    <div
      ref={sentinelRef}
      className="pointer-events-none absolute top-[7rem] h-px w-full"
      aria-hidden="true"
    />
  );
}

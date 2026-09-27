"use client";

import { useHeaderScroll } from "@/components/layout/HeaderScrollContext";
import { LanguageSwitcher } from "./preferences/LanguageSwitcher";
import { ThemeToggle } from "./preferences/ThemeToggle";

export function HeaderPreferences() {
  const { scrolled } = useHeaderScroll();

  return (
    <div className="flex shrink-0 items-center gap-3">
      <LanguageSwitcher isScrolled={scrolled} />
      <ThemeToggle isScrolled={scrolled} />
    </div>
  );
}

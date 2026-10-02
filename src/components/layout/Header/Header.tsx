"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useHeaderScroll } from "@/components/layout/HeaderScrollContext";
import { AccountDropdown } from "./AccountDropdown";
import { HeaderPreferences } from "./HeaderPreferences";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { SearchBar } from "./SearchBar";

export function Header() {
  const { scrolled, setHeaderHeight } = useHeaderScroll();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) {
      return;
    }

    const observer = new ResizeObserver(() => {
      setHeaderHeight(header.getBoundingClientRect().height);
    });
    observer.observe(header);
    return () => observer.disconnect();
  }, [setHeaderHeight]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 z-50 w-full px-3 transition-all duration-300 md:px-4 md:py-2",
        scrolled ? "bg-background shadow-card" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center gap-2 py-4">
        <Logo />
        <NavLinks />
        <div className="ml-auto flex min-w-0 items-center gap-2 md:gap-3">
          <SearchBar
            variant="header"
            solid={scrolled}
            className="transition-all duration-300"
          />

          <div className="hidden md:block">
            <HeaderPreferences />
          </div>
          <AccountDropdown />
        </div>
      </div>
    </header>
  );
}

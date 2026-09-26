"use client";

import { cn } from "@/lib/utils";
import { useHeroCollapse } from "@/components/layout/HeroCollapseContext";
import { AccountDropdown } from "./AccountDropdown";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { SearchBar } from "./SearchBar";

export function Header() {
  const { collapsed } = useHeroCollapse();

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        collapsed ? "bg-background shadow-card" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-4 py-3 md:px-8">
        <Logo />
        <NavLinks />
        <div className="ml-auto flex min-w-0 items-center gap-2 md:gap-3">
          <SearchBar
            variant="header"
            solid={collapsed}
            className="transition-all duration-300"
          />
          <AccountDropdown />
        </div>
      </div>
    </header>
  );
}

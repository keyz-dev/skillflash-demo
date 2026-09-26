"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useHeroCollapse } from "@/components/layout/HeroCollapseContext";

export function NavLinks() {
  const t = useTranslations("nav");
  const { collapsed } = useHeroCollapse();

  return (
    <nav className="hidden items-center gap-8 md:flex" aria-label={t("primary")}>
      <Link
        href="#"
        className={cn(
          "font-body text-p transition-colors duration-300",
          collapsed ? "text-primary-orange" : "text-white",
        )}
      >
        {t("becomeExpert")}
      </Link>
      <Link
        href="#"
        className={cn(
          "font-body text-p transition-colors duration-300",
          collapsed ? "text-primary-orange" : "text-white",
        )}
      >
        {t("enterprise")}
      </Link>
    </nav>
  );
}

"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useHeroCollapse } from "@/components/layout/HeroCollapseContext";

export function Logo() {
  const t = useTranslations("nav");
  const { collapsed } = useHeroCollapse();

  return (
    <Link
      href="/"
      aria-label={t("home")}
      className={cn(
        "hidden font-heading text-xl font-bold tracking-tight transition-colors duration-300 md:inline",
        collapsed ? "text-primary-lila" : "text-white",
      )}
    >
      Skillflash
    </Link>
  );
}

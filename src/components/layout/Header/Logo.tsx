"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";
import { useHeaderScroll } from "@/components/layout/HeaderScrollContext";
import { FontAwesomeGradientIcon } from "@/components/ui/FontAwesomeGradientIcon";

export function Logo() {
  const t = useTranslations("nav");
  const { scrolled } = useHeaderScroll();

  return (
    <Link
      href="/"
      aria-label={t("home")}
      className={cn(
        "hidden items-center gap-2 font-heading text-[32px] font-bold tracking-tight transition-colors duration-300 md:inline-flex mr-5",
        scrolled ? "text-foreground" : "text-neutral-white",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex size-8 items-center justify-center rounded-control",
          scrolled ? "bg-secondary-fade" : "bg-neutral-white",
        )}
      >
        <FontAwesomeGradientIcon
          icon={faBolt}
          gradient={!scrolled}
          className={cn("size-5", scrolled && "text-neutral-white")}
        />
      </span>
      <span>Skillflash</span>
    </Link>
  );
}

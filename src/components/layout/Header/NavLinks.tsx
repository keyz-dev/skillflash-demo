"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";
import { useHeaderScroll } from "@/components/layout/HeaderScrollContext";
import { FontAwesomeGradientIcon } from "@/components/ui/FontAwesomeGradientIcon";

export function NavLinks() {
  const t = useTranslations("nav");
  const { scrolled } = useHeaderScroll();

  return (
    <nav
      className="hidden items-center gap-12.5 md:flex"
      aria-label={t("primary")}
    >
      <NavItem href="/experts" label={t("becomeExpert")} scrolled={scrolled} />
      <NavItem href="/enterprise" label={t("enterprise")} scrolled={scrolled} />
    </nav>
  );
}

function NavItem({
  href,
  label,
  scrolled,
}: {
  href: string;
  label: string;
  scrolled: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 font-heading text-h1 text-neutral-white  transition-colors duration-200",
        scrolled && "text-gradient-fade",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex w-0 shrink-0 -translate-x-1 items-center justify-center overflow-hidden opacity-0 transition-all duration-200 group-hover:w-3 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:w-3 group-focus-visible:translate-x-0 group-focus-visible:opacity-100",
        )}
      >
        {scrolled ? (
          <FontAwesomeGradientIcon
            icon={faChevronRight}
            gradient
            className="size-3"
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronRight}
            aria-hidden="true"
            className="size-3"
          />
        )}
      </span>
      <span className="text-body-lg">{label}</span>
    </Link>
  );
}

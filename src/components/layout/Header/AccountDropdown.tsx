"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as faUserRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faUser as faUserSolid,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";
import { useHeaderScroll } from "@/components/layout/HeaderScrollContext";
import { FontAwesomeGradientIcon } from "@/components/ui/FontAwesomeGradientIcon";
import { LanguageSwitcher } from "./preferences/LanguageSwitcher";
import { ThemeToggle } from "./preferences/ThemeToggle";

export function AccountDropdown() {
  const t = useTranslations("account");
  const tNav = useTranslations("nav");
  const { scrolled } = useHeaderScroll();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const iconButtonClass = cn(
    "flex h-14 items-center justify-center gap-4 rounded-control px-3 shadow-card transition-colors duration-300",
    scrolled ? "bg-surface" : "bg-header-glass",
    "text-neutral-white",
  );
  const menuItemClass =
    "block w-full rounded-control px-2 py-2 font-body text-p text-secondary-pink transition-colors duration-200 hover:bg-surface hover:text-primary-orange focus-visible:bg-surface focus-visible:text-primary-orange focus-visible:outline-2 focus-visible:outline-primary-blue";

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={iconButtonClass}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls="account-menu"
        aria-label={open ? tNav("closeMenu") : t("menu")}
        onClick={() => setOpen((current) => !current)}
      >
        {scrolled ? (
          <FontAwesomeGradientIcon icon={faBars} gradient className="size-5" />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            aria-hidden="true"
            className="size-5"
          />
        )}
        {scrolled ? (
          <FontAwesomeGradientIcon
            icon={open ? faUserSolid : faUserRegular}
            gradient
            className="size-5"
          />
        ) : (
          <FontAwesomeIcon
            icon={open ? faUserSolid : faUserRegular}
            aria-hidden="true"
            className="size-5"
          />
        )}
      </button>

      <div
        id="account-menu"
        role="menu"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "absolute right-0 z-50 mt-3 w-56 rounded-control bg-background p-4 shadow-card transition-[opacity,transform] duration-200",
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-1 scale-95 opacity-0",
        )}
      >
        <div className="mb-3 flex items-start justify-between">
          <Link
            href="#"
            role="menuitem"
            className="rounded-control px-2 py-1 font-heading text-h6 text-primary-orange transition-colors duration-200 hover:bg-surface hover:text-secondary-pink focus-visible:bg-surface focus-visible:outline-2 focus-visible:outline-primary-blue"
            onClick={() => setOpen(false)}
          >
            {t("register")}
          </Link>
          <button
            type="button"
            aria-label={t("close")}
            className="rounded-control p-2 text-primary-orange transition-colors duration-200 hover:bg-surface hover:text-secondary-pink focus-visible:bg-surface focus-visible:outline-2 focus-visible:outline-primary-blue"
            onClick={() => setOpen(false)}
          >
            <FontAwesomeIcon
              icon={faXmark}
              aria-hidden="true"
              className="size-5"
            />
          </button>
        </div>

        <Link
          href="#"
          role="menuitem"
          className={menuItemClass}
          onClick={() => setOpen(false)}
        >
          {t("login")}
        </Link>

        <div className="my-3 h-px bg-primary-orange" />

        <Link
          href="#"
          role="menuitem"
          className={menuItemClass}
          onClick={() => setOpen(false)}
        >
          {tNav("becomeExpert")}
        </Link>
        <Link
          href="#"
          role="menuitem"
          className={menuItemClass}
          onClick={() => setOpen(false)}
        >
          {tNav("enterprise")}
        </Link>
        <Link
          href="#"
          role="menuitem"
          className={menuItemClass}
          onClick={() => setOpen(false)}
        >
          {t("help")}
        </Link>

        <div className="my-3 h-px bg-primary-orange md:hidden" />
        <div className="md:hidden">
          <p className="mb-2 px-2 font-body text-sm font-semibold text-muted">
            {t("preferences")}
          </p>
          <div className="flex items-center gap-3">
            <LanguageSwitcher isScrolled />
            <ThemeToggle isScrolled />
          </div>
        </div>
      </div>
    </div>
  );
}

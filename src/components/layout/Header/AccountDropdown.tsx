"use client";

import { Menu, Moon, Sun, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { setLocale, type Locale } from "@/i18n/set-locale";
import { useTheme } from "@/lib/theme/useTheme";
import { cn } from "@/lib/utils";
import { useHeroCollapse } from "@/components/layout/HeroCollapseContext";

export function AccountDropdown() {
  const t = useTranslations("account");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { collapsed } = useHeroCollapse();
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

  async function switchLocale(next: Locale) {
    await setLocale(next);
    router.refresh();
  }

  const iconButtonClass = cn(
    "flex size-10 items-center justify-center rounded-xl transition-colors duration-300",
    collapsed
      ? "bg-surface text-foreground"
      : "bg-white/25 text-white",
  );

  return (
    <div ref={rootRef} className="relative">
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          className={iconButtonClass}
          aria-expanded={open}
          aria-haspopup="menu"
          aria-label={open ? tNav("closeMenu") : tNav("openMenu")}
          onClick={() => setOpen((current) => !current)}
        >
          <Menu aria-hidden className="size-5" />
        </button>
        <button
          type="button"
          className={iconButtonClass}
          aria-expanded={open}
          aria-haspopup="menu"
          aria-label={t("menu")}
          onClick={() => setOpen((current) => !current)}
        >
          <User aria-hidden className="size-5" />
        </button>
      </div>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-3 w-56 rounded-card bg-background p-4 shadow-card"
        >
          <div className="mb-3 flex items-start justify-between">
            <Link
              href="#"
              role="menuitem"
              className="font-heading text-h6 text-primary-orange"
              onClick={() => setOpen(false)}
            >
              {t("register")}
            </Link>
            <button
              type="button"
              aria-label={t("close")}
              className="text-primary-orange"
              onClick={() => setOpen(false)}
            >
              <X aria-hidden className="size-5" />
            </button>
          </div>

          <Link
            href="#"
            role="menuitem"
            className="block py-1 font-body text-p text-secondary-pink"
            onClick={() => setOpen(false)}
          >
            {t("login")}
          </Link>

          <div className="my-3 h-px bg-primary-orange" />

          <Link
            href="#"
            role="menuitem"
            className="block py-1 font-body text-p text-secondary-pink"
            onClick={() => setOpen(false)}
          >
            {tNav("becomeExpert")}
          </Link>
          <Link
            href="#"
            role="menuitem"
            className="block py-1 font-body text-p text-secondary-pink"
            onClick={() => setOpen(false)}
          >
            {tNav("enterprise")}
          </Link>
          <Link
            href="#"
            role="menuitem"
            className="block py-1 font-body text-p text-secondary-pink"
            onClick={() => setOpen(false)}
          >
            {t("help")}
          </Link>

          <div className="my-3 h-px bg-border" />

          <p className="mb-2 font-body text-p text-muted">{t("language")}</p>
          <div className="mb-4 flex gap-2">
            <button
              type="button"
              aria-label={t("languageDe")}
              className={cn(
                "rounded-full px-3 py-1 font-body text-p",
                locale === "de"
                  ? "bg-primary-lila text-white"
                  : "bg-surface text-foreground",
              )}
              onClick={() => switchLocale("de")}
            >
              DE
            </button>
            <button
              type="button"
              aria-label={t("languageEn")}
              className={cn(
                "rounded-full px-3 py-1 font-body text-p",
                locale === "en"
                  ? "bg-primary-lila text-white"
                  : "bg-surface text-foreground",
              )}
              onClick={() => switchLocale("en")}
            >
              EN
            </button>
          </div>

          <p className="mb-2 font-body text-p text-muted">{t("theme")}</p>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t("themeLight") : t("themeDark")}
            className="flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 font-body text-p text-foreground"
          >
            {theme === "dark" ? (
              <Sun aria-hidden className="size-4" />
            ) : (
              <Moon aria-hidden className="size-4" />
            )}
            {theme === "dark" ? t("themeLight") : t("themeDark")}
          </button>
        </div>
      ) : null}
    </div>
  );
}

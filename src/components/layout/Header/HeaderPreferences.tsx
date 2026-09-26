"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { setLocale, type Locale } from "@/i18n/set-locale";
import { useTheme } from "@/lib/theme/useTheme";
import { cn } from "@/lib/utils";
import { useHeaderScroll } from "@/components/layout/HeaderScrollContext";
import { FontAwesomeGradientIcon } from "@/components/ui/FontAwesomeGradientIcon";

export function HeaderPreferences() {
  const t = useTranslations("account");
  const locale = useLocale();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { scrolled } = useHeaderScroll();

  async function switchLocale(next: Locale) {
    await setLocale(next);
    router.refresh();
  }

  const controlClass = cn(
    "flex h-14 items-center justify-center rounded-control shadow-card transition-colors duration-300",
    "text-neutral-white",
    scrolled && "bg-surface text-foreground",
    !scrolled && "bg-header-glass",
  );

  return (
    <div className="flex shrink-0 items-center gap-3">
      <div
        className={cn(
          "flex h-14 items-center gap-0.5 rounded-control p-1 shadow-card",
          scrolled ? "bg-surface" : "bg-header-glass",
        )}
      >
        <button
          type="button"
          aria-label={t("languageDe")}
          aria-pressed={locale === "de"}
          className={cn(
            "rounded-control px-2 py-1 font-body text-xs transition-colors",
            locale === "de"
              ? "bg-primary-lila text-neutral-white"
              : scrolled
                ? "text-foreground"
                : "text-neutral-white",
          )}
          onClick={() => void switchLocale("de")}
        >
          <span className={scrolled ? "text-gradient-fade" : undefined}>
            DE
          </span>
        </button>
        <button
          type="button"
          aria-label={t("languageEn")}
          aria-pressed={locale === "en"}
          className={cn(
            "rounded-control px-2 py-1 font-body text-xs transition-colors",
            locale === "en"
              ? "bg-primary-lila text-neutral-white"
              : scrolled
                ? "text-foreground"
                : "text-neutral-white",
          )}
          onClick={() => void switchLocale("en")}
        >
          <span className={scrolled ? "text-gradient-fade" : undefined}>
            EN
          </span>
        </button>
      </div>
      <button
        type="button"
        aria-label={theme === "dark" ? t("themeLight") : t("themeDark")}
        aria-pressed={theme === "dark"}
        title={theme === "dark" ? t("themeLight") : t("themeDark")}
        className={cn(controlClass, "size-14")}
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          scrolled ? (
            <FontAwesomeGradientIcon icon={faSun} gradient className="size-4" />
          ) : (
            <FontAwesomeIcon
              icon={faSun}
              aria-hidden="true"
              className="size-4"
            />
          )
        ) : scrolled ? (
          <FontAwesomeGradientIcon icon={faMoon} gradient className="size-4" />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            aria-hidden="true"
            className="size-4"
          />
        )}
      </button>
    </div>
  );
}

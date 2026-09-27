"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { setLocale, type Locale } from "@/i18n/set-locale";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  isScrolled: boolean;
};

export function LanguageSwitcher({ isScrolled }: LanguageSwitcherProps) {
  const t = useTranslations("account");
  const locale = useLocale();
  const router = useRouter();

  async function switchLocale(next: Locale) {
    await setLocale(next);
    router.refresh();
  }

  return (
    <div
      className={cn(
        "flex h-14 items-center gap-0.5 rounded-control p-1 shadow-card",
        isScrolled ? "bg-surface" : "bg-header-glass",
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
            : isScrolled
              ? "text-foreground"
              : "text-neutral-white",
        )}
        onClick={() => void switchLocale("de")}
      >
        <span
          className={cn(
            isScrolled
              ? locale === "de"
                ? "text-background"
                : "text-gradient-fade"
              : undefined,
          )}
        >
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
            : isScrolled
              ? "text-foreground"
              : "text-neutral-white",
        )}
        onClick={() => void switchLocale("en")}
      >
        <span
          className={
            isScrolled
              ? locale === "en"
                ? "text-background"
                : "text-gradient-fade"
              : undefined
          }
        >
          EN
        </span>
      </button>
    </div>
  );
}

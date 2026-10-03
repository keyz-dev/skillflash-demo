"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { setLocale, type Locale } from "@/i18n/set-locale";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  isScrolled: boolean;
};

const LOCALE_OPTIONS: Array<{
  locale: Locale;
  label: "DE" | "EN";
  labelKey: "languageDe" | "languageEn";
}> = [
  { locale: "de", label: "DE", labelKey: "languageDe" },
  { locale: "en", label: "EN", labelKey: "languageEn" },
];

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
      {LOCALE_OPTIONS.map((option) => {
        const isActive = locale === option.locale;
        return (
          <button
            key={option.locale}
            type="button"
            aria-label={t(option.labelKey)}
            aria-pressed={isActive}
            className={cn(
              "cursor-pointer flex size-9 shrink-0 items-center justify-center rounded-control font-body text-xs font-semibold transition-colors",
              isActive
                ? "bg-secondary-fade text-neutral-white"
                : isScrolled
                  ? "text-foreground"
                  : "text-neutral-white",
            )}
            onClick={() => void switchLocale(option.locale)}
          >
            <span
              className={cn(
                isScrolled
                  ? isActive
                    ? "text-background"
                    : "text-gradient-fade"
                  : undefined,
              )}
            >
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

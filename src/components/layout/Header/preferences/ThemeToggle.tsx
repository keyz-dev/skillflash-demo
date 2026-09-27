"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import { useTheme } from "@/lib/theme/useTheme";
import { cn } from "@/lib/utils";
import { FontAwesomeGradientIcon } from "@/components/ui/FontAwesomeGradientIcon";

type ThemeToggleProps = {
  isScrolled: boolean;
};

export function ThemeToggle({ isScrolled }: ThemeToggleProps) {
  const t = useTranslations("account");
  const { theme, toggleTheme } = useTheme();
  const themeLabel = theme === "dark" ? t("themeLight") : t("themeDark");
  const icon = theme === "dark" ? faSun : faMoon;

  return (
    <button
      type="button"
      aria-label={themeLabel}
      aria-pressed={theme === "dark"}
      title={themeLabel}
      className={cn(
        "flex size-14 items-center justify-center rounded-control shadow-card transition-colors duration-300",
        "text-neutral-white",
        isScrolled && "bg-surface text-foreground",
        !isScrolled && "bg-header-glass",
      )}
      onClick={toggleTheme}
    >
      {isScrolled ? (
        <FontAwesomeGradientIcon icon={icon} gradient className="size-4" />
      ) : (
        <FontAwesomeIcon icon={icon} aria-hidden="true" className="size-4" />
      )}
    </button>
  );
}

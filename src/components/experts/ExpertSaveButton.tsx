"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { BookmarkIcon } from "@/components/ui/icons";

export function ExpertSaveButton() {
  const t = useTranslations("categories.actions");
  const [saved, setSaved] = useState(false);

  return (
    <button
      type="button"
      aria-label={saved ? t("unsave") : t("save")}
      aria-pressed={saved}
      onClick={() => setSaved((value) => !value)}
      className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-full border-2 border-white bg-background text-secondary-pink shadow-card transition-colors hover:bg-background/90"
    >
      {saved ? (
        <FontAwesomeIcon
          icon={faBookmark}
          aria-hidden="true"
          className="size-[22px] text-secondary-pink"
        />
      ) : (
        <BookmarkIcon size={22} className="text-secondary-pink" />
      )}
    </button>
  );
}

"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { BookmarkIcon } from "@/components/ui/icons";

export function EventDetailSaveButton() {
  const t = useTranslations("categories.actions");
  const [saved, setSaved] = useState(false);

  return (
    <button
      type="button"
      aria-label={saved ? t("unsave") : t("save")}
      aria-pressed={saved}
      onClick={() => setSaved((value) => !value)}
      className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-neutral-white text-secondary-pink shadow-card transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-primary-blue"
    >
      {saved ? (
        <FontAwesomeIcon
          icon={faBookmark}
          aria-hidden="true"
          className="size-5 text-secondary-pink"
        />
      ) : (
        <BookmarkIcon size={22} className="text-secondary-pink" />
      )}
    </button>
  );
}

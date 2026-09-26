"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark as faBookmarkRegular,
  faCircle as faCircleRegular,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBookmark as faBookmarkSolid,
  faCircle as faCircleSolid,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";

const actionButtonBaseClass =
  "flex size-9 cursor-pointer items-center justify-center rounded-full bg-neutral-white shadow-card transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-primary-blue";

export function SkillCardActions() {
  const t = useTranslations("categories.actions");
  const [selected, setSelected] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div
      role="group"
      aria-label={t("share")}
      className="absolute right-3 top-3 z-20 flex flex-col gap-2 opacity-100 transition-[opacity,transform] duration-200 md:pointer-events-none md:translate-x-1 md:opacity-0 md:group-hover/card:pointer-events-auto md:group-hover/card:translate-x-0 md:group-hover/card:opacity-100 md:group-focus-within/card:pointer-events-auto md:group-focus-within/card:translate-x-0 md:group-focus-within/card:opacity-100"
    >
      <button
        type="button"
        aria-label={selected ? t("remove") : t("add")}
        aria-pressed={selected}
        className={actionButtonBaseClass}
        onClick={() => setSelected((value) => !value)}
      >
        <span
          className={cn(
            "relative inline-flex size-8 items-center justify-center",
            selected ? "text-neutral-white" : "text-primary-lila",
          )}
        >
          <FontAwesomeIcon
            icon={selected ? faCircleSolid : faCircleRegular}
            aria-hidden="true"
            className={cn(
              "size-8",
              selected ? "text-primary-lila" : "text-primary-lila",
            )}
          />
          <span
            aria-hidden="true"
            className={cn(
              "absolute flex size-2 items-center justify-center",
              selected ? "text-neutral-white" : "text-primary-lila",
            )}
          >
            <span className="absolute h-0.5 w-full rounded-full bg-current" />
            <span className="absolute h-full w-0.5 rounded-full bg-current" />
          </span>
        </span>
      </button>
      <button
        type="button"
        aria-label={t("share")}
        title={t("share")}
        className={cn(actionButtonBaseClass, "text-primary-lila")}
        onClick={() => console.info("Share action is not implemented yet.")}
      >
        <FontAwesomeIcon
          icon={faShareNodes}
          aria-hidden="true"
          className="size-4"
        />
      </button>
      <button
        type="button"
        aria-label={saved ? t("unsave") : t("save")}
        aria-pressed={saved}
        className={cn(
          actionButtonBaseClass,
          saved
            ? "bg-secondary-pink text-neutral-white"
            : "text-secondary-pink",
        )}
        onClick={() => setSaved((value) => !value)}
      >
        <FontAwesomeIcon
          icon={saved ? faBookmarkSolid : faBookmarkRegular}
          aria-hidden="true"
          className="size-4"
        />
      </button>
    </div>
  );
}

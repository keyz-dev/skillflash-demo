"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as faCircleRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faBookmark,
  faCircle as faCircleSolid,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BookmarkIcon } from "@/components/ui/icons";

const actionButtonBaseClass =
  "flex size-9 cursor-pointer items-center justify-center rounded-full shadow-card transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-primary-blue";

export function CardActions({ groupClassName }: { groupClassName?: string }) {
  const t = useTranslations("categories.actions");
  const [selected, setSelected] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleActionClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    action: "select" | "share" | "save",
  ) => {
    event.preventDefault();
    event.stopPropagation();

    if (action === "select") {
      setSelected((value) => !value);
      return;
    }

    if (action === "share") {
      console.info("Share action is not implemented yet.");
      return;
    }

    setSaved((value) => !value);
  };

  return (
    <div
      role="group"
      aria-label={t("share")}
      className={cn(
        "absolute right-3 top-3 z-20 flex flex-col gap-2 opacity-100 transition-[opacity,transform] duration-200 md:pointer-events-none md:translate-x-1 md:opacity-0 md:group-hover:pointer-events-auto md:group-hover:translate-x-0 md:group-hover:opacity-100 md:group-focus-within:pointer-events-auto md:group-focus-within:translate-x-0 md:group-focus-within:opacity-100",
        groupClassName,
      )}
    >
      <button
        type="button"
        aria-label={selected ? t("remove") : t("add")}
        aria-pressed={selected}
        className={cn(actionButtonBaseClass, "bg-neutral-white")}
        onClick={(event) => handleActionClick(event, "select")}
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
        className={cn(
          actionButtonBaseClass,
          "bg-neutral-white text-primary-lila",
        )}
        onClick={(event) => handleActionClick(event, "share")}
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
        className={cn(actionButtonBaseClass, "bg-neutral-white ")}
        onClick={(event) => handleActionClick(event, "save")}
      >
        {saved ? (
          <FontAwesomeIcon
            icon={faBookmark}
            aria-hidden="true"
            className="size-6 text-secondary-pink"
          />
        ) : (
          <BookmarkIcon size={24} className="text-secondary-pink" />
        )}
      </button>
    </div>
  );
}

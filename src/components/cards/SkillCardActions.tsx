"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faBookmark as faBookmarkSolid,
  faCheck,
  faPlus,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";

const actionButtonClass =
  "flex size-9 items-center justify-center rounded-full bg-neutral-white text-primary-lila shadow-card transition-[background-color,color,transform] duration-200 hover:scale-105 hover:bg-primary-lila hover:text-neutral-white focus-visible:outline-2 focus-visible:outline-primary-blue";

export function SkillCardActions({ href }: { href: string }) {
  const t = useTranslations("categories.actions");
  const [selected, setSelected] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  async function shareCard() {
    const url = new URL(href, window.location.origin).toString();

    try {
      if (navigator.share) {
        await navigator.share({ url });
        return;
      }

      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

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
        className={cn(
          actionButtonClass,
          selected && "bg-primary-lila text-neutral-white",
        )}
        onClick={() => setSelected((value) => !value)}
      >
        <FontAwesomeIcon
          icon={selected ? faCheck : faPlus}
          aria-hidden="true"
          className="size-4"
        />
      </button>
      <button
        type="button"
        aria-label={copied ? t("copied") : t("share")}
        title={copied ? t("copied") : t("share")}
        className={actionButtonClass}
        onClick={() => void shareCard()}
      >
        <FontAwesomeIcon
          icon={copied ? faCheck : faShareNodes}
          aria-hidden="true"
          className="size-4"
        />
      </button>
      <button
        type="button"
        aria-label={saved ? t("unsave") : t("save")}
        aria-pressed={saved}
        className={cn(
          actionButtonClass,
          saved && "bg-primary-lila text-neutral-white",
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

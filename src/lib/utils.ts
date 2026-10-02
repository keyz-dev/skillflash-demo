import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type EntityType = "expert" | "team" | "event" | "article" | "media";

export interface EntityAccentClasses {
  tagBorder: string;
  tagText: string;
  count: string;
}

export const entityAccentClasses: Record<EntityType, EntityAccentClasses> = {
  expert: {
    tagBorder: "border-primary-blue",
    tagText: "text-primary-blue",
    count: "text-primary-blue",
  },
  team: {
    tagBorder: "border-primary-pink",
    tagText: "text-primary-pink",
    count: "text-primary-pink",
  },
  event: {
    tagBorder: "border-primary-lila",
    tagText: "text-primary-lila",
    count: "text-primary-lila",
  },
  article: {
    tagBorder: "border-primary-orange",
    tagText: "text-primary-orange",
    count: "text-primary-orange",
  },
  media: {
    tagBorder: "border-neutral-black",
    tagText: "text-neutral-black",
    count: "text-neutral-black",
  },
};

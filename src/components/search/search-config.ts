export const resultTypeOptions = [
  { type: "expert", label: "Expert:innen", color: "bg-primary-blue" },
  { type: "event", label: "Events", color: "bg-primary-lila" },
  { type: "article", label: "Artikel", color: "bg-primary-orange" },
  { type: "media", label: "Audio/Video", color: "bg-secondary-pink" },
  { type: "team", label: "Teams", color: "bg-pink-500" },
] as const;

export type SearchResultType = (typeof resultTypeOptions)[number]["type"];

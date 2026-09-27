import { cn } from "@/lib/utils";

const typeOptions = [
  { type: "expert", label: "Expert:innen", color: "bg-primary-blue" },
  { type: "event", label: "Events", color: "bg-primary-lila" },
  { type: "article", label: "Artikel", color: "bg-primary-orange" },
  { type: "media", label: "Audio/Video", color: "bg-secondary-pink" },
  { type: "team", label: "Teams", color: "bg-pink-500" },
] as const;

export function SearchTypeFilters({
  activeTypes,
  onToggleType,
}: {
  activeTypes: (typeof typeOptions)[number]["type"][];
  onToggleType: (type: (typeof typeOptions)[number]["type"]) => void;
}) {
  return (
    <div className="-mt-2 flex flex-wrap gap-3 px-1 py-0">
      {typeOptions.map(({ type, label, color }) => {
        const isActive = activeTypes.includes(type);

        return (
          <button
            key={type}
            type="button"
            onClick={() => onToggleType(type)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-card transition-all duration-200",
              color,
              !isActive && "opacity-60 grayscale-[0.2]",
            )}
          >
            {label} {isActive ? "×" : null}
          </button>
        );
      })}
    </div>
  );
}

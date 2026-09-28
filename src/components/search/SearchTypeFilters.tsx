import { cn } from "@/lib/utils";

function ClosePillIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
    <div className="relative z-10 w-full">
      <div className="flex flex-wrap items-center justify-center gap-3 px-1 py-0 md:justify-start">
        {typeOptions.map(({ type, label, color }) => {
          const isActive = activeTypes.includes(type);

          return (
            <button
              key={type}
              type="button"
              aria-pressed={isActive}
              onClick={() => onToggleType(type)}
              className={cn(
                "flex cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-card transition-all duration-200 ease-out",
                "hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] active:transition-transform active:duration-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                color,
                isActive
                  ? "opacity-100 shadow-[0_8px_18px_rgba(0,0,0,0.18)]"
                  : "opacity-60 grayscale-[0.2] hover:opacity-80",
              )}
            >
              <span>{label}</span>
              {isActive ? <ClosePillIcon /> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

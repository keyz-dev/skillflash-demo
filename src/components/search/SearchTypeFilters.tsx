import { cn } from "@/lib/utils";
import { resultTypeOptions, type SearchResultType } from "./search-config";

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

export function SearchTypeFilters({
  activeTypes,
  onToggleType,
}: {
  activeTypes: SearchResultType[];
  onToggleType: (type: SearchResultType) => void;
}) {
  return (
    <div className="contents w-full md:block md:h-auto">
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background shadow-card md:static md:z-10 md:border-0 md:bg-transparent md:shadow-none">
        <div className="flex flex-nowrap items-center gap-3 overflow-x-auto overscroll-x-contain px-4 py-2 md:flex-wrap md:justify-start md:overflow-visible md:px-1 md:py-0">
          {resultTypeOptions.map(({ type, label, color }) => {
            const isActive = activeTypes.includes(type);

            return (
              <button
                key={type}
                type="button"
                aria-pressed={isActive}
                onClick={() => onToggleType(type)}
                className={cn(
                  "flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-card transition-all duration-200 ease-out",
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
    </div>
  );
}

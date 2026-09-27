import type { ResultItem } from "@/lib/types";
import type { Skill } from "@/lib/types/skill";
import { SearchResultCard } from "./SearchResultCard";

export function SearchResultGrid({
  filteredResults,
  selectedSkillLabel,
  skills,
}: {
  filteredResults: ResultItem[];
  selectedSkillLabel: string;
  skills: Skill[];
}) {
  return (
    <div className="mt-10 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {filteredResults.length > 0 ? (
        filteredResults.map((item) => (
          <SearchResultCard
            key={`${item.type}-${JSON.stringify(item.data)}`}
            item={item}
            skills={skills}
          />
        ))
      ) : (
        <div className="col-span-full rounded-card bg-white p-8 text-center shadow-card">
          <p className="font-heading text-h6 text-foreground">
            Keine Ergebnisse für {selectedSkillLabel || "diese Auswahl"}
          </p>
        </div>
      )}
    </div>
  );
}

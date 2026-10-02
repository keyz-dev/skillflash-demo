"use client";

import { skills } from "@/lib/data/skills";
import { SearchHero } from "./SearchHero";
import { SearchResultGrid } from "./SearchResultGrid";
import { SearchTypeFilters } from "./SearchTypeFilters";
import { useSearchPage } from "./useSearchPage";

export function SearchPage() {
  const {
    activeTypes,
    filteredResults,
    handleChipRemove,
    handleChipSelect,
    nextOptions,
    selectedSkillLabel,
    selectedState,
    toggleType,
  } = useSearchPage();

  return (
    <main className="min-h-screen bg-[#f6f5f2] text-foreground">
      <SearchHero
        selectedState={selectedState}
        skills={skills}
        nextOptions={nextOptions}
        onSelectSkill={handleChipSelect}
        onRemoveSkill={handleChipRemove}
      />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-2 md:px-2 flex flex-col gap-8">
        <SearchTypeFilters
          activeTypes={activeTypes}
          onToggleType={toggleType}
        />

        <SearchResultGrid
          filteredResults={filteredResults}
          selectedSkillLabel={selectedSkillLabel}
          skills={skills}
        />
      </section>
    </main>
  );
}

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

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-0 px-4 pb-32 pt-2 md:gap-8 md:px-2 md:pb-16">
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

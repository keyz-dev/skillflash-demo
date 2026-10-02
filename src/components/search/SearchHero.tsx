"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import type { SelectedSkillState, Skill } from "@/lib/types/skill";
import { useHeaderScroll } from "@/components/layout/HeaderScrollContext";
import { StickyFilterBar } from "@/components/layout/StickyFilterBar";
import { HeroBackground } from "../layout/Hero/HeroBackground";
import { ClosePillIcon } from "@/components/ui/ClosedPillIcon";

function getSkillNameById(skills: Skill[], id: string | null): string {
  return skills.find((skill) => skill.id === id)?.name ?? "";
}

export function SearchHero({
  selectedState,
  skills,
  nextOptions,
  onSelectSkill,
  onRemoveSkill,
}: {
  selectedState: SelectedSkillState;
  skills: Skill[];
  nextOptions: Skill[];
  onSelectSkill: (skill: Skill) => void;
  onRemoveSkill: (level: keyof SelectedSkillState) => void;
}) {
  const router = useRouter();
  const { setScrolled, headerHeight } = useHeaderScroll();
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [setScrolled]);

  const categoryPill = selectedState.categoryId
    ? {
        id: "categoryId" as const,
        label: getSkillNameById(skills, selectedState.categoryId),
      }
    : null;

  const mainSkillOptions: Array<Skill> = selectedState.categoryId
    ? skills.filter(
        (skill) =>
          skill.level === "hauptskill" &&
          skill.parentId === selectedState.categoryId,
      )
    : [];

  const selectedMainSkill: Skill | null = selectedState.hauptskillId
    ? (skills.find((skill) => skill.id === selectedState.hauptskillId) ?? null)
    : null;

  const hasSelectedMainSkill = Boolean(selectedState.hauptskillId);
  const hasSelectedCategory = Boolean(selectedState.categoryId);

  const subSkillOptions: Array<Skill> = selectedState.hauptskillId
    ? skills.filter(
        (skill) =>
          skill.level === "subskill" &&
          skill.parentId === selectedState.hauptskillId,
      )
    : [];

  return (
    <section className="relative min-h-120 md:min-h-138">
      <HeroBackground translateY={5} />

      <div
        ref={sentinelRef}
        className="pointer-events-none absolute top-30 h-px w-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-2 pb-2 pt-28 md:pt-40">
        <button
          type="button"
          aria-label="Back"
          onClick={() => router.back()}
          style={{ top: headerHeight + 16 }}
          className="absolute left-4 hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[3px] border-white/90 bg-transparent text-white shadow-card transition-transform hover:scale-[1.02] md:flex"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M14 5L7 12L14 19"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 12H19"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="flex min-h-30 flex-col items-center justify-center gap-4">
          {categoryPill ? (
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => onRemoveSkill("categoryId")}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-foreground bg-foreground px-5 py-2 text-h6 font-bold text-white shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] active:transition-transform active:duration-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                <span>{categoryPill.label}</span>
                <ClosePillIcon />
              </button>

              {selectedMainSkill ? (
                <button
                  type="button"
                  onClick={() => onRemoveSkill("hauptskillId")}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-[#1a1630] bg-[#1a1630] px-5 py-2 text-p font-semibold text-white shadow-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] active:transition-transform active:duration-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  <span>{selectedMainSkill.name}</span>
                  <ClosePillIcon />
                </button>
              ) : null}
            </div>
          ) : null}

          {!hasSelectedMainSkill && mainSkillOptions.length > 0 ? (
            <div className="flex max-w-275 flex-wrap items-center justify-center gap-3">
              {mainSkillOptions.map((skill) => (
                <button
                  key={skill.id}
                  type="button"
                  onClick={() => onSelectSkill(skill)}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-[#1a1630] bg-white px-5 py-2 text-p font-semibold text-[#1a1630] shadow-card transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <span>{skill.name}</span>
                </button>
              ))}
            </div>
          ) : null}

          {hasSelectedMainSkill &&
          hasSelectedCategory &&
          subSkillOptions.length > 0 ? (
            <div className="flex max-w-275 flex-wrap items-center justify-center gap-3">
              {subSkillOptions.map((skill) => (
                <button
                  key={skill.id}
                  type="button"
                  onClick={() => onSelectSkill(skill)}
                  className={cn(
                    "rounded-full border-2 border-[#1a1630] bg-white/90 px-5 py-2 text-base font-medium text-[#1a1630] shadow-card transition-transform duration-200 hover:-translate-y-0.5",
                    selectedState.subskillId === skill.id &&
                      "bg-[#1a1630] text-white",
                  )}
                >
                  {skill.name}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-10 flex justify-center">
          <StickyFilterBar />
        </div>
      </div>
    </section>
  );
}

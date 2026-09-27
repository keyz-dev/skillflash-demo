"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import type { SelectedSkillState, Skill } from "@/lib/types/skill";
import { useHeaderScroll } from "@/components/layout/HeaderScrollContext";
import { StickyFilterBar } from "@/components/layout/StickyFilterBar";
import { HeroBackground } from "../layout/Hero/HeroBackground";

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

  const activePills = [
    selectedState.categoryId
      ? {
          id: "categoryId",
          label: getSkillNameById(skills, selectedState.categoryId),
        }
      : null,
    selectedState.hauptskillId
      ? {
          id: "hauptskillId",
          label: getSkillNameById(skills, selectedState.hauptskillId),
        }
      : null,
    selectedState.subskillId
      ? {
          id: "subskillId",
          label: getSkillNameById(skills, selectedState.subskillId),
        }
      : null,
  ].filter(Boolean) as { id: keyof SelectedSkillState; label: string }[];

  return (
    <section className="relative min-h-[34rem] md:min-h-[40rem]">
      <HeroBackground />

      <div
        ref={sentinelRef}
        className="pointer-events-none absolute top-[7.5rem] h-px w-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-2 pb-2 pt-24 md:pt-32">
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

        <div className="flex min-h-[120px] flex-col items-center justify-center gap-4">
          {activePills.length > 0 ? (
            <div className="flex flex-wrap items-center justify-center gap-3">
              {activePills.map((pill) => (
                <button
                  key={pill.id}
                  type="button"
                  onClick={() => onRemoveSkill(pill.id)}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#1a1630] bg-[#1a1630] px-5 py-2 text-lg font-bold text-white shadow-card"
                >
                  <span>{pill.label}</span>
                  <span aria-hidden="true">×</span>
                </button>
              ))}
            </div>
          ) : null}

          <div className="flex max-w-[1100px] flex-wrap items-center justify-center gap-3">
            {nextOptions.map((skill) => (
              <button
                key={skill.id}
                type="button"
                onClick={() => onSelectSkill(skill)}
                className={cn(
                  "rounded-full border-2 border-[#1a1630] bg-white/90 px-5 py-2 text-base font-medium text-[#1a1630] shadow-card transition-transform duration-200 hover:-translate-y-0.5",
                )}
              >
                {skill.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <StickyFilterBar />
        </div>
      </div>
    </section>
  );
}

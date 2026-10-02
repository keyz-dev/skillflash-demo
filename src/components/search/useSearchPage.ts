"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { searchResults } from "@/lib/data/search-results";
import { skills } from "@/lib/data/skills";
import {
  getNextSkillOptions,
  getSelectedSkills,
  skillMatchesFilter,
} from "@/lib/search/skill-filter";
import type { ResultItem } from "@/lib/types";
import type { SelectedSkillState, Skill } from "@/lib/types/skill";
import { resultTypeOptions, type SearchResultType } from "./search-config";

function getSkillStateFromSearchParams(
  params: URLSearchParams,
): SelectedSkillState {
  const categoryParam = params.get("category");
  const hauptskillParam = params.get("hauptskill");
  const subskillParam = params.get("subskill");
  const skillParam = params.get("skill");

  const directSkill = skillParam
    ? (skills.find((skill) => skill.id === skillParam) ?? null)
    : null;

  if (directSkill) {
    if (directSkill.level === "category") {
      return {
        categoryId: directSkill.id,
        hauptskillId: null,
        subskillId: null,
      };
    }

    if (directSkill.level === "hauptskill") {
      return {
        categoryId: directSkill.parentId,
        hauptskillId: directSkill.id,
        subskillId: null,
      };
    }

    const parent = directSkill.parentId
      ? (skills.find((skill) => skill.id === directSkill.parentId) ?? null)
      : null;

    return {
      categoryId: parent?.parentId ?? null,
      hauptskillId: parent?.id ?? null,
      subskillId: directSkill.id,
    };
  }

  return {
    categoryId: categoryParam ?? null,
    hauptskillId: hauptskillParam ?? null,
    subskillId: subskillParam ?? null,
  };
}

function buildSelectionState(
  currentState: SelectedSkillState,
  skill: Skill,
): SelectedSkillState {
  if (skill.level === "category") {
    return {
      categoryId: skill.id,
      hauptskillId: null,
      subskillId: null,
    };
  }

  if (skill.level === "hauptskill") {
    return {
      categoryId: skill.parentId,
      hauptskillId: skill.id,
      subskillId: null,
    };
  }

  const parent = skills.find((item) => item.id === skill.parentId) ?? null;

  return {
    categoryId: parent?.parentId ?? null,
    hauptskillId: parent?.id ?? null,
    subskillId: skill.id,
  };
}

function getItemSkillIds(item: ResultItem): string[] {
  if (item.type === "event") {
    return item.data.mainSkillIds;
  }

  return item.data.skills;
}

export function useSearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialState = useMemo(
    () =>
      getSkillStateFromSearchParams(
        new URLSearchParams(searchParams.toString()),
      ),
    [searchParams],
  );

  const [selectedState, setSelectedState] =
    useState<SelectedSkillState>(initialState);
  const [activeTypes, setActiveTypes] = useState<SearchResultType[]>(
    resultTypeOptions.map(({ type }) => type),
  );

  const selectedSkills = useMemo(
    () => getSelectedSkills(selectedState, skills),
    [selectedState],
  );
  const nextOptions = useMemo(
    () => getNextSkillOptions(selectedState, skills),
    [selectedState],
  );
  const selectedSkillLabel =
    selectedSkills[selectedSkills.length - 1]?.name ?? "";

  const filteredResults = useMemo(() => {
    const selectedSkillId =
      selectedState.subskillId ??
      selectedState.hauptskillId ??
      selectedState.categoryId;

    return searchResults.filter((item) => {
      const matchesType = activeTypes.includes(item.type);
      const itemSkills = getItemSkillIds(item);
      const matchesSkill =
        !selectedSkillId ||
        itemSkills.some((skillId) =>
          skillMatchesFilter(skillId, selectedSkillId, skills),
        );

      return matchesType && matchesSkill;
    });
  }, [activeTypes, selectedState]);

  const updateQueryString = (nextState: SelectedSkillState) => {
    const params = new URLSearchParams();

    if (nextState.categoryId) {
      params.set("category", nextState.categoryId);
    }

    if (nextState.hauptskillId) {
      params.set("hauptskill", nextState.hauptskillId);
    }

    if (nextState.subskillId) {
      params.set("subskill", nextState.subskillId);
    }

    const queryString = params.toString();
    router.replace(queryString ? `/search?${queryString}` : "/search");
  };

  const handleChipSelect = (skill: Skill) => {
    const nextState = buildSelectionState(selectedState, skill);
    setSelectedState(nextState);
    updateQueryString(nextState);
  };

  const handleChipRemove = (level: keyof SelectedSkillState) => {
    const nextState: SelectedSkillState = {
      categoryId: level === "categoryId" ? null : selectedState.categoryId,
      hauptskillId:
        level === "hauptskillId" ? null : selectedState.hauptskillId,
      subskillId: level === "subskillId" ? null : selectedState.subskillId,
    };

    if (nextState.subskillId && !nextState.hauptskillId) {
      nextState.subskillId = null;
    }

    if (nextState.hauptskillId && !nextState.categoryId) {
      nextState.hauptskillId = null;
    }

    setSelectedState(nextState);
    updateQueryString(nextState);
  };

  const toggleType = (type: SearchResultType) => {
    setActiveTypes((current) => {
      const exists = current.includes(type);
      const next = exists
        ? current.filter((item) => item !== type)
        : [...current, type];

      return next.length > 0 ? next : [type];
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const skillParam = params.get("skill");

    if (!skillParam) {
      return;
    }

    const directSkill = skills.find((skill) => skill.id === skillParam) ?? null;

    if (!directSkill) {
      return;
    }

    const canonicalState = getSkillStateFromSearchParams(params);
    const nextParams = new URLSearchParams();

    if (canonicalState.categoryId) {
      nextParams.set("category", canonicalState.categoryId);
    }

    if (canonicalState.hauptskillId) {
      nextParams.set("hauptskill", canonicalState.hauptskillId);
    }

    if (canonicalState.subskillId) {
      nextParams.set("subskill", canonicalState.subskillId);
    }

    const nextQuery = nextParams.toString();
    const currentQuery = params.toString();

    if (currentQuery === nextQuery) {
      return;
    }

    router.replace(nextQuery ? `/search?${nextQuery}` : "/search");
  }, [router, searchParams]);

  return {
    activeTypes,
    filteredResults,
    handleChipRemove,
    handleChipSelect,
    nextOptions,
    selectedSkillLabel,
    selectedState,
    toggleType,
  };
}

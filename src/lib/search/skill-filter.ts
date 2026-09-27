import type { SelectedSkillState, Skill } from "@/lib/types/skill";

export function getSkillById(
  skills: Skill[],
  skillId: string | null,
): Skill | null {
  if (!skillId) {
    return null;
  }

  return skills.find((skill) => skill.id === skillId) ?? null;
}

export function getChildrenByParentId(
  skills: Skill[],
  parentId: string | null,
): Skill[] {
  if (!parentId) {
    return skills.filter((skill) => skill.parentId === null);
  }

  return skills.filter((skill) => skill.parentId === parentId);
}

export function skillMatchesFilter(
  entitySkillId: string,
  selectedId: string,
  allSkills: Skill[],
): boolean {
  if (entitySkillId === selectedId) {
    return true;
  }

  const skill = allSkills.find((item) => item.id === entitySkillId);

  if (!skill?.parentId) {
    return false;
  }

  return skillMatchesFilter(skill.parentId, selectedId, allSkills);
}

export function getSelectedSkills(
  state: SelectedSkillState,
  skills: Skill[],
): Skill[] {
  return [state.categoryId, state.hauptskillId, state.subskillId]
    .map((id) => getSkillById(skills, id))
    .filter((skill): skill is Skill => skill !== null);
}

export function getNextSkillOptions(
  state: SelectedSkillState,
  skills: Skill[],
): Skill[] {
  if (!state.categoryId) {
    return getChildrenByParentId(skills, null);
  }

  if (!state.hauptskillId) {
    return getChildrenByParentId(skills, state.categoryId);
  }

  if (!state.subskillId) {
    return getChildrenByParentId(skills, state.hauptskillId);
  }

  return [];
}

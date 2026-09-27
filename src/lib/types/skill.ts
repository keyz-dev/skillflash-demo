export type SkillLevel = "category" | "hauptskill" | "subskill";

export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
  parentId: string | null;
}

export interface SelectedSkillState {
  categoryId: string | null;
  hauptskillId: string | null;
  subskillId: string | null;
}

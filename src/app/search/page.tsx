import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SearchPage as SearchPageComponent } from "@/components/search/SearchPage";
import { skills } from "@/lib/data/skills";

type SearchPageParams = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function getSelectedSkillNames(
  searchParams: Record<string, string | string[] | undefined>,
): string[] {
  const category = Array.isArray(searchParams.category)
    ? searchParams.category[0]
    : searchParams.category;
  const hauptskill = Array.isArray(searchParams.hauptskill)
    ? searchParams.hauptskill[0]
    : searchParams.hauptskill;
  const subskill = Array.isArray(searchParams.subskill)
    ? searchParams.subskill[0]
    : searchParams.subskill;
  const skill = Array.isArray(searchParams.skill)
    ? searchParams.skill[0]
    : searchParams.skill;
  const names: string[] = [];

  if (skill) {
    const s = skills.find((x) => x.id === skill);
    if (s) {
      if (s.level === "category") {
        names.push(s.name);
      } else if (s.level === "hauptskill") {
        const parent = skills.find((x) => x.id === s.parentId);
        if (parent) names.push(parent.name);
        names.push(s.name);
      } else {
        const haupt = skills.find((x) => x.id === s.parentId);
        const cat = haupt ? skills.find((x) => x.id === haupt.parentId) : null;
        if (cat) names.push(cat.name);
        if (haupt) names.push(haupt.name);
        names.push(s.name);
      }
      return names;
    }
  }

  if (category) {
    const cat = skills.find((x) => x.id === category);
    if (cat) names.push(cat.name);
  }
  if (hauptskill) {
    const h = skills.find((x) => x.id === hauptskill);
    if (h) names.push(h.name);
  }
  if (subskill) {
    const s = skills.find((x) => x.id === subskill);
    if (s) names.push(s.name);
  }
  return names;
}

export async function generateMetadata({
  searchParams,
}: SearchPageParams): Promise<Metadata> {
  const t = await getTranslations("search");
  const baseTitle = `${t("heading")} | Skillflash`;
  const names = getSelectedSkillNames(await searchParams);
  if (names.length === 0) {
    return { title: baseTitle, description: t("placeholder") };
  }

  const joined = names.join(" · ");
  return {
    title: `${joined} | ${t("heading")} | Skillflash`,
    description: `${t("placeholder")}: ${joined}`,
  };
}

export default function SearchPage() {
  return <SearchPageComponent />;
}

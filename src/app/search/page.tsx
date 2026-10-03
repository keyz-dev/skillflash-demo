import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SearchPage as SearchPageComponent } from "@/components/search/SearchPage";
import { skills } from "@/lib/data/skills";

type SearchPageParams = {
  searchParams?: {
    category?: string;
    hauptskill?: string;
    subskill?: string;
    skill?: string;
  };
};

function getSelectedSkillNames({
  category,
  hauptskill,
  subskill,
  skill,
}: {
  category?: string;
  hauptskill?: string;
  subskill?: string;
  skill?: string;
}): string[] {
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

  if (!searchParams) {
    return { title: baseTitle, description: t("placeholder") };
  }

  const names = getSelectedSkillNames(searchParams);
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

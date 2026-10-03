import type { Expert } from "@/lib/types/expert";
import type { Skill } from "@/lib/types/skill";
import { Card } from "./Card/Card";
import { CardFloatingActions } from "./Card/CardFloatingActions";
import { CardLayoutA } from "./Card/CardLayoutA";

function getSkillName(skillId: string, skills: Skill[]) {
  return skills.find((skill) => skill.id === skillId)?.name ?? skillId;
}

export function ExpertCard({
  expert,
  skills,
}: {
  expert: Expert;
  skills: Skill[];
}) {
  return (
    <Card href={`/experts/${expert.slug}`}>
      <CardFloatingActions />
      <CardLayoutA
        entityType="expert"
        avatarUrl={expert.avatarUrl}
        title={expert.name}
        subtitle={
          <>
            <strong className="font-heading text-foreground">
              {expert.yearsExperience} Jahre
            </strong>{" "}
            Berufserfahrung
          </>
        }
        skillTags={expert.skills
          .slice(0, 2)
          .map((skillId) => getSkillName(skillId, skills))}
        resultCount={24}
      />
    </Card>
  );
}

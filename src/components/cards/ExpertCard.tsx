import type { Expert } from "@/lib/types/expert";
import type { Skill } from "@/lib/types/skill";
import { Card } from "./Card/Card";
import { CardActions } from "./Card/CardActions";
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
      <CardActions groupClassName="md:group-hover:pointer-events-auto md:group-hover:translate-x-0 md:group-hover:opacity-100 md:group-focus-within:pointer-events-auto md:group-focus-within:translate-x-0 md:group-focus-within:opacity-100" />
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

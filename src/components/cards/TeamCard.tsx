import type { Team } from "@/lib/types/team";
import type { Skill } from "@/lib/types/skill";
import { Card } from "./Card/Card";
import { CardFloatingActions } from "./Card/CardFloatingActions";
import { CardLayoutA } from "./Card/CardLayoutA";

function getSkillName(skillId: string, skills: Skill[]) {
  return skills.find((skill) => skill.id === skillId)?.name ?? skillId;
}

export function TeamCard({ team, skills }: { team: Team; skills: Skill[] }) {
  return (
    <Card>
      <CardFloatingActions />
      <CardLayoutA
        avatarUrl={
          team.memberAvatarUrls[0] ??
          "https://picsum.photos/seed/team-default/400/400"
        }
        title={team.name}
        subtitle={`${team.memberAvatarUrls.length} Teammitglieder`}
        skillTags={team.skills
          .slice(0, 2)
          .map((skillId) => getSkillName(skillId, skills))}
        resultCount={24}
      />
    </Card>
  );
}

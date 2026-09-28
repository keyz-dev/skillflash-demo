import type { Media } from "@/lib/types/media";
import type { Skill } from "@/lib/types/skill";
import { Card } from "./Card/Card";
import { CardFloatingActions } from "./Card/CardFloatingActions";
import { CardLayoutB } from "./Card/CardLayoutB";

function getSkillName(skillId: string, skills: Skill[]) {
  return skills.find((skill) => skill.id === skillId)?.name ?? skillId;
}

export function MediaCard({
  media,
  skills,
}: {
  media: Media;
  skills: Skill[];
}) {
  return (
    <Card>
      <CardFloatingActions />
      <CardLayoutB
        variant="media"
        imageUrl={media.videoUrl}
        title={media.title}
        description={media.description}
        skillTags={media.skills
          .slice(0, 2)
          .map((skillId) => getSkillName(skillId, skills))}
        resultCount={24}
      />
    </Card>
  );
}

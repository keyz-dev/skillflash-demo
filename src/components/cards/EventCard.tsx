import type { Event } from "@/lib/types/event";
import type { Skill } from "@/lib/types/skill";
import { Card } from "./Card/Card";
import { CardFloatingActions } from "./Card/CardFloatingActions";
import { CardLayoutB } from "./Card/CardLayoutB";

function getSkillName(skillId: string, skills: Skill[]) {
  return skills.find((skill) => skill.id === skillId)?.name ?? skillId;
}

export function EventCard({
  event,
  skills,
}: {
  event: Event;
  skills: Skill[];
}) {
  const dateLabel = new Date(event.startDate).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "short",
  });

  return (
    <Card>
      <CardFloatingActions />
      <CardLayoutB
        variant="event"
        imageUrl={event.previewImage}
        title={event.name}
        description={event.description}
        skillTags={event.mainSkillIds
          .slice(0, 2)
          .map((skillId) => getSkillName(skillId, skills))}
        dateLabel={dateLabel}
        authorAvatarUrl="https://picsum.photos/seed/event-author/200/200"
        showMoreLabel="Mehr anzeigen"
        resultCount={24}
      />
    </Card>
  );
}

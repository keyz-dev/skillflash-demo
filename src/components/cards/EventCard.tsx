import type { Event } from "@/lib/types/event";
import type { Skill } from "@/lib/types/skill";
import { Card } from "./Card/Card";
import { CardActions } from "./Card/CardActions";
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
    <Card href={`/events/${event.slug}`}>
      <CardActions groupClassName="md:group-hover:pointer-events-auto md:group-hover:translate-x-0 md:group-hover:opacity-100 md:group-focus-within:pointer-events-auto md:group-focus-within:translate-x-0 md:group-focus-within:opacity-100" />
      <CardLayoutB
        variant="event"
        imageUrl={event.previewImage}
        title={event.name}
        description={event.shortDescription}
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

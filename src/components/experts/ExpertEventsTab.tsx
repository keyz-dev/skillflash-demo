import type { Event, Skill } from "@/lib/types";
import { EventCard } from "@/components/cards/EventCard";

type ExpertEventsTabProps = {
  events: Event[];
  skills: Skill[];
};

export function ExpertEventsTab({ events, skills }: ExpertEventsTabProps) {
  if (events.length === 0) {
    return (
      <p className="py-8 text-center font-body text-body-lg text-foreground/60">
        Diese:r Expert:in bietet derzeit keine Events an.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} skills={skills} />
      ))}
    </div>
  );
}

import Image from "next/image";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { skills } from "@/lib/data/skills";
import type { Event } from "@/lib/types/event";
import { EventDetailSaveButton } from "./EventDetailSaveButton";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "short",
  })
    .format(new Date(`${date}T12:00:00`))
    .replace(/\.$/, "");
}

function formatEventDate(event: Event) {
  const start = formatDate(event.startDate);
  return event.startDate === event.endDate
    ? start
    : `${start} – ${formatDate(event.endDate)}`;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

export function EventSummaryCard({ event }: { event: Event }) {
  const locationHref =
    event.location.type === "online"
      ? event.location.link
      : `https://maps.google.com/?q=${encodeURIComponent(event.location.address)}`;
  const locationLabel =
    event.location.type === "online"
      ? "Online-Veranstaltung"
      : event.location.address;

  return (
    <article className="overflow-hidden rounded-card bg-background shadow-card">
      <div className="relative aspect-[16/9]">
        <Image
          src={event.previewImage}
          alt={event.name}
          fill
          sizes="(max-width: 1023px) 100vw, 320px"
          className="object-cover"
        />
        <EventDetailSaveButton />
      </div>

      <div className="p-6">
        <h1 className="mb-4 font-heading text-[28px] font-bold leading-tight text-gradient-fade">
          {event.name}
        </h1>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-black px-3 py-2 font-body text-sm font-bold text-neutral-white shadow-card">
            <CalendarDays aria-hidden="true" className="size-4" />
            {formatEventDate(event)}
          </span>
          <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-foreground/80">
            <Clock3 aria-hidden="true" className="size-4" />
            {event.startTime} – {event.endTime}
          </span>
        </div>

        <div className="mb-5 flex flex-wrap gap-2 border-b border-neutral-grey/40 pb-5">
          {event.mainSkillIds.map((skillId) => (
            <span
              key={skillId}
              className="rounded-full bg-neutral-black px-3 py-2 font-body text-xs font-bold text-neutral-white shadow-card"
            >
              {skills.find((skill) => skill.id === skillId)?.name ?? skillId}
            </span>
          ))}
        </div>

        <a
          href={locationHref}
          target="_blank"
          rel="noreferrer"
          className="mb-5 flex items-start gap-2 font-body text-sm font-semibold text-foreground underline underline-offset-2"
        >
          <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          <span>{locationLabel}</span>
        </a>

        <p className="mb-3 font-body text-sm font-bold text-foreground">
          {formatPrice(event.ticketPrice)}
        </p>

        <button
          type="button"
          disabled
          title="Ticketbuchung ist noch nicht verfügbar"
          className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-control bg-secondary-fade px-4 py-3 font-heading text-base font-bold text-neutral-white shadow-card opacity-80"
        >
          Tickets buchen
        </button>
      </div>
    </article>
  );
}

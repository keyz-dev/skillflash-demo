import Image from "next/image";
import Link from "next/link";
import type { Expert } from "@/lib/types/expert";
import type { Event } from "@/lib/types/event";

export function EventDetailContent({
  event,
  organizer,
}: {
  event: Event;
  organizer?: Expert;
}) {
  return (
    <article className="min-w-0 pt-8 lg:pt-[82px]">
      {organizer && (
        <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link
            href={`/experts/${organizer.slug}`}
            className="flex items-center gap-3 text-foreground underline decoration-neutral-grey underline-offset-4"
          >
            <span className="relative size-9 shrink-0 overflow-hidden rounded-full">
              <Image
                src={organizer.avatarUrl}
                alt=""
                fill
                sizes="36px"
                className="object-cover"
              />
            </span>
            <span className="font-heading text-lg font-bold">
              {organizer.name}
            </span>
          </Link>
          <span className="font-body text-sm font-semibold">
            organisiert dieses Event.
          </span>
        </div>
      )}

      <h2 className="mb-3 font-heading text-2xl font-bold text-neutral-black">
        Zu diesem Event
      </h2>
      <div className="max-w-[760px] whitespace-pre-line font-body text-base leading-7 text-foreground/90">
        {event.description}
      </div>
    </article>
  );
}

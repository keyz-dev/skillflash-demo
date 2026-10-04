import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { events } from "@/lib/data/events";
import { experts } from "@/lib/data/experts";
import { ExpertPageHeroControls } from "@/components/experts/ExpertPageHeroControls";
import { ExpertPageHeroObserver } from "@/components/experts/ExpertPageHeroObserver";
import { DetailHeroBackground } from "@/components/layout/Hero/DetailHeroBackground";
import { EventDetailContent } from "@/components/events/EventDetailContent";
import { EventSummaryCard } from "@/components/events/EventSummaryCard";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

function findEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = findEvent(slug);

  if (!event) {
    return { title: "Event nicht gefunden | Skillflash" };
  }

  return {
    title: `${event.name} | Skillflash`,
    description: event.description,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = findEvent(slug);

  if (!event) {
    notFound();
  }

  const organizer = experts.find((expert) => expert.id === event.authorId);
  return (
    <main className="bg-background text-foreground">
      <section className="relative h-[11.625rem]">
        <ExpertPageHeroObserver />
        <ExpertPageHeroControls />
        <DetailHeroBackground variant="event" />
      </section>

      <section className="relative z-10 mx-auto -mt-12 w-full max-w-[1184px] px-4 pb-24 md:px-0">
        <div className="grid items-start gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-[46px]">
          <EventSummaryCard event={event} />
          <EventDetailContent event={event} organizer={organizer} />
        </div>
      </section>
    </main>
  );
}

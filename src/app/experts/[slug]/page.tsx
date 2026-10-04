import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { experts } from "@/lib/data/experts";
import { events as allEvents } from "@/lib/data/events";
import { skills } from "@/lib/data/skills";
import { DetailHeroBackground } from "@/components/layout/Hero/DetailHeroBackground";
import {
  ExpertAboutTab,
  ExpertEventsTab,
  ExpertPageHeroControls,
  ExpertPageHeroObserver,
  ExpertProfileSidebar,
  ExpertProfileTabs,
} from "@/components/experts";

type ExpertPageProps = { params: Promise<{ slug: string }> };

// Find the expert by slug
function findExpert(slug: string) {
  return experts.find((expert) => expert.slug === slug);
}

// Generate metadata for the expert page for the title and description
export async function generateMetadata({
  params,
}: ExpertPageProps): Promise<Metadata> {
  const { slug } = await params;
  const expert = findExpert(slug);
  if (!expert) {
    return { title: "Expert:in nicht gefunden | Skillflash" };
  }
  return {
    title: `${expert.name} | Skillflash`,
    description: expert.bio,
  };
}

export default async function ExpertPage({ params }: ExpertPageProps) {
  const { slug } = await params;
  const expert = findExpert(slug);

  if (!expert) {
    notFound();
  }

  const expertEvents = allEvents.filter((e) => e.authorId === expert.id);

  return (
    <main className="bg-background text-foreground">
      <section className="relative h-[15.5rem]">
        <ExpertPageHeroObserver />
        <ExpertPageHeroControls />
        <DetailHeroBackground variant="expert" />
      </section>

      <section className="relative z-10 mx-auto -mt-25 md:-mt-15 w-full max-w-7xl px-4 pb-24 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <ExpertProfileSidebar expert={expert} />

          <ExpertProfileTabs
            aboutContent={<ExpertAboutTab expert={expert} skills={skills} />}
            eventsContent={
              <ExpertEventsTab events={expertEvents} skills={skills} />
            }
          />
        </div>
      </section>
    </main>
  );
}

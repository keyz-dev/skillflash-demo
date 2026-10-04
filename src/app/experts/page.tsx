import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ComingSoon } from "@/components/ui/ComingSoon";

import { ExpertPageHeroObserver } from "@/components/experts/ExpertPageHeroObserver";
import { HeroBackground } from "@/components/layout/Hero/HeroBackground";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("comingSoon.experts");

  return {
    title: `${t("eyebrow")} | Skillflash`,
    description: t("description"),
  };
}

export default async function ExpertsPage() {
  const t = await getTranslations("comingSoon.experts");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative h-68 md:h-148">
        <ExpertPageHeroObserver />
        <HeroBackground />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-20 text-center text-neutral-white md:px-8 md:pt-28">
          <h1 className="max-w-4xl font-heading text-3xl leading-tight sm:text-4xl md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-2xl font-body text-base leading-snug sm:text-lg md:text-body-lg">
            {t("description")}
          </p>
        </div>
      </section>

      <ComingSoon audience="experts" />
    </main>
  );
}

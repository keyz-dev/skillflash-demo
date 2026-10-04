import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ExpertPageHeroObserver } from "@/components/experts/ExpertPageHeroObserver";
import { HeroBackground } from "@/components/layout/Hero/HeroBackground";
import { EnterpriseProfileSection } from "@/components/enterprise/EnterpriseProfileSection";
import { EnterpriseSearchSection } from "@/components/enterprise/EnterpriseSearchSection";
import { EnterpriseDashboardSection } from "@/components/enterprise/EnterpriseDashboardSection";
import { EnterpriseFeaturesSection } from "@/components/enterprise/EnterpriseFeaturesSection";
import { EnterpriseClosingSection } from "@/components/enterprise/EnterpriseClosingSection";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("comingSoon.enterprise");

  return {
    title: `${t("eyebrow")} | Skillflash`,
    description: t("description"),
  };
}

export default async function EnterprisePage() {
  const t = await getTranslations("enterpriseLanding.hero");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative h-68 md:h-128">
        <ExpertPageHeroObserver />
        <HeroBackground />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-20 text-center text-neutral-white md:px-8 md:pt-35">
          <h1 className="font-heading text-3xl leading-tight sm:text-4xl md:text-h2">
            {t("headline")}
          </h1>
          <h1 className="font-heading text-3xl leading-tight sm:text-4xl md:text-h1">
            {t("brandLine")}
          </h1>
          <p className="mt-4 max-w-2xl font-body text-base leading-snug sm:text-lg md:text-body-lg">
            {t("description")}
          </p>
        </div>
      </section>
      {/* Profile Section */}
      <EnterpriseProfileSection />

      {/* Search Section */}
      <EnterpriseSearchSection />

      {/* Dashboard Section */}
      <EnterpriseDashboardSection />

      <EnterpriseFeaturesSection />

      <EnterpriseClosingSection />
    </main>
  );
}

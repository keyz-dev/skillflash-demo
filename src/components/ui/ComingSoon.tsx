import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faBuilding,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { ExpertPageHeroObserver } from "@/components/experts/ExpertPageHeroObserver";
import { HeroBackground } from "@/components/layout/Hero/HeroBackground";

type ComingSoonAudience = "experts" | "enterprise";

export async function ComingSoon({
  audience,
}: {
  audience: ComingSoonAudience;
}) {
  const t = await getTranslations("comingSoon");
  const audienceT = await getTranslations(`comingSoon.${audience}`);
  const crossLink = audience === "experts" ? "/enterprise" : "/experts";
  const visualIcon = audience === "experts" ? faLightbulb : faBuilding;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative h-[15.5rem] md:h-[18rem]">
        <ExpertPageHeroObserver />
        <HeroBackground />
      </section>

      <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-12 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] md:px-8 md:py-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 font-body text-p text-primary-orange">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-primary-orange"
            />
            {t("status")}
          </p>
          <h1 className="mt-5 font-heading text-h6 text-foreground sm:text-h1">
            {audienceT("title")}
          </h1>
          <p className="mt-5 max-w-xl font-body text-body-lg text-muted">
            {audienceT("description")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-control bg-primary-orange px-4 py-3 font-body text-p text-neutral-white transition-colors hover:bg-secondary-pink"
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                aria-hidden="true"
                className="size-4"
              />
              {t("backHome")}
            </Link>
            <Link
              href={crossLink}
              className="inline-flex items-center gap-1 font-body text-p text-primary-blue transition-colors hover:text-primary-lila"
            >
              {audienceT("switchLabel")}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                aria-hidden="true"
                className="size-4"
              />
            </Link>
          </div>
        </div>

        <aside
          aria-label={audienceT("visualLabel")}
          className="relative flex min-h-80 flex-col justify-between overflow-hidden rounded-card border border-border bg-surface p-6 shadow-card md:min-h-[26rem] md:p-8"
        >
          <div className="flex items-center justify-between font-body text-p text-muted">
            <span>SKILLFLASH / 0{audience === "experts" ? "1" : "2"}</span>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              aria-hidden="true"
              className="size-5"
            />
          </div>
          <div className="flex flex-col items-start gap-5">
            <div className="flex size-20 items-center justify-center rounded-control bg-background text-primary-lila shadow-card">
              <FontAwesomeIcon
                icon={visualIcon}
                aria-hidden="true"
                className="size-10"
              />
            </div>
            <p className="max-w-xs font-heading text-h6 text-foreground">
              {audienceT("visualLabel")}
            </p>
            <div className="h-1 w-20 rounded-full bg-primary-blue" />
          </div>
          <p className="font-body text-p text-muted">
            {audienceT("switchText")}
          </p>
        </aside>
      </section>
    </main>
  );
}

import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";

const FEATURE_KEYS = [
  "marketplace",
  "eventManagement",
  "ticketManagement",
  "publicProfiles",
  "memberManagement",
  "rolesAndPermissions",
  "linkedinIntegration",
  "blogOrMagazine",
] as const;

export async function EnterpriseFeaturesSection() {
  const t = await getTranslations("enterpriseLanding.features");

  return (
    <section className="relative isolate w-full overflow-hidden bg-background px-6 py-14 md:px-8 md:py-20">
      <Image
        src="/assets/images/enterprise/3rd%20View%20Port%20(1).png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="pointer-events-none -z-10 object-fill"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-h3 text-gradient-fade md:text-h2">
            {t("title")}
          </h2>
          <p className="mt-3 font-body text-body-lg text-foreground">
            {t("description")}
          </p>
        </header>

        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center gap-10 md:mt-12 md:flex-row md:justify-center md:gap-12">
          <Image
            src="/assets/images/enterprise/Rectangle2.png"
            alt={t("phoneAlt")}
            width={326}
            height={580}
            sizes="(max-width: 767px) 240px, 280px"
            className="h-auto w-60 shrink-0 md:w-[280px]"
          />

          <ul className="flex flex-col gap-4 self-stretch md:gap-5">
            {FEATURE_KEYS.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 font-body text-p text-foreground"
              >
                <CircleCheck
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 fill-foreground text-background"
                />
                <span>{t(`items.${feature}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

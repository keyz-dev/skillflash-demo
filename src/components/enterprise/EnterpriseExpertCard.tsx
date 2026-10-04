import { MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Pill } from "@/components/ui/Pill";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { CardActions } from "@/components/cards/Card/CardActions";

export async function EnterpriseExpertCard() {
  const t = await getTranslations("enterpriseLanding.search");
  const profileT = await getTranslations("enterpriseLanding.profile.skills");

  return (
    <article className="relative mx-auto flex aspect-[47/68] w-full max-w-[376px] flex-col rounded-card bg-background px-6 pb-5 pt-8 text-center shadow-card md:mx-0">
      <CardActions
        groupClassName="md:pointer-events-auto md:translate-x-0 md:opacity-100"
        buttonClassName="size-12"
      />

      <ProfileImage
        src="https://picsum.photos/seed/enterprise-antonia/500/500"
        alt={t("expertPortraitAlt")}
        sizes="224px"
        className="mx-auto w-56 border-4 border-white shadow-card"
      />

      <div className="mt-6 flex flex-col items-center">
        <h3 className="mt-3 font-heading text-h5 text-foreground">
          {t("expertName")}
        </h3>
        <p className="mt-3 font-body text-body-lg font-normal text-foreground">
          <span className="font-bold">{t("expertYears")}</span>{" "}
          {t("expertExperience")}
        </p>
        <p className="mt-2 inline-flex items-center gap-2 font-body text-p font-bold text-foreground underline">
          <MapPin aria-hidden="true" className="size-5" />
          {t("expertLocation")}
        </p>
      </div>

      <ul className="mt-auto flex flex-wrap items-center gap-2 pt-6 text-left">
        <li className="w-full">
          <Pill className="text-p text-background">
            {profileT("projectManagement")}
          </Pill>
        </li>
        <li>
          <Pill className="border-2 border-neutral-black bg-background py-1 text-p text-foreground">
            {profileT("classic")}
          </Pill>
        </li>
        <li>
          <Pill className="border-2 border-neutral-black bg-background py-1 text-p text-foreground">
            {profileT("agile")}
          </Pill>
        </li>
        <li>
          <Pill className="border-2 border-neutral-black bg-background py-1 text-p text-foreground">
            {t("hybridSkill")}
          </Pill>
        </li>
        <li className="ml-auto font-heading text-p font-bold text-foreground">
          24..
        </li>
      </ul>
    </article>
  );
}

import { MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FlowArrowIcon } from "@/components/ui/icons";
import { Pill } from "@/components/ui/Pill";
import { ProfileImage } from "@/components/ui/ProfileImage";

export async function EnterpriseProfileSection() {
  const t = await getTranslations("enterpriseLanding.profile");

  return (
    <section className="relative mx-auto grid w-full max-w-5xl items-center gap-8 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:gap-12 md:px-8 md:py-20">
      <div className="relative z-10">
        <h2 className="font-heading text-3xl font-bold text-gradient-fade md:text-h3">
          {t("title")}
        </h2>
        <p className="mt-3 max-w-xl font-body text-lg leading-relaxed text-foreground md:text-body-lg">
          {t("description")}
        </p>

        <h3 className="mt-8 font-heading text-lg font-bold text-primary-pink">
          {t("skillsLabel")}
        </h3>
        <ul className="mt-3 flex flex-wrap gap-3">
          {["projectManagement", "classic", "agile"].map((skill) => (
            <li key={skill}>
              <Pill>{t(`skills.${skill}`)}</Pill>
            </li>
          ))}
        </ul>

        <p className="mt-5 flex items-center gap-2 font-body text-sm font-semibold text-foreground">
          <MapPin aria-hidden="true" className="size-4 text-primary-lila" />
          {t("location")}
        </p>
      </div>

      <ProfileImage
        src="https://picsum.photos/seed/enterprise-paul/600/600"
        alt={t("portraitAlt")}
        sizes="(max-width: 767px) 224px, 288px"
        className="mx-auto w-56 border-4 border-white shadow-card md:w-72"
      />

      <FlowArrowIcon className="pointer-events-none absolute -right-4 top-[70%] hidden h-48 w-48 md:block" />
    </section>
  );
}

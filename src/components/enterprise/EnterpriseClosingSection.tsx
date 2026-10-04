import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { EnterpriseFeedbackControls } from "./EnterpriseFeedbackControls";

const TEAM_MEMBERS = [
  { key: "oscar", image: "enterprise-oscar" },
  { key: "leonardo", image: "enterprise-leonardo" },
  { key: "tobias", image: "enterprise-tobias" },
  { key: "antonia", image: "enterprise-antonia" },
] as const;

export async function EnterpriseClosingSection() {
  const t = await getTranslations("enterpriseLanding.closing");

  return (
    <section className="relative isolate w-full overflow-hidden px-6 py-16 md:px-8 md:py-24">
      <Image
        src="/assets/images/enterprise/5th%20View%20Port.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="pointer-events-none -z-10 object-fill"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
        <article className="rounded-card bg-background px-6 py-8 text-center shadow-card md:px-8">
          <h2 className="font-heading text-h5 text-gradient-fade md:text-h4">
            {t("teamTitle")}
          </h2>
          <ul className="mx-auto mt-7 grid max-w-md grid-cols-2 gap-x-4 gap-y-7">
            {TEAM_MEMBERS.map(({ key, image }) => (
              <li
                key={key}
                className="flex flex-col items-center text-center"
              >
                <ProfileImage
                  src={`https://picsum.photos/seed/${image}/200/200`}
                  alt={t(`members.${key}.portraitAlt`)}
                  sizes="72px"
                  className="w-[72px] border-2 border-white shadow-card"
                />
                <h3 className="mt-2 font-heading text-p text-foreground">
                  {t(`members.${key}.name`)}
                </h3>
                <p className="mt-1 font-body text-sm text-foreground">
                  {t(`members.${key}.role`)}
                </p>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-card bg-background px-6 py-8 text-center shadow-card md:px-8">
          <h2 className="font-heading text-h5 text-gradient-fade md:text-h4">
            {t("feedbackTitle")}
          </h2>
          <p className="mx-auto mt-6 max-w-md font-body text-p text-foreground">
            {t("feedbackDescription")}
          </p>
          <EnterpriseFeedbackControls
            labels={{
              positive: t("positiveFeedback"),
              negative: t("negativeFeedback"),
              email: t("emailLabel"),
            }}
          />
        </article>
      </div>
    </section>
  );
}

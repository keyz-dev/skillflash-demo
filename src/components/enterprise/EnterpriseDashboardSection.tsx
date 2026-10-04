import Image from "next/image";
import { Rocket } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ProfileImage } from "@/components/ui/ProfileImage";

export async function EnterpriseDashboardSection() {
  const t = await getTranslations("enterpriseLanding.dashboard");

  return (
    <section className="relative isolate overflow-hidden px-6 py-10 text-center text-neutral-white md:px-8 md:py-12">
      <Image
        src="/assets/images/enterprise/Ellipse%203.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="pointer-events-none -z-10 object-fill"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center">
        <div className="flex items-center gap-3">
          <ProfileImage
            src="https://picsum.photos/seed/enterprise-antonia/500/500"
            alt=""
            sizes="48px"
            className="w-12 border-2 border-white"
          />
          <h2 className="font-heading text-h6 text-neutral-white md:text-h5">
            {t("title")}
          </h2>
        </div>

        <p className="mt-4 max-w-3xl whitespace-pre-line font-body text-p text-neutral-white">
          {t("description")}
        </p>

        <Image
          src="/assets/images/enterprise/CMS%20Dashboard.png"
          alt={t("dashboardAlt")}
          width={1536}
          height={824}
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="mt-6 h-auto w-full max-w-4xl"
        />

        <button
          type="button"
          disabled
          title={t("demoUnavailable")}
          className="mt-6 inline-flex cursor-not-allowed items-center gap-2 rounded-control bg-neutral-white px-4 py-3 font-heading text-p font-bold text-secondary-pink shadow-card opacity-80"
        >
          {t("demoButton")}
          <Rocket aria-hidden="true" className="size-4" />
        </button>
      </div>
    </section>
  );
}

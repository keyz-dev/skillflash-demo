import Image from "next/image";
import type { Expert } from "@/lib/types";
import { ExpertSocialIcon } from "@/components/ui/ExpertSocialIcon";

type ExpertProfileSidebarProps = {
  expert: Expert;
};

export function ExpertProfileSidebar({ expert }: ExpertProfileSidebarProps) {
  return (
    <aside className="h-fit rounded-card bg-background p-6 shadow-card">
      <div className="relative mx-auto mb-5 flex size-48 items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-card">
        <Image
          src={expert.avatarUrl}
          alt={expert.name}
          fill
          sizes="192px"
          className="object-cover"
        />
      </div>

      <div className="text-center">
        <h1 className="font-heading text-h4 text-gradient-primary">
          {expert.name}
        </h1>
        <p className="mt-2 font-body text-body-lg font-bold text-foreground">
          @{expert.handle}
        </p>
        <p className="mt-4 font-body text-p text-foreground/80">{expert.bio}</p>

        <div className="mt-4 flex items-center justify-center gap-2 font-body text-p text-foreground/70">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{expert.location}</span>
        </div>

        <button
          type="button"
          className="mt-6 w-full rounded-button bg-gradient-primary py-3 font-heading text-body-lg font-bold text-neutral-white shadow-button transition-transform hover:scale-[1.02]"
        >
          Frage stellen
        </button>

        <div className="mt-6 flex items-center justify-center gap-3">
          {expert.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="flex size-10 items-center justify-center rounded-full border-2 border-neutral-grey/30 bg-background transition-colors hover:border-primary-lila hover:text-primary-lila"
              aria-label={social.platform}
            >
              <ExpertSocialIcon platform={social.platform} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

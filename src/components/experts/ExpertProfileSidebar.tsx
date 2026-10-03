import Image from "next/image";
import type { Expert } from "@/lib/types";
import { SocialIcon } from "@/components/ui/icons";
import { ExpertSaveButton } from "./ExpertSaveButton";

type ExpertProfileSidebarProps = {
  expert: Expert;
};

export function ExpertProfileSidebar({ expert }: ExpertProfileSidebarProps) {
  return (
    <aside className="h-fit rounded-card bg-background p-6 shadow-card relative">
      {/* Floating save icon */}
      <ExpertSaveButton />

      {/* Profile Image */}
      <div className="relative mx-auto mb-5 flex size-48 items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-card">
        <Image
          src={expert.avatarUrl}
          alt={expert.name}
          fill
          sizes="192px"
          className="object-cover"
        />
      </div>

      <div className="text-left flex flex-col items-left gap-3">
        <h1 className="font-heading text-[40px] font-bold text-gradient-fade">
          {expert.name}
        </h1>
        <p className="font-body text-h6 font-bold text-foreground">
          @{expert.handle}🚀
        </p>
        <p className="font-body text-left text-p text-foreground/80 line-clamp-3">
          {expert.bio}
        </p>

        <div className="mt-2 flex gap-1 font-body text-p text-foreground">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C7.8 2 4 5.22 4 10.2C4 13.52 6.67 17.45 12 22C17.33 17.45 20 13.52 20 10.2C20 5.22 16.2 2 12 2ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z"
              fill="#200E38"
            />
          </svg>

          <span className="underline">{expert.location}</span>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-3 mt-6 w-full rounded-control bg-secondary-fade py-3 font-heading text-body-lg font-bold text-neutral-white shadow-button transition-transform hover:scale-[1.02] border-4"
        >
          <span>Frage stellen</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 6H19V15H6V17C6 17.55 6.45 18 7 18H18L22 22V7C22 6.45 21.55 6 21 6ZM17 12V3C17 2.45 16.55 2 16 2H3C2.45 2 2 2.45 2 3V17L6 13H16C16.55 13 17 12.55 17 12Z"
              fill="white"
            />
          </svg>
        </button>

        <div className="mt-6 flex items-center justify-center gap-3">
          {expert.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="flex size-10 items-center justify-center rounded-full border-4 border-white shadow-card bg-background transition-colors hover:border-primary-pink/70"
              aria-label={social.platform}
            >
              <SocialIcon platform={social.platform} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

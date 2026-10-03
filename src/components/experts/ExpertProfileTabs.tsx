"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type TabKey = "about" | "events";

type ExpertProfileTabsProps = {
  aboutLabel?: string;
  eventsLabel?: string;
  aboutContent: ReactNode;
  eventsContent: ReactNode;
  defaultTab?: TabKey;
};

export function ExpertProfileTabs({
  aboutLabel = "Über Mich",
  eventsLabel = "Events",
  aboutContent,
  eventsContent,
  defaultTab = "about",
}: ExpertProfileTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>(defaultTab);

  const isAbout = activeTab === "about";

  return (
    <div className="overflow-hidden">
      <div
        role="tablist"
        aria-label="Expert:innen Profil"
        className="flex gap-2 sm:gap-0 min-h-20 items-start"
      >
        <TabButton
          role="tab"
          aria-selected={isAbout}
          label={aboutLabel}
          active={isAbout}
          onClick={() => setActiveTab("about")}
        />

        <TabButton
          role="tab"
          aria-selected={!isAbout}
          label={eventsLabel}
          active={!isAbout}
          onClick={() => setActiveTab("events")}
        />
      </div>

      <div
        role="tabpanel"
        aria-hidden={!isAbout}
        className={cn("bg-background", !isAbout && "hidden")}
      >
        {aboutContent}
      </div>

      <div
        role="tabpanel"
        aria-hidden={isAbout}
        className={cn("bg-background", isAbout && "hidden")}
      >
        {eventsContent}
      </div>
    </div>
  );
}

function TabButton({
  label,
  active,
  onClick,
  role,
  "aria-selected": ariaSelected,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  role: string;
  "aria-selected": boolean;
}) {
  console.log("label: ", label);
  console.log("active?? : ", active);
  return (
    <div
      className={`rounded-t-control ${active ? "bg-white border-b-2 border-primary-orange sm:border-0" : ""}`}
    >
      <button
        type="button"
        role={role}
        aria-selected={ariaSelected}
        onClick={onClick}
        className={cn(
          "min-h-full p-2 sm:px-4 font-heading text-body-lg md:text-[32px] font-bold transition-colors",
          active
            ? "text-gradient-fade bg-white"
            : "text-foreground sm:text-neutral-white",
        )}
      >
        {label}
      </button>
    </div>
  );
}

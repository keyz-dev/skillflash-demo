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
    <div>
      <div
        role="tablist"
        aria-label="Expert:innen Profil"
        className="mb-6 inline-flex rounded-t-lg bg-background shadow-[0_-2px_10px_rgba(0,0,0,0.05)]"
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
        className={cn(
          "rounded-b-card rounded-tr-card bg-background p-6 shadow-card",
          !isAbout && "hidden",
        )}
      >
        {aboutContent}
      </div>

      <div
        role="tabpanel"
        aria-hidden={isAbout}
        className={cn(
          "rounded-b-card rounded-tr-card bg-background p-6 shadow-card",
          isAbout && "hidden",
        )}
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
  return (
    <button
      type="button"
      role={role}
      aria-selected={ariaSelected}
      onClick={onClick}
      className={cn(
        "rounded-t-lg border-b-4 px-8 py-4 font-heading text-h5 transition-colors",
        active
          ? "border-b-primary-lila text-neutral-white bg-gradient-primary"
          : "border-transparent text-gradient-primary",
      )}
    >
      {label}
    </button>
  );
}

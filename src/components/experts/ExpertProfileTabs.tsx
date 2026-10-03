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
    <div className="overflow-hidden rounded-card shadow-card">
      <div
        role="tablist"
        aria-label="Expert:innen Profil"
        className="flex min-h-[94px] items-end gap-4 bg-[linear-gradient(90deg,#ffbe0b_0%,#ff006e_50%,#8338ec_100%)] px-5 pt-4 sm:px-10"
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
          "bg-background p-6 sm:p-8",
          !isAbout && "hidden",
        )}
      >
        {aboutContent}
      </div>

      <div
        role="tabpanel"
        aria-hidden={isAbout}
        className={cn(
          "bg-background p-6 sm:p-8",
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
        "min-h-[72px] rounded-t-lg px-5 py-3 font-heading text-h5 font-bold transition-colors",
        active
          ? "bg-background text-gradient-fade"
          : "text-neutral-white",
      )}
    >
      {label}
    </button>
  );
}

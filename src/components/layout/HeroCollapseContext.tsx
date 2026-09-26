"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type HeroCollapseContextValue = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

const HeroCollapseContext = createContext<HeroCollapseContextValue | null>(
  null,
);

export function HeroCollapseProvider({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const value = useMemo(
    () => ({ collapsed, setCollapsed }),
    [collapsed],
  );

  return (
    <HeroCollapseContext.Provider value={value}>
      {children}
    </HeroCollapseContext.Provider>
  );
}

export function useHeroCollapse() {
  const context = useContext(HeroCollapseContext);

  if (!context) {
    throw new Error(
      "useHeroCollapse must be used within a HeroCollapseProvider",
    );
  }

  return context;
}

"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type HeaderScrollContextValue = {
  scrolled: boolean;
  setScrolled: Dispatch<SetStateAction<boolean>>;
  headerHeight: number;
  setHeaderHeight: Dispatch<SetStateAction<number>>;
};

const HeaderScrollContext = createContext<HeaderScrollContextValue | null>(
  null,
);

export function HeaderScrollProvider({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const value = useMemo(
    () => ({ scrolled, setScrolled, headerHeight, setHeaderHeight }),
    [scrolled, headerHeight],
  );

  return (
    <HeaderScrollContext.Provider value={value}>
      {children}
    </HeaderScrollContext.Provider>
  );
}

export function useHeaderScroll() {
  const context = useContext(HeaderScrollContext);

  if (!context) {
    throw new Error(
      "useHeaderScroll must be used within a HeaderScrollProvider",
    );
  }

  return context;
}

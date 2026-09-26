"use server";

import { cookies } from "next/headers";

export type Locale = "de" | "en";

export async function setLocale(locale: Locale) {
  if (locale !== "de" && locale !== "en") {
    throw new Error("Unsupported locale");
  }

  const store = await cookies();
  store.set("locale", locale);
}

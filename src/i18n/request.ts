import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

function resolveLocale(value: string | undefined) {
  return value === "en" ? "en" : "de";
}

export default getRequestConfig(async () => {
  const store = await cookies();
  const locale = resolveLocale(store.get("locale")?.value);

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

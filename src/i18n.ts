import { includes } from "lodash";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export const locales = ["uk", "en"];

export default getRequestConfig(async () => {
  const locale = cookies().get("NEXT_LOCALE")?.value || locales[0];

  return {
    locale: includes(locales, locale) ? locale : locales[0],
    messages: (await import(`./content/${locale}.json`)).default,
  };
});

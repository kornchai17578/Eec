// i18n.js
import {getRequestConfig} from "next-intl/server";
const SUPPORTED = ["en", "th"];
const DEFAULT_LOCALE = "en";

export default getRequestConfig(async ({locale}) => {
  const l = SUPPORTED.includes(locale) ? locale : DEFAULT_LOCALE;
  return {
    locale: l,
    messages: (await import(`./app/messages/${l}.json`)).default
  };
});

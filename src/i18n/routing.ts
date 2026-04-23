import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "en", "es"],
  defaultLocale: "pt",
});

export type SupportedLocale = (typeof routing.locales)[number];

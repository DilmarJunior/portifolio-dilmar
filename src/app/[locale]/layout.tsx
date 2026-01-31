import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { getTranslations } from "next-intl/server";
import { Inter, JetBrains_Mono } from "next/font/google";
import HeaderSection from "./_sections/header";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateStaticParams() {
  const locales = routing.locales.map((locale) => ({ locale }));
  return locales;
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const tr = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: tr("meta-title"),
    description: tr("meta-description"),
  };
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: Readonly<Props>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased font-sans">
        <NextIntlClientProvider>
          <AppRouterCacheProvider>
            <HeaderSection />
            <div className="pt-14">{children}</div>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

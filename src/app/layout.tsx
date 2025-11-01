import type { Metadata } from "next";
import {NextIntlClientProvider} from 'next-intl';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "./globals.css";


export const metadata: Metadata = {
  title: "Portifolio - Dilmar Mendes Silva Carvalho",
  description: "ortfólio de Dilmar Mendes Silva Carvalho, desenvolvedor de software full stack mobile. Inclui projetos, experiências e currículo profissional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={'antialiased'}
      >
        <NextIntlClientProvider>
          <AppRouterCacheProvider>
            {children}
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

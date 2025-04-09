import Header from "@/components/header/Header";
import "aos/dist/aos.css";
import "./globals.css";

import AOS from "@/components/AOS";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { Raleway } from "next/font/google";
import type { ReactNode } from "react";

const raleway = Raleway({ subsets: ["cyrillic-ext"] });

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  return {
    title: {
      default: t("meta.title"),
      template: t("meta.titleTempalte"),
    },
    description: t("meta.description"),
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: t("meta.title"),
    },
    formatDetection: {
      telephone: false,
    },
    openGraph: {
      type: "website",
      siteName: t("meta.title"),
      title: {
        default: t("meta.title"),
        template: t("meta.titleTempalte"),
      },
      description: t("meta.description"),
    },
    twitter: {
      card: "summary",
      title: {
        default: t("meta.title"),
        template: t("meta.titleTempalte"),
      },
      description: t("meta.description"),
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head />
      <body className={cn("flex min-h-dvh w-screen flex-col overflow-x-hidden", raleway.className)}>
        <NextIntlClientProvider messages={messages}>
          <AOS />
          <Header />
          <div className="mt-[60px] flex-1">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

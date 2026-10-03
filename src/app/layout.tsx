import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Quicksand, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/layout/Header/Header";
import { HeaderScrollProvider } from "@/components/layout/HeaderScrollContext";
import { ThemeProvider } from "@/lib/theme/ThemeContext";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skillflash.de"),
  title: {
    default: "Skillflash | Home",
    template: "%s | Skillflash",
  },
  description:
    "Skillflash ist die Plattform, auf der du Skills, Expert:innen und Events für Transformation, Coaching und digitale Weiterbildung findest.",
  openGraph: {
    title: "Skillflash | Home",
    description:
      "Skillflash ist die Plattform, auf der du Skills, Expert:innen und Events für Transformation, Coaching und digitale Weiterbildung findest.",
    siteName: "Skillflash",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/icon-512.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skillflash | Home",
    description:
      "Skillflash ist die Plattform, auf der du Skills, Expert:innen und Events für Transformation, Coaching und digitale Weiterbildung findest.",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${sourceSans.variable} ${quicksand.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <HeaderScrollProvider>
              <Header />
              {children}
            </HeaderScrollProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

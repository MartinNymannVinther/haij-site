import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { copy } from "@/content/copy";
import { paths, site, type Locale } from "@/content/site";

/** Metadata shared by both language roots; the description differs per language. */
export function metadataFor(locale: Locale): Metadata {
  const t = copy[locale].meta;
  return {
    metadataBase: new URL(site.url),
    title: { default: t.title, template: `%s · Haij` },
    description: t.description,
    alternates: {
      canonical: paths[locale].home,
      languages: { da: paths.da.home, en: paths.en.home },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: paths[locale].home,
      siteName: "Haij",
      locale: locale === "da" ? "da_DK" : "en_GB",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Haij" }],
    },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
  };
}

/**
 * One root layout per language so <html lang> is right for each; Next allows
 * several root layouts through route groups, at the cost of a full page load
 * when switching language, which is the right trade for a language switch.
 */
export function Shell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale} className="h-full antialiased">
      <body className="bg-background text-foreground flex min-h-full flex-col">
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}

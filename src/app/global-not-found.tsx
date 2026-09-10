import "@fontsource-variable/archivo";
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { copy } from "@/content/copy";
import { paths } from "@/content/site";
import { button, container, textLink } from "@/lib/ui";

export const metadata: Metadata = { title: "404 · Haij" };

/**
 * The page nginx serves for paths that do not exist. It cannot know which
 * language the reader wanted, so it speaks Danish first and offers English.
 */
export default function GlobalNotFound() {
  const da = copy.da.notFound;
  const en = copy.en.notFound;
  return (
    <html lang="da" className="h-full antialiased">
      <body className="bg-background text-foreground flex min-h-full flex-col">
        <Header locale="da" />
        <main className="flex-1">
          <div className={`${container} py-24 sm:py-32`}>
            <p className="text-meta text-[0.8125rem]">404</p>
            <h1 className="mt-2 text-[2.25rem] leading-[1.05] sm:text-[3rem]">{da.title}</h1>
            <p className="text-muted-foreground mt-4 max-w-md text-[1.0625rem] leading-7">
              {da.text}
            </p>
            <Link href={paths.da.home} className={`${button("outline", "lg")} mt-8`}>
              {da.back}
            </Link>
            <p className="text-meta mt-10 text-[0.9375rem]" lang="en">
              {en.title} {en.text}{" "}
              <Link href={paths.en.home} className={textLink}>
                {en.back}
              </Link>
            </p>
          </div>
        </main>
        <Footer locale="da" />
      </body>
    </html>
  );
}

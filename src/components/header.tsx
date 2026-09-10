import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { copy } from "@/content/copy";
import { anchors, otherLocale, paths, site, type Locale } from "@/content/site";
import { button, container, navLink } from "@/lib/ui";

export function Header({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const home = paths[locale].home;
  const a = anchors[locale];
  return (
    <header className="bg-background/80 border-hairline sticky top-0 z-20 border-b backdrop-blur-md">
      <div className={`${container} flex h-16 items-center justify-between`}>
        <Link href={home} className="text-[1.15rem]" aria-label="Haij">
          <Wordmark />
        </Link>
        <nav
          className="flex items-center gap-1"
          aria-label={locale === "da" ? "Hovedmenu" : "Main"}
        >
          <a href={`${home}#${a.tools}`} className={navLink}>
            {t.nav.tools}
          </a>
          <a href={`${home}#${a.dogmas}`} className={navLink}>
            {t.nav.dogmas}
          </a>
          <a href={`${home}#${a.ways}`} className={navLink}>
            {t.nav.ways}
          </a>
          <a href={`${home}#${a.about}`} className={navLink}>
            {t.nav.about}
          </a>
          <span className="bg-hairline mx-2 hidden h-5 w-px sm:block" aria-hidden />
          <Link
            href={paths[otherLocale[locale]].home}
            className="text-foreground/75 hover:bg-secondary hover:text-foreground inline-flex h-9 items-center rounded-lg px-3 text-[0.875rem] font-medium transition-colors"
            lang={otherLocale[locale]}
            hrefLang={otherLocale[locale]}
          >
            {t.nav.language}
          </Link>
          <a href={site.github} className={button("outline")} rel="noopener">
            {t.nav.code}
          </a>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { copy } from "@/content/copy";
import { otherLocale, paths, site, type Locale } from "@/content/site";
import { container } from "@/lib/ui";

export function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale].footer;
  const p = paths[locale];
  const link = "text-meta hover:text-foreground text-[0.8125rem] transition-colors";
  return (
    <footer className="border-hairline border-t">
      <div className={`${container} py-10`}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <Wordmark className="text-base" />
            <p className="text-meta text-[0.8125rem]">
              © {new Date().getFullYear()} {site.company} · {t.license}
            </p>
            <p className="text-label text-[0.8125rem]">{t.made}</p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Footer">
            <Link href={p.checklist} className={link}>
              {t.checklist}
            </Link>
            <Link href={p.privacy} className={link}>
              {t.privacy}
            </Link>
            <Link href={p.terms} className={link}>
              {t.terms}
            </Link>
            <a href={site.github} className={link} rel="noopener">
              {t.code}
            </a>
            <Link
              href={paths[otherLocale[locale]].home}
              className={link}
              lang={otherLocale[locale]}
              hrefLang={otherLocale[locale]}
            >
              {t.language}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

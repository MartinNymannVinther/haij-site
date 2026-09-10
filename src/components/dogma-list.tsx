import Link from "next/link";
import { Section } from "@/components/section";
import { copy } from "@/content/copy";
import { dogmas } from "@/content/dogmas";
import { anchors, paths, type Locale } from "@/content/site";
import { textLink } from "@/lib/ui";

/**
 * The seven dogmas as a manifesto: big numerals in the moss green, the title
 * in bold, the text verbatim. Two columns on wide screens, one on narrow.
 * The heading column stays put while the list scrolls.
 */
export function DogmaSection({ locale }: { locale: Locale }) {
  const t = copy[locale].dogmas;
  const a = anchors[locale];
  const list = dogmas[locale];
  return (
    <Section
      id={a.dogmas}
      kicker={t.kicker}
      title={t.title}
      intro={t.intro}
      layout="split"
      tone="tinted"
      aside={
        <>
          <p className="text-meta mt-4 max-w-sm text-[0.9375rem] leading-7">{t.aside}</p>
          <p className="mt-6">
            <Link href={paths[locale].checklist} className={`${textLink} text-[0.9375rem]`}>
              {t.checklist} →
            </Link>
          </p>
        </>
      }
    >
      <ol className="grid gap-x-12 md:grid-cols-2" aria-label={t.kicker}>
        {list.map((dogma, index) => (
          <li
            key={dogma.title}
            className="border-hairline grid grid-cols-[3.25rem_1fr] gap-x-3 border-t py-7 first:border-t-0 md:first:border-t md:[&:nth-child(2)]:border-t-0"
          >
            <span
              className="text-primary text-[2.75rem] leading-none font-semibold tracking-[-0.03em]"
              aria-hidden
            >
              {index + 1}
            </span>
            <div>
              <h3 className="text-[1.0625rem] leading-6">{dogma.title}</h3>
              <p className="text-foreground/80 mt-2 text-[0.9375rem] leading-7">{dogma.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

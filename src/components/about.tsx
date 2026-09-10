import { Section } from "@/components/section";
import { copy } from "@/content/copy";
import { anchors, site, type Locale } from "@/content/site";
import { textLink } from "@/lib/ui";

export function AboutSection({ locale }: { locale: Locale }) {
  const t = copy[locale].about;
  const a = anchors[locale];
  const link = `${textLink} text-[0.9375rem]`;
  const suggest = `mailto:${site.contactEmail}?subject=${encodeURIComponent(t.suggestSubject)}`;
  return (
    <Section id={a.about} kicker={t.kicker} title={t.title} layout="split">
      <div className="max-w-2xl">
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="mb-5 text-[1.0625rem] leading-8">
            {paragraph}
          </p>
        ))}
        <div className="border-hairline mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t pt-6">
          <span className="text-[0.9375rem]">
            {t.contact}{" "}
            <a href={`mailto:${site.contactEmail}`} className={link}>
              {site.contactEmail}
            </a>
          </span>
          <a href={site.securityUrl} className={link} rel="noopener">
            {t.security}
          </a>
          <a href={suggest} className={link}>
            {t.suggest}
          </a>
        </div>
      </div>
    </Section>
  );
}

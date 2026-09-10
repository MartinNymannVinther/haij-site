import { Section } from "@/components/section";
import { copy } from "@/content/copy";
import { anchors, site, type Locale } from "@/content/site";
import { liveTools } from "@/content/tools";
import { textLink } from "@/lib/ui";

/** Three doors: use it with us, run it yourself, let us run it for you. */
export function WaysSection({ locale }: { locale: Locale }) {
  const t = copy[locale].ways;
  const a = anchors[locale];
  const applicable = liveTools.filter((tool) => tool.applyUrl);
  const link = `${textLink} text-[0.9375rem]`;
  const actions: React.ReactNode[] = [
    <ul key="apply" className="space-y-1.5">
      {applicable.map((tool) => (
        <li key={tool.id}>
          <a href={tool.applyUrl} className={link}>
            {t.applyTo} {tool.text[locale].name} →
          </a>
        </li>
      ))}
    </ul>,
    <a key="deploy" href={site.deployGuideUrl} className={link} rel="noopener">
      {t.deployGuide} →
    </a>,
    <a key="write" href={`mailto:${site.contactEmail}`} className={link}>
      {t.write} →
    </a>,
  ];
  return (
    <Section id={a.ways} kicker={t.kicker} title={t.title} intro={t.intro}>
      <div className="grid gap-5 md:grid-cols-3">
        {t.items.map((item, index) => (
          <article
            key={item.title}
            className="bg-card border-border flex flex-col rounded-2xl border p-6 sm:p-7"
          >
            <p className="text-label text-[0.8125rem] font-medium">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-[1.25rem]">{item.title}</h3>
            <p className="text-muted-foreground mt-3 flex-1 text-[0.9375rem] leading-7">
              {item.text}
            </p>
            <div className="mt-6">{actions[index]}</div>
          </article>
        ))}
      </div>
    </Section>
  );
}

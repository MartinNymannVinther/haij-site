import { Screenshot } from "@/components/screenshot";
import { Section } from "@/components/section";
import { StatusChip } from "@/components/status-chip";
import { copy } from "@/content/copy";
import { anchors, type Locale } from "@/content/site";
import { comingTools, liveTools, type Tool } from "@/content/tools";
import { button, textLink } from "@/lib/ui";

/** Live tools get a full row: screenshot on one side, words on the other, sides alternating. */
function ToolRow({ tool, locale, flip }: { tool: Tool; locale: Locale; flip: boolean }) {
  const t = copy[locale].tools;
  const text = tool.text[locale];
  return (
    <article
      id={tool.id}
      className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
      aria-labelledby={`${tool.id}-title`}
    >
      {tool.image ? (
        <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
          <Screenshot
            image={tool.image}
            locale={locale}
            sizes="(min-width: 1152px) 640px, (min-width: 1024px) 58vw, 100vw"
          />
        </div>
      ) : null}
      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 id={`${tool.id}-title`} className="text-[1.75rem] leading-none">
            {text.name}
          </h3>
          <StatusChip status={tool.status} label={t.status[tool.status]} />
        </div>
        <p className="text-meta mt-2 text-[0.875rem]">{tool.host}</p>
        <p className="mt-5 text-[1.125rem] font-medium">{text.tagline}</p>
        <p className="text-muted-foreground mt-3 text-[0.9375rem] leading-7">{text.description}</p>
        <p className="mt-3 text-[0.9375rem] leading-7">{text.note}</p>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {tool.url ? (
            <a href={tool.url} className={button("primary")}>
              {t.open}
            </a>
          ) : null}
          {tool.demoUrl ? (
            <a href={tool.demoUrl} className={button("soft")}>
              {t.demo}
            </a>
          ) : null}
          {tool.applyUrl ? (
            <a href={tool.applyUrl} className={button("outline")}>
              {t.apply}
            </a>
          ) : null}
          {tool.repoUrl ? (
            <a href={tool.repoUrl} className={button("outline")} rel="noopener">
              {t.code}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

/** Coming tools get a compact card and no screenshot, on purpose. */
function ComingCard({ tool, locale }: { tool: Tool; locale: Locale }) {
  const t = copy[locale].tools;
  const text = tool.text[locale];
  return (
    <article
      id={tool.id}
      className="bg-card border-border rounded-2xl border p-6 sm:p-7"
      aria-labelledby={`${tool.id}-title`}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <h4 id={`${tool.id}-title`} className="text-[1.25rem] leading-none">
          {text.name}
        </h4>
        <StatusChip status={tool.status} label={t.status[tool.status]} />
      </div>
      <p className="text-meta mt-2 text-[0.8125rem]">{tool.host}</p>
      <p className="mt-4 font-medium">{text.tagline}</p>
      <p className="text-muted-foreground mt-2 text-[0.9375rem] leading-7">{text.description}</p>
      {tool.repoUrl ? (
        <p className="mt-4">
          <a href={tool.repoUrl} className={`${textLink} text-[0.9375rem]`} rel="noopener">
            {t.code}
          </a>
        </p>
      ) : null}
    </article>
  );
}

export function ToolsSection({ locale }: { locale: Locale }) {
  const t = copy[locale].tools;
  const a = anchors[locale];
  return (
    <Section id={a.tools} kicker={t.kicker} title={t.title} intro={t.intro}>
      <div className="space-y-20 sm:space-y-28">
        {liveTools.map((tool, index) => (
          <ToolRow key={tool.id} tool={tool} locale={locale} flip={index % 2 === 1} />
        ))}
      </div>

      {comingTools.length > 0 ? (
        <div id={a.coming} className="border-hairline mt-24 border-t pt-14 sm:mt-32">
          <div className="max-w-2xl">
            <h3 className="text-[1.5rem]">{t.comingTitle}</h3>
            <p className="text-muted-foreground mt-3 text-[1rem] leading-7">{t.comingIntro}</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {comingTools.map((tool) => (
              <ComingCard key={tool.id} tool={tool} locale={locale} />
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  );
}

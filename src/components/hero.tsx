import { Screenshot } from "@/components/screenshot";
import { copy } from "@/content/copy";
import { anchors, type Locale } from "@/content/site";
import { liveTools } from "@/content/tools";
import { button, container } from "@/lib/ui";

/**
 * The opening: a short headline, two sentences, two actions, and then the
 * window itself, so the tools are on screen before anyone scrolls. The window
 * stacks the live tools' screenshots: the first large at the back, the second
 * smaller in front, sitting on the bottom edge of the panel.
 */
export function Hero({ locale }: { locale: Locale }) {
  const t = copy[locale].hero;
  const a = anchors[locale];
  const [back, front] = liveTools.filter((tool) => tool.image);
  return (
    <section className="pt-16 sm:pt-24">
      <div className={container}>
        <p className="text-meta text-[0.8125rem] font-medium">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-[2.75rem] leading-[1.02] tracking-[-0.03em] sm:text-[3.75rem] lg:text-[4.5rem]">
          {t.title}
          <br />
          <span className="text-primary">{t.titleAccent}</span>
        </h1>
        <p className="text-muted-foreground mt-6 max-w-2xl text-[1.125rem] leading-8 sm:text-[1.25rem]">
          {t.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={`#${a.tools}`} className={button("primary", "lg")}>
            {t.ctaPrimary}
          </a>
          <a href={`#${a.dogmas}`} className={button("outline", "lg")}>
            {t.ctaSecondary}
          </a>
        </div>
        <p className="text-meta mt-5 text-[0.875rem]">{t.honesty}</p>
      </div>

      {back?.image ? (
        <div className={`${container} mt-14 sm:mt-16`}>
          <div className="bg-accent relative overflow-hidden rounded-[1.75rem] px-5 pt-5 sm:px-10 sm:pt-10 lg:px-14 lg:pt-14">
            <div className="lg:w-[82%]">
              <Screenshot
                image={back.image}
                locale={locale}
                sizes="(min-width: 1152px) 900px, (min-width: 1024px) 75vw, 100vw"
                priority
                className="rounded-b-none border-b-0 shadow-[0_32px_80px_-32px_oklch(0.245_0.008_75/0.45)]"
              />
            </div>
            {front?.image ? (
              <div className="absolute right-5 bottom-0 hidden w-[47%] lg:block xl:right-8">
                <Screenshot
                  image={front.image}
                  locale={locale}
                  sizes="(min-width: 1152px) 520px, 47vw"
                  priority
                  className="rounded-b-none border-b-0 shadow-[0_32px_80px_-24px_oklch(0.245_0.008_75/0.5)]"
                />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}

import type { LegalPage as LegalContent } from "@/content/legal";
import { site, type Locale } from "@/content/site";
import { container } from "@/lib/ui";

export function LegalPage({ page, locale }: { page: LegalContent; locale: Locale }) {
  return (
    <article className={`${container} py-16 sm:py-24`}>
      <h1 className="text-[2.25rem] leading-[1.05] sm:text-[3rem]">{page.title}</h1>
      <p className="text-meta mt-3 text-xs">
        {page.updatedLabel}: {site.legalUpdated[locale]}
      </p>
      <p className="text-muted-foreground mt-6 max-w-2xl text-[1.0625rem] leading-8">{page.lead}</p>
      <div className="prose-haij mt-4">
        {page.sections.map((section, index) => (
          <section key={section.heading ?? index}>
            {section.heading ? <h2>{section.heading}</h2> : null}
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}

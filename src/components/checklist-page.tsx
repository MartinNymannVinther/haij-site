import { checklist } from "@/content/checklist";
import { site, type Locale } from "@/content/site";
import { container, textLink } from "@/lib/ui";

/** The ten points a tool must tick before it goes in the window. */
export function ChecklistPage({ locale }: { locale: Locale }) {
  const page = checklist[locale];
  return (
    <article className={`${container} py-16 sm:py-24`}>
      <div className="max-w-2xl">
        <h1 className="text-[2.25rem] leading-[1.05] sm:text-[3rem]">{page.title}</h1>
        <p className="text-muted-foreground mt-6 text-[1.0625rem] leading-8">{page.lead}</p>
      </div>
      <ol className="mt-12 grid max-w-3xl gap-x-10 md:grid-cols-2">
        {page.items.map((item, index) => (
          <li
            key={item}
            className="border-hairline grid grid-cols-[2.75rem_1fr] gap-x-2 border-t py-5"
          >
            <span
              className="text-primary text-[1.75rem] leading-none font-semibold tracking-[-0.03em]"
              aria-hidden
            >
              {index + 1}
            </span>
            <p className="text-[0.9375rem] leading-7">{item}</p>
          </li>
        ))}
      </ol>
      <div className="mt-16 max-w-2xl">
        <h2 className="text-[1.5rem]">{page.outroTitle}</h2>
        {page.outro.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            className="text-muted-foreground mt-4 text-[1rem] leading-7"
          >
            {paragraph}
          </p>
        ))}
        <p className="mt-6 text-[1rem]">
          {page.contact}{" "}
          <a href={`mailto:${site.contactEmail}`} className={textLink}>
            {site.contactEmail}
          </a>
        </p>
      </div>
    </article>
  );
}

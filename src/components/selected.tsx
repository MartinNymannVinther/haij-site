import { Section } from "@/components/section";
import { copy } from "@/content/copy";
import { selected } from "@/content/selected";
import { anchors, type Locale } from "@/content/site";
import { textLink } from "@/lib/ui";

/** The second shelf. Renders nothing while the list is empty. */
export function SelectedSection({ locale }: { locale: Locale }) {
  if (selected.length === 0) return null;
  const t = copy[locale].selected;
  const a = anchors[locale];
  return (
    <Section id={a.selected} kicker={t.kicker} title={t.title} intro={t.intro}>
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {selected.map((project) => (
          <li key={project.id} className="bg-card border-border rounded-2xl border p-6">
            <h3 className="text-[1.125rem]">{project.text[locale].name}</h3>
            <p className="text-muted-foreground mt-2 text-[0.9375rem] leading-7">
              {project.text[locale].why}
            </p>
            <p className="text-meta mt-4 flex flex-wrap gap-x-4 text-[0.875rem]">
              <a href={project.url} className={textLink} rel="noopener">
                {t.site}
              </a>
              <a href={project.repoUrl} className={textLink} rel="noopener">
                {t.code}
              </a>
              <span>
                {t.license}: {project.license}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

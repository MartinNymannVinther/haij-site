import { container, kicker } from "@/lib/ui";

/**
 * A front-page section: anchor, kicker, title and intro, then whatever the
 * section shows. The heading block can sit above the content (default) or in
 * a left column that stays put while the content scrolls (layout="split").
 */
export function Section({
  id,
  kicker: kickerText,
  title,
  intro,
  aside,
  layout = "stack",
  tone = "plain",
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  intro?: string;
  aside?: React.ReactNode;
  layout?: "stack" | "split";
  tone?: "plain" | "tinted";
  children: React.ReactNode;
}) {
  const heading = (
    <div className={layout === "split" ? "lg:sticky lg:top-24" : "max-w-2xl"}>
      <p className={kicker}>{kickerText}</p>
      <h2 className="mt-2 text-[2rem] leading-[1.1] sm:text-[2.5rem]">{title}</h2>
      {intro ? (
        <p className="text-muted-foreground mt-4 text-[1.0625rem] leading-7">{intro}</p>
      ) : null}
      {aside}
    </div>
  );
  return (
    <section
      id={id}
      className={
        tone === "tinted"
          ? "bg-secondary/60 border-hairline border-y py-20 sm:py-28"
          : "py-20 sm:py-28"
      }
    >
      <div className={container}>
        {layout === "split" ? (
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">{heading}</div>
            <div className="lg:col-span-8">{children}</div>
          </div>
        ) : (
          <>
            {heading}
            <div className="mt-12">{children}</div>
          </>
        )}
      </div>
    </section>
  );
}

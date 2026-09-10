import type { ToolImage } from "@/content/tools";
import type { Locale } from "@/content/site";

/**
 * A screenshot in a soft frame. The images are 1600x1000 (16:10) WebP in two
 * widths; the browser picks by the rendered size. Plain <img>, because the
 * site is a static export with no image server.
 */
export function Screenshot({
  image,
  locale,
  sizes,
  priority = false,
  className = "",
  cropOnSmall = true,
}: {
  image: ToolImage;
  locale: Locale;
  /** The `sizes` hint for srcset, e.g. "(min-width: 1024px) 640px, 100vw". */
  sizes: string;
  priority?: boolean;
  className?: string;
  /** On narrow screens, show the top-left of the screenshot at readable size instead of the whole thing tiny. */
  cropOnSmall?: boolean;
}) {
  const base = `/images/${image.name}`;
  return (
    <figure
      className={`border-border bg-card overflow-hidden rounded-xl border shadow-[0_24px_60px_-28px_oklch(0.245_0.008_75/0.35)] ${cropOnSmall ? "max-sm:aspect-[4/3]" : ""} ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image server */}
      <img
        src={`${base}-1200.webp`}
        srcSet={`${base}-1200.webp 1200w, ${base}-2000.webp 2000w`}
        sizes={sizes}
        width={1600}
        height={1000}
        alt={image.alt[locale]}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={`block h-auto w-full ${cropOnSmall ? "max-sm:w-[160%] max-sm:max-w-none" : ""}`}
      />
    </figure>
  );
}

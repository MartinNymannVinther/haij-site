import type { MetadataRoute } from "next";
import { paths, site } from "@/content/site";

export const dynamic = "force-static";

/** Every page in both languages, each pointing at its twin in the other. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const keys = Object.keys(paths.da) as (keyof typeof paths.da)[];
  return keys.flatMap((key) =>
    (["da", "en"] as const).map((locale) => ({
      url: `${site.url}${paths[locale][key]}`,
      lastModified: now,
      alternates: {
        languages: { da: `${site.url}${paths.da[key]}`, en: `${site.url}${paths.en[key]}` },
      },
    })),
  );
}

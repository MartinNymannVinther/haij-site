/**
 * Site-wide facts that the pages read. Change them here, nowhere else.
 */
export const site = {
  domain: "haij.dk",
  url: "https://haij.dk",
  /** The organization the code lives under. Point at the Haij organization once it exists. */
  github: "https://github.com/MartinNymannVinther",
  /** Where security holes are reported. Forretning's SECURITY.md speaks for the family until Haij has its own. */
  securityUrl: "https://github.com/MartinNymannVinther/haij/blob/main/SECURITY.md",
  /** The deployment guide readers are pointed at from "Run it yourself". */
  deployGuideUrl: "https://github.com/MartinNymannVinther/haij/blob/main/docs/deploy.md",
  /** Who answers mail about haij.dk, the demos and the privacy policy. */
  contactEmail: "martin@vintherconsulting.dk",
  company: "Vinther Consulting",
  founder: "Martin Nymann Vinther",
  /** Shown on the legal pages. Bump it whenever their wording changes. */
  legalUpdated: { da: "3. september 2026", en: "3 September 2026" },
} as const;

export type Locale = "da" | "en";

/**
 * Danish is the default and lives at the root; English lives under /en.
 * Trailing slashes match next.config's trailingSlash so a plain file server
 * finds the index.html without a redirect.
 */
export const paths: Record<
  Locale,
  { home: string; privacy: string; terms: string; checklist: string }
> = {
  da: { home: "/", privacy: "/privatliv/", terms: "/vilkaar/", checklist: "/klar-til-vinduet/" },
  en: {
    home: "/en/",
    privacy: "/en/privacy/",
    terms: "/en/terms/",
    checklist: "/en/ready-for-the-window/",
  },
};

export const otherLocale: Record<Locale, Locale> = { da: "en", en: "da" };

/** Section anchors on the front page, per language, so links read naturally in both. */
export const anchors: Record<
  Locale,
  { tools: string; coming: string; dogmas: string; ways: string; selected: string; about: string }
> = {
  da: {
    tools: "vaerktoejer",
    coming: "paa-vej",
    dogmas: "dogmer",
    ways: "saadan",
    selected: "udvalgte",
    about: "om",
  },
  en: {
    tools: "tools",
    coming: "coming",
    dogmas: "dogmas",
    ways: "how",
    selected: "selected",
    about: "about",
  },
};

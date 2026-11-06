import type { Locale } from "./site";

export type ChecklistPage = {
  title: string;
  lead: string;
  items: string[];
  outroTitle: string;
  outro: string[];
  contact: string;
};

/**
 * "Ready for the window": the ten things a Haij tool must be able to tick
 * before it goes in the window. The dogmas turned into something one can
 * check on a Friday afternoon. Danish is the text of record.
 */
export const checklist: Record<Locale, ChecklistPage> = {
  da: {
    title: "Klar til vinduet",
    lead: "Før et Haij-værktøj kommer i vinduet, skal det opfylde alle ti punkter. Punkterne er dogmerne gjort konkrete. Værktøjer fra andre på hylden Udvalgte skal kun følge dogmerne, fordi de ikke kører her.",
    items: [
      "Kører i dagligt, rigtigt arbejde hos mig selv eller hos nogen jeg sidder tæt på.",
      "Offentligt repo under AGPL-3.0 med README, deploy-vejledning, SECURITY.md og en liste over underdatabehandlere.",
      "Docker Compose der består testen for egen drift, inklusive en Ollama-kompatibel modeladapter.",
      "Eksport af alt organisationen ejer, og sletning.",
      "Login, adskillelse af organisationer i databasen med en test der beviser det, og auditlog. Gælder alt der kører med rigtige data.",
      "Haij-designsystemet, dansk brugerflade og engelsk klar.",
      "En demo med opdigtede data der nulstilles hver nat.",
      "Kode og historik uden kundedata og kundenavne. Det tjekkes før hvert repo åbnes.",
      "Tests af adskillelse, domænelogik og beregninger.",
      "Privatlivspolitik, databehandleraftale og aftaler med underdatabehandlerne, klar til den dag der kommer rigtige data i.",
    ],
    outroTitle: "Har du et værktøj der hører hjemme her?",
    outro: [
      "Vinduet er ikke kun til det jeg selv har bygget. Har du et værktøj der følger dogmerne, skal det gennem den samme tjekliste som mine egne, og det skal have en navngiven vedligeholder.",
      "Kender du et open source-projekt fra andre som følger dogmerne og bruges i virkeligheden, kan det komme på hylden Udvalgte. Så linker jeg til projektets site og kode og skriver kort hvorfor det står der.",
    ],
    contact: "Skriv til",
  },
  en: {
    title: "Ready for the window",
    lead: "Before a Haij tool goes in the window, it has to meet all ten points. The points are the dogmas made concrete. Tools by others on the Selected shelf only have to follow the dogmas, because they do not run here.",
    items: [
      "Runs in daily, real work for me or for someone I sit close to.",
      "Public repository under AGPL-3.0 with a README, a deployment guide, SECURITY.md and a list of subprocessors.",
      "Docker Compose that passes the self-hosting test, including an Ollama-compatible model adapter.",
      "Export of everything the organization owns, and deletion.",
      "Login, separation of organizations in the database with a test that proves it, and an audit log. Applies to everything running with real data.",
      "The Haij design system, a Danish interface and English ready.",
      "A demo on made-up data that resets every night.",
      "Code and history without customer data and customer names. This is checked before every repository is opened.",
      "Tests of separation, domain logic and calculations.",
      "A privacy policy, a data processing agreement and agreements with the subprocessors, ready for the day real data goes in.",
    ],
    outroTitle: "Have a tool that belongs here?",
    outro: [
      "The window is not only for what I have built. If you have a tool that follows the dogmas, it goes through the same checklist as my own, and it needs a named maintainer.",
      "If you know an open source project by others that follows the dogmas and is used for real, it can go on the Selected shelf. I then link to the project's site and code and write briefly why it is there.",
    ],
    contact: "Write to",
  },
};

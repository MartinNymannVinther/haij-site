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
    lead: "Før et Haij-værktøj kommer i vinduet, skal det kunne sætte kryds ved alle ti punkter. Listen er dogmerne omsat til noget man kan tjekke en fredag eftermiddag. For værktøjer fra andre på hylden Udvalgte gælder dogmerne, ikke hele listen, for vi hoster dem ikke.",
    items: [
      "Kører i dagligt, rigtigt arbejde hos os selv eller hos en kunde vi sidder tæt på.",
      "Offentligt repo under AGPL-3.0 med README, deploy-vejledning, SECURITY.md og en liste over underdatabehandlere.",
      "Docker Compose der består testen for egen drift, inklusive en Ollama-kompatibel modeladapter.",
      "Eksport af alt organisationen ejer, og sletning.",
      "Login, adskillelse af organisationer i databasen med en test der beviser det, og auditlog. Gælder alt der hostes med rigtige data.",
      "Haij-designsystemet, dansk brugerflade og engelsk klar.",
      "En demo med opdigtede data der nulstilles hver nat.",
      "Kode og historik uden kundedata og kundenavne. Vi lærte det på den hårde måde, og det tjekkes før hvert repo åbnes.",
      "Tests på det der betyder noget: adskillelse, domænelogik og tal.",
      "Privatlivspolitik, databehandleraftale i ansøgningsflowet og aftaler med underdatabehandlerne.",
    ],
    outroTitle: "Har du et værktøj der hører hjemme her?",
    outro: [
      "Vinduet er ikke forbeholdt det vi selv har bygget. Deler du et værktøj der lever op til dogmerne, går det gennem samme tjekliste som vores egne, og det skal have en navngiven vedligeholder. Et værktøj uden ejer i vinduet er vores problem den dag det går i stykker.",
      "Kender du et stærkt open source-projekt fra andre, som lever op til dogmerne og har et rigtigt brugssted, hører det hjemme på hylden Udvalgte. Der linker vi til projektets eget site og kode og skriver tre linjer om hvorfor det står der.",
    ],
    contact: "Skriv til",
  },
  en: {
    title: "Ready for the window",
    lead: "Before a Haij tool goes in the window, it must be able to tick all ten points. The list is the dogmas turned into something you can check on a Friday afternoon. For tools by others on the Selected shelf, the dogmas apply, not the whole list, because we do not host them.",
    items: [
      "Runs in daily, real work for us or for a customer we sit close to.",
      "Public repository under AGPL-3.0 with a README, a deployment guide, SECURITY.md and a list of subprocessors.",
      "Docker Compose that passes the self-hosting test, including an Ollama-compatible model adapter.",
      "Export of everything the organization owns, and deletion.",
      "Login, separation of organizations in the database with a test that proves it, and an audit log. Applies to everything hosted with real data.",
      "The Haij design system, a Danish interface and English ready.",
      "A demo on made-up data that resets every night.",
      "Code and history without customer data and customer names. We learned that the hard way, and it is checked before every repository is opened.",
      "Tests on what matters: separation, domain logic and numbers.",
      "A privacy policy, a data processing agreement in the application flow and agreements with the subprocessors.",
    ],
    outroTitle: "Have a tool that belongs here?",
    outro: [
      "The window is not reserved for what we built ourselves. If you share a tool that lives up to the dogmas, it goes through the same checklist as our own, and it needs a named maintainer. A tool without an owner in the window is our problem the day it breaks.",
      "If you know a strong open source project by others that lives up to the dogmas and has a real place of use, it belongs on the Selected shelf. There we link to the project's own site and code and write three lines about why it is there.",
    ],
    contact: "Write to",
  },
};

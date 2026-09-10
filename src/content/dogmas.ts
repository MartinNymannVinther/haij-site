import type { Locale } from "./site";

export type Dogma = { title: string; text: string };

/**
 * The seven Haij dogmas. The Danish wording is the author's own and is the
 * text of record: quote it, do not edit it. The English is a translation for
 * readers abroad; when the two disagree, the Danish wins.
 */
export const dogmas: Record<Locale, Dogma[]> = {
  da: [
    {
      title: "Ægte open source.",
      text: "Al kode ligger offentligt under AGPL-3.0. Alt vi driver, kan hentes 1:1 og køres et andet sted eller lokalt, og der findes ingen funktioner der kun kan fås på haij.dk. En betalt udgave er i orden, men den bygger på den samme kode. Kloner man repoet, får man præcis det der kører på haij.dk.",
    },
    {
      title: "Egen drift.",
      text: "Hvert værktøj kan køre i eget driftsmiljø på én server med Docker Compose, en Postgres og en lokal sprogmodel gennem Ollama, uden en eneste nøgle til en sky. Funktioner der forudsætter en ekstern tjeneste, som CVR-opslag eller e-faktura, siger det direkte og lader resten virke i stedet for at gå i stykker. Testen er enkel: afbryd forbindelsen til internettet, og alt væsentligt skal stadig virke.",
    },
    {
      title: "Dine data, altid.",
      text: "Alt en organisation ejer kan hentes ud med ét klik i åbne formater (regneark, JSON, PDF) uden at spørge nogen, og slettes helt igen. At forlade Haij skal kunne gøres med få klik uden unødvendig friktion, og vi hjælper gerne med flytningen frem for at gøre den besværlig.",
    },
    {
      title: "EU eller egen drift.",
      text: "Når vi hoster, ligger alt hos EU-ejede leverandører på EU-jord, sprogmodeller inklusive, og hvert værktøj har en offentlig liste over hvem der kan se hvad. Ingen amerikansk sky i driften. Koden ligger på GitHub, som er kodehosting og ikke kundedata; et spejl hos en europæisk forge kommer den dag det giver mening.",
    },
    {
      title: "AI'en hjælper, mennesket bestemmer.",
      text: "AI må foreslå, skrive udkast og rette i planer, men aldrig sende noget ud af ”huset”, slette noget eller forpligte nogen uden at et menneske har sagt ja. Alt AI gør, kan fortrydes. Indhold hentet udefra behandles som data, aldrig som instruktioner.",
    },
    {
      title: "Sikkerhed fra første dag.",
      text: "Organisationers data er adskilt i databasen, ikke kun i koden, og der skal være en test der beviser det. Alle ændringer registreres i en log der ikke kan redigeres. Passkeys og totrinslogin er der fra start, der er en offentlig vej til at melde sikkerhedshuller, og der ligger aldrig hemmeligheder i koden.",
    },
    {
      title: "Brugt i virkeligheden.",
      text: "Intet af det vi selv har bygget kommer i vinduet før det har kørt rigtigt arbejde, hos os selv eller hos en kunde vi sidder tæt på. Værktøjer fra andre skal have et rigtigt brugssted vi kan pege på. Vi skal ikke have værktøjer liggende som ikke har skabt reel værdi i virkeligheden.",
    },
  ],
  en: [
    {
      title: "Real open source.",
      text: "All code is public under AGPL-3.0. Everything we run can be downloaded 1:1 and run somewhere else or locally, and there are no features that can only be had on haij.dk. A paid edition is fine, but it is built on the same code. Clone the repository and you get exactly what runs on haij.dk.",
    },
    {
      title: "Run it yourself.",
      text: "Every tool can run in your own environment on a single server with Docker Compose, a Postgres and a local language model through Ollama, without a single key to any cloud. Features that depend on an external service, such as company register lookups or e-invoicing, say so plainly and let the rest work instead of breaking. The test is simple: cut the internet connection, and everything essential must still work.",
    },
    {
      title: "Your data, always.",
      text: "Everything an organization owns can be taken out with one click in open formats (spreadsheet, JSON, PDF) without asking anyone, and deleted completely again. Leaving Haij must take a few clicks and no unnecessary friction, and we would rather help with the move than make it hard.",
    },
    {
      title: "EU, or your own servers.",
      text: "When we host, everything sits with EU-owned providers on EU soil, language models included, and every tool has a public list of who can see what. No American cloud in operations. The code lives on GitHub, which is code hosting and not customer data; a mirror at a European forge comes the day it makes sense.",
    },
    {
      title: "AI assists, people decide.",
      text: "AI may suggest, draft and adjust plans, but never send anything out of the house, delete anything or commit anyone without a person saying yes. Everything AI does can be undone. Content fetched from outside is treated as data, never as instructions.",
    },
    {
      title: "Security from day one.",
      text: "Organizations' data is separated in the database, not only in the code, and there must be a test that proves it. Every change is recorded in a log that cannot be edited. Passkeys and two-step login are there from the start, there is a public way to report security holes, and there are never secrets in the code.",
    },
    {
      title: "Used for real.",
      text: "Nothing we have built ourselves goes in the window before it has done real work, for us or for a customer we sit close to. Tools from others must have a real place of use we can point to. We do not keep tools around that have not created real value in practice.",
    },
  ],
};

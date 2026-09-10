import type { Locale } from "./site";

/**
 * "live" runs real work today, "new" is live but fresh, "coming" exists and is
 * on its way into the window. Live and new tools get a full row with a
 * screenshot; coming tools get a compact card without one, so the status is
 * visible in the layout itself, not only in a chip.
 */
export type ToolStatus = "live" | "new" | "coming";

export type ToolImage = {
  /** Base name under public/images; the -1200 and -2000 WebP variants must exist. */
  name: string;
  alt: Record<Locale, string>;
};

export type Tool = {
  id: string;
  /** Where the hosted instance lives, or will live. Shown as-is under the name. */
  host: string;
  status: ToolStatus;
  /** The hosted instance. Omit until it is actually reachable. */
  url?: string;
  /** Where one applies for access. Omit until the flow exists. */
  applyUrl?: string;
  /** A demo anyone can open without an account. Omit until it is switched on in production. */
  demoUrl?: string;
  /** The public repository. Omit until the repository is public. */
  repoUrl?: string;
  /** A screenshot of the tool in use, on made-up data only. */
  image?: ToolImage;
  text: Record<Locale, { name: string; tagline: string; description: string; note: string }>;
};

export const tools: Tool[] = [
  {
    id: "forretning",
    host: "app.haij.dk",
    status: "live",
    url: "https://app.haij.dk",
    applyUrl: "https://app.haij.dk/register",
    repoUrl: "https://github.com/MartinNymannVinther/haij",
    image: {
      name: "forretning-overblik",
      alt: {
        da: "Overblikket i Forretning: timer denne uge, uafregnet, udestående, ugen indtil nu og det der skal handles på",
        en: "The overview in Forretning: hours this week, unbilled, outstanding, the week so far and what needs action",
      },
    },
    text: {
      da: {
        name: "Forretning",
        tagline: "Kunder, timer og fakturaer. Uden bøvl.",
        description:
          "Forretningsplatformen til selvstændige og små virksomheder: kunder via CVR-opslag, timer, fakturaer der overholder danske krav, økonomi og lette projekter. Dertil signaler om nye muligheder, et videncenter og en MCP-server, så din AI-assistent kan læse dine tal og skrive udkast. Sende noget må den ikke.",
        note: "I daglig drift siden september 2026. Adgang efter ansøgning.",
      },
      en: {
        name: "Forretning",
        tagline: "Customers, hours and invoices. No fuss.",
        description:
          "The business platform for solo consultants and small companies: customers from the Danish company register, hours, invoices that meet Danish requirements, finances and light project management. On top of that, signals about new opportunities, a knowledge center and an MCP server so your AI assistant can read your numbers and write drafts. It is not allowed to send anything.",
        note: "In daily use since September 2026. Access on application.",
      },
    },
  },
  {
    id: "ajour",
    host: "ajour.haij.dk",
    status: "new",
    url: "https://ajour.haij.dk",
    applyUrl: "https://ajour.haij.dk/register",
    repoUrl: "https://github.com/MartinNymannVinther/ajour",
    // demoUrl: "https://ajour.haij.dk/demo"  <- add when the demo is switched on in production.
    image: {
      name: "ajour-projekt",
      alt: {
        da: "Et projekt i Ajour: opgaver, næste milepæl, forhindringer, økonomi og en tidslinje uge for uge",
        en: "A project in Ajour: tasks, next milestone, obstacles, budget and a week-by-week timeline",
      },
    },
    text: {
      da: {
        name: "Ajour",
        tagline: "Planen der holder sig selv opdateret.",
        description:
          "Projektværktøjet til små projekter med 2 til 10 deltagere. Beskriv projektet i almindeligt sprog og få mål, milepæle og opgaver. AI'en skriver ugens status og foreslår ændringer når virkeligheden flytter sig. Du siger ja eller nej, og alt kan fortrydes.",
        note: "Nyeste medlem af familien. I drift siden september 2026, og kanterne er stadig varme.",
      },
      en: {
        name: "Ajour",
        tagline: "The plan that keeps itself up to date.",
        description:
          "The project tool for small projects with 2 to 10 people. Describe the project in plain language and get goals, milestones and tasks. The AI writes the weekly status and suggests changes when reality moves. You say yes or no, and everything can be undone.",
        note: "The newest member of the family. Live since September 2026, still warm from the oven.",
      },
    },
  },
  {
    id: "portefolje",
    host: "portefolje.haij.dk",
    status: "coming",
    text: {
      da: {
        name: "Portefølje",
        tagline: "Kvartalsrytmen for en portefølje.",
        description:
          "Idéer, initiativkort, kapacitet, prioriteringsmøde, statusrapporter og beslutningslog, plus et projektrum med faser, beslutningspunkter, risici og gevinster. Bygget til og brugt hos en kunde. Kommer i vinduet når den er gjort generisk.",
        note: "På vej",
      },
      en: {
        name: "Portefølje",
        tagline: "The quarterly rhythm of a portfolio.",
        description:
          "Ideas, initiative cards, capacity, the prioritization meeting, status reports and a decision log, plus a project room with phases, decision points, risks and benefits. Built for and used at a customer. Goes in the window once it has been made generic.",
        note: "Coming",
      },
    },
  },
  {
    id: "chat",
    host: "chat.haij.dk",
    status: "coming",
    text: {
      da: {
        name: "Chat",
        tagline: "Chat med de modeller du selv vælger.",
        description:
          "EU-hostede skymodeller eller lokale modeller gennem Ollama, med filupload og eksport til Word. Med en lokal model forlader hverken spørgsmål, filer eller svar din maskine. Det mindste løft af de fire, så den kommer nok først.",
        note: "På vej",
      },
      en: {
        name: "Chat",
        tagline: "Chat with the models you choose.",
        description:
          "EU-hosted cloud models or local models through Ollama, with file upload and export to Word. With a local model, neither questions, files nor answers leave your machine. The smallest lift of the four, so it will probably arrive first.",
        note: "Coming",
      },
    },
  },
];

export const liveTools = tools.filter((tool) => tool.status !== "coming");
export const comingTools = tools.filter((tool) => tool.status === "coming");

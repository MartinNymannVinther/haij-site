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
        note: "I drift siden september 2026, og kanterne er stadig varme.",
      },
      en: {
        name: "Ajour",
        tagline: "The plan that keeps itself up to date.",
        description:
          "The project tool for small projects with 2 to 10 people. Describe the project in plain language and get goals, milestones and tasks. The AI writes the weekly status and suggests changes when reality moves. You say yes or no, and everything can be undone.",
        note: "Live since September 2026, still warm from the oven.",
      },
    },
  },
  {
    id: "domino",
    host: "domino.haij.dk",
    status: "new",
    url: "https://domino.haij.dk",
    applyUrl: "https://domino.haij.dk/register",
    demoUrl: "https://domino.haij.dk/demo",
    repoUrl: "https://github.com/MartinNymannVinther/domino",
    image: {
      name: "domino-nyt-flow",
      alt: {
        da: "Et nyt flow i Domino: et felt til at beskrive hvad flowet skal gøre, og tre eksempler at starte fra",
        en: "A new flow in Domino: a field to describe what the flow should do, and three examples to start from",
      },
    },
    text: {
      da: {
        name: "Domino",
        tagline: "Stil brikkerne op. Skub til den første.",
        description:
          'Den visuelle flow-bygger til AI-arbejdsgange, for folk der ikke programmerer. Beskriv hvad du vil have, fx "læs de to hundrede ansøgninger, træk fem punkter ud af hver og sæt dem i en tabel", og modellen stiller brikkerne op: input, sprogmodel, skema, dokument, hvis/ellers, løkke, kombinér, skabelon, output. Ret i det på lærredet eller i samtalen, test på ét eksempel, kør hele bunken og se det ske brik for brik. Et flow er én fil, du kan eksportere, importere og lægge under versionsstyring. Kører hos Mistral i EU eller på din egen maskine med Ollama.',
        note: "Ny i vinduet, september 2026. Version 0.9 er bygget færdig, men den første rigtige bunke er ikke kørt igennem endnu. Prøv demoen uden konto, eller ansøg om adgang.",
      },
      en: {
        name: "Domino",
        tagline: "Line the bricks up. Push the first one.",
        description:
          'The visual flow builder for AI workflows, for people who do not program. Say what you want, such as "read the two hundred applications, pull five points out of each and put them in a table", and the model lines up the bricks: input, language model, schema, document, if/else, loop, combine, template, output. Change it on the canvas or in the conversation, test on one example, run the whole pile and watch it happen brick by brick. A flow is one file you can export, import and keep under version control. Runs at Mistral in the EU or on your own machine with Ollama.',
        note: "New in the window, September 2026. Version 0.9 is built, but the first real pile has not been run through it yet. Try the demo without an account, or apply for access.",
      },
    },
  },
  {
    id: "makker",
    host: "makker.haij.dk",
    status: "new",
    url: "https://makker.haij.dk",
    applyUrl: "https://makker.haij.dk/register",
    demoUrl: "https://makker.haij.dk/demo",
    repoUrl: "https://github.com/MartinNymannVinther/makker",
    image: {
      name: "makker-start",
      alt: {
        da: "Startskærmen i Makker: et skrivefelt, valg af rolle og et bibliotek af opgaver, fx svar på en henvendelse, et notat og en mødeindkaldelse",
        en: "The start screen in Makker: a writing field, a role picker and a library of tasks such as answering an enquiry, a memo and a meeting invitation",
      },
    },
    text: {
      da: {
        name: "Makker",
        tagline: "En at tænke højt med.",
        description:
          "Chatten oven på sprogmodeller der bliver i EU eller på din egen server. Skriv som du taler, vedhæft et referat eller et udkast, vælg en rolle, fx sparringspartner, djævlens advokat eller sprogvasker, og læs svaret mens det skrives. Bed om et notat eller et oplæg og hent det som Word eller PowerPoint. Et filter i browseren stopper personoplysninger før de forlader maskinen, og hver samtale er din egen: ingen andre i arbejdsrummet kan se den, heller ikke chefen. Kører hos Mistral i EU eller på din egen maskine med Ollama.",
        note: "Ny i vinduet, september 2026. Version 0.9 er bygget færdig, men den første rigtige uges tænken højt mangler stadig. Prøv demoen uden konto, eller ansøg om adgang.",
      },
      en: {
        name: "Makker",
        tagline: "Someone to think out loud with.",
        description:
          "The chat on top of language models that stay in the EU or on your own server. Write the way you talk, attach minutes or a draft, pick a role such as sparring partner, devil's advocate or plain-language editor, and read the answer as it is written. Ask for a memo or a deck and download it as Word or PowerPoint. A filter in the browser stops personal data before it leaves the machine, and every conversation is your own: nobody else in the workspace can see it, not the boss either. Runs at Mistral in the EU or on your own machine with Ollama.",
        note: "New in the window, September 2026. Version 0.9 is built, but the first real week of thinking out loud is still to come. Try the demo without an account, or apply for access.",
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
];

export const liveTools = tools.filter((tool) => tool.status !== "coming");
export const comingTools = tools.filter((tool) => tool.status === "coming");

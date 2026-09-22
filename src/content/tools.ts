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
        tagline: "Kunder, timer og fakturaer på ét sted.",
        description:
          "Til selvstændige og små virksomheder der vil have styr på kunder, timer og fakturaer uden at købe et stort system. Kunder slås op i CVR, fakturaerne overholder de danske krav, og økonomi og små projekter ligger ved siden af. Der er også et videncenter og en MCP-server, så din AI-assistent kan læse dine tal og skrive udkast. Sende noget må den ikke.",
        note: "Vi bruger den selv hver dag og har gjort det siden september 2026. Adgang efter ansøgning.",
      },
      en: {
        name: "Forretning",
        tagline: "Customers, hours and invoices in one place.",
        description:
          "For solo consultants and small companies that want to keep track of customers, hours and invoices without buying a big system. Customers are looked up in the Danish company register, invoices meet the Danish requirements, and finances and small projects sit alongside. There is also a knowledge center and an MCP server, so your AI assistant can read your numbers and write drafts. It is not allowed to send anything.",
        note: "We use it ourselves every day and have since September 2026. Access on application.",
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
        tagline: "En plan der følger med virkeligheden.",
        description:
          "Til små projekter med 2 til 10 deltagere. Beskriv projektet med dine egne ord og få mål, milepæle og opgaver at starte fra. Hver uge skriver AI'en et udkast til status og foreslår ændringer, når virkeligheden har flyttet sig. Du siger ja eller nej, og alt kan fortrydes.",
        note: "I drift siden september 2026. Stadig ung, så sig til hvis du støder på noget der driller.",
      },
      en: {
        name: "Ajour",
        tagline: "A plan that keeps up with reality.",
        description:
          "For small projects with 2 to 10 people. Describe the project in your own words and get goals, milestones and tasks to start from. Every week the AI drafts the status and suggests changes when reality has moved. You say yes or no, and everything can be undone.",
        note: "Live since September 2026. Still young, so tell us if something gets in your way.",
      },
    },
  },
  {
    id: "tavle",
    host: "tavle.haij.dk",
    status: "new",
    url: "https://tavle.haij.dk",
    applyUrl: "https://tavle.haij.dk/register",
    demoUrl: "https://tavle.haij.dk/demo",
    repoUrl: "https://github.com/MartinNymannVinther/tavle",
    image: {
      name: "tavle-board",
      alt: {
        da: "Et Kanban-board i Tavle: kolonnerne Backlog, Klar, I gang og Færdig, og en WIP-grænse der er overskredet i I gang",
        en: "A Kanban board in Tavle: the columns Backlog, Ready, In progress and Done, and a WIP limit exceeded in In progress",
      },
    },
    text: {
      da: {
        name: "Tavle",
        tagline: "Kanban og Scrum, uden at det bliver et system.",
        description:
          "Et board til teams på to til femten: produktteamet, driftsteamet, foreningens app-projekt. Kør Kanban med WIP-grænser der advarer men aldrig forbyder, eller Scrum med en backlog og ét sprint ad gangen. Burndown, velocity, gennemløb og cyklustid regnes ud fra det der faktisk skete med kortene, ikke fra et skøn. AI'en kan skrive et kort færdigt, foreslå en opdeling, fortælle sprintets historie og lave et første udkast til backlog og roadmap ud fra jeres egen tekst. Du retter og siger ja.",
        note: "Ny, september 2026. Version 0.11 er færdig som produkt, og nu mangler den et rigtigt team på et rigtigt board. Prøv demoen uden konto, eller ansøg om adgang.",
      },
      en: {
        name: "Tavle",
        tagline: "Kanban and Scrum, without it becoming a system.",
        description:
          "A board for teams of two to fifteen: the product team, the ops team, the association's app project. Run Kanban with WIP limits that warn but never forbid, or Scrum with a backlog and one sprint at a time. Burndown, velocity, throughput and cycle time are computed from what actually happened to the cards, not from an estimate. The AI can finish writing a card, suggest a split, tell the sprint's story and make a first draft of backlog and roadmap from your own text. You edit and say yes.",
        note: "New, September 2026. Version 0.11 is complete as a product, and now it needs a real team on a real board. Try the demo without an account, or apply for access.",
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
      name: "domino-flow",
      alt: {
        da: "Et flow i Domino: brikker for løkke, dokument, struktureret output og skema, med panelet for én brik åbent med prompt og felter",
        en: "A flow in Domino: bricks for loop, document, structured output and schema, with one brick's panel open showing its prompt and fields",
      },
    },
    text: {
      da: {
        name: "Domino",
        tagline: "Stil brikkerne op. Skub til den første.",
        description:
          'En visuel flow-bygger til AI-arbejdsgange, for folk der ikke programmerer. Du fortæller hvad du vil have, fx "læs de to hundrede ansøgninger, træk fem punkter ud af hver og sæt dem i en tabel", og modellen stiller brikkerne op. Du retter på lærredet eller i samtalen, tester på ét eksempel og kører så hele bunken og ser det ske brik for brik. Et flow er én fil, som du kan eksportere, importere og lægge under versionsstyring. Kører hos Mistral i EU eller på din egen maskine med Ollama.',
        note: "Ny, september 2026. Version 0.9 er bygget færdig, og nu mangler den første rigtige bunke. Prøv demoen uden konto, eller ansøg om adgang.",
      },
      en: {
        name: "Domino",
        tagline: "Line the bricks up. Push the first one.",
        description:
          'A visual flow builder for AI workflows, for people who do not program. You say what you want, such as "read the two hundred applications, pull five points out of each and put them in a table", and the model lines up the bricks. You adjust it on the canvas or in the conversation, test on one example, then run the whole pile and watch it happen brick by brick. A flow is one file you can export, import and keep under version control. Runs at Mistral in the EU or on your own machine with Ollama.',
        note: "New, September 2026. Version 0.9 is built, and now it needs the first real pile. Try the demo without an account, or apply for access.",
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
          "En chat oven på sprogmodeller der bliver i EU eller på din egen server. Skriv som du taler, vedhæft et referat eller et udkast, vælg en rolle, fx sparringspartner, djævlens advokat eller sprogvasker, og læs svaret mens det skrives. Bed om et notat eller et oplæg og hent det som Word eller PowerPoint. Et filter i browseren stopper personoplysninger før de forlader maskinen, og hver samtale er din egen: ingen andre i arbejdsrummet kan se den, heller ikke chefen. Kører hos Mistral i EU eller på din egen maskine med Ollama.",
        note: "Ny, september 2026. Version 0.9 er bygget færdig, og nu mangler den første rigtige uge med tænken højt. Prøv demoen uden konto, eller ansøg om adgang.",
      },
      en: {
        name: "Makker",
        tagline: "Someone to think out loud with.",
        description:
          "A chat on top of language models that stay in the EU or on your own server. Write the way you talk, attach minutes or a draft, pick a role such as sparring partner, devil's advocate or plain-language editor, and read the answer as it is written. Ask for a memo or a deck and download it as Word or PowerPoint. A filter in the browser stops personal data before it leaves the machine, and every conversation is your own: nobody else in the workspace can see it, not the boss either. Runs at Mistral in the EU or on your own machine with Ollama.",
        note: "New, September 2026. Version 0.9 is built, and now it needs the first real week of thinking out loud. Try the demo without an account, or apply for access.",
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
          "Idéer, initiativkort, kapacitet, prioriteringsmøde, statusrapporter og beslutningslog, og et projektrum med faser, beslutningspunkter, risici og gevinster. Den er bygget til og bruges hos en kunde, og kommer i vinduet når vi har gjort den generisk.",
        note: "På vej",
      },
      en: {
        name: "Portefølje",
        tagline: "The quarterly rhythm of a portfolio.",
        description:
          "Ideas, initiative cards, capacity, the prioritization meeting, status reports and a decision log, and a project room with phases, decision points, risks and benefits. It was built for and is used at a customer, and goes in the window once we have made it generic.",
        note: "Coming",
      },
    },
  },
];

export const liveTools = tools.filter((tool) => tool.status !== "coming");
export const comingTools = tools.filter((tool) => tool.status === "coming");

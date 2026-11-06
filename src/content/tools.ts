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
  /** Where the tool lives, or will live. Shown as-is under the name. */
  host: string;
  status: ToolStatus;
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
          "Til selvstændige og små virksomheder der vil have styr på kunder, timer og fakturaer uden at købe et stort system. Kunder slås op i CVR, og fakturaerne overholder de danske krav. Der er også økonomi, små projekter, et videncenter og en MCP-server, så din AI-assistent kan læse dine tal og skrive udkast, men ikke sende noget.",
        note: "Jeg har brugt den hver dag siden september 2026. Der er ingen demo endnu, men koden er åben.",
      },
      en: {
        name: "Forretning",
        tagline: "Customers, hours and invoices in one place.",
        description:
          "For solo consultants and small companies that want to keep track of customers, hours and invoices without buying a big system. Customers are looked up in the Danish company register, and invoices meet the Danish requirements. There are also finances, small projects, a knowledge center and an MCP server, so your AI assistant can read your numbers and write drafts, but not send anything.",
        note: "I have used it every day since September 2026. There is no demo yet, but the code is open.",
      },
    },
  },
  {
    id: "ajour",
    host: "ajour.haij.dk",
    status: "new",
    repoUrl: "https://github.com/MartinNymannVinther/ajour",
    demoUrl: "https://ajour.haij.dk/demo",
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
          "Til små projekter med 2 til 10 deltagere. Du beskriver projektet med dine egne ord og får mål, milepæle og opgaver at starte fra. Hver uge skriver AI'en et udkast til status og foreslår ændringer til planen. Du godkender selv ændringerne, og de kan fortrydes.",
        note: "I brug siden september 2026. Du kan prøve demoen uden konto eller køre den selv. Sig til hvis du finder fejl.",
      },
      en: {
        name: "Ajour",
        tagline: "A plan that keeps up with reality.",
        description:
          "For small projects with 2 to 10 people. You describe the project in your own words and get goals, milestones and tasks to start from. Every week the AI drafts a status and suggests changes to the plan. You approve the changes yourself, and they can be undone.",
        note: "In use since September 2026. You can try the demo without an account or run it yourself. Let me know if you find bugs.",
      },
    },
  },
  {
    id: "tavle",
    host: "tavle.haij.dk",
    status: "new",
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
          "Et board til teams på to til femten. Du kan køre Kanban med WIP-grænser der advarer uden at blokere, eller Scrum med en backlog og ét sprint ad gangen. Burndown, velocity, gennemløb og cyklustid beregnes ud fra det der faktisk er sket med kortene. AI'en kan skrive kort færdige, foreslå en opdeling, opsummere sprintet og lave et første udkast til backlog og roadmap ud fra jeres egen tekst.",
        note: "Ny i september 2026, version 0.11. Den er bygget færdig, men er endnu ikke brugt af et rigtigt team. Du kan prøve demoen uden konto eller køre den selv.",
      },
      en: {
        name: "Tavle",
        tagline: "Kanban and Scrum, without it becoming a system.",
        description:
          "A board for teams of two to fifteen. You can run Kanban with WIP limits that warn without blocking, or Scrum with a backlog and one sprint at a time. Burndown, velocity, throughput and cycle time are calculated from what actually happened to the cards. The AI can finish writing cards, suggest a split, summarize the sprint and make a first draft of backlog and roadmap from your own text.",
        note: "New in September 2026, version 0.11. It is built, but no real team has used it yet. You can try the demo without an account or run it yourself.",
      },
    },
  },
  {
    id: "domino",
    host: "domino.haij.dk",
    status: "new",
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
          'En visuel flow-bygger til AI-arbejdsgange, for folk der ikke programmerer. Du fortæller hvad du vil have, fx "læs de to hundrede ansøgninger, træk fem punkter ud af hver og sæt dem i en tabel", og modellen stiller brikkerne op. Du retter på lærredet eller i samtalen, tester på ét eksempel og kører så det hele. Et flow er én fil som du kan eksportere, importere og lægge under versionsstyring. Kører hos Mistral i EU eller på din egen maskine med Ollama.',
        note: "Ny i september 2026, version 0.9. Den er bygget færdig, men er endnu ikke brugt på en rigtig opgave. Du kan prøve demoen uden konto eller køre den selv.",
      },
      en: {
        name: "Domino",
        tagline: "Line the bricks up. Push the first one.",
        description:
          'A visual flow builder for AI workflows, for people who do not program. You say what you want, such as "read the two hundred applications, pull five points out of each and put them in a table", and the model lines up the bricks. You adjust it on the canvas or in the conversation, test on one example and then run all of it. A flow is one file you can export, import and keep under version control. Runs at Mistral in the EU or on your own machine with Ollama.',
        note: "New in September 2026, version 0.9. It is built, but has not been used on a real task yet. You can try the demo without an account or run it yourself.",
      },
    },
  },
  {
    id: "makker",
    host: "makker.haij.dk",
    status: "new",
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
          "En chat oven på sprogmodeller der bliver i EU eller på din egen server. Du kan vedhæfte et referat eller et udkast og vælge en rolle, fx sparringspartner, djævlens advokat eller sprogvasker. Beder du om et notat eller et oplæg, kan du hente det som Word eller PowerPoint. Et filter i browseren stopper personoplysninger før de forlader maskinen, og andre i arbejdsrummet kan ikke se dine samtaler. Kører hos Mistral i EU eller på din egen maskine med Ollama.",
        note: "Ny i september 2026, version 0.9. Den er bygget færdig, men er endnu ikke brugt i rigtigt arbejde. Du kan prøve demoen uden konto eller køre den selv.",
      },
      en: {
        name: "Makker",
        tagline: "Someone to think out loud with.",
        description:
          "A chat on top of language models that stay in the EU or on your own server. You can attach minutes or a draft and pick a role such as sparring partner, devil's advocate or plain-language editor. If you ask for a memo or a deck, you can download it as Word or PowerPoint. A filter in the browser stops personal data before it leaves the machine, and others in the workspace cannot see your conversations. Runs at Mistral in the EU or on your own machine with Ollama.",
        note: "New in September 2026, version 0.9. It is built, but has not been used in real work yet. You can try the demo without an account or run it yourself.",
      },
    },
  },
  {
    id: "kadence",
    host: "kadence.haij.dk",
    status: "new",
    demoUrl: "https://kadence.haij.dk/demo",
    repoUrl: "https://github.com/MartinNymannVinther/kadence",
    image: {
      name: "kadence-rulle",
      alt: {
        da: "Rulle i Kadence: en tur på hometrainer med 195 watt mod et mål på 187, kadence og puls i store tal, et landskab med rytteren på vejen og dagens pas som intervalbjælke i bunden",
        en: "Rulle in Kadence: an indoor ride with 195 watts against a target of 187, cadence and heart rate in big numbers, a landscape with the rider on the road and the day's session as an interval bar along the bottom",
      },
    },
    text: {
      da: {
        name: "Kadence",
        tagline: "Unge ryttere i den rigtige kadence.",
        description:
          "Træningsplanlægning til unge landevejsryttere i U17, U19 og U23, deres trænere og deres forældre. Træneren lægger træningspas i kalenderen, på cyklen og i styrkerummet, og sæsonplanen starter fra Cykling Danmarks anbefalinger for årgangen. Rytteren kan koble sin Garmin direkte på, når rytteren selv har sagt ja. Så kommer de planlagte cykelpas selv over på Garminen, og turene kommer selv tilbage og lander på det pas de hørte til. En tur kan også komme ind som en FIT-fil eller en deling fra telefonen. Træningsbelastningen kan regnes ud uden wattmåler, og rytterens korte check-in viser træneren hvem der har brug for en snak. Rytteren bestemmer hvad forældrene kan se. Til hometraineren er der Rulle, som forbinder sig over Bluetooth og holder watten i hver blok. Du kører på rigtige ruter som Himmelbjerget og bakkerne ved Vejle eller på din egen GPX, og turen lander på passet bagefter. Hvis holdet slår det til, kan AI'en foreslå ugen, og træneren bestemmer. Kører hos Mistral i EU eller på din egen maskine med Ollama.",
        note: "Ny i oktober 2026, version 0.9. Garmin-integrationen og Rulle virker, og Rulle er kørt på en rigtig hometrainer. Kadence har endnu ikke været igennem en vinter med et rigtigt hold. Du kan prøve demoen uden konto eller køre den selv.",
      },
      en: {
        name: "Kadence",
        tagline: "Young riders at the right cadence.",
        description:
          "Training planning for young road cyclists in U17, U19 and U23, their coaches and their parents. The coach plans training sessions in the calendar, on the bike and in the gym, and the season plan starts from Cycling Denmark's recommendations for the age class. Riders can connect their Garmin directly once they have said yes themselves. Planned bike sessions then go to the Garmin by themselves, and rides come back by themselves and land on the session they belonged to. A ride can also come in as a FIT file or a share from the phone. Training load can be worked out without a power meter, and the rider's short check-in shows the coach who needs a talk. The rider decides what the parents can see. For the indoor trainer there is Rulle, which connects over Bluetooth and holds the watts in each block. You ride real routes such as Himmelbjerget and the hills around Vejle, or your own GPX, and the ride lands on the session afterwards. If the team switches it on, the AI can propose the week, and the coach decides. Runs at Mistral in the EU or on your own machine with Ollama.",
        note: "New in October 2026, version 0.9. The Garmin integration and Rulle work, and Rulle has been ridden on a real trainer. Kadence has not been through a winter with a real team yet. You can try the demo without an account or run it yourself.",
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
          "Idéer, initiativkort, kapacitet, prioriteringsmøde, statusrapporter og beslutningslog, og et projektrum med faser, beslutningspunkter, risici og gevinster. Den bruges til rigtigt arbejde i dag og kommer i vinduet når jeg har gjort den generisk.",
        note: "På vej",
      },
      en: {
        name: "Portefølje",
        tagline: "The quarterly rhythm of a portfolio.",
        description:
          "Ideas, initiative cards, capacity, the prioritization meeting, status reports and a decision log, and a project room with phases, decision points, risks and benefits. It does real work today and goes in the window once I have made it generic.",
        note: "Coming",
      },
    },
  },
];

export const liveTools = tools.filter((tool) => tool.status !== "coming");
export const comingTools = tools.filter((tool) => tool.status === "coming");

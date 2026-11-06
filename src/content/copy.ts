import type { Locale } from "./site";
import type { ToolStatus } from "./tools";

export type Copy = {
  meta: { title: string; description: string };
  nav: {
    tools: string;
    dogmas: string;
    ways: string;
    about: string;
    code: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    /** The first line of the headline, in the foreground color. */
    title: string;
    /** The second line, in the moss green. Keep it short. */
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  tools: {
    kicker: string;
    title: string;
    intro: string;
    status: Record<ToolStatus, string>;
    demo: string;
    code: string;
    comingTitle: string;
    comingIntro: string;
  };
  dogmas: { kicker: string; title: string; intro: string; aside: string; checklist: string };
  ways: {
    kicker: string;
    title: string;
    intro: string;
    items: { title: string; text: string }[];
    code: string;
    deployGuide: string;
    write: string;
    checklist: string;
  };
  selected: {
    kicker: string;
    title: string;
    intro: string;
    site: string;
    code: string;
    license: string;
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    contact: string;
    security: string;
    suggest: string;
    suggestSubject: string;
  };
  footer: {
    license: string;
    made: string;
    privacy: string;
    terms: string;
    checklist: string;
    code: string;
    language: string;
  };
  notFound: { title: string; text: string; back: string };
};

export const copy: Record<Locale, Copy> = {
  da: {
    meta: {
      title: "Haij · Hobbyprojekter i open source",
      description:
        "Mine hobbyprojekter. Open source-værktøjer jeg bygger i fritiden efter nogle dogmer og i høj standard. Du er velkommen til at være med eller bare lade dig inspirere.",
    },
    nav: {
      tools: "Værktøjer",
      dogmas: "Dogmer",
      ways: "Vær med",
      about: "Om",
      code: "GitHub",
      language: "English",
    },
    hero: {
      eyebrow: "Open source · AGPL-3.0 · Af Martin Nymann Vinther",
      title: "Hobbyprojekter med dogmer.",
      titleAccent: "Kig bare ind.",
      subtitle:
        "Det her er mine hobbyprojekter. Jeg bygger dem i fritiden og prøver at holde mig til nogle dogmer og en høj standard. Al koden er åben, så du er velkommen til at være med eller bare lade dig inspirere.",
      ctaPrimary: "Se værktøjerne",
      ctaSecondary: "Læs dogmerne",
    },
    tools: {
      kicker: "Vinduet",
      title: "Værktøjerne",
      intro:
        "Der er syv værktøjer indtil videre, og et ottende er på vej. Seks af dem har en demo du kan prøve uden konto. De bygger alle på det samme fundament med adskilte arbejdsrum i databasen, auditlog, passkeys og eksport af alle data.",
      status: { live: "I brug", new: "Ny", coming: "På vej" },
      demo: "Prøv demoen",
      code: "Se koden",
      comingTitle: "På vej ind i vinduet",
      comingIntro:
        "Koden findes og har kørt rigtigt arbejde, men den skal ryddes op og have en demo og en README før jeg viser den frem.",
    },
    dogmas: {
      kicker: "Syv dogmer",
      title: "Reglerne jeg bygger efter.",
      intro:
        "Alle værktøjer i vinduet skal følge de her regler, også dem andre har bygget. De er skrevet så konkret at man kan tjekke dem.",
      aside: "Jeg har prøvet at slå nogle af dem sammen, men så blev de sværere at tjekke.",
      checklist: "Se tjeklisten før vinduet",
    },
    ways: {
      kicker: "Vær med",
      title: "Sådan kan du være med",
      intro: "Al koden er gratis. Jeg tilbyder ikke hosting, og der er ikke noget at købe.",
      items: [
        {
          title: "Byg med",
          text: "Meld en fejl, kom med en idé eller send en ændring på GitHub. Har du selv et værktøj der følger dogmerne, må det også gerne stå her.",
        },
        {
          title: "Kør det selv",
          text: "Klon repoet, kør docker compose up og peg på din egen Ollama. Det kræver en server og en Postgres, og du skal ikke bruge nøgler til nogen sky. Du står selv for driften.",
        },
        {
          title: "Lad dig inspirere",
          text: "Du behøver ikke bruge værktøjerne. Læs dogmerne og tjeklisten, kig i koden og tag det med du kan bruge. Bygger du selv noget efter samme krav, vil jeg gerne høre om det.",
        },
      ],
      code: "Koden på GitHub",
      deployGuide: "Deploy-vejledning",
      write: "Skriv til mig",
      checklist: "Se tjeklisten",
    },
    selected: {
      kicker: "Hylden",
      title: "Udvalgte",
      intro: "Open source fra andre, som følger dogmerne, og som jeg selv har brugt.",
      site: "Besøg",
      code: "Kode",
      license: "Licens",
    },
    about: {
      kicker: "Om",
      title: "Om Haij",
      paragraphs: [
        "Jeg hedder Martin Nymann Vinther, og Haij er mit hobbyprojekt. Jeg har arbejdet med transformationer i store organisationer i tyve år, og flere af værktøjerne startede som noget jeg selv manglede i det arbejde.",
        "Der er ingen investorer eller vækstplan. Jeg bygger det her fordi jeg har lyst, og jeg prøver at holde de samme krav til sikkerhed og data som en stor organisation ville stille. Derfor er der dogmer og en tjekliste.",
        "Værktøjerne kører på mine egne servere fordi jeg selv bruger dem, og fordi demoerne skal ligge et sted. Jeg tilbyder ikke hosting. Koden er offentlig, så du må gerne bruge den, melde fejl og sende ændringer. Har du en idé, eller har du selv et værktøj der følger dogmerne, så skriv endelig.",
      ],
      contact: "Skriv til",
      security: "Meld et sikkerhedshul",
      suggest: "Foreslå et værktøj",
      suggestSubject: "Forslag til vinduet på haij.dk",
    },
    footer: {
      license: "Open source under AGPL-3.0",
      made: "Bygget i fritiden i Danmark.",
      privacy: "Privatliv",
      terms: "Vilkår for demoer",
      checklist: "Klar til vinduet",
      code: "GitHub",
      language: "English",
    },
    notFound: {
      title: "Den side findes ikke.",
      text: "Den kan være flyttet eller slettet.",
      back: "Til forsiden",
    },
  },
  en: {
    meta: {
      title: "Haij · Open source side projects",
      description:
        "My side projects. Open source tools I build in my spare time, following a few dogmas and aiming for a high standard. You are welcome to join in or just get inspired.",
    },
    nav: {
      tools: "Tools",
      dogmas: "Dogmas",
      ways: "Join in",
      about: "About",
      code: "GitHub",
      language: "Dansk",
    },
    hero: {
      eyebrow: "Open source · AGPL-3.0 · By Martin Nymann Vinther",
      title: "Side projects with dogmas.",
      titleAccent: "Come on in.",
      subtitle:
        "These are my side projects. I build them in my spare time and try to stick to a few dogmas and a high standard. All the code is open, so you are welcome to join in or just get inspired.",
      ctaPrimary: "See the tools",
      ctaSecondary: "Read the dogmas",
    },
    tools: {
      kicker: "The window",
      title: "The tools",
      intro:
        "There are seven tools so far, and an eighth is on its way. Six of them have a demo you can try without an account. They all share the same foundation with separate workspaces in the database, an audit log, passkeys and export of all data.",
      status: { live: "In use", new: "New", coming: "Coming" },
      demo: "Try the demo",
      code: "See the code",
      comingTitle: "On its way into the window",
      comingIntro:
        "The code exists and has done real work, but it needs a clean-up, a demo and a README before I show it.",
    },
    dogmas: {
      kicker: "Seven dogmas",
      title: "The rules I build by.",
      intro:
        "Every tool in the window has to follow these rules, including the ones others have built. They are written concretely enough to be checked. The Danish wording is the original.",
      aside: "I have tried merging some of them, but that made them harder to check.",
      checklist: "See the checklist before the window",
    },
    ways: {
      kicker: "Join in",
      title: "How to join in",
      intro: "All the code is free. I do not offer hosting, and there is nothing to buy.",
      items: [
        {
          title: "Build along",
          text: "Report a bug, suggest an idea or send a change on GitHub. If you have a tool of your own that follows the dogmas, it is welcome here too.",
        },
        {
          title: "Run it yourself",
          text: "Clone the repository, run docker compose up and point it at your own Ollama. It takes one server and a Postgres, and you do not need keys to any cloud. You handle the operations yourself.",
        },
        {
          title: "Get inspired",
          text: "You do not have to use the tools. Read the dogmas and the checklist, look through the code and take what you can use. If you build something to the same demands, I would like to hear about it.",
        },
      ],
      code: "The code on GitHub",
      deployGuide: "Deployment guide",
      write: "Write to me",
      checklist: "See the checklist",
    },
    selected: {
      kicker: "The shelf",
      title: "Selected",
      intro: "Open source by others that follows the dogmas and that I have used myself.",
      site: "Visit",
      code: "Code",
      license: "License",
    },
    about: {
      kicker: "About",
      title: "About Haij",
      paragraphs: [
        "My name is Martin Nymann Vinther, and Haij is my side project. I have worked on transformations in large organizations for twenty years, and several of the tools started as something I was missing in that work.",
        "There are no investors and no growth plan. I build this because I enjoy it, and I try to keep the same demands on security and data that a large organization would make. That is why there are dogmas and a checklist.",
        "The tools run on my own servers because I use them myself and the demos have to live somewhere. I do not offer hosting. The code is public, so feel free to use it, report bugs and send changes. If you have an idea, or a tool of your own that follows the dogmas, please write.",
      ],
      contact: "Write to",
      security: "Report a security hole",
      suggest: "Suggest a tool",
      suggestSubject: "Suggestion for the window at haij.dk",
    },
    footer: {
      license: "Open source under AGPL-3.0",
      made: "Built in my spare time in Denmark.",
      privacy: "Privacy",
      terms: "Demo terms",
      checklist: "Ready for the window",
      code: "GitHub",
      language: "Dansk",
    },
    notFound: {
      title: "That page does not exist.",
      text: "It may have been moved or deleted.",
      back: "To the front page",
    },
  },
};

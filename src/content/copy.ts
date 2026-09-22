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
    honesty: string;
  };
  tools: {
    kicker: string;
    title: string;
    intro: string;
    status: Record<ToolStatus, string>;
    open: string;
    apply: string;
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
    applyTo: string;
    deployGuide: string;
    write: string;
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
      title: "Haij · Open source-værktøjer til arbejdet",
      description:
        "Haij er en lille samling open source-værktøjer til arbejdet: kunder og timer, projekter og teams, og AI der bliver i EU. Vi bygger dem, driver dem og bruger dem selv. Koden er åben, og dataene er dine.",
    },
    nav: {
      tools: "Værktøjer",
      dogmas: "Dogmer",
      ways: "Sådan",
      about: "Om",
      code: "GitHub",
      language: "English",
    },
    hero: {
      eyebrow: "Open source · AGPL-3.0 · Hostet i EU eller hos dig selv",
      title: "Værktøjer til arbejdet.",
      titleAccent: "Kig bare ind.",
      subtitle:
        "Haij er en lille samling open source-værktøjer til arbejdet: kunder og timer, projekter og teams, og AI der bliver i EU eller på din egen maskine. Vi bygger dem fordi vi selv har brug for dem, og vi bruger dem hver dag. Du kan prøve dem, læse koden og køre dem selv.",
      ctaPrimary: "Se værktøjerne",
      ctaSecondary: "Læs dogmerne",
      honesty:
        "Vi skriver hvad der er i drift, hvad der er nyt, og hvad der stadig kun er en god idé.",
    },
    tools: {
      kicker: "Vinduet",
      title: "Værktøjerne",
      intro:
        "Fem kan du prøve i dag, én er på vej. De er bygget til rigtigt arbejde, og de står alle på samme fundament: arbejdsrum der er adskilt i databasen, en auditlog, passkeys og eksport af alt. Det er derfor de kan starte som legeplads for ét team og holde, hvis en hel organisation flytter ind.",
      status: { live: "I drift", new: "Ny", coming: "På vej" },
      open: "Åbn",
      apply: "Ansøg om adgang",
      demo: "Prøv demoen",
      code: "Se koden",
      comingTitle: "På vej ind i vinduet",
      comingIntro:
        "Koden findes, og den har kørt rigtigt arbejde hos en kunde. Den mangler det sidste før vi viser den frem: en rensning, en demo og en README man kan følge. Vi skriver her når den flytter sig.",
    },
    dogmas: {
      kicker: "Syv dogmer",
      title: "Det vi skriver under på.",
      intro:
        "De regler hvert værktøj i vinduet følger, uanset hvem der har bygget det. De er skrevet så man kan tjekke dem, ikke så de lyder godt.",
      aside:
        "Syv er mange. Vi prøvede at slå nogle sammen, men hver gang mistede vi noget man kan efterprøve.",
      checklist: "Se tjeklisten før vinduet",
    },
    ways: {
      kicker: "Sådan",
      title: "Tre veje ind.",
      intro:
        "Koden er hele koden, og den er gratis. Det man kan betale os for, er drift, vedligehold, support og rådgivning. Ikke funktioner der er holdt tilbage.",
      items: [
        {
          title: "Brug det hos os",
          text: "Ansøg om adgang til det værktøj du vil bruge, så lukker vi dig ind. Vi driver alt hos EU-ejede leverandører på EU-jord. Skal der rigtige data i, laver vi en databehandleraftale, og den er en del af ansøgningen.",
        },
        {
          title: "Kør det selv",
          text: "Klon repoet, kør docker compose up, og peg på din egen Ollama. Én server, én Postgres, ingen nøgler til en sky. Det er nok til at prøve det af en fredag eftermiddag, og det er den samme opsætning der kører i et rigtigt driftsmiljø.",
        },
        {
          title: "Lad os drive det",
          text: "Vil I have et værktøj hostet til jeres organisation, laver vi en aftale om drift, backup, oppetid og support til en pris der dækker arbejdet. Vil I hellere køre det i eget datacenter eller hos jeres egen leverandør, hjælper vi jer i gang. Det er samme kode, uanset hvor den kører.",
        },
      ],
      applyTo: "Ansøg om adgang til",
      deployGuide: "Deploy-vejledning",
      write: "Skriv til os",
    },
    selected: {
      kicker: "Hylden",
      title: "Udvalgte",
      intro:
        "Open source fra andre, som lever op til dogmerne, og som vi selv har brugt. Vi hoster dem ikke, vi peger på dem.",
      site: "Besøg",
      code: "Kode",
      license: "Licens",
    },
    about: {
      kicker: "Om",
      title: "Om Haij",
      paragraphs: [
        "Haij drives af Vinther Consulting og er startet af Martin Nymann Vinther. Martin har arbejdet med store organisationers transformationer i to årtier, og værktøjerne her er vokset ud af det arbejde: ting vi manglede, og som vi hellere ville bygge ordentligt end købe halvfærdigt.",
        "Der er ingen investorer og ingen vækstplan. Haij er lige så meget et værksted som et produkt: et sted hvor vi prøver ting af, i det åbne, men med de samme krav til sikkerhed og data som en stor organisation ville stille. Det er derfor der er dogmer og en tjekliste, og ikke bare en roadmap.",
        "Koden er offentlig, og du er velkommen til at bruge den, læse den, melde fejl og sende ændringer. Vil du have et værktøj hostet, eller har du selv et der lever op til dogmerne, så skriv til os.",
      ],
      contact: "Skriv til",
      security: "Meld et sikkerhedshul",
      suggest: "Foreslå et værktøj",
      suggestSubject: "Forslag til vinduet på haij.dk",
    },
    footer: {
      license: "Open source under AGPL-3.0",
      made: "Bygget i Danmark. Hostet i EU. Brugt hver dag.",
      privacy: "Privatliv",
      terms: "Vilkår for demoer",
      checklist: "Klar til vinduet",
      code: "GitHub",
      language: "English",
    },
    notFound: {
      title: "Den side findes ikke.",
      text: "Måske er den flyttet, måske er den stadig kun en god idé.",
      back: "Til forsiden",
    },
  },
  en: {
    meta: {
      title: "Haij · Open source tools for work",
      description:
        "Haij is a small collection of open source tools for work: customers and hours, projects and teams, and AI that stays in the EU. We build them, run them and use them ourselves. The code is open, and the data is yours.",
    },
    nav: {
      tools: "Tools",
      dogmas: "Dogmas",
      ways: "How",
      about: "About",
      code: "GitHub",
      language: "Dansk",
    },
    hero: {
      eyebrow: "Open source · AGPL-3.0 · Hosted in the EU or on your own servers",
      title: "Tools for work.",
      titleAccent: "Come on in.",
      subtitle:
        "Haij is a small collection of open source tools for work: customers and hours, projects and teams, and AI that stays in the EU or on your own machine. We build them because we need them ourselves, and we use them every day. You can try them, read the code and run them yourself.",
      ctaPrimary: "See the tools",
      ctaSecondary: "Read the dogmas",
      honesty:
        "We write down what is in production, what is new, and what is still only a good idea.",
    },
    tools: {
      kicker: "The window",
      title: "The tools",
      intro:
        "Five you can try today, one is on its way. They are built for real work, and they all stand on the same foundation: workspaces separated in the database, an audit log, passkeys and export of everything. That is why they can start as a playground for one team and hold up when a whole organization moves in.",
      status: { live: "In production", new: "New", coming: "Coming" },
      open: "Open",
      apply: "Apply for access",
      demo: "Try the demo",
      code: "See the code",
      comingTitle: "On its way into the window",
      comingIntro:
        "The code exists, and it has done real work at a customer. It is missing the last bit before we show it: a clean-up, a demo and a README you can follow. We write here when it moves.",
    },
    dogmas: {
      kicker: "Seven dogmas",
      title: "What we sign up to.",
      intro:
        "The rules every tool in the window follows, no matter who built it. They are written so you can check them, not so they sound good. The Danish wording is the original.",
      aside:
        "Seven is a lot. We tried merging some, but every time we lost something that can be checked.",
      checklist: "See the checklist before the window",
    },
    ways: {
      kicker: "How",
      title: "Three ways in.",
      intro:
        "The code is the whole code, and it is free. What you can pay us for is operations, maintenance, support and advice. Not features held back.",
      items: [
        {
          title: "Use it with us",
          text: "Apply for access to the tool you want to use, and we let you in. We run everything with EU-owned providers on EU soil. If real data goes in, we make a data processing agreement, and it is part of the application.",
        },
        {
          title: "Run it yourself",
          text: "Clone the repository, run docker compose up, and point it at your own Ollama. One server, one Postgres, no keys to any cloud. That is enough to try it on a Friday afternoon, and it is the same setup that runs in a real production environment.",
        },
        {
          title: "Let us run it for you",
          text: "If you want a tool hosted for your organization, we make an agreement on operations, backup, uptime and support at a price that covers the work. If you would rather run it in your own data center or with your own provider, we help you get started. It is the same code wherever it runs.",
        },
      ],
      applyTo: "Apply for access to",
      deployGuide: "Deployment guide",
      write: "Write to us",
    },
    selected: {
      kicker: "The shelf",
      title: "Selected",
      intro:
        "Open source by others that lives up to the dogmas and that we have used ourselves. We do not host it, we point to it.",
      site: "Visit",
      code: "Code",
      license: "License",
    },
    about: {
      kicker: "About",
      title: "About Haij",
      paragraphs: [
        "Haij is run by Vinther Consulting and was started by Martin Nymann Vinther. Martin has worked on large organizations' transformations for two decades, and the tools here grew out of that work: things we were missing, and would rather build properly than buy half-finished.",
        "There are no investors and no growth plan. Haij is as much a workshop as a product: a place where we try things out, in the open, but with the same demands on security and data that a large organization would make. That is why there are dogmas and a checklist, and not just a roadmap.",
        "The code is public, and you are welcome to use it, read it, report what you find and send changes. If you want a tool hosted, or you have one of your own that lives up to the dogmas, write to us.",
      ],
      contact: "Write to",
      security: "Report a security hole",
      suggest: "Suggest a tool",
      suggestSubject: "Suggestion for the window at haij.dk",
    },
    footer: {
      license: "Open source under AGPL-3.0",
      made: "Built in Denmark. Hosted in the EU. Used every day.",
      privacy: "Privacy",
      terms: "Demo terms",
      checklist: "Ready for the window",
      code: "GitHub",
      language: "Dansk",
    },
    notFound: {
      title: "That page does not exist.",
      text: "Maybe it moved, maybe it is still only a good idea.",
      back: "To the front page",
    },
  },
};

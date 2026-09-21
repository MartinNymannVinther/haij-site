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
        "Haij er en lille familie af open source-værktøjer til kunder, timer, fakturaer, projekter og AI der bliver i EU. Vi bygger dem, driver dem og bruger dem selv. Åben kode, dine data, EU eller egen drift.",
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
      title: "Gode værktøjer til arbejdet.",
      titleAccent: "Kig bare ind.",
      subtitle:
        "Haij er en lille familie af open source-værktøjer til kunder, timer, fakturaer, projekter og AI der bliver i EU. Vi bygger dem, driver dem og bruger dem selv hver dag. Koden er åben, dataene er dine, og du kan tage det hele med dig den dag du vil.",
      ctaPrimary: "Se værktøjerne",
      ctaSecondary: "Læs dogmerne",
      honesty:
        "Vi siger hvad der er i drift, hvad der er på vej, og hvad der stadig kun er en god idé.",
    },
    tools: {
      kicker: "Vinduet",
      title: "Værktøjerne",
      intro:
        "Bygget til rigtigt arbejde, ikke til en demo. Fire er i drift, én er på vej, og vi lover ikke mere end det.",
      status: { live: "I drift", new: "Ny", coming: "På vej" },
      open: "Åbn",
      apply: "Ansøg om adgang",
      demo: "Prøv demoen",
      code: "Se koden",
      comingTitle: "På vej ind i vinduet",
      comingIntro:
        "Koden findes, og den har kørt rigtigt arbejde hos en kunde. Den mangler det sidste før vi tør vise den frem: rensning, en demo og en README man kan følge. Vi opdaterer siden her når den flytter sig.",
    },
    dogmas: {
      kicker: "Syv dogmer",
      title: "Det vi skriver under på.",
      intro:
        "Reglerne hvert værktøj i vinduet følger, uanset hvem der har bygget det. De er formuleret så de kan testes, ikke så de lyder godt.",
      aside:
        "Syv er i overkanten for et manifest. Vi kunne bare ikke slå to sammen uden at miste noget der kan efterprøves.",
      checklist: "Se tjeklisten før vinduet",
    },
    ways: {
      kicker: "Sådan",
      title: "Tre veje ind.",
      intro:
        "Der er ingen forretningsmodel bag koden. Det man kan betale for, er drift, vedligehold, support og rådgivning. Aldrig funktioner der er holdt tilbage.",
      items: [
        {
          title: "Brug det hos os",
          text: "Ansøg om adgang til det værktøj du vil bruge, så lukker vi dig ind. Vi driver alt hos EU-ejede leverandører på EU-jord. Rigtige data kræver en databehandleraftale, og den er en del af ansøgningen.",
        },
        {
          title: "Kør det selv",
          text: "Klon repoet, kør docker compose up, og peg på din egen Ollama. Én server, én Postgres, ingen nøgler til en sky. Testen er enkel: træk stikket til internettet, og alt væsentligt virker stadig.",
        },
        {
          title: "Lad os drive det",
          text: "Vil I have et værktøj hostet, laver vi en aftale om drift, backup, oppetid og support til en pris der dækker arbejdet. Vil I hellere køre det selv, hjælper vi jer i gang. Samme kode i begge tilfælde.",
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
        "Haij drives af Vinther Consulting og er startet af Martin Nymann Vinther, som har arbejdet med store organisationers transformationer i to årtier og nu udover sin rådgivning også deler værktøjerne her.",
        "Ingen investorer, ingen vækstplan, ingen funktioner bag en betalingsmur. Bare værktøjer vi selv har brug for, og en holdning til hvordan software til arbejdet burde være.",
        "Koden er offentlig, og du er velkommen til at bruge den, læse den, melde fejl og sende ændringer. Vil du have et værktøj hostet, eller har du selv et værktøj der lever op til dogmerne, så skriv.",
      ],
      contact: "Skriv til",
      security: "Meld et sikkerhedshul",
      suggest: "Foreslå et værktøj",
      suggestSubject: "Forslag til vinduet på haij.dk",
    },
    footer: {
      license: "Open source under AGPL-3.0",
      made: "Bygget i Danmark. Hostet i EU. Kaffen er vores egen.",
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
        "Haij is a small family of open source tools for customers, hours, invoices, projects and AI that stays in the EU. We build them, run them and use them ourselves. Open code, your data, EU or your own servers.",
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
      title: "Good tools for work.",
      titleAccent: "Come on in.",
      subtitle:
        "Haij is a small family of open source tools for customers, hours, invoices, projects and AI that stays in the EU. We build them, run them and use them ourselves every day. The code is open, the data is yours, and you can take all of it with you the day you want to.",
      ctaPrimary: "See the tools",
      ctaSecondary: "Read the dogmas",
      honesty:
        "We say what is in production, what is on its way, and what is still only a good idea.",
    },
    tools: {
      kicker: "The window",
      title: "The tools",
      intro:
        "Built for real work, not for a demo. Four are in production, one is on its way, and we promise nothing beyond that.",
      status: { live: "In production", new: "New", coming: "Coming" },
      open: "Open",
      apply: "Apply for access",
      demo: "Try the demo",
      code: "See the code",
      comingTitle: "On its way into the window",
      comingIntro:
        "The code exists, and it has done real work at a customer. It is missing the last bit before we dare show it: a clean-up, a demo and a README you can follow. We update this page when it moves.",
    },
    dogmas: {
      kicker: "Seven dogmas",
      title: "What we sign up to.",
      intro:
        "The rules every tool in the window follows, no matter who built it. They are written so they can be tested, not so they sound good. The Danish wording is the original.",
      aside:
        "Seven is a lot for a manifesto. We just could not merge two without losing something that can be checked.",
      checklist: "See the checklist before the window",
    },
    ways: {
      kicker: "How",
      title: "Three ways in.",
      intro:
        "There is no business model behind the code. What can be paid for is operations, maintenance, support and advice. Never features held back.",
      items: [
        {
          title: "Use it with us",
          text: "Apply for access to the tool you want to use, and we let you in. We run everything with EU-owned providers on EU soil. Real data requires a data processing agreement, and it is part of the application.",
        },
        {
          title: "Run it yourself",
          text: "Clone the repository, run docker compose up, and point it at your own Ollama. One server, one Postgres, no keys to any cloud. The test is simple: pull the plug on the internet, and everything essential still works.",
        },
        {
          title: "Let us run it for you",
          text: "If you want a tool hosted, we make an agreement on operations, backup, uptime and support at a price that covers the work. If you would rather run it yourself, we help you get started. Same code either way.",
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
        "Haij is run by Vinther Consulting and was started by Martin Nymann Vinther, who has worked on large organizations' transformations for two decades and now, alongside his consulting, also shares the tools here.",
        "No investors, no growth plan, no features behind a paywall. Just tools we need ourselves, and an opinion about what software for work ought to be like.",
        "The code is public, and you are welcome to use it, read it, report what you find and send changes. If you want a tool hosted, or you have a tool of your own that lives up to the dogmas, write.",
      ],
      contact: "Write to",
      security: "Report a security hole",
      suggest: "Suggest a tool",
      suggestSubject: "Suggestion for the window at haij.dk",
    },
    footer: {
      license: "Open source under AGPL-3.0",
      made: "Built in Denmark. Hosted in the EU. The coffee is our own.",
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

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
        "Haij er mine hobbyprojekter: en lille samling open source-værktøjer, bygget efter syv dogmer og til en høj standard. Koden er åben. Vær med, eller lad dig inspirere.",
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
        "Haij er mine hobbyprojekter: en lille samling open source-værktøjer til kunder og timer, projekter og teams, og AI der bliver i EU eller på din egen maskine. Jeg bygger dem i fritiden, men efter syv dogmer og til en standard jeg ikke slækker på. Læs koden, tag det du kan bruge, eller vær med.",
      ctaPrimary: "Se værktøjerne",
      ctaSecondary: "Læs dogmerne",
      honesty:
        "Jeg skriver hvad der er i brug, hvad der er nyt, og hvad der stadig kun er en god idé.",
    },
    tools: {
      kicker: "Vinduet",
      title: "Værktøjerne",
      intro:
        "Seks er bygget, fire har en demo du kan prøve uden konto, og én er på vej. De står alle på samme fundament: arbejdsrum der er adskilt i databasen, en auditlog, passkeys og eksport af alt. Det er hobby, men de er bygget som om en hel organisation skulle flytte ind.",
      status: { live: "I brug", new: "Ny", coming: "På vej" },
      demo: "Prøv demoen",
      code: "Se koden",
      comingTitle: "På vej ind i vinduet",
      comingIntro:
        "Koden findes, og den har kørt rigtigt arbejde. Den mangler det sidste før jeg viser den frem: en rensning, en demo og en README man kan følge. Jeg skriver her når den flytter sig.",
    },
    dogmas: {
      kicker: "Syv dogmer",
      title: "Det jeg skriver under på.",
      intro:
        "De regler hvert værktøj i vinduet følger, uanset hvem der har bygget det. Det er hobby, men kravene er ikke. De er skrevet så man kan tjekke dem, ikke så de lyder godt.",
      aside:
        "Syv er mange. Jeg prøvede at slå nogle sammen, men hver gang mistede jeg noget man kan efterprøve.",
      checklist: "Se tjeklisten før vinduet",
    },
    ways: {
      kicker: "Vær med",
      title: "Tre måder at være med.",
      intro:
        "Koden er hele koden, og den er gratis. Jeg tilbyder ikke hosting, og der er ikke noget at købe. Det her er en invitation: byg med, kør det selv, eller tag bare idéerne med hjem.",
      items: [
        {
          title: "Byg med",
          text: "Meld en fejl, kom med en idé, eller send en ændring. Har du selv et værktøj der lever op til dogmerne, må det gerne stå i vinduet. Det behøver ikke være stort, og du behøver ikke spørge først.",
        },
        {
          title: "Kør det selv",
          text: "Klon repoet, kør docker compose up, og peg på din egen Ollama. Én server, én Postgres, ingen nøgler til en sky. Det er nok til at prøve det af en fredag eftermiddag, og det er den samme opsætning der kører i et rigtigt driftsmiljø. Driften er din, og det er dataene også.",
        },
        {
          title: "Lad dig inspirere",
          text: "Du behøver ikke bruge en linje af det. Læs dogmerne og tjeklisten, kig i koden, og tag det med du kan bruge: en regel, et mønster, en måde at tænke på. Bygger du noget selv efter samme krav, vil jeg gerne høre om det.",
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
      intro:
        "Open source fra andre, som lever op til dogmerne, og som jeg selv har brugt. Jeg peger bare på dem.",
      site: "Besøg",
      code: "Kode",
      license: "Licens",
    },
    about: {
      kicker: "Om",
      title: "Om Haij",
      paragraphs: [
        "Haij er mit hobbyprojekt. Jeg hedder Martin Nymann Vinther og har arbejdet med store organisationers transformationer i to årtier. Værktøjerne her er vokset ud af det arbejde: ting jeg manglede, og som jeg hellere ville bygge ordentligt end købe halvfærdigt.",
        "Der er ingen investorer og ingen vækstplan. Haij er et værksted: et sted hvor jeg prøver ting af, i det åbne, men med de samme krav til sikkerhed og data som en stor organisation ville stille. Hobby er ingen undskyldning for at sjuske, og det er derfor der er dogmer og en tjekliste, og ikke bare en roadmap.",
        "Værktøjerne kører på mine egne servere, fordi jeg selv bruger dem og demoerne skal stå et sted, ikke fordi jeg tilbyder hosting. Koden er offentlig, og du er velkommen til at bruge den, læse den, melde fejl og sende ændringer. Har du selv et værktøj der lever op til dogmerne, eller bare en god idé, så skriv til mig.",
      ],
      contact: "Skriv til",
      security: "Meld et sikkerhedshul",
      suggest: "Foreslå et værktøj",
      suggestSubject: "Forslag til vinduet på haij.dk",
    },
    footer: {
      license: "Open source under AGPL-3.0",
      made: "Bygget i Danmark, i fritiden, efter dogmer.",
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
      title: "Haij · Open source side projects",
      description:
        "Haij is my side projects: a small collection of open source tools, built to seven dogmas and to a high standard. The code is open. Join in, or just take the ideas with you.",
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
        "Haij is my side projects: a small collection of open source tools for customers and hours, projects and teams, and AI that stays in the EU or on your own machine. I build them in my spare time, but to seven dogmas and to a standard I do not lower. Read the code, take what you can use, or join in.",
      ctaPrimary: "See the tools",
      ctaSecondary: "Read the dogmas",
      honesty: "I write down what is in use, what is new, and what is still only a good idea.",
    },
    tools: {
      kicker: "The window",
      title: "The tools",
      intro:
        "Six are built, four have a demo you can try without an account, and one is on its way. They all stand on the same foundation: workspaces separated in the database, an audit log, passkeys and export of everything. It is a hobby, but they are built as if a whole organization were moving in.",
      status: { live: "In use", new: "New", coming: "Coming" },
      demo: "Try the demo",
      code: "See the code",
      comingTitle: "On its way into the window",
      comingIntro:
        "The code exists, and it has done real work. It is missing the last bit before I show it: a clean-up, a demo and a README you can follow. I write here when it moves.",
    },
    dogmas: {
      kicker: "Seven dogmas",
      title: "What I sign up to.",
      intro:
        "The rules every tool in the window follows, no matter who built it. It is a hobby, but the demands are not. They are written so you can check them, not so they sound good. The Danish wording is the original.",
      aside:
        "Seven is a lot. I tried merging some, but every time I lost something that can be checked.",
      checklist: "See the checklist before the window",
    },
    ways: {
      kicker: "Join in",
      title: "Three ways to join in.",
      intro:
        "The code is the whole code, and it is free. I do not offer hosting, and there is nothing to buy. This is an invitation: build along, run it yourself, or just take the ideas home.",
      items: [
        {
          title: "Build along",
          text: "Report a bug, bring an idea or send a change. If you have a tool of your own that lives up to the dogmas, it is welcome in the window. It does not have to be big, and you do not have to ask first.",
        },
        {
          title: "Run it yourself",
          text: "Clone the repository, run docker compose up, and point it at your own Ollama. One server, one Postgres, no keys to any cloud. That is enough to try it on a Friday afternoon, and it is the same setup that runs in a real production environment. The operations are yours, and so is the data.",
        },
        {
          title: "Get inspired",
          text: "You do not have to use a single line of it. Read the dogmas and the checklist, look through the code, and take what you can use: a rule, a pattern, a way of thinking. If you build something of your own to the same demands, I would like to hear about it.",
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
      intro:
        "Open source by others that lives up to the dogmas and that I have used myself. I just point to it.",
      site: "Visit",
      code: "Code",
      license: "License",
    },
    about: {
      kicker: "About",
      title: "About Haij",
      paragraphs: [
        "Haij is my side project. My name is Martin Nymann Vinther, and I have worked on large organizations' transformations for two decades. The tools here grew out of that work: things I was missing, and would rather build properly than buy half-finished.",
        "There are no investors and no growth plan. Haij is a workshop: a place where I try things out, in the open, but with the same demands on security and data that a large organization would make. A hobby is no excuse for sloppy work, which is why there are dogmas and a checklist, and not just a roadmap.",
        "The tools run on my own servers because I use them myself and the demos have to live somewhere, not because I offer hosting. The code is public, and you are welcome to use it, read it, report what you find and send changes. If you have a tool of your own that lives up to the dogmas, or just a good idea, write to me.",
      ],
      contact: "Write to",
      security: "Report a security hole",
      suggest: "Suggest a tool",
      suggestSubject: "Suggestion for the window at haij.dk",
    },
    footer: {
      license: "Open source under AGPL-3.0",
      made: "Built in Denmark, after hours, to the dogmas.",
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

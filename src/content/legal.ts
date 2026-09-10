import { site, type Locale } from "./site";

export type LegalSection = { heading?: string; paragraphs: string[] };
export type LegalPage = {
  title: string;
  lead: string;
  updatedLabel: string;
  sections: LegalSection[];
};

const mail = site.contactEmail;

/**
 * The privacy policy for haij.dk and the demos. Written for a static site
 * with no analytics and demos on made-up data; when a tool goes into real
 * use with real data, that tool carries its own policy and its own list of
 * subprocessors. Danish is the text of record. Both versions are due for a
 * review by counsel before the first external organization is admitted.
 */
export const privacy: Record<Locale, LegalPage> = {
  da: {
    title: "Privatlivspolitik",
    lead: "Kort version: haij.dk sætter ingen cookies og bruger ingen analyseværktøjer. Demoerne kører på opdigtede data og sletter alt inden for 24 timer. Vi bruger ingen leverandører uden for EU.",
    updatedLabel: "Senest opdateret",
    sections: [
      {
        heading: "Hvem vi er",
        paragraphs: [
          `haij.dk drives af ${site.company}, som er dataansvarlig for de oplysninger der beskrives her. Du kan skrive til os på ${mail}.`,
        ],
      },
      {
        heading: "Hvad vi indsamler på haij.dk",
        paragraphs: [
          "Forsiden er et statisk website. Den sætter ingen cookies, bruger ingen analyseværktøjer og indlæser intet fra tredjeparter. Når du besøger siden, skriver vores webserver en linje i sin log med din IP-adresse, tidspunktet, den side du bad om og din browsers navn. Loggen bruges kun til drift og sikkerhed og slettes efter 30 dage. Grundlaget er vores legitime interesse i at holde siden kørende og sikker.",
        ],
      },
      {
        heading: "Demoerne",
        paragraphs: [
          "Demoerne af værktøjerne er til at prøve, ikke til at arbejde i. De kører på opdigtede data, og du må ikke indtaste rigtige personoplysninger eller fortrolige oplysninger i dem. Det du alligevel indtaster, ligger på vores server i EU, slettes automatisk inden for 24 timer og kan ikke gendannes.",
          "Demoerne sætter én cookie, der holder din session, og den forsvinder når sessionen udløber. AI-funktioner i demoerne sender det du skriver til Mistral AI i Frankrig, som er underdatabehandler for os. Vilkårene for demoerne står på en side for sig.",
        ],
      },
      {
        heading: "Ansøgning om adgang",
        paragraphs: [
          "Søger du om adgang til et af værktøjerne, gemmer vi dit navn, din e-mail og din virksomheds navn, indtil ansøgningen er behandlet. Får du adgang, følger oplysningerne din konto. Får du ikke, sletter vi dem inden for 30 dage. Grundlaget er at du selv beder om det (databeskyttelsesforordningens artikel 6, stk. 1, litra b).",
        ],
      },
      {
        heading: "Værktøjer i drift",
        paragraphs: [
          "Bruger din organisation et af værktøjerne med rigtige data på vores servere, er din organisation dataansvarlig, og vi er databehandler efter en databehandleraftale. Hvert værktøj har sin egen privatlivspolitik og sin egen offentlige liste over underdatabehandlere.",
        ],
      },
      {
        heading: "Hvem vi deler med",
        paragraphs: [
          "Vores server står hos Hetzner Online GmbH i Nürnberg, Tyskland. AI-funktioner bruger Mistral AI i Paris, Frankrig. Vi bruger ingen leverandører uden for EU til drift, og vi sælger eller deler ikke oplysninger med andre.",
        ],
      },
      {
        heading: "Dine rettigheder",
        paragraphs: [
          `Du kan bede om indsigt i, rettelse af eller sletning af oplysninger om dig, og du kan gøre indsigelse mod behandlingen. Skriv til ${mail}. Er du uenig i vores svar, kan du klage til Datatilsynet på datatilsynet.dk.`,
        ],
      },
      {
        heading: "Ændringer",
        paragraphs: [
          "Ændrer vi politikken, opdaterer vi datoen øverst på siden. Væsentlige ændringer nævner vi på forsiden.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy policy",
    lead: "Short version: haij.dk sets no cookies and uses no analytics. The demos run on made-up data and delete everything within 24 hours. We use no providers outside the EU.",
    updatedLabel: "Last updated",
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          `haij.dk is run by ${site.company}, which is the data controller for the information described here. You can write to us at ${mail}.`,
        ],
      },
      {
        heading: "What we collect on haij.dk",
        paragraphs: [
          "The front page is a static website. It sets no cookies, uses no analytics and loads nothing from third parties. When you visit, our web server writes a line in its log with your IP address, the time, the page you asked for and the name of your browser. The log is used only for operations and security and is deleted after 30 days. The legal basis is our legitimate interest in keeping the site running and secure.",
        ],
      },
      {
        heading: "The demos",
        paragraphs: [
          "The demos of the tools are for trying, not for working in. They run on made-up data, and you must not enter real personal data or confidential information in them. Whatever you enter anyway sits on our server in the EU, is deleted automatically within 24 hours and cannot be restored.",
          "The demos set one cookie that keeps your session, and it disappears when the session expires. AI features in the demos send what you write to Mistral AI in France, which is a subprocessor for us. The demo terms are on a page of their own.",
        ],
      },
      {
        heading: "Applying for access",
        paragraphs: [
          "If you apply for access to one of the tools, we keep your name, your e-mail and your company's name until the application has been handled. If you are admitted, the information follows your account. If not, we delete it within 30 days. The legal basis is that you ask for it yourself (GDPR article 6(1)(b)).",
        ],
      },
      {
        heading: "Tools in production",
        paragraphs: [
          "If your organization uses one of the tools with real data on our servers, your organization is the data controller and we are the data processor under a data processing agreement. Each tool has its own privacy policy and its own public list of subprocessors.",
        ],
      },
      {
        heading: "Who we share with",
        paragraphs: [
          "Our server is hosted by Hetzner Online GmbH in Nuremberg, Germany. AI features use Mistral AI in Paris, France. We use no providers outside the EU for operations, and we do not sell or share information with anyone else.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          `You can ask for access to, correction of or deletion of information about you, and you can object to the processing. Write to ${mail}. If you disagree with our answer, you can complain to the Danish Data Protection Agency at datatilsynet.dk.`,
        ],
      },
      {
        heading: "Changes",
        paragraphs: [
          "If we change the policy, we update the date at the top of the page. Significant changes are mentioned on the front page.",
        ],
      },
    ],
  },
};

/**
 * Terms for the demos. Deliberately short: one screen, plain language.
 * Counsel may sharpen them; they should not grow.
 */
export const terms: Record<Locale, LegalPage> = {
  da: {
    title: "Vilkår for demoer",
    lead: "Demoerne på haij.dk er til at prøve værktøjerne. Det her er reglerne, kort.",
    updatedLabel: "Senest opdateret",
    sections: [
      {
        paragraphs: [
          "Demoen er til at prøve, ikke til at arbejde i. Den er ikke et tilbud om en tjeneste, og du kan ikke regne med at noget bliver gemt.",
          "Alt du indtaster, er testdata. Du må ikke indtaste rigtige personoplysninger, fortrolige oplysninger eller noget, du ikke ville have at fremmede så.",
          "Din demo slettes automatisk inden for 24 timer efter at du startede den, og den kan ikke gendannes. Vi kan slette den tidligere uden varsel.",
          "Vi logger din IP-adresse og tidspunkterne for dine besøg i 30 dage for at holde tjenesten kørende og sikker, og vi sætter én cookie der holder din session. Resten står i privatlivspolitikken.",
          "Demoen kan være nede, ændre sig eller forsvinde uden varsel, og der er ingen support. Vi står ikke til ansvar for tab som følge af brug af demoen, ud over hvad loven kræver.",
          "AI-funktioner i demoerne sender det du skriver til Mistral AI i Frankrig. Skriv ikke noget dér, som ikke må forlade din maskine. Vil du prøve med en lokal model, kan du køre værktøjet selv; koden er åben.",
          "Misbrug, fx forsøg på at bryde ind, overbelaste tjenesten eller bruge demoen til ulovligt indhold, lukker adgangen med det samme.",
          `Spørgsmål: ${mail}.`,
        ],
      },
    ],
  },
  en: {
    title: "Demo terms",
    lead: "The demos on haij.dk are for trying the tools. These are the rules, briefly.",
    updatedLabel: "Last updated",
    sections: [
      {
        paragraphs: [
          "The demo is for trying, not for working in. It is not an offer of a service, and you cannot count on anything being kept.",
          "Everything you enter is test data. You must not enter real personal data, confidential information or anything you would not want strangers to see.",
          "Your demo is deleted automatically within 24 hours of when you started it, and it cannot be restored. We may delete it earlier without notice.",
          "We log your IP address and the times of your visits for 30 days to keep the service running and secure, and we set one cookie that keeps your session. The rest is in the privacy policy.",
          "The demo may be down, change or disappear without notice, and there is no support. We are not liable for loss arising from use of the demo beyond what the law requires.",
          "AI features in the demos send what you write to Mistral AI in France. Do not write anything there that must not leave your machine. If you want to try with a local model, run the tool yourself; the code is open.",
          "Abuse, such as attempts to break in, overload the service or use the demo for illegal content, closes access immediately.",
          `Questions: ${mail}.`,
        ],
      },
    ],
  },
};

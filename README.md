# haij.dk

The front page of Haij: a small family of open source tools for customers,
hours, invoices and projects, shown in one window together with the seven
dogmas every tool signs up to. This repository is only the front page. The
tools live in their own repositories and on their own subdomains:

| Tool       | Where                          | Code                                         |
| ---------- | ------------------------------ | -------------------------------------------- |
| Forretning | https://app.haij.dk            | https://github.com/MartinNymannVinther/haij  |
| Ajour      | https://ajour.haij.dk          | https://github.com/MartinNymannVinther/ajour |
| Portefølje | portefolje.haij.dk, on its way | not yet public                               |
| Chat       | chat.haij.dk, on its way       | not yet public                               |

The site is static. `next build` renders every page to plain HTML at build
time and nginx serves the files. There is no server, no database, no
analytics, no cookies, and nothing loaded from other hosts.

## Quickstart

Requirements: Node 22+, pnpm 10+.

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # static export into out/
pnpm lint && pnpm typecheck && pnpm format:check
```

## Where the words live

Everything a reader sees is data in `src/content/`, typed and in both
languages. Change the text there, not in the components.

| File           | What                                                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `site.ts`      | Domain, contact address, company, GitHub, the links to the deploy guide and SECURITY.md, section anchors, the date on the legal pages |
| `dogmas.ts`    | The seven dogmas. The Danish wording is the text of record: quote it, do not edit it                                                  |
| `tools.ts`     | The tools in the window, their status, their links and their screenshots                                                              |
| `checklist.ts` | "Ready for the window": the ten points a tool must tick, on its own page                                                              |
| `selected.ts`  | The second shelf: open source by others. The section is hidden while the list is empty                                                |
| `copy.ts`      | Everything else: hero, section titles and intros, the three ways in, about, footer, 404                                               |
| `legal.ts`     | The privacy policy and the demo terms                                                                                                 |

A tool's `status` is a promise to the reader: `live` runs real work today,
`new` is live but fresh, `coming` exists and is on its way in. Live and new
tools get a full row with a screenshot; coming tools get a compact card
without one, on purpose. Links (`url`, `applyUrl`, `demoUrl`, `repoUrl`) are
optional and appear only when the thing behind them is real. Leave them out
until then.

### Screenshots

`public/images/<name>-1200.webp` and `<name>-2000.webp`, 16:10, light theme,
made-up data only (a fictional organization, fictional customers, fictional
people). Never a screenshot with real customer data. To replace one, export a
1440x900 screenshot at 2x, convert it to WebP at widths 1200 and 2000, and
point `tools.ts` at the new name.

## Languages

Danish is the default and lives at `/`; English lives under `/en/`. Each
language has its own root layout so `<html lang>` is right, which is why the
language switch is a full page load. The Danish text is the original; the
English is a translation. `app/global-not-found.tsx` is the 404 page nginx
serves for unknown paths; it speaks Danish first and offers English.

## The legal pages

`/privatliv/` and `/vilkaar/` (and their English twins) are written for a
static site with no analytics and demos on made-up data. They are drafts
until counsel has read them; bump `site.legalUpdated` whenever the wording
changes. When a tool goes into real use with real data, that tool carries
its own privacy policy and its own public list of subprocessors, and the
data processing agreement belongs to its application flow, not here.

## Deploying

The image is nginx serving `out/`, unprivileged, on port 8080, with a health
check at `/healthz`. `haij.dk` is the canonical host; nginx redirects
`www.haij.dk` to it. With Coolify on the same VPS as the tools:

1. **New resource → Docker Compose**, connect this repository, branch `main`.
   Coolify picks up `docker-compose.yml`. No environment variables are needed.
2. Attach the domains `haij.dk` and `www.haij.dk` to the `site` service (as
   `https://haij.dk:8080,https://www.haij.dk:8080`, so the proxy knows the
   container port) and let Coolify provision TLS for both.
3. Point DNS for `haij.dk` (A) and `www.haij.dk` (A or CNAME) at the server,
   the same way `app.haij.dk` already is.
4. Push to `main` → Coolify redeploys.

Running it anywhere else is `docker compose up -d --build` plus a reverse
proxy in front: the compose file publishes no port on purpose (see the
comment in it). For a quick local look, `docker run -p 8080:8080` on the
built image is enough.

## The seven dogmas

The rules every tool in the window follows. Danish is the text of record.

1. **Ægte open source.** Al kode ligger offentligt under AGPL-3.0. Alt vi driver, kan hentes 1:1 og køres et andet sted eller lokalt, og der findes ingen funktioner der kun kan fås på haij.dk. En betalt udgave er i orden, men den bygger på den samme kode. Kloner man repoet, får man præcis det der kører på haij.dk.
2. **Egen drift.** Hvert værktøj kan køre i eget driftsmiljø på én server med Docker Compose, en Postgres og en lokal sprogmodel gennem Ollama, uden en eneste nøgle til en sky. Funktioner der forudsætter en ekstern tjeneste, som CVR-opslag eller e-faktura, siger det direkte og lader resten virke i stedet for at gå i stykker. Testen er enkel: afbryd forbindelsen til internettet, og alt væsentligt skal stadig virke.
3. **Dine data, altid.** Alt en organisation ejer kan hentes ud med ét klik i åbne formater (regneark, JSON, PDF) uden at spørge nogen, og slettes helt igen. At forlade Haij skal kunne gøres med få klik uden unødvendig friktion, og vi hjælper gerne med flytningen frem for at gøre den besværlig.
4. **EU eller egen drift.** Når vi hoster, ligger alt hos EU-ejede leverandører på EU-jord, sprogmodeller inklusive, og hvert værktøj har en offentlig liste over hvem der kan se hvad. Ingen amerikansk sky i driften. Koden ligger på GitHub, som er kodehosting og ikke kundedata; et spejl hos en europæisk forge kommer den dag det giver mening.
5. **AI'en hjælper, mennesket bestemmer.** AI må foreslå, skrive udkast og rette i planer, men aldrig sende noget ud af ”huset”, slette noget eller forpligte nogen uden at et menneske har sagt ja. Alt AI gør, kan fortrydes. Indhold hentet udefra behandles som data, aldrig som instruktioner.
6. **Sikkerhed fra første dag.** Organisationers data er adskilt i databasen, ikke kun i koden, og der skal være en test der beviser det. Alle ændringer registreres i en log der ikke kan redigeres. Passkeys og totrinslogin er der fra start, der er en offentlig vej til at melde sikkerhedshuller, og der ligger aldrig hemmeligheder i koden.
7. **Brugt i virkeligheden.** Intet af det vi selv har bygget kommer i vinduet før det har kørt rigtigt arbejde, hos os selv eller hos en kunde vi sidder tæt på. Værktøjer fra andre skal have et rigtigt brugssted vi kan pege på. Vi skal ikke have værktøjer liggende som ikke har skabt reel værdi i virkeligheden.

## License

AGPL-3.0, like every tool in the window. See [LICENSE](LICENSE).

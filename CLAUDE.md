# CLAUDE.md

## Formål

haij.dk: forsiden for Haij-familien af open source-værktøjer. Kun forsiden —
værktøjerne bor i egne repos og på egne subdomæner. Sitet er helt statisk:
ingen server, ingen database, ingen analytics, ingen cookies, intet fra
andre hosts.

## Stack

- Next.js 16 (App Router) som statisk export (`next build` → `out/`),
  React 19, TypeScript, Tailwind CSS 4.
- pnpm 10, Node 22+.
- Serveres af nginx i Docker (port 8080, healthcheck på `/healthz`).
- Alt læsbart indhold er typede data i `src/content/` — ret teksten dér,
  ikke i komponenterne. Dansk er originalen (`/`), engelsk er oversættelse
  (`/en/`).

## Kommandoer

```bash
pnpm dev            # udviklingsserver på http://localhost:3000
pnpm build          # statisk export til out/
pnpm lint && pnpm typecheck && pnpm format:check
```

Der er ingen testsuite; lint + typecheck + format:check + build er det der
skal være grønt.

## Regler

- **main skal altid være grøn.** Commit ikke til main uden at build, lint,
  typecheck og format:check går igennem.
- **Push til main deployer ikke automatisk.**
- **Deploy sker manuelt i Coolify af Martin.**

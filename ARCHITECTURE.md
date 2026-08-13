# Architecture — CareerPilot (vue recruteur)

Document **volontairement haut niveau**. Le détail d’implémentation vit dans le monorepo privé.

## Objectifs techniques

- TypeScript-first, monorepo web + mobile + API
- Contrats Zod partagés (moins de dérive front/back)
- Matching **explicable** (score + raisons)
- Documents générés (CV Destination, packs) avec garde-fous
- Auth solide (MFA) ; biométrie mobile = déverrouillage local des tokens
- CI duale GitHub + GitLab

## Monorepo (structure)

```text
careerPilot/          ← dépôt privé
  apps/web            Next.js — vitrine publique + app authentifiée
  apps/mobile         Expo
  apps/api            NestJS
  packages/contracts  Schemas Zod
  packages/config     TSConfig / tooling
  docs/
```

## Décisions notables

| ADR | Choix |
|-----|--------|
| Monorepo TS | Une stack, contrats partagés web/mobile/API |
| API-first offres | Connecteurs officiels plutôt que scraping comme fondation |
| Human-in-the-loop | Pas d’envoi de candidature sans validation utilisateur |
| Biométrie | Unlock local, pas auth serveur |
| France first | FT / LBA + international by design (Destination CV, Adzuna…) |

## Qualité

- Typecheck + tests dans la CI
- Branches `feature/*` → PR vers `dev` (pas de push direct `main` / `dev`)
- Miroir GitHub + GitLab

## Limites de cette vitrine

Pas de schémas SQL complets, pas de prompts LLM, pas de clés, pas de playbooks d’infra sensibles.

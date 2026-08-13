# CareerPilot — vitrine technique (repo public)

> **Produit** : assistant de candidature (stages, alternances, CDI junior) — matching explicable, CV multi-pays, lettres, CRM.  
> **Éditeur** : [Nilisofficiel](https://github.com/nilisofficiel)  
> **Code source** : dépôt privé (prototype en cours). Ce repo est une **vitrine pour recruteurs**.

[![Stack](https://img.shields.io/badge/TypeScript-monorepo-3178C6?logo=typescript&logoColor=white)](#stack)
[![Web](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)](#stack)
[![API](https://img.shields.io/badge/NestJS-API-E0234E?logo=nestjs&logoColor=white)](#stack)
[![Status](https://img.shields.io/badge/source-private-important)](#pourquoi-ce-repo-est--public)

---

## Pourquoi ce repo est public

En France, les recruteurs consultent souvent GitHub pour évaluer le niveau d’un profil.  
Le monorepo CareerPilot reste **privé** (propriété intellectuelle, secrets, roadmap).  
Ce dépôt public expose le **périmètre produit**, la **stack**, l’**architecture** et des **extraits représentatifs** — sans le code métier complet.

**Démo interactive** : sur demande (sans ouvrir le dépôt privé).  
**Portfolio** : [porfolio-nilisofficiel.vercel.app](https://porfolio-nilisofficiel.vercel.app/)

---

## Le produit en une phrase

CareerPilot n’est **pas** une IA qui postule à ta place : c’est un **agent assisté** — matching + dossiers prêts + suivi CRM, avec **validation humaine** à chaque envoi.

| Capacité | Détail |
|----------|--------|
| Matching explicable | Score de fit + raisons lisibles (pas une boîte noire) |
| Destination CV | Norme pays (FR, US, CA, LU…) × langue du document, PDF / ZIP |
| Portfolio | Source de vérité des compétences prouvées |
| Human-in-the-loop | Aucun envoi automatique non validé |
| CRM + alertes | Pipeline candidatures, rythme stage / alternance |

---

## Stack

| Couche | Techno |
|--------|--------|
| Monorepo | pnpm workspaces + Turborepo |
| Web | Next.js (App Router), TypeScript |
| Mobile | Expo (iOS / Android) |
| API | NestJS, validation Zod, OpenAPI |
| Contrats | Package partagé `contracts` (schemas Zod) |
| Données | PostgreSQL (+ pgvector cible), Redis / BullMQ |
| Auth | argon2id, MFA TOTP, sessions ; biométrie mobile = unlock local |
| Docs | pdf-lib (CV / packs Destination) |
| Qualité | CI GitHub + GitLab, typecheck, tests |

Voir aussi [`ARCHITECTURE.md`](./ARCHITECTURE.md).

---

## Architecture (vue haute)

```text
┌─────────────┐     ┌─────────────┐     ┌──────────────────┐
│  Next.js    │────▶│  NestJS API │────▶│  Postgres/Redis  │
│  (web app)  │     │  bounded    │     │  jobs, profiles  │
└─────────────┘     │  contexts   │     └──────────────────┘
┌─────────────┐     └─────────────┘
│  Expo app   │──────────┘
└─────────────┘
        │
        ▼
 packages/contracts  ← schemas Zod partagés web / api / mobile
```

**Contextes API (cible)** : Identity · Profile · Jobs · Matching · Documents · Applications (CRM) · Billing · Compliance · International.

**Principe clé** : human-in-the-loop à l’envoi (confiance + conformité).

---

## Extraits de code (illustratifs)

Ces snippets montrent le style TypeScript / contrats — **pas** le dépôt de production.

### Contrat Zod partagé (idée)

```ts
// packages/contracts — schémas partagés front / API
import { z } from "zod";

export const MatchReasonSchema = z.object({
  code: z.string(),
  label: z.string(),
  polarity: z.enum(["positive", "neutral", "negative"]),
});

export const MatchScoreSchema = z.object({
  score: z.number().min(0).max(100),
  reasons: z.array(MatchReasonSchema),
});
```

### Destination CV — norme × langue (idée)

```ts
// Marché (normes mise en page) et langue du document sont indépendants
type DestinationMarket = "FR" | "US" | "CA" | "LU" | "CH" | "DE" | "GB" | "BE" | "IE";
type DocumentLanguage = "fr" | "en" | "de";

type CvDestination = {
  market: DestinationMarket;   // ex. US → resume, pas de photo
  language: DocumentLanguage;  // ex. en
};
```

Davantage de détails : [`snippets/`](./snippets/).

---

## Ce que ce repo n’est pas

- ❌ Le code source complet de CareerPilot  
- ❌ Un fork « open source » du produit  
- ❌ Des secrets, `.env`, ou accès API de prod  

---

## Contact / démo

- GitHub : [@nilisofficiel](https://github.com/nilisofficiel)  
- Portfolio : [porfolio-nilisofficiel.vercel.app](https://porfolio-nilisofficiel.vercel.app/)  
- Démo produit : **sur demande**

---

## Licence

Contenu de cette vitrine : documentation et extraits illustratifs.  
Le produit CareerPilot et son code source restent **propriétaires** — tous droits réservés.

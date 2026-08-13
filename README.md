# CareerPilot

Je construis **CareerPilot** en solo pendant mes études : un assistant pour stages, alternances et premiers CDI.

Matching avec des **raisons lisibles**, CV adaptés au **pays** (et à la langue du PDF), suivi candidatures — **rien ne part sans validation**.

> Le code source du produit est dans un dépôt **privé**.  
> Ce repo public, c’est la vitrine technique pour les recruteurs qui passent sur GitHub.

**Portfolio** · [porfolio-nilisofficiel.vercel.app](https://porfolio-nilisofficiel.vercel.app/)  
**Démo app** · sur demande (accès, pas le monorepo)

---

## Pourquoi un repo public séparé ?

En France les recruteurs regardent GitHub. Je ne veux pas ouvrir tout le monorepo (IP, secrets, brouillon).  
Ici tu as : le pitch, la stack, l’archi, et des **snippets TypeScript** qui montrent le niveau — pas une coquille vide.

---

## Ce que fait le produit

| | |
|--|--|
| **Matches** | Score 0–100 + raisons (positif / neutre / négatif). Le portfolio compte dans le score. |
| **Destination CV** | Marché (FR, US, CA…) × langue du document. PDF / ZIP. Photo selon la norme pays. |
| **CRM** | Pipeline simple pour le rythme stage / alternance. |
| **Principe** | Human-in-the-loop. Pas d’envoi auto. Pas de skills inventées. |

---

## Stack

TypeScript monorepo · Next.js · NestJS · Expo · Postgres · Zod (contrats partagés) · pdf-lib · CI GitHub + GitLab · pnpm / Turborepo

Détail : [`ARCHITECTURE.md`](./ARCHITECTURE.md)

---

## Snippets

Extraits **illustratifs** (pas le code de prod) :

- [`snippets/match-score.ts`](./snippets/match-score.ts) — score + raisons
- [`snippets/cv-destination.ts`](./snippets/cv-destination.ts) — norme pays × langue

---

## Licence

Docs + extraits de vitrine. Le produit CareerPilot reste **propriétaire**.

# Boule de poils — Front

Boule de poils est une plateforme d'adoption animale : un catalogue national d'animaux à adopter, qui regroupe les annonces des associations et des refuges, et qui se parcourt d'abord en glissant des cartes. L'adoptant glisse à droite pour garder un animal dans ses coups de cœur, à gauche pour passer. Chaque geste a aussi un bouton.

Ce dépôt contient la SPA React. Elle est servie par l'application Symfony du dépôt [Boule-de-poils-Back](https://github.com/Francois-Louis/Boule-de-poils-Back), sur le même domaine, et ne communique avec le back que par l'API `/api`. Son build est copié dans `public/app/` du back. Les pages indexables par les moteurs de recherche sont rendues en Twig par le back. La SPA reprend leurs données au montage.

## État du projet

**Refonte en cours.** Le code présent est la version de 2022 (React, Babel, Webpack, Enzyme), réalisée comme projet de fin d'études, et décrite dans `Mémoire - BDP.pdf`. Il sert seulement de référence : il ne sera pas mis à jour. Un nouveau socle le remplacera.

La V1 sort en trois paliers :

1. **Catalogue** : recherche, fiches, swipe et favoris sur l'appareil, espace association, import de La SPA, modération.
2. **Adoptants** : comptes, favoris synchronisés, alertes, demandes d'adoption, messagerie.
3. **Diffusion** : kit Facebook, affiche, liens courts, statistiques.

## Stack cible

| Composant | Version |
| --- | --- |
| Node / npm | 24 LTS |
| React | 19 |
| TypeScript | 6 |
| Vite | 8 |
| MUI Material | 9 |
| React Router | 7, mode SPA |
| Redux Toolkit | 2, avec RTK Query |
| motion | 14, pour le swipe |
| Tests | Vitest, Testing Library |

Les types de l'API sont générés depuis le contrat OpenAPI du back avec `@hey-api/openapi-ts`.

Le site vise le RGAA 4.1 et les WCAG 2.2 niveau AA : chaque action se fait au clavier et sans geste. Le navigateur ne contacte aucun service tiers : pas de CDN, pas de police externe, pas d'outil de mesure.

## Après le clonage

Activer les hooks Git du dépôt (ils vérifient le format des messages de commit) :

```sh
git config core.hooksPath .githooks
```

Les commandes d'installation, de tests, de lint et de génération des types arriveront avec le nouveau socle (story 1.2). Le projet n'utilisera que npm.

## Ancienne version (2022)

Si tu veux lancer le code de 2022 en local, pour référence :

```sh
yarn
yarn start
```

Le serveur de développement écoute sur `http://localhost:8080` et attend l'API de l'ancien back sur `http://localhost:8081`. `INSTALL.md` est la documentation du modèle de projet de l'époque.

## Contribuer

- Chaque story a sa branche, créée depuis `main` et nommée `<type>/<epic>-<story>-<slug>`, par exemple `feat/1-2-socle-react`. Elle arrive dans `main` par une pull request, fusionnée sans squash.
- Les messages de commit suivent [Conventional Commits](https://www.conventionalcommits.org/fr/) : type et portée en anglais, description en français, par exemple `feat(discover): ajoute le glissement des cartes`.
- Le développement se fait en TDD : pour chaque critère d'acceptation, le test est écrit avant le code. Les tests cherchent les éléments par leur rôle et leur nom accessible.
- Le code est en anglais ; les commentaires et les textes affichés sont en français.

Les règles complètes (sécurité, RGPD, accessibilité, SEO et performance, conventions) sont dans [`AGENTS.md`](AGENTS.md).

<!-- bmad:context -->
<!-- Verified 2026-10-04 against 0cab626. Managed by bmad-project-context; edits inside this block are replaced on refresh. Keep anything you want preserved outside the markers. -->

## Boule-de-poils-Front

SPA React 19 / TypeScript / Vite (MUI, React Router en mode SPA, Redux Toolkit avec RTK Query, motion pour le swipe), servie par l'application Symfony de `Boule-de-poils-Back` sur le même domaine ; son build est copié dans `public/app/` du Back. Le code présent (React, Babel, Webpack, Enzyme) est l'ancienne version, remplacée par la story 1.2. Planification dans `../_bmad-output/planning-artifacts/` ; l'UX de référence est dans `ux-designs/ux-boule_de_poils-2026-10-03/DESIGN.md` et `EXPERIENCE.md`.

## Policy

### Git
- Ne jamais committer ni pousser sur `main` (protégée sur GitHub, PR obligatoire) : une branche par story, partie de `main`, nommée `<type>/<epic>-<story>-<slug-court>` en ASCII (`feat/1-2-socle-react`).
- Commits Conventional Commits : type et portée en anglais, description en français au présent, pied `Story: 3.4` (`feat(discover): ajoute le glissement des cartes`). Portée = domaine fonctionnel (`discover`, `catalogue`, `account`, `association`, `theme`…), ou `deps`, `ci`.
- Les PR ne sont jamais squashées : chaque commit est atomique et passe les tests ; aucun commit « wip ».
- Pousser sa branche et ouvrir la PR avec `gh pr create` (titre au format Conventional Commits, corps : story, critères couverts, comment tester) ; ne jamais merger, ne jamais `--no-verify`, `--force-with-lease` sur sa propre branche seulement.
- Aucune trace d'IA dans les commits, les PR, le code ni les commentaires : pas de trailer `Co-authored-by` d'un assistant, pas de « Generated with… » ; ne pas modifier l'identité Git configurée.

### TDD
- Pour chaque critère d'acceptation : écrire le test, le voir échouer pour la bonne raison, écrire le code minimal, refactorer tests verts. Aucun code de production sans test qui l'exige ; un bug se corrige en commençant par un test qui le reproduit.
- Tests Vitest et Testing Library : chercher les éléments par rôle et nom accessible (`getByRole`), pas par classe CSS ni `data-testid`. Un test qui ne trouve pas l'élément par son rôle signale un défaut d'accessibilité.

### Sécurité
- Aucun secret ni clé dans le front : tout ce qui est buildé est public.
- Jamais de `dangerouslySetInnerHTML` sur un contenu venant de l'API ou d'une Source.
- Toute nouvelle dépendance passe `npm audit` sans faille critique ni élevée.

### RGPD
- Le navigateur ne contacte aucun tiers : polices auto-hébergées, aucun script, CDN ni outil de mesure externe.
- Géolocalisation demandée seulement au clic sur « Autour de moi » ; les coordonnées ne sont jamais stockées, ni sur l'appareil ni ailleurs.

### Accessibilité (RGAA 4.1, WCAG 2.2 AA)
- Chaque action se fait au clavier et sans geste (le swipe a toujours ses boutons) ; cibles de 44 × 44 px au minimum ; jamais `user-scalable=no`, `maximum-scale` ni `role="application"`.
- Styles par le thème MUI unique de `src/theme/` et ses surcharges ; jamais de couleur, taille ou police en dur.
- Focus d'arrivée, `<title>` et région de statut unique sont gérés par la coquille : ne créer aucune autre région `role="status"` ni `aria-live` dans une page.
- Textes et noms accessibles dans `src/i18n/fr.ts` (tutoiement côté Adoptant, vouvoiement côté Association) ; les mots imposés par `EXPERIENCE.md` ne se reformulent pas.
- `prefers-reduced-motion` ramène toutes les durées d'animation à 0.

### SEO et performance
- Le contenu indexable vient des pages Twig du Back : la SPA reprend la charge `#initial-data` sans nouvel appel et se monte par `createRoot`, sans hydratation.
- Liens internes en vrais `<a href>` (`Link` de React Router), jamais une navigation par `onClick` seul ; URLs françaises d'`EXPERIENCE.md` ; critères de recherche dans l'URL sous leur forme canonique (`SearchCriteria`).
- Photo principale en `fetchpriority="high"`, jamais en lazy loading ; espace réservé à chaque image ; aucun bloc inséré au-dessus d'un contenu déjà affiché.

## Running and verifying

- npm seul : jamais `yarn` ni `--legacy-peer-deps` ; `npm ci` en CI. L'ancien code a les deux verrous (`yarn.lock` et `package-lock.json`) ; seul `package-lock.json` survit à la story 1.2.
- TODO story 1.2 : commandes de tests, lint, vérification des types et génération des types OpenAPI, à vérifier et inscrire ici. Node 24 LTS.
- Activer les hooks versionnés après chaque clone : `git config core.hooksPath .githooks`.

## Conventions that differ from defaults

- Tous les appels API passent par l'`api` RTK Query unique (base `/api`), jamais par `fetch` ni axios directement ; sur une 401 `session-expired`, la saisie reste dans le `deviceStore`.
- Types d'API générés dans `src/api/generated/` par `@hey-api/openapi-ts` depuis le contrat du Back : ne jamais les éditer ni écrire un type d'API à la main ; les régénérer quand le contrat change.
- `localStorage` et IndexedDB seulement par `src/device/` (`deviceStore`, schéma versionné).
- Le front ne trie ni ne filtre jamais la pile Découvrir : ordre et exclusions viennent de `POST /api/discover`.
- Composants dans `src/components/<PascalCase>/`, pages dans `src/pages/` ; code en anglais, commentaires en français.

## Known pitfalls

- Ancien code : ne pas le modifier, la story 1.2 le remplace. Ses défauts ne reviennent pas : URL `localhost:8081` en dur, erreurs réseau ignorées, menu mobile sans nom accessible ni `aria-expanded` (AR-34).
- Des `console.log` ont déjà dû être retirés : n'en committer aucun.

<!-- /bmad:context -->

## david15tonon.github.io

Thanks to Rosas

Les contenus bilingues sont organisés en bundles :

```text
contents/news/posts/2026-07-17-mentoring-noai/
├── index.fr.md
└── index.en.md
```

Les bundles `contents/blog/posts_template/` et `contents/news/posts_template/` servent de modèles : ils documentent le frontmatter et la mise en forme attendus. Ils sont ignorés par la génération (leur nom contient un `_`), il suffit donc de les copier dans `posts/` sous un nom `AAAA-MM-JJ-slug` pour créer un contenu.

La page des travaux (`contents/pages/work/`) et la timeline des actualités (`contents/pages/news/`) décrivent leur propre structure dans un commentaire HTML en tête de fichier. Ces commentaires ne sont pas rendus sur le site.

Les dossiers de billets et d'actualités suivent la convention `AAAA-MM-JJ-slug`. Les pages et thématiques sans date utilisent simplement leur slug (`contents/pages/home/`, par exemple), toujours avec un fichier par langue.

Pour ajouter un billet au blog, il suffit de créer son bundle dans `contents/blog/posts/`. La liste chronologique et la page `/pages/blog/articles/AAAA-MM-JJ-slug/` sont générées automatiquement au build. Les actualités placées dans `contents/news/posts/` reçoivent de la même manière leur propre page.

Le frontmatter de chaque version d'un billet doit contenir `title`, `date` et
`description`. La description alimente les métadonnées standard, Open Graph et
Twitter de la page d'article.

Une image utilisée uniquement pour l'aperçu du lien partagé peut être définie
avec `preview_image` et `preview_image_alt`. Contrairement à `image`, elle n'est
pas affichée dans le contenu de l'article.

### Développement

```bash
npm install
npm run dev
```

Le site utilise TypeScript et Markdown, avec Vite pour produire les fichiers statiques. Node.js 22.12+ est requis. Aucun serveur applicatif n'est nécessaire en production.

- `contents/` : textes existants en Markdown, en français et en anglais.
- `scripts/generate-pages.ts` : génération de toutes les pages et du sitemap depuis les contenus.
- `scripts/templates.ts` : document HTML partagé, navigation, métadonnées et pied de page.
- `assets/css/style.css` : présentation et mise en page responsive.
- `src/main.ts` : préférence de langue ; `src/article.ts` : copie du code, coloration et formules.

Les fichiers `index.html` et `pages/**/*.html` sont des sorties générées : ne pas les modifier directement. `npm run dev` les régénère au démarrage et lors des modifications des Markdown ou des templates TypeScript. `npm run build` génère les pages, vérifie les types et produit `dist/`.

Les pages principales et les articles contiennent déjà leur texte dans le HTML. La lecture en anglais et la navigation fonctionnent sans JavaScript. Le changement de langue et les outils des articles sont des améliorations côté navigateur. La liste du blog affiche uniquement les dates et titres ; les descriptions du frontmatter restent utilisées dans les métadonnées. Les brouillons restent visibles, comme auparavant.

La typographie utilise **Inter** pour le texte et **Bricolage Grotesque** pour les titres, hébergées avec le site via Fontsource. Le texte principal mesure environ 20 px sur ordinateur et 17 px sur mobile. Les blocs de code utilisent une police monospace système. Les icônes des liens de contact sont des SVG Font Awesome intégrés au HTML pendant la génération, avec des noms accessibles. Les dimensions des images sont calculées pendant la génération sans modifier les fichiers originaux.

### Vérification

```bash
npm run build
npx playwright install chromium
npm test
```

Les tests couvrent les pages avec et sans JavaScript, l'accessibilité automatique, le clavier, les deux langues, la copie de code, les anciennes URL et les largeurs de 320 à 1440 pixels. Des captures des mises en page sont enregistrées dans `test-results/`. Pour utiliser un Chromium déjà installé, définir `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` avec le chemin de son exécutable.

### GitHub Pages

Le workflow `.github/workflows/deploy.yml` construit et publie automatiquement `dist/` à chaque push sur `main`. Dans les paramètres GitHub du dépôt, choisir **GitHub Actions** comme source de GitHub Pages.

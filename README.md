# fatemehN.github.io

Personal academic website of Fatemeh N. Nokabadi, served by GitHub Pages at
https://fatemehn.github.io. Plain HTML/CSS with no build step.

## Layout

| Path | What it is |
|------|------------|
| `index.html` | Home page: About, Projects, Academic Service, Awards & Talks tabs |
| `publications.html` | Publications list |
| `style.css` | All styles; light/dark colors are CSS variables at the top |
| `theme.js` | Light/dark toggle (choice saved in the browser) |
| `assets/img/` | Profile photo (`profile.jpg` on the page, `profile.png` for link previews) and certificates |
| `assets/pdf/`, `NeurIPS2024/` | Papers, posters, slides linked from the pages |
| `publication_list.bib` | BibTeX source for the publications (not linked from the site) |

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Checks

Every pull request runs `.github/workflows/quality.yml`:

- **HTML validation**: `html-validate` (rules in `.htmlvalidate.json`)
- **Accessibility**: `pa11y-ci` at WCAG 2 AA, in light and dark mode (`.pa11yci.json`)
- **Link check**: `lychee`, advisory only

To run them locally (needs Node.js):

```bash
npx html-validate index.html publications.html
npx http-server -p 8080 -s . &  npx pa11y-ci --config .pa11yci.json
```

## Publish

Work on a branch, open a pull request, and merge into `main` once the checks
pass. GitHub Pages redeploys automatically within a minute or two.

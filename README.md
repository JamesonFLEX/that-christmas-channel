# That Christmas Channel: Site Revamp (Concept)

One-page site with an interactive 3D snow scene, an animated snow-globe logo, a working Christmas countdown, on-air host detection (Pacific time) and three Christmas games.

## Files
| Path | What it is |
|---|---|
| `index.html` | The whole site (HTML, CSS, JS in one file) |
| `assets/logo.jpg`, `assets/logo-180.jpg` | Logo (hero and nav) |
| `assets/snowglobe-logo.gif` / `.webp` | Animated logo with falling snow, for use anywhere |
| `assets/og-image.jpg` | 1200×630 link-preview image |
| `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `assets/icon-*.png` | Browser and home-screen icons |
| `site.webmanifest` | Add-to-home-screen settings |
| `robots.txt`, `sitemap.xml` | Search engine files |
| `404.html` | Page-not-found screen |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Deploy on GitHub Pages
1. Create a public repo named **that-christmas-channel** under JamesonFLEX.
2. Upload everything in this folder to the repo root (keep the `assets` folder).
3. Settings → Pages → Source: **Deploy from a branch** → `main` / `(root)` → Save.
4. The site goes live at https://jamesonflex.github.io/that-christmas-channel/

## Different repo name or a custom domain?
Link previews need full URLs. Find-and-replace `https://jamesonflex.github.io/that-christmas-channel/` with the new address (ending in `/`) in **index.html**, **robots.txt** and **sitemap.xml**.

## Test the link preview
- Facebook / Messenger: https://developers.facebook.com/tools/debug/ → paste the URL → **Scrape Again**
- LinkedIn: https://www.linkedin.com/post-inspector/
- Previews are cached. After changing the image, re-scrape, or rename the image file.

## Notes
- The song request form opens the visitor's email app with the request filled in. To submit straight from the site, connect a form service.
- 3D graphics load three.js from cdnjs. If it can't load, the page falls back to a flat snowfall.

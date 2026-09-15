# ITEM Presentation

Static presentation site for ITEM's enterprise AI solutions.

## Local preview

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/ItemAISolutions.html>.

## Deployment

Every push to `main` deploys the presentation to GitHub Pages. The workflow publishes `ItemAISolutions.html` as the site's root `index.html` and includes everything under `assets/`.

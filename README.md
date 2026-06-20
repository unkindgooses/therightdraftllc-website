# The Right Draft LLC Website

Static website for The Right Draft LLC — Florida probate and estate planning document preparation support for attorneys and law firms.

## Deployment

Hosted on **Cloudflare Workers**. To deploy after any edits:

```bash
cd "/Users/HQ/The Right Draft LLC Website."
npx wrangler deploy
```

Live at: `therightdraftllc.com`

## Website files

- `index.html` — main site
- `styles.css` — all styles
- `scripts.js` — contact form and interactivity
- `blog.html`, `privacy.html`, `terms.html`, `thank-you.html`, `404.html` — supporting pages
- `images/` — photos and graphics
- `favicon.svg`, `og-image.png` — branding
- `robots.txt`, `sitemap.xml` — SEO

## Local preview

Open `index.html` directly in a browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. Note: you must still run `npx wrangler deploy` for changes to appear on the live site.

# The Right Draft LLC — Project Guide for Claude

## What this is
Static website for **The Right Draft LLC**, a Florida document preparation business serving attorneys and law firms with probate and estate planning document support. Owner: Hector A. Chavez.

## Live site
Hosted on **Cloudflare Workers** at `therightdraftllc.usanababish.workers.dev` and the custom domain `therightdraftllc.com`.

## How to deploy
After making any edits, deploy with:
```bash
cd "/Users/HQ/The Right Draft LLC Website."
npx wrangler deploy
```
This pushes changes live. Always deploy after edits — the user views the site in Chrome (not a local server), so changes only appear after deploying.

## ⚠️ NEVER run `wrangler delete`
Running `wrangler delete` destroys the entire worker including the custom domain connection to `therightdraftllc.com`. This happened once and required manually re-linking the domain in the Cloudflare dashboard. Use `wrangler deploy` only — it safely updates files without touching domain settings.

## IMPORTANT: File structure
Website files live in the `public/` subfolder. Wrangler is configured to deploy ONLY `public/`. Never edit files outside `public/` expecting them to appear on the site.

**Files that go live (inside `public/`):**
- `index.html` — main site (homepage, services, pricing, FAQ, contact)
- `styles.css` — all styling
- `scripts.js` — contact form and interactivity
- `blog.html` — blog page
- `privacy.html`, `terms.html`, `thank-you.html`, `404.html` — supporting pages
- `favicon.svg`, `og-image.png`, `og-image.svg` — branding assets
- `images/` — photos and graphics
- `robots.txt`, `sitemap.xml` — SEO files
- `google3f692221eedf1b54.html` — Google Search Console verification
- `_headers` — Cloudflare response headers

**Files that stay private (outside `public/`, never deployed):**
- `Business Items/` — private business docs, logo source files, contracts
- `To Be Sorted/` — unsorted private documents
- `Helpful Notes.docx`, `TRD LOGO.jpg` — private files
- `.git/`, `.github/`, `.claude/`, `.wrangler/`, `.netlify/` — tooling internals
- `CLAUDE.md`, `README.md`, `PRIVACY.md`, `TERMS.md` — docs/guides
- `wrangler.jsonc`, `netlify.toml`, `deploy-test.txt` — config files

## Current pricing (as of June 2026)
**Probate:**
- Summary Administration: $275/case
- Formal Administration: $450/case
- Complex Formal Administration: $900/case

**Estate Planning:**
- Individual: $250/case
- Married Couple: $400/case

## Brand
- Colors: dark green (`#2d5016`), light green background, gold accents
- Fonts: Cinzel (headings), Lato / Merriweather (body)
- Tagline: "Never rough drafts, just The Right Draft."
- Target clients: Florida attorneys and law firms (not end consumers)

## Contact form
The contact form POSTs to a Cloudflare Worker endpoint. Submissions redirect to `thank-you.html`.

## Git
Remote: `https://github.com/unkindgooses/therightdraftllc-website.git` (branch: `main`)
Commit changes and push to keep GitHub in sync with local edits.

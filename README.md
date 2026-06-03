# The Right Draft LLC Website

A polished static website for The Right Draft LLC, providing probate and estate planning document preparation support for attorneys, law firms, and legal professionals in Florida.

## Files

- `index.html` — homepage and contact section
- `styles.css` — responsive branding and layout styles

## Local preview

Open `index.html` in your browser, or use a local web server for the best result.

### Option 1: open directly

Open `index.html` in your browser with Finder or by double-clicking the file.

### Option 2: serve with Python

```bash
cd "/Users/HQ/The Right Draft LLC Website."
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## SEO & analytics

- Search engine metadata and social preview tags are included in `index.html`.
- A simple `robots.txt` and `sitemap.xml` are included for better indexing.
- To enable analytics, paste your provider script into `index.html` before the closing `</head>` tag.
- Update the canonical URL and sitemap entries to your live domain when deployed.

## Deployment

This site is ready to deploy on GitHub Pages, Netlify, Vercel, or any static hosting provider.

### Favicon and social preview

- A favicon is included in `favicon.svg`.
- A social preview image is included in `og-image.svg`.
- Update the URLs in `index.html` to your actual domain once the site goes live.

## Contact form behavior

The contact form is now configured for Netlify Forms.

- Deploy this folder to Netlify.
- The form will submit to Netlify and redirect to `thank-you.html` on success.
- Keep the hidden `form-name` field and `data-netlify="true"` attribute intact.

Email and phone details are still intentionally left blank while those details are being finalized.

### GitHub Pages

1. Push this folder to a GitHub repository.
2. Enable GitHub Pages from repository settings.
3. Serve from the `main` branch or `gh-pages` branch.

### Netlify or Vercel

1. Connect the repository.
2. Set the publish directory to `/`.
3. Deploy.

## Notes

- Contact details are intentionally left blank for now. Add your email and phone number in `index.html` when you're ready.
- The design uses navy, gold, and white to convey a professional legal-services brand with clarity and trustworthiness.

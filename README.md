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

This site is live on Netlify at: https://therightdraftllc-website.netlify.app

The project is ready to push to GitHub and connect to Netlify for continuous deployment.

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

### GitHub push instructions

If the repo has not been pushed to GitHub yet, use one of these commands:

```bash
cd "/Users/HQ/The Right Draft LLC Website."
git remote add origin https://github.com/unkindgooses/therightdraftllc-website.git
git push -u origin main
```

If you prefer SSH and your SSH key is configured with GitHub:

```bash
cd "/Users/HQ/The Right Draft LLC Website."
git remote add origin git@github.com:unkindgooses/therightdraftllc-website.git
git push -u origin main
```

If push fails due to credentials, make sure GitHub CLI or SSH keys are properly configured.

### Connect your custom domain

1. Open the Netlify site dashboard: https://app.netlify.com/sites/therightdraftllc-website
2. Go to **Domain management** → **Custom domains**.
3. Add `therightdraftllc.com` as a custom domain.
4. Follow Netlify’s DNS instructions to add the required A and CNAME records with your domain registrar.

Once DNS propagation completes, your Netlify site will serve from `therightdraftllc.com`.

## Notes

- Contact details are intentionally left blank for now. Add your email and phone number in `index.html` when you're ready.
- The design uses navy, gold, and white to convey a professional legal-services brand with clarity and trustworthiness.
- The project includes a dedicated `PRIVACY.md` file with the current form and inquiry policy.
 - The project includes a dedicated `PRIVACY.md` file with the current form and inquiry policy.
 - A `TERMS.md` file describes service terms, limitations, and governing law.

## Suggested social copy

Use this copy when sharing the site or posting an announcement on LinkedIn, Facebook, or email:

- Title: The Right Draft LLC | Florida Probate & Estate Planning Document Support
- Description: Professional document preparation support for attorneys, paralegals, and law firms handling Florida probate and estate planning matters. Mobile notary and witnessing services available in Broward and Palm Beach Counties.
- Hashtags: #ProbateSupport #EstatePlanning #FloridaLaw #LegalAssistant #ParalegalSupport

## Privacy and form policy

This site uses a simple contact form to collect only the following information from prospective clients:

- Name
- Firm or practice
- Email address
- Inquiry message

The form is configured for Netlify Forms and does not include tracking or marketing opt-ins by default.

- Inquiries are intended solely to respond to prospect questions and requests.
- Contact information is not shared with third parties beyond the form provider.
- Email and phone details are intentionally left blank until they are finalized.

If third-party analytics are added later, update the site and documentation with the relevant analytics provider and privacy policy details.
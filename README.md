# Portfolio (Astro)

Minimal, animated, multi-page portfolio built with Astro. Content lives in `src/data` and static assets in `public`.

## Quick start

```bash
npm install
npm run dev
```

## GitHub Pages deployment

1. Set your site base in `astro.config.mjs` if you are deploying to a repo page.
2. Build with `npm run build`.
3. Deploy the `dist/` folder with your preferred GitHub Pages workflow.

## Content updates

- Projects: `src/data/projects.ts`
- Links: `src/data/links.ts`
- Site settings + form endpoint: `src/data/site.ts`
- Resume PDF: `public/resume/resume.pdf`
- Embeds: `public/embeds/*.html`

See `CONTENT_GUIDE.md` for detailed instructions.

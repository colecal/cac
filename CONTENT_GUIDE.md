# Content Guide

This site is intentionally data-driven. Most updates are a file edit or a file drop.

## Resume

1. Export your resume to PDF.
2. Name the file `resume.pdf`.
3. Replace `public/resume/resume.pdf`.

The Resume page will embed the PDF and the download button will use the same file.

## Projects

Update `src/data/projects.ts`.

- `category` controls grouping on the Projects page.
- `tags` appear as pills.
- `embed` accepts an iframe or image. Use iframe for notebooks and mini apps.

Example embed using a local mini app:

```
embed: {
  type: "iframe",
  src: "/embeds/my-demo.html",
  title: "My demo"
}
```

## Notebooks

Option 1: host the notebook on nbviewer and link it.
Option 2: export to HTML and place in `public/embeds`, then embed it.

## Links page

Update `src/data/links.ts` with any resource you want to highlight.

## Contact form

Set your Formspree endpoint in `src/data/site.ts` under `formAction`.

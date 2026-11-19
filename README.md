# davidhjolley.com

Personal site for David Jolley, founder of Oarka. Built with [Astro](https://astro.build) and deployed to GitHub Pages at https://davidhjolley.com.

## Develop

```bash
npm install
npm run dev
```

`npm run build` writes the static site to `dist/`. `npm run preview` serves that build locally.

## Structure

- `src/pages/index.astro` – the single page, composed from components
- `src/components/` – Nav, Hero, Projects, ProjectCard, About, Contact, Footer, Scribble
- `src/data/site.ts` – all copy, project list and links (currently lorem ipsum)
- `src/styles/global.css` – design tokens and base styles
- `public/` – static files copied as-is, including `CNAME` for the custom domain

## Deploy

Pushes to `main` run `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The repository's Pages setting must be set to "GitHub Actions" as the source.

## License

MIT, see `LICENSE`.

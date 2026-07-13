# vaclavparma-cz

Source code for my personal website — [vaclavparma.cz](https://vaclavparma.cz).

Built with [Astro](https://astro.build/). Bilingual (Czech / English).

## Requirements

- Node.js `>=22.12.0`

## Development

```sh
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

## Scripts

| Command           | Description                          |
| :---------------- | :----------------------------------- |
| `npm run dev`     | Start local dev server               |
| `npm run build`   | Build production site to `./dist/`   |
| `npm run preview` | Preview the production build locally |
| `npm run astro`   | Run Astro CLI commands               |

## Project structure

```
public/          # Static assets
src/
  components/    # Astro components
  i18n/          # Translations and helpers
  layouts/       # Page layouts
  pages/         # Routes (cs default, en under /en)
```

## License

MIT License. See [LICENSE](LICENSE) for details.

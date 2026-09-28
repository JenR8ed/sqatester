# sqatester: SDET portfolio project

React/Vite front-end project for Jennifer McKinley's SDET and quality-engineering portfolio.

The primary portfolio is at [jenr8edai.com](https://jenr8edai.com). This repository holds the source and tests for an earlier React/Vite portfolio site.

## Status

**Hosted demo currently unavailable.** The GitHub Pages address previously linked from this README (`jenr8ed.github.io/sqatester`) returned a 404 when last checked. The cause has not been determined. This repository is source code and tests only.

## Tech stack

- React 18
- Vite
- Tailwind CSS
- Lucide React icons
- Vitest (test runner)

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Testing

The repository includes a `tests/` directory containing `App.test.jsx` (Vitest) and `test_app.py`, and a `vitest.config.js` configuration.

```bash
npm test
```

`npm test` runs `vitest run`. Test results and coverage have not been recorded for this README, and `tests/test_app.py` is not run by this command.

## Deployment

GitHub Pages is enabled for this repository, but the current deployment is not working (see Status). No deployment is documented as verified.

## License

Copyright © 2026 Jennifer McKinley. All rights reserved.

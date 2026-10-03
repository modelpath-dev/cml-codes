# cml-codes

Personal portfolio of Chandan Kumar, AI/ML Engineer.

Built with Next.js 16 (App Router, Turbopack), TypeScript, Tailwind CSS v4, and Motion.

## Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Motion (formerly Framer Motion)
- **Fonts**: Geist Sans, Geist Mono, Instrument Serif
- **Theme**: light/dark, follows the OS until toggled from the bottom dock

## Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## Open-source contributions

The "Open Source Contributions" section reads `src/lib/oss.json`, generated from GitHub:

```bash
node scripts/sync-oss.mjs   # uses $GITHUB_TOKEN, or `gh auth token` if unset
```

It collects every merged or open PR by `modelpath-dev` in public repos the account doesn't own, groups them by repo (several PRs in one repo render as a tree), and ranks repos by stars. Private repos and closed-unmerged PRs are skipped. Re-run it and commit the JSON to refresh the section.

## Build

```bash
npm run build
npm start
```

## Deployment

Deployed on Vercel at [cml-codes.vercel.app](https://cml-codes.vercel.app).

## Contact

- Email: cml.codes@gmail.com
- GitHub: [@modelpath-dev](https://github.com/modelpath-dev)
- LinkedIn: [chandan-kumar](https://www.linkedin.com/in/chandan-kumar-438aa3193/)
- X: [@CmlCodes](https://x.com/CmlCodes)

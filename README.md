# SoulShopBD Payments information pages

Public OAuth homepage and privacy policy for the operator-authorized SoulShopBD
payment-mailbox integration. Support: cyanide.eshop@gmail.com.

- Homepage: https://safin1337.github.io/
- Privacy policy: https://safin1337.github.io/privacy/

These are static information pages. They contain no Gmail credentials, mailbox
data, sign-in forms, analytics, or client-side application code. The Gmail API
integration runs separately on SoulShopBD's server.

## Editing

Edit `src/pages.tsx` and `src/site.css`, then run `npm install` and `npm run build`.
The build produces the static pages in `dist/`. Copy `dist/index.html`,
`dist/privacy/index.html`, and the contents of `dist/assets/` to their matching
locations at the repository root before committing and pushing `main`.

GitHub Pages publishes the repository root. Keep `.nojekyll` present. Never add
OAuth client secrets, refresh tokens, payment receipts, or private environment
files to this repository. Changes to these pages do not update Google Cloud's
Branding fields or establish domain ownership verification.

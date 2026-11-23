# lovepins.app

Landing page, support page and privacy policy for [Lovepins](https://lovepins.app), a private map for couples (iOS).

Static site built with [Astro](https://astro.build), hosted on Cloudflare Pages (build `npm run build`, output `dist`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

- **Launch switch and prices:** `src/config.ts` (`launched: false` shows the email waitlist, `true` shows the App Store badge and the Smart App Banner; set `appStoreId` first).
- **Pages:** `/` (landing), `/support/`, `/privacy.html` (path used by the app; keep the file name, Cloudflare serves it at `/privacy` and redirects `.html`).
- **Waitlist:** the form calls the Supabase RPC `join_waitlist` with the public publishable key. The table is not readable from the site.
- **Icons:** `node scripts/icons.mjs` regenerates favicons from `public/favicon.svg`.
- **Old address:** `docs/` holds redirect stubs served by GitHub Pages so `guigzlsx.github.io/lovepins-site/` forwards to lovepins.app.
- **Fonts:** Fraunces and Caveat, self-hosted, SIL Open Font License (`public/fonts/*-OFL.txt`).

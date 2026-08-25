# Boilerplate wizytówek SPA — 2026-08-16

Szablon Vite + React + TypeScript + Tailwind v4 + shadcn pod strony wizytówkowe wrzucane na FTP.

## Jak odpalić

1. Skopiuj `.env.example` do `.env` (albo dopisz zmienne do istniejącego `.env`):
   - `VITE_SHOW_DEV_PANEL=true` — panel 3 wariantów u góry strony
   - `VITE_BASE=/` — na FTP w katalogu głównym
2. `npm install`
3. `npm run dev` — podgląd
4. `npm run build` — wynik w `dist/` (to wrzucasz na FTP)
5. `npm run preview` — podgląd builda

W trybie DEV panel wariantów pokazuje się także bez zmiennej. Na produkcji FTP ustaw `VITE_SHOW_DEV_PANEL=false`.

## Co edytować przy nowym kliencie

- Dane firmy: `client/src/config/site.ts`
- Kolory, fonty, 3 presety układu: `client/src/config/theme.ts`
- Teksty PL/EN: `client/src/i18n/locales/`
- Zdjęcia: `client/assets/` + katalog w `client/assets/ASSETS.md`, importy w `client/src/config/assets.ts`
- Meta SEO: `client/index.html`

## Zawartość strony

One-pager z kotwicami: Hero, slider, oferta, o nas, zespół, galeria (lightbox), cennik, kontakt (tel/e-mail + mapa OSM). RODO i polityka: `#/rodo`, `#/polityka`. Banner cookies. Dark mode i przełącznik języka w navbarze. Kredyt AddPattern w stopce.

## Rules Cursor

- `shared.mdc` — raporty, `.env`, stack, FTP
- `frontend.mdc` — struktura `client/`, kotwice, CTA bez formularza
- `theme.mdc` — `theme.ts` / `site.ts` / DevPanel
- `backend.mdc` / `db.mdc` — na przyszłość, bez kodu serwera i bazy

## Poza zakresem (z planu)

Express, MySQL, formularz POST, GA, testy, skrypt FTP, React Router.

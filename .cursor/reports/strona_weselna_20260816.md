# Strona weselna Doroty i Marcina — 2026-08-16

One-pager ślubny na bazie boilerplate’u. Prezentacja dla klientów: wygląda jak strona pary (imiona, zdjęcia, kościół i sala), a godziny, RSVP, świadkowie i telefony są spójnym demo.

## Decyzje

- Data: 28 września 2024 (z obrączek) — countdown w trybie „wesele za nami”.
- Ślub: Kościół pw. Narodzenia NMP, ul. Krakowska 6, Piwniczna-Zdrój.
- Wesele: Rezydencja Las Vegas, Barcice 550.
- Paleta: jedna, boho (`#F9F4EC` / `#9E5A30` / `#5E6551`), tylko jasny motyw, bez DevPanel.
- Języki: PL + EN. RSVP: localStorage. Księga: wpisy statyczne + mailto.
- GitHub Pages: `https://midnajt.github.io/example_weeding_site.github.io/` (`VITE_BASE=/example_weeding_site.github.io/`).

## Co powstało

- Config: `client/src/config/site.ts`, `theme.ts`, `assets.ts`, i18n `pl.json` / `en.json`, `client/index.html`.
- Zdjęcia: 10 JPG + `watercolor-floral.png` w `client/assets/` (galeria lightbox ma wszystkie kadry). Hero: `5F4A6221.jpg`.
- Sekcje: Hero, ślub/wesele, countdown, historia, slider, plan dnia, stoły, menu, logistyka, prezenty, RSVP, galeria, księga, FAQ, świadkowie, kontakt (dwie mapy OSM).
- Usunięte z home: Oferta, Cennik, Zespół.
- Prawne: `#/rodo`, `#/polityka`, banner cookies — treść pod demo.
- Publikacja: `.github/workflows/pages.yml`, `client/public/.nojekyll`.

## Build

`npm run build` i `npm run lint` przechodzą (2026-08-16). Ostrzeżenie Vite o chunku JS > 500 kB — bez code-splitting, nie blokuje.

`.env` jest w `.gitignore` (zapis z agenta odrzucony). Wzór: `.env.example` (`VITE_SHOW_DEV_PANEL=false`, `VITE_BASE=/`). W Actions zmienne ustawia workflow.

## Publikacja (gdy będzie repo)

1. Utwórz repo `midnajt/example_weeding_site.github.io`.
2. Settings → Pages → Source: GitHub Actions.
3. Push na `main` (na osobną prośbę) — workflow zbuduje i wrzuci `dist/`.

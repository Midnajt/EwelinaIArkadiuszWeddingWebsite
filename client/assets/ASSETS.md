# Katalog grafik

Agent i człowiek mają czytać ten plik zamiast zgadywać po bitmapach.
Podmieniając plik zachowaj **tę samą nazwę**, albo zaktualizuj import w `client/src/config/assets.ts`.

## `client/assets/` — importowane w aplikacji

Źródło: pełnowymiarowe JPG z `example_photos/` (do 6720 px / ~26 MB). Na stronę idzie kopia webowa: dłuższy bok **1920 px**, JPEG quality 85.

Przy `npm run build` **vite-imagetools** (Sharp) robi z zdjęć AVIF + WebP i srcset 800 / 1280 / 1920 px (jakość 82). Oryginały w tym katalogu zostają bez zmian. Logotypy (`logo_*.png`) nie są konwertowane.

| Plik | Zastosowanie | Kadr źródłowy |
| --- | --- | --- |
| `hero.png` | Hero (Paryż) + slider — para wieczorem, wieża Eiffla (desktop, ≥768 px) | z `assets_from_client/hero.png` |
| `hero_mobile.png` | Hero (Paryż) + slider — ten sam kadr, pionowy (mobile, &lt;768 px) | z `assets_from_client/hero_mobile.png` |
| `beach.png` | Hero (plaża) + slider — para na plaży o zachodzie słońca | z `assets_from_client/beach.png` |
| `restaurant.png` | Hero (restauracja) + slider + tło stopki tylko w Prestige | z `assets_from_client/restaurant.png` |
| `logo_gold.png` | Monogram E&A: hero (Love i Prestige) oraz navbar/separatory w Prestige (`mix-blend-screen`) | z `assets_from_client/logo_gold.png` |
| `5F4A6221.jpg` | Galeria — dawne zdjęcie hero (demo) | 6720×4480 → 1920×1280 |
| `5F4A5869.jpg` | Historia — portret intymny (lewy) | 4480×6720 → 1280×1920 |
| `5F4A5888.jpg` | Historia — splecione dłonie (środek) | 5688×3792 → 1920×1280 |
| `5F4A5971.jpg` | Historia — uśmiech panny młodej (prawy) | 6720×4480 → 1920×1280 |
| `5F4A9191.jpg` | Galeria (sekcja wyłączona) — wyjście z kościoła | 2257×3386 → 1280×1920 |
| `5F4A8913.jpg` | Galeria (sekcja wyłączona) — ceremonia | 2932×4398 → 1280×1920 |
| `5F4A9728.jpg` | Galeria (sekcja wyłączona) — pierwszy taniec | 6146×4097 → 1920×1280 |
| `5F4A8998.jpg` | Galeria — sakrament | 5707×3805 → 1920×1280 |
| `5F4A8392.jpg` | Galeria — detale panny młodej | 6557×4371 → 1920×1280 |
| `5F4A8617.jpg` | Galeria — detale pana młodego | 4107×6160 → 1280×1920 |
| `logo_black.png` | Navbar i separatory (Boho, Love); hero w Boho (`invert` na ciemnym zdjęciu) | z `assets_from_client/logo_black.png` |
| `watercolor-floral.png` | Niewykorzystany (zastąpiony `logo_black.png`) | nie skalować z JPG |

Galeria lightbox (sekcja obecnie wyłączona w `App.tsx`) używa **wszystkich 10 JPG**. Placeholdery SVG nie są importowane.

## `client/public/`

| Plik | Zastosowanie | Źródło |
| --- | --- | --- |
| `images/og-image.png` | Open Graph / Twitter (1200×630) | `beach.png` — `npm exec --package=sharp -- node scripts/generate-social-images.mjs` |
| `favicon.svg` | Favicon (SVG) | monogram E&A |
| `favicon.ico` | Favicon (legacy) | `logo_gold.png` |
| `favicon-32x32.png` | Favicon PNG | `logo_gold.png` |
| `favicon-16x16.png` | Favicon PNG | `logo_gold.png` |
| `apple-touch-icon.png` | Ikona iOS (180×180) | `logo_gold.png` |

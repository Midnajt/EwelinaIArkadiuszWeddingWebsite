# Belka trzech motywów — 2026-08-16

## Co powstało

Nad Navbarem jest zawsze widoczna belka `ThemeBar` z trzema przyciskami (ikona + nazwa). Przełączają pełne osobowości strony i zapisują wybór w `localStorage` (`wedding-theme`).

## Presety

- **Boho** (`Flower2`) — dotychczasowa paleta, Cormorant Garamond + Nunito Sans, gęstość airy, obecne animacje.
- **Las** (`Leaf`) — biel i leśna zieleń, Libre Baskerville + Figtree, gęstość comfortable, spokojniejszy ruch.
- **Prestige / noirGold** (`Crown`) — czerń i złoto, Cinzel + Manrope, gęstość compact, glassmorphism całej strony, wolniejszy ruch premium.

## Pliki

- Tokeny i `surface`: `client/src/config/theme.ts`
- Zapis i `data-theme`: `client/src/lib/theme-provider.tsx`
- Belka: `client/src/components/layout/ThemeBar.tsx` (DevPanel usunięty)
- Szkło: `client/src/index.css` (`html[data-theme="noirGold"]`)
- Ruch: `client/src/lib/motion.ts` → `getMotionProfile()`
- i18n: `theme.bar` w `pl.json` / `en.json`

Belka nie zależy od `VITE_SHOW_DEV_PANEL` — jest widoczna także na FTP.

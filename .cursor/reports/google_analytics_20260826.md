# Google Analytics GA4 — 2026-08-26

Tag `G-9S8QF0YP33` ładuje się przy starcie aplikacji (`initGoogleAnalytics` w `main.tsx`), **bez** czekania na zgodę cookies — na czas testów.

- Zmienna: `VITE_GA_MEASUREMENT_ID` (wzór w `.env.example`).
- Gdy `.env` nie ma ID, kod używa `G-9S8QF0YP33`.
- Przed publikacją warto podpiąć tag pod zgodę w banerze i zaktualizować RODO / politykę prywatności.

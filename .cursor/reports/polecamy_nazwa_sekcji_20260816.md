# Zmiana nazwy sekcji: Współpraca → Polecamy

Data: 2026-08-16

## Co się zmieniło

Sekcja firm weselnych nie jest już „współpracą” (język B2B). Gość widzi **Polecamy** — listę pracowni, u których można się umówić przed ślubem albo przed poprawinami.

| Element | Było | Jest |
| --- | --- | --- |
| Nagłówek PL | Współpraca | Polecamy (kicker: Dla gości) |
| Nagłówek EN | Vendors / Credits | We recommend (kicker: For guests) |
| Kotwica | `#wspolpraca` | `#polecamy` |
| FAB | Handshake + „Współpraca” | Sparkles + „Polecamy” |

Przycisk pływający, stopka i `id` sekcji wskazują na `#polecamy`. Na RODO/polityce FAB nadal się ukrywa.

## Pliki

- `client/src/i18n/locales/pl.json`, `en.json`
- `client/src/components/sections/Partners.tsx`
- `client/src/components/layout/PartnersFab.tsx`
- `client/src/components/layout/Footer.tsx`

# Kadr zdjęcia plaży na mobile — 2026-08-26

Na wąskim ekranie `object-fit: cover` wycinał środek `beach.png`, więc w hero widać było głównie pana, a panna zostawała na prawej krawędzi.

## Zmiana

- `PhotoItem` ma opcjonalne `objectPositionMobile`.
- Plaża: desktop bez zmian (`center 42%`), mobile `80% 42%` (kadr w prawo, w stronę panny).
- `ResponsivePhoto` przełącza kadr poniżej 768 px.

Paryż i restauracja bez zmian.

# Gradient między sekcjami — 2026-09-01

Sekcja `#niezbednik` miała ostre tło `bg-muted/40` względem `#slub` i `#odliczanie` (`bg-background`).

Zamiast płaskiego koloru jest klasa `bg-muted-section-fade`: pionowy gradient ze zmiennych `--background` i `--muted` (ten sam mix 40% co wcześniej). Góra i dół schodzą do tła sąsiadów, środek zostaje przyciemiony.

Pliki: `client/src/index.css`, `client/src/components/sections/GuestEssentials.tsx`.

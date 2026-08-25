# Aktualizacja .gitignore — 2026-08-16

Rozszerzono `.gitignore` pod projekty WWW: vanilla HTML/CSS/JS, React, Node, Express i MySQL.

## Zakres

- zależności (`node_modules`, Yarn/pnpm, bower)
- sekrety (`.env*`, klucze, credentials) z wyjątkiem `.env.example` / `.env.sample`
- buildy i cache (`dist`, `build`, `.next`, Vite/Webpack/Parcel)
- logi i coverage
- dump i pliki danych MySQL
- artefakty OS i IDE

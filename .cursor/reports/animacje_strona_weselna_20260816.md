# Animacje ze strony AddPattern — wdrożenie na stronie weselnej

Data: 2026-08-16  
Projekt: `ExampleWedding`  
Wzór: [AddPattern](https://midnajt.github.io/AddPattern.github.io/) (Framer Motion)

---

## 1. Co zostało przeniesione

Te same mechanizmy co na wizytówce AddPattern, z paletą boho (`#9E5A30` / `#5E6551` zamiast cyjanu i fioletu).

| Efekt AddPattern | Gdzie na stronie weselnej |
| --- | --- |
| Ken Burns tła (scale 1.08 → 1, 8 s) | Hero — zdjęcie `5F4A6221.jpg` |
| Radial glow u góry kadru | Hero — ciepłe światło `rgba(255, 214, 170)` |
| Wjazd słów nagłówka (blur + y) | Imiona w hero |
| Fade-up kicker / lead / CTA | Hero + `SectionHeader` |
| Pulsująca kreska „scroll” | Dół hero |
| Stagger kafelków + hover `y: -6` i glow | Ślub/wesele, stoły, menu, logistyka, prezenty, świadkowie, księga, kontakt |
| Zoom zdjęcia `scale 1.06` | Historia, galeria, slider |
| Wjazd kroków procesu | Plan dnia (timeline) |

Easing: `cubic-bezier(0.22, 1, 0.36, 1)` — ten sam co na AddPattern.

---

## 2. Pliki

- Tokeny: `client/src/lib/motion.ts`
- Wrappery: `client/src/components/motion/Reveal.tsx` (`Reveal`, `Stagger`, `StaggerItem`)
- `Section` nie owija już całej sekcji w jeden fade (żeby dzieci mogły wchodzić po kolei)
- `prefers-reduced-motion`: animacje wyłączane przez `useReducedMotion`

---

## 3. Świadomie nie kopiowane 1:1

- Ciemne tło i glow cyan/violet — nie pasują do boho.
- Ogromne logo oferty — tu nie ma analogicznego slotu.
- Siatka procesu 4 kolumn — u nas pionowy timeline.

---

## 4. Jak sprawdzić

`npm run dev` → hero (wjazd imion, powolny zoom zdjęcia, ciepła poświata), potem scroll: nagłówki i kafelki wjeżdżają, hover unosi kartę, zdjęcia w historii/galerii lekko się powiększają.

Lint i `tsc -b` przechodzą. Publikacja Pages nadal tylko na osobną prośbę.

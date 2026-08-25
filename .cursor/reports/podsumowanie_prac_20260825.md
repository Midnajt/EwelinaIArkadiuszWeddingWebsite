# Raport prac — strona Eweliny i Arkadiusza — 2026-08-25

Szablon Doroty i Marcina (ExampleWeddingSite) został przepięty na stronę weselną **Eweliny i Arkadiusza**. Domena docelowa: [ewelinaiarkadiusz.pl](https://ewelinaiarkadiusz.pl). Repo GitHub: [Midnajt/EwelinaIArkadiuszWeddingWebsite](https://github.com/Midnajt/EwelinaIArkadiuszWeddingWebsite.git).

## 1. Rebrand treści

| Pole | Było (szablon) | Jest |
| --- | --- | --- |
| Para | Dorota & Marcin | Ewelina & Arkadiusz |
| Inicjały | D & M | E & A (navbar: logo, nie tekst) |
| Data | 28 września 2026 | **27 listopada 2026** |
| Miasto | Piwniczna-Zdrój | Spytkowice |
| Ślub | Kościół pw. Narodzenia NMP, ul. Krakowska 6 | Kościół pw. Niepokalanego Poczęcia NMP, Spytkowice 21, 34-745 |
| Wesele | Rezydencja Las Vegas, Barcice 550 | Restauracja „Przystań Kabanos”, Spytkowice 625 ([przystanwkabanosie.pl](https://przystanwkabanosie.pl)) |
| Telefony | 500 100 200 / 201 (demo) | Ewelina **504 964 802**, Arkadiusz **502 811 680** |

Pliki: `client/src/config/site.ts`, `client/src/lib/calendar.ts` (ICS UID `ewelinaiarkadiusz.pl`), `client/src/i18n/locales/pl.json` i `en.json`, `client/index.html` (SEO, `og:url`).

**Bez zmian:** stopka autora AddPattern Marcin Krzysztoszek (to nie pan młody). Maile nadal `@example.pl`. Świadkowie w danych configu zostają poglądowi (sekcja ukryta).

## 2. Grafiki

| Plik | Gdzie |
| --- | --- |
| `assets_from_client/hero.png` → `client/assets/hero.png` | Tło hero (Paryż, wieża Eiffla) |
| `logo_gold.png` | Monogram w hero (`mix-blend-screen`) |
| `logo_black.png` | Separatory sekcji + logo w navbarze (`invert` w motywie Prestige) |
| `client/public/images/og-image.png` | Open Graph |

Favicon SVG: E&A. Galeria i slider nadal używają zdjęć demo z szablonu (`5F4A*.jpg`).

## 3. Co jest widoczne na stronie

Włączone:

- belka motywów + navbar (logo czarne, Ślub, Wesele, Historia, Galeria, Kontakt, PL/EN)
- hero: data, imiona, podtytuł, złoty monogram — **bez przycisków CTA**
- karty ślub / wesele (adresy + mapy)
- niezbędnik: **tylko** „Zapisz termin” (plik ICS)
- odliczanie
- historia
- slider
- galeria
- kontakt (prawdziwe telefony)
- stopka, cookies, RODO / polityka

## 4. Co jest zakomentowane (łatwo włączyć w `App.tsx`)

- Plan dnia (`DayTimeline`, `#plan`) — też link w menu i kafelek w niezbędniku
- Plan stołów (`TablePlan`)
- Menu weselne (`WeddingMenu`)
- Organizacja: bus, nocleg, dzieci (`LogisticsGrid`)
- Prezenty (`GiftWishes`)
- Potwierdzenie obecności (`RsvpForm`) — navbar, stopka, CTA hero
- Galeria gości / księga (`GuestBook`)
- Świadkowie (`Witnesses`)
- Polecamy + FAB (`Partners`, `PartnersFab`)

Komponenty i tłumaczenia zostają w repozytorium.

## 5. Git / publikacja

Lokalnie było `git init` (brak historii szablonu jako remote). Remote: dodać `origin` przez `git remote add`, nie `set-url`. Na GitHubie repo ma na starcie sam LICENSE — pierwszy push może wymagać `--force` albo `pull --allow-unrelated-histories`. Publikacja FTP: `npm run build` → zawartość `dist/`. GitHub Actions `VITE_BASE=/ExampleWeddingSite/` **nie był ruszany**.

## 6. Do uzupełnienia (kolejna tura)

- Maile pary (zamiast `@example.pl`)
- Zdjęcia galerii / slidera / historii (w `assets_from_client` są m.in. `couple1.jpg`, `flowers.jpg`, `beach.png`, `restaurant.png` — jeszcze nieużyte)
- Godziny ceremonii i wesela (zostały 14:00 / 16:30 z szablonu)
- Historia miłości (nadal ogólny tekst demo, tylko lokalizacja Spytkowice)
- Włączenie wybranych zakomentowanych sekcji, gdy będą prawdziwe dane
- Commit i push do `EwelinaIArkadiuszWeddingWebsite`

# Raport prac — strona weselna Doroty i Marcina

Data: 2026-08-16  
Projekt: `ExampleWedding`  
Cel kolejnego kroku: publikacja / dopracowanie prezentacji (GitHub Pages).

---

## 1. Co jest gotowe

One-pager ślubny (gość, nie planer) na Vite + React + TypeScript + Tailwind v4 + shadcn. Boilerplate usługowy (oferta, cennik, zespół) został zastąpiony szkieletem z `docs/example.md`.

Adres docelowy: https://midnajt.github.io/example_weeding_site.github.io/  
`VITE_BASE=/example_weeding_site.github.io/` (ustawiane w GitHub Actions, lokalnie `/`).

`npm run build` i `npm run lint` przechodziły po pierwszej implementacji. Po podmianie zdjęć warto ponownie odpalić `npm run build` przed pushem.

---

## 2. Decyzje produktowe (nie zgadywać od nowa)

| Temat | Ustalenie |
| --- | --- |
| Charakter | Hybryda: wygląda jak prawdziwa strona pary; logistyka (godziny, menu, stoły, telefony, świadkowie) jest **demo** pod prezentację klientom |
| Data | 28 września 2026 — hero i odliczanie automatycznie rozpoznają czas przed ślubem, dzień uroczystości i okres po weselu |
| Ślub | Kościół pw. Narodzenia NMP, ul. Krakowska 6, 33-350 Piwniczna-Zdrój, godz. demo 14:00 |
| Wesele | Rezydencja Las Vegas, Barcice 550, 33-342 Barcice, godz. demo 16:30 |
| Paleta | Jedna, boho: tło `#F9F4EC`, CTA `#9E5A30`, akcent `#5E6551`; **bez** fuksji WZK `#9F1E6F` |
| Motywy | Bez panelu 3 wariantów, **bez dark mode** |
| Języki | PL + EN |
| Potwierdzenie | Formularz w `localStorage` (bez backendu). W UI po polsku: **„Potwierdź obecność”** (nie „RSVP”) |
| Księga | 3 wpisy statyczne + mailto, bez zapisu |
| Kontakt | Fikcyjne numery `500 100 20x` i maile `@example.pl` |
| GitHub Pages | Workflow gotowy; **push dopiero na prośbę** |

---

## 3. Mapa strony (kolejność)

1. Hero — `5F4A6221.jpg`, imiona, data, CTA zdjęcia + potwierdzenie obecności  
2. Karty Ślub / Wesele + linki OSM  
3. Niezbędnik gościa — plan, bus, mapy, kontakt i pobranie wydarzenia `.ics`
4. Countdown — treść zależna od dnia względem 28.09.2026
5. Historia — 3 kadry (kolejność: intymny → dłonie → uśmiech panny)
6. Slider — wyjście z kościoła, ceremonia, pierwszy taniec
7. Plan dnia (timeline)
8. Plan stołów (fikcyjne grupy)
9. Menu weselne (demo)
10. Logistyka (dojazd, dzieci, nocleg, dress code, bus)
11. Prezenty — „zamiast kwiatów”, **bez numeru konta**
12. Formularz potwierdzenia obecności (`#rsvp`)
13. Galeria — **wszystkie 10 JPG**, lightbox
14. Księga gości
15. FAQ
16. Świadkowie — Anna Kowalska / Tomasz Nowak, inicjały, bez portretów
17. Kontakt — dwie mapy OSM
18. Stopka AddPattern, `#/rodo`, `#/polityka`, banner cookies

Kotwice hash bez React Router. Hero **nie** używa komponentu `Section` (osobna pełna wysokość).

---

## 4. Zdjęcia (stan po aktualizacji `example_photos/`)

Użytkownik podmienił pliki w `example_photos/` na pełnowymiarowe oryginały (nawet 6720 px / ~26 MB).  
**Nie wrzucamy surowych plików do `client/assets/`** — GitHub Pages i Vite by się zadławiły.

Na stronę poszła kopia webowa (dłuższy bok 1920 px, JPEG 85). Nazwy plików **bez zmian**, więc `assets.ts` nie wymagał nowej mapy slotów.

| Plik | Slot |
| --- | --- |
| `5F4A6221.jpg` | Hero + OG (`client/public/images/og-image.jpg`) |
| `5F4A5869.jpg` | Historia lewa |
| `5F4A5888.jpg` | Historia środek |
| `5F4A5971.jpg` | Historia prawa |
| `5F4A9191.jpg` | Slider 1 |
| `5F4A8913.jpg` | Slider 2 |
| `5F4A9728.jpg` | Slider 3 |
| `5F4A8998.jpg` | Galeria |
| `5F4A8392.jpg` | Galeria |
| `5F4A8617.jpg` | Galeria |
| `watercolor-floral.png` | Ornament; tło przezroczyste (wykrojone z bieli) |

Opis kadrów: `example_photos/imgs_map.md`. Katalog w aplikacji: `client/assets/ASSETS.md`.  
Mockupów z `docs/` **nie** ma w `client/assets/`.

---

## 5. Kluczowe pliki

| Co | Gdzie |
| --- | --- |
| Para, miejsca, mapy, świadkowie | `client/src/config/site.ts` |
| Kolory, fonty (Cormorant + Nunito) | `client/src/config/theme.ts` |
| Import zdjęć | `client/src/config/assets.ts` |
| Teksty PL / EN | `client/src/i18n/locales/pl.json`, `en.json` |
| Sekcje | `client/src/components/sections/` |
| Layout | `Navbar.tsx`, `Footer.tsx`, `Section.tsx` (`bg-white` pod ornament) |
| RSVP localStorage | `RsvpForm.tsx`, klucz `wedding-rsvp` |
| SEO | `client/index.html` |
| Pages | `.github/workflows/pages.yml`, `client/public/.nojekyll` |
| Env (wzór) | `.env.example` — `VITE_SHOW_DEV_PANEL=false`, `VITE_BASE=/` |

`.env` jest w `.gitignore`; agent nie może go nadpisać. Lokalnie skopiować z `.env.example` jeśli brak.

---

## 6. Poprawki po pierwszej wersji (kolejność zdarzeń)

1. Ornament: najpierw błędnie wybielony filtr na wszystkich sekcjach (grafika znikała na jasnym tle).  
2. Cofnięte — tło `Section` na białe, żeby biała kanwa PNG nie odcinała się od papieru.  
3. W hero filtr `brightness-0 invert` dawał **biały kwadrat** (nieprzezroczyste tło PNG). Wykrojono biel do alfy w `watercolor-floral.png`.  
4. „RSVP” → **„Potwierdź obecność”** (seniorzy). Kotwica HTML zostaje `#rsvp`.  
5. Historia: zamiana kolejności środkowego i prawego zdjęcia (dłonie na środku).  
6. Ponowne wczytanie JPG z zaktualizowanego `example_photos/` (ten raport).

---

## 7. Świadomie poza zakresem

- Backend, baza, prawdziwe RSVP w chmurze  
- Hasło wejścia, upload zdjęć gości  
- Skrypt FTP  
- Commit / push / utworzenie repo GitHub — **tylko na osobną prośbę**  
- Prawdziwe telefony pary  

---

## 8. Co zostawić na kolejny krok

Propozycja kolejności (do wyboru):

1. **Publikacja GitHub Pages** — repo `midnajt/example_weeding_site.github.io`, Pages → GitHub Actions, push `main`.  
2. **`npm run build` + `npm run preview`** po nowych zdjęciach — kontrola hero, historii, galerii, ornamentu w hero.  
3. Treści demo: czy godziny 14:00 / 16:30, menu i świadkowie zostają, czy podmieniamy.  
4. Ewentualna kompresja WebP (teraz JPEG) albo `loading="lazy"` już jest na galerii.  
5. Przycisk „Potwierdź obecność” w navbarze jest długi na wąskim desktopie — można skrócić do „Potwierdź” w `nav.rsvp`, zostawiając pełny tekst w hero.

---

## 9. Szybki test przed prezentacją

- [ ] Hero: welon, biały ornament (nie kwadrat), dwa CTA  
- [ ] `#slub` / `#wesele` — adresy Piwniczna i Barcice, mapy OSM  
- [ ] Historia: 3 zdjęcia, dłonie na środku  
- [ ] Galeria: 10 kadrów, lightbox  
- [ ] Formularz `#rsvp` zapisuje w localStorage i pokazuje podziękowanie  
- [ ] PL/EN działa, brak przełącznika ciemnego motywu  
- [ ] `#/rodo` i cookies  
- [ ] Stopka AddPattern  

---

## 10. Aktualizacja: data, niezbędnik i kalendarz

- Data ślubu została ostatecznie ustawiona na **28 września 2026** w konfiguracji, treściach PL/EN oraz metadanych SEO.
- Hero i odliczanie mają trzy automatyczne warianty: przed ślubem, w dniu ślubu i po weselu.
- Pod kartami miejsc znajduje się „Niezbędnik gościa” z planem dnia, busem, dwiema mapami, kontaktem i pobieraniem jednego wydarzenia kalendarzowego.
- Plik `.ics` obejmuje 28.09.2026 od 13:30 do 29.09.2026 do 04:00 w strefie `Europe/Warsaw`.
- `npm run lint` i `npm run build` zakończyły się powodzeniem; build zgłasza jedynie istniejące ostrzeżenie o rozmiarze głównego chunka.

---

## 11. Aktualizacja belki motywów na mobile

- Na ekranach poniżej breakpointu `sm` belka pokazuje napis „Zmień motyw” oraz ikony Boho, Las i Prestige.
- Nazwy presetów pozostają widoczne od `sm`; etykiety `aria-label` zachowują dostępność przycisków mobilnych.
- Mobilne ikony są wyśrodkowane, a desktopowy układ belki pozostaje bez zmian.

---

## 12. Kolory niezależne od trybu systemowego

- Motywy Boho i Las deklarują `color-scheme: only light`, więc mobilna przeglądarka nie nakłada automatycznej konwersji dark mode.
- Prestige jawnie używa `color-scheme: dark`, ponieważ jego ciemna paleta wynika z wyboru motywu, a nie z ustawienia telefonu.
- Kolory strony zależą teraz wyłącznie od wybranego presetu.

# Inspiracja: strona ślubna (prompty)

Dokument do późniejszych promptów. **Nie kopiuj layoutu 1:1** — bierz palety, kolejność sekcji, nazwy komponentów i zasady UX.

Źródła (2026-08-16):

- [Planning.Wedding — kreator projektu](https://planning.wedding/pl/project/BCjXs-tYX/website) oraz [strona produktowa kreatora](https://planning.wedding/pl/wedding-websites)
- [Wesele z klasą — landing strony ślubnej](https://www.weselezklasa.pl/strona-slubna/) oraz demo [Romantyczne boho](https://demo8.mloda-para.pl/), [Polne kwiaty](https://demo6.mloda-para.pl/)

Uwaga: publiczny alias `https://planning.wedding/website/BCjXs-tYX` jest wyłączony (`temporarily deactivated`). Analiza PW to kreator + szablony + widgety, nie gotowa strona konkretnej pary.

Grafiki referencyjne leżą w tym folderze (`docs/`). Zdjęcia pary: `example_photos/` + `example_photos/imgs_map.md`.

---

## 1. Co gość ma załatwić w 30 sekund

Strona ślubna to **cyfrowe zaproszenie + centrum logistyki**, nie portfolio fotografa.

Kolejność pytań gościa (obie platformy układają treść w tej osi):

1. Kto się żeni i kiedy?
2. Czy mam potwierdzić obecność? (RSVP nad foldem albo w menu)
3. Gdzie ślub, gdzie wesele, jak dojechać?
4. Co i o której godzinie?
5. Co z dziećmi, noclegiem, dietą, prezentem?
6. Gdzie wrzucić zdjęcia / wpis po weselu?

Prompt: *„Najpierw data, miejsca i jeden przycisk RSVP. Historia miłości i galeria dopiero potem.”*

---

## 2. Kolory

### 2.1 Paleta, którą warto wziąć do ExampleWedding

Najbliższa naszym zdjęciom i ornamentowi `watercolor-floral.png` / `wz-ornament-floral.png`: **boho + suszone kwiaty** (beż, ochra, granat, zgaszony błękit).

| Token | Hex | Rola |
| --- | --- | --- |
| `background` | `#F9F4EC` / `#F8F6EC` | Ciepły papier, nie czysta biel |
| `foreground` | `#4A3F30` / `#3A3D22` | Brąz kawowy / ziołowy — tekst |
| `primary` | `#9E5A30` | Terakota — CTA, data, akcent |
| `accent` | `#5E6551` / `#87903F` | Oliwka / łąkowa zieleń |
| `muted` | `#C2A075` | Piasek, suche trawy |
| `ornament` | `#2C3A5A` + `#8A9AA8` | Granat i dusty blue z akwareli |
| `card` | `#FFFCF7` | Karty na tle papieru |
| `border` | `#E4D8C4` | Cienka linia, zero twardej szarości |

Unikać: czystego `#000`, neonów, zimnego korporacyjnego granatu, fuksji z landingu WZK (`#9F1E6F`) — to marka portalu, nie strona pary.

### 2.2 Planning.Wedding — szablony (tokeny z podglądu)

Każdy motyw ma te same sloty UI: linki w nagłówku, inicjały `A & B`, nagłówek, link w tekście, input, przycisk, obramowanie.

| Motyw | Klimat | Typowe hexy z podglądu |
| --- | --- | --- |
| Breeze | Morski, jasny | `#042642`, `#7CB3C8`, `#F5FCFF` |
| Touch | Ciepły, miękki | `#814646`, `#FCF6F6` |
| Unity | Neutralny | `#2A2829`, `#DDDDDD` |
| Barn | Stodoła, wino + złoto | `#640D16`, `#BD9965` |
| Blossom | Kwiatowy, rustykalny | `#A7BBA7`, `#435646` |
| Sketchy | Szkic, papier | `#2C3537`, `#D5CBCA` |
| Lavander / Lilac | Fiolet, puder | `#6A3E63`, `#7F3259`, `#F7E6EA` |
| Victorian | Złoto, krem | `#FFF9E8`, `#BD9965` |
| Maldives | Turkus, plaża | `#7CB3C8`, `#F5FCFF` |
| Orthodox | Czerwień ikony | `#CE4D4D`, `#640D16` |

Grafiki motywów: `pw-theme-blossom-header.png`, `pw-theme-barn-header.png`, `pw-theme-lavander-header.jpg`.

### 2.3 Wesele z klasą — marka landingu vs. szablony pary

Landing portalu (nie kopiować na stronę pary):

| Token | Wartość |
| --- | --- |
| Brand / CTA | `rgb(159, 30, 111)` → `#9F1E6F` |
| Brand ciemniejszy | `#7C1057` (favicon / mask-icon) |
| Tekst | `rgb(68, 73, 86)` → `#444956` |
| Tło | `#FFFFFF`, szary `#F9F9F9` |
| Font UI | Muli (sans, 400 / 700 / 800) |

Szablony gościa (demo `*.mloda-para.pl`) — nazwa = paleta:

| Szablon | Demo | Klimat do promptu |
| --- | --- | --- |
| Romantyczne boho | [demo8](https://demo8.mloda-para.pl/) | Sielskość, pampas, beż |
| Królewska zieleń | [demo1](https://demo1.mloda-para.pl/) | Butelkowa zieleń, szyk |
| Marmurowa elegancja | [demo4](https://demo4.mloda-para.pl/) | Minimal + kwiat |
| Pudrowe złoto | [demo7](https://demo7.mloda-para.pl/) | Klasyka, champagne |
| Polne kwiaty | [demo6](https://demo6.mloda-para.pl/) | Wiosna, lekkość |
| Tajemniczy ogród | [demo10](https://demo10.mloda-para.pl/) | Głęboka zieleń |
| Runo leśne | [demo9](https://demo9.mloda-para.pl/) | Las, mech |
| Las tropikalny | [demo2](https://demo2.mloda-para.pl/) | Egzotyka |
| Lawendowe pole | [demo3](https://demo3.mloda-para.pl/) | Fiolet, prowansja |
| Morska bryza | [demo5](https://demo5.mloda-para.pl/) | Błękit, żagle |

Miniatury: `wz-template-boho.png`, `wz-template-green.png`, `wz-template-gold.png`, `wz-template-wildflower.png`.

### 2.4 Typografia (wzorzec)

- **Nagłówki:** szeryf kaligraficzny / didona (Cormorant, Playfair, Libre Baskerville) albo pismo odręczne tylko na imiona i datę.
- **Ciało:** humanistyczny sans (Muli, Nunito, Source Sans) — RSVP, adresy, godziny muszą być czytelne na telefonie.
- **Inicjały / monogram:** `A & B` albo `Alicja & Olek` — zawsze para, nigdy nazwa firmy.
- **Małe litki w boho** (WZK / Strona Weselna): nagłówki czasem `lowercase` — używać oszczędnie, nie w adresach.

---

## 3. Komponenty (katalog do promptów)

Nazwy angielskie w kodzie, polskie w UI.

### 3.1 Planning.Wedding — widgety

| Widget | Co robi | Prompt |
| --- | --- | --- |
| Header | Imiona, data, tagline, tło zdjęcie / ornament | Hero: imiona + data + 1 CTA |
| Countdown | Dni do ślubu | Duża liczba, bez sekund |
| Event details | Data, godzina, miejsce, plan | Dwie karty: Ślub / Wesele |
| Our story | Tekst + zdjęcia historii | 1–3 akapity, nie powieść |
| Video | Teaser / podziękowania | Embed, nie autoplay dźwięku |
| Transportation | Busy, parking | Lista + mapa |
| Accommodation | Hotele | 2–4 propozycje |
| Things to do | Atrakcje | Tylko destynacja / out-of-town |
| Dress code | Strój | 2–4 zdania + ewentualnie paleta gości |
| Meet the team | Świadkowie, drużyna | Portrety 4:5 |
| FAQ | Pytania logistyczne | Accordion, 5–8 pytań |
| Registry | Lista prezentów | Na stronie, **nie na zaproszeniu papierowym** |
| RSVP form | Obecność, +1, dieta, eventy | Przycisk zawsze widoczny |
| Universal | Dowolny blok | Escape hatch |
| Password | Wejście dla gości | Opcjonalnie; link z zaproszenia może omijać hasło |
| Guest photos + QR | Upload ze sali | QR na stołach |

Grafiki: `pw-builder.png`, `pw-widget-rsvp.png`, `pw-widget-story.png`.

### 3.2 Wesele z klasą — 14 modułów (demo)

Kolejność na [demo8](https://demo8.mloda-para.pl/) to gotowy szkielet one-pagera:

1. **Strona tytułowa** — imiona, zdjęcie pary, ornament kwiatowy
2. **Menu** — kotwice (Ślub, Wesele, RSVP, Historia, FAQ…)
3. **RSVP** — deadline + przycisk „Potwierdź”
4. **Ślub** — data, godzina, kościół, adres
5. **Wesele** — sala, krótki lead
6. **Plan stołów** — grupy (stół pary, goście, rodzina)
7. **Odliczanie** — „Do ślubu pozostało X dni”
8. **Nasza historia** — anegdota (poznanie na przystanku)
9. **Najlepsze wspólne chwile** — galeria / slider pionowych kart
10. **Plan wesela** — timeline godzinowy (ślub → oczepiny → koniec)
11. **Menu** — powitanie / obiad / deser
12. **Zamiast kwiatów** — wino, książki, słodycze, fundacja (nie numer konta na produkcji bez zgody)
13. **Sprawy organizacyjne** — dojazd, dzieci, nocleg, poprawiny
14. **Po weselu** — zdjęcia, film, księga gości, upload gości
15. **Firmy** — sala, auto (kredyt usługodawców)
16. **Kontakt** — panna, pan, świadkowa, świadek (tel / mail)
17. **FAQ** — dojazd, parking, bus, nocleg, diety, dzieci, dress code

Mockupy modułów: `wz-hero.png`, `wz-module-love-story.png`, `wz-module-countdown.png`, `wz-module-schedule.png`, `wz-module-guestbook.png`.

### 3.3 Wzorce UI (wspólne)

- **Karty-telefon** — pionowe zrzuty „jak wygląda strona na mobile” w rzędzie 3; cień (`shadow-box`).
- **Ornament akwarelowy** — separator sekcji, nie tło pod tekstem. Plik: `wz-ornament-floral.png` (ten sam motyw co `example_photos/watercolor-floral.png`).
- **Dwie lokalizacje** — zawsze osobno Ślub i Wesele, każda z godziną i adresem; mapa pod spodem albo w modalu.
- **Timeline dnia** — godzina + etykieta, nie akapit.
- **Księga gości** — karta z cytatem, imieniem, serduszkiem / oceną; CTA „Dodaj wpis”.
- **Cennik landingu** (tylko WZK, nie strona pary): toggle miesiąc / rok, 3 karty, fioletowy CTA.

---

## 4. Użyteczność

### Gość (priorytet)

- Jeden ekran startowy: **imiona, data, RSVP**.
- RSVP zbiera: obecność (ślub / wesele / oba), +1, dieta, dzieci, bus, nocleg.
- PW: **osobny link per gość / grupa** — współpracownicy nie widzą opcji „poprawiny”, jeśli nie są zaproszeni.
- FAQ zdejmuje telefon z pary (dojazd, parking, dzieci, dieta, dress code).
- Hasło: tylko gdy para chce prywatności; wtedy hasło łatwe (data, nick) + wyjątek dla linku z zaproszenia.
- Po weselu ta sama strona żyje dalej: galeria, film, księga — goście wracają.

### Para (kreator PW)

Menu projektu (IA planera, nie strony gościa): Przegląd → Lista gości → Miejsca / usługodawcy → Strona ślubna → Zadania → Budżet → Plan dnia → Plan stołów → Notatki → Po ślubie → Ustawienia.

Strona ślubna jest **jednym narzędziem w planerze**, zsynchronizowanym z listą gości i RSVP.

PW komunikuje: desktop do edycji („dla najlepszego komfortu używaj komputera”). Strona gościa musi być mobile-first.

### Landing WZK (sprzedaż, nie gość)

- Hero: obietnica „w 5 minut” + 14 dni gratis + logowanie.
- Sekcje korzyści przeplatane **trzema kartami-telefonami**.
- Social proof (Martyna, Katarzyna, Patrycja, Janek) przed szablonami.
- Szablony: miniatura hero + mały ornament + dwa CTA: „podejrzyj” (nowa karta) / „stwórz”.
- FAQ sprzedażowe osobno od FAQ gościa.

---

## 5. Wzorce treści i layoutu

### Architektura

```
Hero (imiona + data + zdjęcie + ornament)
Nav kotwice + RSVP
Ślub | Wesele          ← dwie kolumny / dwie karty
Countdown
Historia + 3 zdjęcia
Plan dnia (timeline)
Logistyka (dojazd, dzieci, nocleg, prezent)
FAQ
Galeria / film
Księga + upload
Kontakt świadków
Stopka (dyskretny kredyt platformy)
```

One-pager z kotwicami, jak nasz boilerplate. Podstrony tylko na RODO / hasło / potwierdzenie RSVP.

### Ton

- „Wy” do gości, imiona pary w nagłówkach.
- Historia: jedna anegdota, czas teraźniejszy / przeszły prosty.
- Logistyka: tryb rozkazujący krótki („Zaznacz dietę w RSVP”).
- Prezent: „zamiast kwiatów” + 3–4 konkretne prośby; konto fundacji tylko za zgodą.

### Zdjęcia

- Hero: para (wyjście z kościoła albo welon) — u nas `5F4A9191.jpg` / `5F4A6221.jpg`.
- Historia: 3 kadry pionowe 9:16 (zaręczyny, countdown, chwile) — jak `wz-module-love-story.png`.
- Detale: obrączki, biżuteria — `5F4A8617.jpg`, `5F4A8392.jpg`.
- Ornament: akwarela, nie stockowe serca.

### Prywatność i i18n

- PW: 3 darmowe aliasy URL + własna domena + QR na papeterię.
- WZK: do 6 języków, treści per grupa gości, hasło, własny www.
- Dla ExampleWedding: PL domyślnie, EN jako przełącznik; hasło tylko gdy para poprosi.

---

## 6. Gotowe bloki do promptu

Wklejaj jako kontekst, nie jako specyfikację kodu.

```
Zrób one-pager ślubny (gość, nie planer).
Paleta: papier #F9F4EC, tekst #4A3F30, CTA terakota #9E5A30,
oliwka #5E6551, ornament granat/dusty blue.
Font: szeryf na imiona i datę, sans na resztę.
Hero: imiona + data + zdjęcie pary + akwarelowy separator.
Następna sekcja: dwie karty Ślub / Wesele i przycisk RSVP.
Potem: countdown (tylko dni), historia (krótka), timeline dnia,
logistyka, FAQ accordion, galeria, księga gości.
Bez fuksji portalu, bez cennika, bez menu planera.
Mobile-first. Ornament tylko jako divider, nie tło pod akapitem.
```

```
Komponenty do zaimplementowania (nazwy w kodzie):
HeroCouple, RsvpCta, EventCard (ceremony|reception),
CountdownDays, LoveStory, DayTimeline, LogisticsGrid,
GiftWishes, FaqAccordion, GuestBook, PhotoUploadHint.
Treści z i18n. Kolory tylko z theme.ts.
```

---

## 7. Pliki graficzne w `docs/`

| Plik | Źródło | Do czego w promptach |
| --- | --- | --- |
| `wz-hero.png` | WZK landing | Kompozycja hero + para + kwiaty |
| `wz-ornament-floral.png` | WZK | Separator akwarelowy |
| `wz-module-love-story.png` | WZK | Karta „historia / zaręczyny” |
| `wz-module-countdown.png` | WZK | Odliczanie na mobile |
| `wz-module-schedule.png` | WZK | Plan wesela |
| `wz-module-guestbook.png` | WZK | Księga gości |
| `wz-template-boho.png` | WZK | Paleta boho |
| `wz-template-green.png` | WZK | Paleta zieleń |
| `wz-template-gold.png` | WZK | Paleta pudrowe złoto |
| `wz-template-wildflower.png` | WZK | Paleta polne kwiaty |
| `pw-builder.png` | PW | Widok kreatora (desktop) |
| `pw-widget-rsvp.png` | PW | Formularz RSVP |
| `pw-widget-story.png` | PW | Blok „nasza historia” |
| `pw-theme-blossom-header.png` | PW Blossom | Hero kwiatowy |
| `pw-theme-barn-header.png` | PW Barn | Hero rustykalny |
| `pw-theme-lavander-header.jpg` | PW Lavander | Hero lawenda |

Grafiki są referencją wizualną. Na produkcji używamy zdjęć z `example_photos/` i własnego ornamentu — nie wstawiamy cudzych mockupów do `client/assets/`.

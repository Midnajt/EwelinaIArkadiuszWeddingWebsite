# Kalendarz na iPhone i Android — 2026-09-13

## Problem

Na iPhonie, zwłaszcza w Messengerze, kliknięcie „Dodaj do kalendarza” pokazywało surowy plik `VCALENDAR` jako tekst. Przyczyna: generowanie `.ics` w pamięci (`blob:`) i wymuszenie `download`. iOS ignoruje atrybut `download`, a przeglądarki w aplikacjach nie otwierają Kalendarza Apple.

## Rozwiązanie

- Dialog wyboru kalendarza (Apple / Google / Outlook / plik `.ics`).
- W Messengerze i podobnych aplikacjach link do `.ics` jest ukryty; pierwsza opcja to Kalendarz Google, z instrukcją otwarcia strony w Safari.
- W Safari na iPhonie link prowadzi do hostowanego pliku `.ics` z `Content-Type: text/calendar`.
- Na Androidzie i desktopie dostępny jest Google, Outlook oraz pobranie `.ics`.
- Pliki: `client/public/calendar/*.ics`, MIME w `.htaccess` i middleware Vite.

## Weryfikacja

- `npm run build` zakończony powodzeniem; pliki `.ics` i `.htaccess` lądują w `dist/`.
- Nie zweryfikowano na prawdziwym iPhonie / w Messengerze (brak urządzeń w sesji).

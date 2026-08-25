# Publikacja na GitHub Pages — ExampleWeddingSite

Data: 2026-08-16  
Repo: https://github.com/Midnajt/ExampleWeddingSite  
Adres po publikacji: https://midnajt.github.io/ExampleWeddingSite/

Lokalnie: `VITE_BASE=/`. W Actions: `VITE_BASE=/ExampleWeddingSite/`.

---

## 1. Commit (PowerShell)

```powershell
cd C:\Users\marci\OneDrive\Pulpit\Projekty\ExampleWedding
git add .
git status
git commit -m "Strona weselna: animacje, mapy Google, GitHub Pages"
```

Nie commituj `.env`.

---

## 2. Pierwszy push

Lokalnie jesteś na `master`, Pages słucha `main`. Na GitHubie `main` ma już samą licencję — złącz historie, bez `--force`.

```powershell
git remote add origin https://github.com/Midnajt/ExampleWeddingSite.git
git branch -M main
git pull origin main --allow-unrelated-histories --no-edit
git push -u origin main
```

Jeśli origin już istnieje:

```powershell
git remote set-url origin https://github.com/Midnajt/ExampleWeddingSite.git
```

---

## 3. Włącz Pages

1. https://github.com/Midnajt/ExampleWeddingSite/settings/pages
2. Source: **GitHub Actions** (nie „Deploy from a branch”)
3. https://github.com/Midnajt/ExampleWeddingSite/actions — workflow **Deploy GitHub Pages** musi być zielony
4. Przy pierwszym razie zaakceptuj środowisko `github-pages` (Settings → Environments), jeśli GitHub o to poprosi

Po 1–2 minutach: https://midnajt.github.io/ExampleWeddingSite/

---

## 4. Kolejne zmiany

```powershell
git add .
git commit -m "Opis zmiany"
git push
```

---

## 5. Gdy coś nie działa

| Objaw | Co sprawdzić |
| --- | --- |
| Biała strona, 404 na JS/CSS | `VITE_BASE` w `.github/workflows/pages.yml` = `/ExampleWeddingSite/` |
| Actions nie startuje | Source = GitHub Actions; push na `main` |
| Workflow czerwony | log `npm ci` / `npm run build` w Actions |
| 404 na całej stronie | poczekaj na zielony deploy, Ctrl+F5 |

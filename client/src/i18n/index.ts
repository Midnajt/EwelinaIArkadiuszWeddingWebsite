import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pl from "./locales/pl.json";
import en from "./locales/en.json";

const STORAGE_KEY = "lang";

function readLang(): "pl" | "en" {
  try {
    return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "pl";
  } catch {
    return "pl";
  }
}

void i18n.use(initReactI18next).init({
  resources: {
    pl: { translation: pl },
    en: { translation: en },
  },
  lng: readLang(),
  fallbackLng: "pl",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    /* ignore quota / private mode */
  }
});

document.documentElement.lang = i18n.language;

export default i18n;

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "cookie-consent";

function hasConsent(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "accepted";
  } catch {
    return false;
  }
}

export function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(() => !hasConsent());
  const [checked, setChecked] = useState(false);

  if (!visible) return null;

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <div
      data-slot="cookie-banner"
      className="bg-background/95 fixed inset-x-0 bottom-0 z-50 border-t p-4 shadow-lg backdrop-blur-md"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-heading text-lg">{t("cookies.title")}</h2>
        <p className="text-muted-foreground mt-2 text-sm">{t("cookies.text")}</p>
        <p className="mt-2 text-xs">
          <a className="underline" href="#/rodo">
            {t("footer.rodo")}
          </a>
          {" · "}
          <a className="underline" href="#/polityka">
            {t("footer.privacy")}
          </a>
        </p>
        <label className="mt-4 flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            className="mt-1"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span>{t("cookies.checkbox")}</span>
        </label>
        <Button className="mt-4" disabled={!checked} onClick={accept}>
          {t("cookies.accept")}
        </Button>
      </div>
    </div>
  );
}

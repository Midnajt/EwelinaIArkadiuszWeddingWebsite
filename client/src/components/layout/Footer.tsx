import { useTranslation } from "react-i18next";
import { site } from "@/config/site";
import { goToNavHash } from "@/lib/scroll-to-section";
import { cn } from "@/lib/utils";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const muted = "text-primary-foreground/75";
  const linkHover = "hover:text-primary-foreground";

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/15">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold">{site.name}</p>
          <p className={cn("mt-2 text-sm", muted)}>{t("hero.kicker")}</p>
          <p className={cn("mt-2 text-sm", muted)}>{t("footer.demo")}</p>
        </div>
        <div>
          <p className="text-sm font-medium">{t("nav.home")}</p>
          <ul className={cn("mt-3 space-y-2 text-sm", muted)}>
            <li>
              <a
                className={linkHover}
                href="#slub"
                onClick={(event) => {
                  event.preventDefault();
                  goToNavHash("#slub");
                }}
              >
                {t("nav.ceremony")}
              </a>
            </li>
            <li>
              <a
                className={linkHover}
                href="#wesele"
                onClick={(event) => {
                  event.preventDefault();
                  goToNavHash("#wesele");
                }}
              >
                {t("nav.reception")}
              </a>
            </li>
            <li>
              <a className={linkHover} href="#niezbednik">
                {t("nav.essentials")}
              </a>
            </li>
            <li>
              <a className={linkHover} href="#nocleg">
                {t("nav.lodging")}
              </a>
            </li>
            <li>
              <a className={linkHover} href="#kontakt">
                {t("nav.contact")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium">{t("footer.privacy")}</p>
          <ul className={cn("mt-3 space-y-2 text-sm", muted)}>
            <li>
              <a className={linkHover} href="#/rodo">
                {t("footer.rodo")}
              </a>
            </li>
            <li>
              <a className={linkHover} href="#/polityka">
                {t("footer.privacy")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-primary-foreground/15 px-4 py-6 text-xs text-primary-foreground/70 sm:px-6">
        <p>
          © {year} {site.legalName} · {t("footer.rights")}
        </p>
        <p className="mt-2">
          {t("footer.createdBy")}{" "}
          <a className="underline" href={site.addPattern.url} target="_blank" rel="noreferrer">
            {site.addPattern.name}
          </a>
        </p>
      </div>
    </footer>
  );
}

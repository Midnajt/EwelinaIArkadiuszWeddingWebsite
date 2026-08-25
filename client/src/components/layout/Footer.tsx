import { useTranslation } from "react-i18next";
import { site } from "@/config/site";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/15">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold">{site.name}</p>
          <p className="mt-2 text-sm text-primary-foreground/75">{t("hero.kicker")}</p>
          <p className="mt-2 text-sm text-primary-foreground/75">{t("footer.demo")}</p>
        </div>
        <div>
          <p className="text-sm font-medium">{t("nav.home")}</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
            <li>
              <a className="hover:text-primary-foreground" href="#slub">
                {t("nav.ceremony")}
              </a>
            </li>
            <li>
              <a className="hover:text-primary-foreground" href="#wesele">
                {t("nav.reception")}
              </a>
            </li>
            {/* RSVP wyłączone
            <li>
              <a className="hover:text-primary-foreground" href="#rsvp">
                {t("nav.rsvp")}
              </a>
            </li>
            */}
            <li>
              <a className="hover:text-primary-foreground" href="#galeria">
                {t("nav.gallery")}
              </a>
            </li>
            <li>
              <a className="hover:text-primary-foreground" href="#kontakt">
                {t("nav.contact")}
              </a>
            </li>
            {/* Polecamy wyłączone
            <li>
              <a className="hover:text-primary-foreground" href="#polecamy">
                {t("partners.title")}
              </a>
            </li>
            */}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium">{t("footer.privacy")}</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
            <li>
              <a className="hover:text-primary-foreground" href="#/rodo">
                {t("footer.rodo")}
              </a>
            </li>
            <li>
              <a className="hover:text-primary-foreground" href="#/polityka">
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

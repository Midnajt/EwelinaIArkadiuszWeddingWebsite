import { useTranslation } from "react-i18next";
import { images } from "@/config/assets";
import { site } from "@/config/site";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/15 text-white">
      <img
        src={images.restaurant}
        alt=""
        className="absolute inset-0 size-full object-cover object-[center_40%]"
        aria-hidden
      />
      <div className="relative bg-black/45 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-semibold">{site.name}</p>
            <p className="mt-2 text-sm text-white/80">{t("hero.kicker")}</p>
            <p className="mt-2 text-sm text-white/80">{t("footer.demo")}</p>
          </div>
          <div>
            <p className="text-sm font-medium">{t("nav.home")}</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <a className="hover:text-white" href="#slub">
                  {t("nav.ceremony")}
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#wesele">
                  {t("nav.reception")}
                </a>
              </li>
              {/* RSVP wyłączone
              <li>
                <a className="hover:text-white" href="#rsvp">
                  {t("nav.rsvp")}
                </a>
              </li>
              */}
              {/* Galeria wyłączona
              <li>
                <a className="hover:text-white" href="#galeria">
                  {t("nav.gallery")}
                </a>
              </li>
              */}
              <li>
                <a className="hover:text-white" href="#kontakt">
                  {t("nav.contact")}
                </a>
              </li>
              {/* Polecamy wyłączone
              <li>
                <a className="hover:text-white" href="#polecamy">
                  {t("partners.title")}
                </a>
              </li>
              */}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium">{t("footer.privacy")}</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <a className="hover:text-white" href="#/rodo">
                  {t("footer.rodo")}
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#/polityka">
                  {t("footer.privacy")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-6xl border-t border-white/20 px-4 py-6 text-xs text-white/70 sm:px-6">
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
      </div>
    </footer>
  );
}


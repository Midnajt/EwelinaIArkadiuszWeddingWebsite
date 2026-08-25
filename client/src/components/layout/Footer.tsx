import { useTranslation } from "react-i18next";
import { images } from "@/config/assets";
import { site } from "@/config/site";
import { useTheme } from "@/lib/theme-provider";
import { cn } from "@/lib/utils";

export function Footer() {
  const { t } = useTranslation();
  const { presetId } = useTheme();
  const prestige = presetId === "noirGold";
  const year = new Date().getFullYear();
  const muted = prestige ? "text-white/80" : "text-primary-foreground/75";
  const linkHover = prestige ? "hover:text-white" : "hover:text-primary-foreground";

  const body = (
    <>
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
              <a className={linkHover} href="#slub">
                {t("nav.ceremony")}
              </a>
            </li>
            <li>
              <a className={linkHover} href="#wesele">
                {t("nav.reception")}
              </a>
            </li>
            {/* RSVP wyłączone
            <li>
              <a className={linkHover} href="#rsvp">
                {t("nav.rsvp")}
              </a>
            </li>
            */}
            {/* Galeria wyłączona
            <li>
              <a className={linkHover} href="#galeria">
                {t("nav.gallery")}
              </a>
            </li>
            */}
            <li>
              <a className={linkHover} href="#kontakt">
                {t("nav.contact")}
              </a>
            </li>
            {/* Polecamy wyłączone
            <li>
              <a className={linkHover} href="#polecamy">
                {t("partners.title")}
              </a>
            </li>
            */}
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
      <div
        className={cn(
          "mx-auto max-w-6xl border-t px-4 py-6 text-xs sm:px-6",
          prestige ? "border-white/20 text-white/70" : "border-primary-foreground/15 text-primary-foreground/70",
        )}
      >
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
    </>
  );

  if (prestige) {
    return (
      <footer className="relative overflow-hidden border-t border-white/15 text-white">
        <img
          src={images.restaurant}
          alt=""
          className="absolute inset-0 size-full object-cover object-[center_40%]"
          aria-hidden
        />
        <div className="relative bg-black/45 backdrop-blur-xl">{body}</div>
      </footer>
    );
  }

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/15">
      {body}
    </footer>
  );
}

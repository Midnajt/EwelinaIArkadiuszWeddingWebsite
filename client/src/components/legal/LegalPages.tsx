import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { site } from "@/config/site";
import { Container } from "@/components/layout/Section";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const { t } = useTranslation();

  return (
    <main id="content" className="py-16">
      <Container className="max-w-3xl">
        <p className="bg-secondary text-secondary-foreground mb-6 rounded-md px-3 py-2 text-sm">
          {t("legal.disclaimer")}
        </p>
        <h1 className="text-4xl">{title}</h1>
        <div className="prose-legal mt-8 space-y-4 text-sm leading-relaxed">{children}</div>
        <p className="mt-10">
          <a className="text-primary underline" href="#top">
            {t("legal.back")}
          </a>
        </p>
        <p className="text-muted-foreground mt-6 text-xs">
          {site.legalName} · {site.url.replace(/^https?:\/\//, "")} · {site.contacts.bride.phone} /{" "}
          {site.contacts.groom.phone}
        </p>
      </Container>
    </main>
  );
}

export function RodoPage() {
  const { t } = useTranslation();
  const host = site.url.replace(/^https?:\/\//, "");

  return (
    <LegalLayout title={t("legal.rodoTitle")}>
      <p>
        Administratorem danych osobowych przetwarzanych w związku z serwisem{" "}
        <a className="underline" href={site.url}>
          {host}
        </a>{" "}
        ({site.legalName}) są {site.couple.bride} i {site.couple.groom}. Kontakt: tel. {site.contacts.bride.phone} ({site.couple.bride}), tel.{" "}
        {site.contacts.groom.phone} ({site.couple.groom}), e-mail:{" "}
        <a className="underline" href={site.contacts.bride.emailHref}>
          {site.contacts.bride.email}
        </a>
        ,{" "}
        <a className="underline" href={site.contacts.groom.emailHref}>
          {site.contacts.groom.email}
        </a>
        .
      </p>
      <p>
        Serwis informuje gości o ślubie i weselu. Nie zbieramy danych przez formularze ani nie
        wysyłamy ich na serwer. W przeglądarce mogą być zapisane wyłącznie niezbędne dane lokalne:
        zgoda na pliki cookies oraz wybrany język. Podstawą jest zgoda (art. 6 ust. 1
        lit. a RODO) oraz uzasadniony interes administratora polegający na prowadzeniu strony
        informacyjnej o uroczystości (lit. f).
      </p>
      <p>
        Dane nie są sprzedawane. Dostawca hostingu domeny {host} może przetwarzać standardowe logi
        techniczne (np. adres IP, data żądania). Przysługuje Państwu prawo dostępu, sprostowania,
        usunięcia, ograniczenia, przenoszenia, sprzeciwu oraz skargi do Prezesa UODO. Zgodę i dane
        lokalne można usunąć, czyszcząc dane witryny w przeglądarce.
      </p>
      <p>
        Szczegóły znajdują się w{" "}
        <a className="underline" href="#/polityka">
          polityce prywatności
        </a>
        .
      </p>
    </LegalLayout>
  );
}

export function PrivacyPage() {
  const { t } = useTranslation();
  const host = site.url.replace(/^https?:\/\//, "");

  return (
    <LegalLayout title={t("legal.privacyTitle")}>
      <p>
        Serwis{" "}
        <a className="underline" href={site.url}>
          {host}
        </a>{" "}
        ({site.name}) wykorzystuje wyłącznie niezbędne pliki cookies: zapamiętanie zgody na baner
        oraz wybranego języka (PL/EN). Nie ładujemy narzędzi analitycznych
        ani reklamowych.
      </p>
      <p>
        Nie zbieramy formularzy RSVP ani wpisów księgi gości na serwerze. Kontakt z parą młodą
        odbywa się telefonicznie lub e-mailem, przez dane podane w sekcji Kontakt.
      </p>
      <p>
        Kontakt w sprawie danych: {site.couple.bride} {site.contacts.bride.phone},{" "}
        {site.contacts.bride.email}; {site.couple.groom} {site.contacts.groom.phone},{" "}
        {site.contacts.groom.email}. Niniejsza polityka dotyczy wyłącznie serwisu {host}.
      </p>
    </LegalLayout>
  );
}

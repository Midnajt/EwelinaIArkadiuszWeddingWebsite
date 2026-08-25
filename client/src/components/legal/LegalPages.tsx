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
          {site.legalName} · {site.email}
        </p>
      </Container>
    </main>
  );
}

export function RodoPage() {
  const { t } = useTranslation();
  return (
    <LegalLayout title={t("legal.rodoTitle")}>
      <p>
        Administratorem danych osobowych na tej stronie jest {site.legalName},
        e-mail: {site.email}, tel. {site.phone}. Dane świadków na stronie są poglądowe
        i służą układowi sekcji kontaktowej.
      </p>
      <p>
        Jeśli gość wypełni formularz potwierdzenia obecności, zgłoszenie zapisuje się wyłącznie w localStorage
        przeglądarki (imię, obecność, dieta, dzieci, bus, nocleg, uwaga). Nie wysyłamy danych na
        serwer. Podstawą jest zgoda (art. 6 ust. 1 lit. a RODO) oraz uzasadniony interes pokazania
        działania modułu (lit. f) w ramach demo.
      </p>
      <p>
        Dane nie są sprzedawane. Hosting (GitHub Pages) może przetwarzać logi techniczne. Przysługuje
        Państwu prawo dostępu, sprostowania, usunięcia, ograniczenia, przenoszenia, sprzeciwu oraz
        skargi do Prezesa UODO. Zgłoszenie obecności można skasować, czyszcząc dane strony w przeglądarce
        albo klikając „wyślij kolejne zgłoszenie”.
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
  return (
    <LegalLayout title={t("legal.privacyTitle")}>
      <p>
        Strona {site.name} wykorzystuje niezbędne pliki cookies do zapamiętania zgody na baner oraz
        wybranego języka (PL/EN). Nie ładujemy narzędzi analitycznych przed akceptacją banera. Tryb
        ciemny jest wyłączony.
      </p>
      <p>
        Formularz potwierdzenia obecności nie wysyła danych pocztą ani API — kopia zostaje w przeglądarce gościa.
        Wiadomości e-mail z księgi gości trafiają na adres demonstracyjny {site.email}.
      </p>
      <p>
        Kontakt w sprawie danych: {site.email}. Ten dokument jest szablonem pod prezentację i wymaga
        dostosowania, zanim strona zostanie opublikowana dla prawdziwej pary.
      </p>
    </LegalLayout>
  );
}

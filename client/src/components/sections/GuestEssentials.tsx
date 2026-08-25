import { CalendarPlus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Container, Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { downloadWeddingCalendar } from "@/lib/calendar";

export function GuestEssentials() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage?.startsWith("en") ? "en" : "pl";

  return (
    <Section id="niezbednik" className="bg-muted/40">
      <Container>
        {/* Nagłówek i kafelki (plan, mapy, kontakt) wyłączone — zostaje zapis do kalendarza
        <SectionHeader
          kicker={t("essentials.kicker")}
          title={t("essentials.title")}
          subtitle={t("essentials.subtitle")}
        />
        */}
        <Card className="border-primary/25 bg-card">
          <CardContent className="flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-heading text-xl">{t("essentials.calendar.title")}</h3>
              <p className="text-muted-foreground mt-1 max-w-2xl text-sm">
                {t("essentials.calendar.text")}
              </p>
            </div>
            <Button onClick={() => downloadWeddingCalendar(language)} className="shrink-0">
              <CalendarPlus />
              {t("essentials.calendar.action")}
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}

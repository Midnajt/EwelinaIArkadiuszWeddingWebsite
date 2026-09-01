import { Bus, Calendar, CalendarPlus, MapPinned, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { site } from "@/config/site";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { downloadWeddingCalendar } from "@/lib/calendar";
import { goToNavHash } from "@/lib/scroll-to-section";

export function GuestEssentials() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage?.startsWith("en") ? "en" : "pl";
  const lodging = site.lodging;

  return (
    <Section id="niezbednik" className="bg-muted-section-fade">
      <Container>
        <SectionHeader
          kicker={t("essentials.kicker")}
          title={t("essentials.title")}
          subtitle={t("essentials.subtitle")}
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StaggerItem hover>
            <Card className="h-full">
              <CardHeader>
                <Calendar className="text-primary size-5" aria-hidden />
                <CardTitle>{t("essentials.schedule.title")}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-3">
                <p className="text-muted-foreground text-sm">{t("essentials.schedule.text")}</p>
                <Button asChild variant="outline" size="sm" className="mt-auto w-fit">
                  <a
                    href="#slub"
                    onClick={(event) => {
                      event.preventDefault();
                      goToNavHash("#slub");
                    }}
                  >
                    {t("essentials.schedule.action")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem hover>
            <Card className="h-full">
              <CardHeader>
                <Bus className="text-primary size-5" aria-hidden />
                <CardTitle>{t("essentials.bus.title")}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="text-muted-foreground text-sm">
                  {t("essentials.bus.text", { from: site.transport.from })}
                </p>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem hover>
            <Card className="h-full">
              <CardHeader>
                <MapPinned className="text-primary size-5" aria-hidden />
                <CardTitle>{t("essentials.maps.title")}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-3">
                <p className="text-muted-foreground text-sm">{t("essentials.maps.text")}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  <Button asChild variant="outline" size="sm">
                    <a href={site.ceremony.mapLink} target="_blank" rel="noreferrer">
                      {t("essentials.maps.ceremony")}
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={site.reception.mapLink} target="_blank" rel="noreferrer">
                      {t("essentials.maps.reception")}
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={lodging.mapLink} target="_blank" rel="noreferrer">
                      {t("essentials.maps.lodging")}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

          <StaggerItem hover>
            <Card className="h-full">
              <CardHeader>
                <Phone className="text-primary size-5" aria-hidden />
                <CardTitle>{t("essentials.contact.title")}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-3">
                <p className="text-muted-foreground text-sm">{t("essentials.contact.text")}</p>
                <Button asChild variant="outline" size="sm" className="mt-auto w-fit">
                  <a href="#kontakt">{t("essentials.contact.action")}</a>
                </Button>
              </CardContent>
            </Card>
          </StaggerItem>
        </Stagger>

        <Card className="border-primary/25 bg-card mt-6">
          <CardContent className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-heading text-xl">{t("essentials.calendar.title")}</h3>
              <p className="text-muted-foreground mt-1 max-w-2xl text-sm">{t("essentials.calendar.text")}</p>
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

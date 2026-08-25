import { useTranslation } from "react-i18next";
import { Clock, MapPin } from "lucide-react";
import { site } from "@/config/site";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function EventCards() {
  const { t, i18n } = useTranslation();
  const en = i18n.language === "en";

  const events = [
    {
      id: "slub",
      label: t("events.ceremony"),
      name: en ? site.ceremony.nameEn : site.ceremony.namePl,
      time: site.ceremony.time,
      address: site.ceremony.full,
      mapLink: site.ceremony.mapLink,
    },
    {
      id: "wesele",
      label: t("events.reception"),
      name: en ? site.reception.nameEn : site.reception.namePl,
      time: site.reception.time,
      address: site.reception.full,
      mapLink: site.reception.mapLink,
    },
  ] as const;

  return (
    <Section id="slub">
      <Container>
        <SectionHeader
          kicker={t("events.kicker")}
          title={t("events.title")}
          subtitle={t("events.subtitle")}
        />
        <Stagger className="grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <StaggerItem key={event.id} hover>
              <Card id={event.id === "wesele" ? "wesele" : undefined} className="bg-card h-full">
                <CardHeader>
                  <p className="text-primary text-xs font-medium tracking-widest uppercase">
                    {event.label}
                  </p>
                  <CardTitle className="text-2xl">{event.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <p className="flex gap-3">
                    <Clock className="text-primary mt-0.5 size-5 shrink-0" />
                    <span>
                      <span className="font-medium">{t("events.time")}</span>
                      <br />
                      {event.time}
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <MapPin className="text-primary mt-0.5 size-5 shrink-0" />
                    <span>
                      <span className="font-medium">{t("events.address")}</span>
                      <br />
                      {event.address}
                    </span>
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <a href={event.mapLink} target="_blank" rel="noreferrer">
                      {t("events.map")}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

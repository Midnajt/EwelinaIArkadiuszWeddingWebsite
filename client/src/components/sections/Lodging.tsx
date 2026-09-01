import { Car, Clock, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { useTranslation } from "react-i18next";
import { site } from "@/config/site";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Lodging() {
  const { t } = useTranslation();
  const lodging = site.lodging;

  return (
    <Section id="nocleg">
      <Container>
        <SectionHeader
          kicker={t("essentials.stay.kicker")}
          title={t("essentials.stay.title")}
          subtitle={t("essentials.stay.subtitle")}
        />

        <Card className="border-primary/25 bg-card">
          <CardContent className="space-y-4 text-sm">
            <p className="flex gap-3">
              <Car className="text-primary mt-0.5 size-5 shrink-0" />
              <span>{t("essentials.stay.distance")}</span>
            </p>
            <p className="flex gap-3">
              <UtensilsCrossed className="text-primary mt-0.5 size-5 shrink-0" />
              <span>
                {t("essentials.stay.breakfast", {
                  from: lodging.breakfastFrom,
                  to: lodging.breakfastTo,
                })}
              </span>
            </p>
            <p className="flex gap-3">
              <Clock className="text-primary mt-0.5 size-5 shrink-0" />
              <span>
                <span className="font-medium">{t("essentials.stay.checkInLabel")}</span>
                <br />
                {t("essentials.stay.checkIn")}
              </span>
            </p>
            <p className="flex gap-3">
              <Clock className="text-primary mt-0.5 size-5 shrink-0" />
              <span>
                <span className="font-medium">{t("essentials.stay.checkOutLabel")}</span>
                <br />
                {t("essentials.stay.checkOut")}
              </span>
            </p>
            <p className="flex gap-3">
              <Phone className="text-primary mt-0.5 size-5 shrink-0" />
              <span>
                {t("essentials.stay.managerNote")}
                <br />
                <span className="font-medium">{lodging.manager.name}</span>
                {" · "}
                <a className="underline" href={lodging.manager.phoneHref}>
                  {lodging.manager.phone}
                </a>
              </span>
            </p>
            <p className="text-muted-foreground">{t("essentials.stay.extend")}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Button asChild variant="outline" size="sm">
                <a href={lodging.mapLink} target="_blank" rel="noreferrer">
                  <MapPin />
                  {t("essentials.stay.map")}
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={lodging.manager.phoneHref}>
                  <Phone />
                  {lodging.manager.phone}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}

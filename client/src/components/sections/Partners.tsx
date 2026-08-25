import { useTranslation } from "react-i18next";
import { Camera, Flower2, Music, Scissors, Sparkles, Shirt } from "lucide-react";
import { site } from "@/config/site";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ICONS = {
  makeup: Sparkles,
  florist: Flower2,
  hair: Scissors,
  tailor: Shirt,
  band: Music,
  photo: Camera,
} as const;

export function Partners() {
  const { t } = useTranslation();

  return (
    <Section id="polecamy" className="bg-muted/40">
      <Container>
        <SectionHeader
          kicker={t("partners.kicker")}
          title={t("partners.title")}
          subtitle={t("partners.subtitle")}
        />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.partners.map((partner) => {
            const Icon = ICONS[partner.id];
            return (
              <StaggerItem key={partner.id} hover>
                <Card className="h-full">
                  <CardHeader>
                    <Icon className="text-primary size-5" />
                    <p className="text-primary text-xs font-medium tracking-widest uppercase">
                      {t(`partners.items.${partner.id}.role`)}
                    </p>
                    <CardTitle>{partner.name}</CardTitle>
                    <p className="text-muted-foreground text-sm">{partner.place}</p>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col gap-4">
                    <p className="text-muted-foreground text-sm">
                      {t(`partners.items.${partner.id}.offer`)}
                    </p>
                    <Button asChild variant="outline" size="sm" className="mt-auto w-fit">
                      <a href={partner.url} target="_blank" rel="noreferrer">
                        {t("partners.visit")}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}

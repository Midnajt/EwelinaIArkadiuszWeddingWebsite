import { useTranslation } from "react-i18next";
import { Home, Wine } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ITEMS = [
  { key: "house", icon: Home },
  { key: "wine", icon: Wine },
] as const;

export function GiftWishes() {
  const { t } = useTranslation();

  return (
    <Section id="prezenty">
      <Container>
        <SectionHeader kicker={t("gifts.kicker")} title={t("gifts.title")} subtitle={t("gifts.subtitle")} />
        <Stagger className="grid gap-4 sm:grid-cols-2">
          {ITEMS.map(({ key, icon: Icon }) => (
            <StaggerItem key={key} hover>
              <Card className="h-full">
                <CardHeader>
                  <Icon className="text-primary size-5" />
                  <CardTitle>{t(`gifts.${key}.title`)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{t(`gifts.${key}.text`)}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

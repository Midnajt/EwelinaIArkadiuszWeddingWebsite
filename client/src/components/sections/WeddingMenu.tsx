import { useTranslation } from "react-i18next";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const KEYS = ["welcome", "soup", "main", "dessert", "late"] as const;

export function WeddingMenu() {
  const { t } = useTranslation();

  return (
    <Section id="menu">
      <Container>
        <SectionHeader
          kicker={t("menuFood.kicker")}
          title={t("menuFood.title")}
          subtitle={t("menuFood.subtitle")}
        />
        <Stagger className="grid gap-4 sm:grid-cols-2">
          {KEYS.map((key) => (
            <StaggerItem key={key} hover>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{t(`menuFood.${key}.title`)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{t(`menuFood.${key}.text`)}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

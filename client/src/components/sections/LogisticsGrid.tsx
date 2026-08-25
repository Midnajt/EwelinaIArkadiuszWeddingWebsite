import { useTranslation } from "react-i18next";
import { Baby, Bus, Car, Moon, Sparkles } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ITEMS = [
  { key: "travel", icon: Car },
  { key: "bus", icon: Bus },
  { key: "kids", icon: Baby },
  { key: "animator", icon: Sparkles },
  { key: "stay", icon: Moon },
] as const;

export function LogisticsGrid() {
  const { t } = useTranslation();

  return (
    <Section id="organizacja" className="bg-muted/40">
      <Container>
        <SectionHeader
          kicker={t("logistics.kicker")}
          title={t("logistics.title")}
          subtitle={t("logistics.subtitle")}
        />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ key, icon: Icon }) => (
            <StaggerItem key={key} hover>
              <Card className="h-full">
                <CardHeader>
                  <Icon className="text-primary size-5" />
                  <CardTitle>{t(`logistics.${key}.title`)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{t(`logistics.${key}.text`)}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

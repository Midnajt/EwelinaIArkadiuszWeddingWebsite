import { useTranslation } from "react-i18next";
import { site } from "@/config/site";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const KEYS = ["one", "two", "three"] as const;

export function GuestBook() {
  const { t } = useTranslation();

  return (
    <Section id="ksiega" className="bg-muted/40">
      <Container>
        <SectionHeader
          kicker={t("guestbook.kicker")}
          title={t("guestbook.title")}
          subtitle={t("guestbook.subtitle")}
        />
        <Stagger className="grid gap-4 md:grid-cols-3">
          {KEYS.map((key) => (
            <StaggerItem key={key} hover>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-base">{t(`guestbook.entries.${key}.name`)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm italic">
                    „{t(`guestbook.entries.${key}.text`)}”
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8 text-center">
          <Button asChild>
            <a href={site.emailHref}>{t("guestbook.cta")}</a>
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}

import { useTranslation } from "react-i18next";
import { Mail, Phone } from "lucide-react";
import { site } from "@/config/site";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Witnesses() {
  const { t } = useTranslation();

  return (
    <Section id="swiadkowie" className="bg-muted/40">
      <Container>
        <SectionHeader
          kicker={t("witnesses.kicker")}
          title={t("witnesses.title")}
          subtitle={t("witnesses.subtitle")}
        />
        <Stagger className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {site.witnesses.map((person) => (
            <StaggerItem key={person.id} hover>
              <Card className="h-full items-center text-center">
                <CardHeader className="items-center">
                  <span className="bg-secondary text-primary font-heading flex size-16 items-center justify-center rounded-full text-xl font-semibold">
                    {person.initials}
                  </span>
                  <CardTitle className="mt-2">{person.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {t(person.id === "maid" ? "witnesses.maid" : "witnesses.bestMan")}
                  </p>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="flex items-center justify-center gap-2">
                    <Phone className="size-4" />
                    <a className="hover:underline" href={person.phoneHref}>
                      {person.phone}
                    </a>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Mail className="size-4" />
                    <a className="hover:underline" href={person.emailHref}>
                      {person.email}
                    </a>
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

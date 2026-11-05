import { KeyRound, LockKeyhole, MessageSquare, QrCode } from "lucide-react";
import { useTranslation } from "react-i18next";
import { site } from "@/config/site";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function smsHref(phoneHref: string, body: string) {
  const number = phoneHref.replace(/^tel:/, "");
  return `sms:${number}?body=${encodeURIComponent(body)}`;
}

export function AlbumHelp() {
  const { t } = useTranslation();
  const smsBody = t("albumHelp.smsBody");
  const { bride, groom } = site.contacts;

  return (
    <main id="content">
      <Section>
        <Container>
          <SectionHeader
            kicker={t("albumHelp.kicker")}
            title={t("albumHelp.title")}
            subtitle={t("albumHelp.subtitle")}
          />

          <div className="flex flex-col gap-5">
            <Stagger className="grid gap-5 md:grid-cols-2">
              <StaggerItem hover>
                <Card className="h-full">
                  <CardHeader>
                    <QrCode className="text-primary size-5" aria-hidden />
                    <CardTitle>{t("albumHelp.open.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{t("albumHelp.open.text")}</p>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem hover>
                <Card className="h-full">
                  <CardHeader>
                    <KeyRound className="text-primary size-5" aria-hidden />
                    <CardTitle>{t("albumHelp.account.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{t("albumHelp.account.text")}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            </Stagger>

            <Reveal>
              <Card>
                <CardHeader>
                  <LockKeyhole className="text-primary size-5" aria-hidden />
                  <CardTitle>{t("albumHelp.access.title")}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="max-w-xl space-y-2">
                    <p className="text-muted-foreground text-sm">{t("albumHelp.access.text")}</p>
                    <p className="text-muted-foreground text-sm">{t("albumHelp.access.fallback")}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button asChild variant="outline" size="sm">
                      <a href={smsHref(bride.phoneHref, smsBody)}>
                        <MessageSquare />
                        {t("albumHelp.sms", { name: bride.name, phone: bride.phone })}
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={smsHref(groom.phoneHref, smsBody)}>
                        <MessageSquare />
                        {t("albumHelp.sms", { name: groom.name, phone: groom.phone })}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild>
              <a href="#top">{t("albumHelp.back")}</a>
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}

import { CircleHelp } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useTranslation } from "react-i18next";
import { site } from "@/config/site";
import { themeTokens } from "@/config/theme";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function PhotoAlbum() {
  const { t } = useTranslation();
  const url = site.photos.url;

  return (
    <Section id="zdjecia" className="bg-album-band">
      <Container>
        <SectionHeader
          kicker={t("album.kicker")}
          title={t("album.title")}
          subtitle={t("album.subtitle")}
        />
        <Reveal className="mx-auto max-w-md">
          <Card className="items-center text-center">
            <CardContent className="flex flex-col items-center gap-5">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={t("album.open")}
                className="bg-card rounded-lg focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none"
              >
                <QRCodeSVG
                  value={url}
                  size={220}
                  level="M"
                  marginSize={4}
                  bgColor={themeTokens.card}
                  fgColor={themeTokens.foreground}
                  aria-hidden
                />
              </a>
              <p className="text-muted-foreground text-sm">{t("album.hint")}</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button asChild>
                  <a href={url} target="_blank" rel="noreferrer">
                    {t("album.open")}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#/album">
                    <CircleHelp />
                    {t("album.help")}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </Container>
    </Section>
  );
}

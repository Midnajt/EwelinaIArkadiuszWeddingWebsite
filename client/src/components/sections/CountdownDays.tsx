import { useTranslation } from "react-i18next";
import { site } from "@/config/site";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { getWeddingDateState } from "@/lib/wedding-date";

export function CountdownDays() {
  const { t } = useTranslation();
  const { phase, days } = getWeddingDateState(site.weddingDate);

  if (phase !== "before") {
    return null;
  }

  return (
    <Section id="odliczanie">
      <Container>
        <SectionHeader kicker={t("countdown.kicker")} title={t(`countdown.title.${phase}`)} />
        <Reveal className="mx-auto max-w-xl text-center">
          <p
            data-slot="countdown-figure"
            className="font-heading text-primary text-6xl font-semibold md:text-8xl"
          >
            {days}
          </p>
          <p className="text-muted-foreground mt-4 text-lg">
            {t(`countdown.message.${phase}`, { count: days })}
          </p>
          <p className="mt-2 text-sm tracking-widest uppercase">{t("countdown.dateLabel")}</p>
        </Reveal>
      </Container>
    </Section>
  );
}

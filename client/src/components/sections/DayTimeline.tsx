import { useTranslation } from "react-i18next";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

const KEYS = ["gather", "mass", "exit", "welcome", "dinner", "dance", "oczepiny", "end"] as const;

export function DayTimeline() {
  const { t } = useTranslation();

  return (
    <Section id="plan">
      <Container>
        <SectionHeader
          kicker={t("schedule.kicker")}
          title={t("schedule.title")}
          subtitle={t("schedule.subtitle")}
        />
        <Stagger as="ol" className="mx-auto max-w-2xl" stagger={0.12}>
          {KEYS.map((key) => (
            <StaggerItem key={key} as="li" className="grid grid-cols-[5.5rem_1fr] gap-4 sm:grid-cols-[6.5rem_1fr]">
              <p className="font-heading text-primary pt-1 text-xl font-semibold">
                {t(`schedule.items.${key}.time`)}
              </p>
              <div className="border-border border-l pb-8 pl-5 last:pb-0">
                <p className="font-heading text-lg">{t(`schedule.items.${key}.title`)}</p>
                <p className="text-muted-foreground mt-1 text-sm">{t(`schedule.items.${key}.text`)}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

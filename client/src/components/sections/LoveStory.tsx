import { useTranslation } from "react-i18next";
import { images } from "@/config/assets";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function LoveStory() {
  const { t } = useTranslation();

  return (
    <Section id="historia">
      <Container>
        <SectionHeader kicker={t("story.kicker")} title={t("story.title")} />
        <Reveal className="mx-auto max-w-2xl space-y-4 text-center text-base leading-relaxed md:text-lg">
          <p>{t("story.p1")}</p>
          <p className="text-muted-foreground">{t("story.p2")}</p>
        </Reveal>
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-3" stagger={0.12}>
          {images.story.map((photo) => (
            <StaggerItem key={photo.src} scale>
              <figure className="group overflow-hidden rounded-xl">
                <img
                  src={photo.src}
                  alt={t(photo.altKey)}
                  className="ease-smooth h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.06] md:h-80"
                  loading="lazy"
                />
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

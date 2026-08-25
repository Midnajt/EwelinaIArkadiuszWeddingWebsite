import { useTranslation } from "react-i18next";
import { images } from "@/config/assets";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Slider() {
  const { t } = useTranslation();

  return (
    <Section className="bg-muted/40">
      <Container>
        <SectionHeader kicker={t("nav.gallery")} title={t("slider.title")} subtitle={t("slider.subtitle")} />
        <Reveal>
          <Carousel opts={{ loop: true }} className="px-12">
            <CarouselContent>
              {images.slider.map((slide) => (
                <CarouselItem key={slide.src}>
                  <div className="group overflow-hidden rounded-xl">
                    <img
                      src={slide.src}
                      alt={t(slide.altKey)}
                      className="ease-smooth h-72 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] md:h-[32rem]"
                      style={{ objectPosition: slide.objectPosition ?? "center 20%" }}
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Reveal>
      </Container>
    </Section>
  );
}

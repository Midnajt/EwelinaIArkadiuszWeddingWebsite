import { useTranslation } from "react-i18next";
import { Mail, Phone } from "lucide-react";
import { site } from "@/config/site";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export function Contact() {
  const { t } = useTranslation();
  const people = [
    { role: t("contact.bride"), ...site.contacts.bride },
    { role: t("contact.groom"), ...site.contacts.groom },
  ] as const;

  return (
    <Section id="kontakt">
      <Container>
        <SectionHeader
          kicker={t("contact.kicker")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />
        <Stagger className="grid gap-6 md:grid-cols-2">
          {people.map((person) => (
            <StaggerItem key={person.email} hover>
              <div
                data-slot="glass-panel"
                className="bg-card h-full rounded-xl border p-6 transition-colors duration-300 hover:border-primary/40"
              >
                <p className="text-primary text-xs font-medium tracking-widest uppercase">
                  {person.role}
                </p>
                <p className="font-heading mt-2 text-2xl">{person.name}</p>
                <p className="mt-4 flex items-center gap-2 text-sm">
                  <Phone className="text-primary size-4" />
                  <a className="hover:underline" href={person.phoneHref}>
                    {person.phone}
                  </a>
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm">
                  <Mail className="text-primary size-4" />
                  <a className="hover:underline" href={person.emailHref}>
                    {person.email}
                  </a>
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button asChild size="sm">
                    <a href={person.phoneHref}>{t("contact.phone")}</a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href={person.emailHref}>{t("contact.email")}</a>
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium">{t("contact.mapCeremony")}</p>
            <iframe
              title={t("contact.mapCeremony")}
              src={site.ceremony.mapEmbed}
              className="h-64 w-full rounded-xl border md:h-72"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <p className="mt-2 text-xs">
              <a className="underline" href={site.ceremony.mapLink} target="_blank" rel="noreferrer">
                Google Maps
              </a>
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-medium">{t("contact.mapReception")}</p>
            <iframe
              title={t("contact.mapReception")}
              src={site.reception.mapEmbed}
              className="h-64 w-full rounded-xl border md:h-72"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <p className="mt-2 text-xs">
              <a className="underline" href={site.reception.mapLink} target="_blank" rel="noreferrer">
                Google Maps
              </a>
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

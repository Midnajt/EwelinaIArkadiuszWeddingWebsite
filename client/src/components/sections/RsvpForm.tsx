import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "wedding-rsvp";

const fieldClass =
  "border-input bg-background w-full rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-ring focus-visible:ring-[3px]";

type RsvpPayload = {
  name: string;
  presence: string;
  plusOne: string;
  diet: string;
  children: string;
  bus: string;
  stay: string;
  note: string;
  savedAt: string;
};

function readSaved(): RsvpPayload | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as RsvpPayload;
  } catch {
    return null;
  }
}

export function RsvpForm() {
  const { t } = useTranslation();
  const [saved, setSaved] = useState<RsvpPayload | null>(() => readSaved());

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload: RsvpPayload = {
      name: String(data.get("name") ?? ""),
      presence: String(data.get("presence") ?? ""),
      plusOne: String(data.get("plusOne") ?? ""),
      diet: String(data.get("diet") ?? ""),
      children: String(data.get("children") ?? ""),
      bus: String(data.get("bus") ?? ""),
      stay: String(data.get("stay") ?? ""),
      note: String(data.get("note") ?? ""),
      savedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      /* ignore quota / private mode */
    }
    setSaved(payload);
  };

  const reset = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setSaved(null);
  };

  return (
    <Section id="rsvp" className="bg-muted/40">
      <Container>
        <SectionHeader kicker={t("rsvp.kicker")} title={t("rsvp.title")} subtitle={t("rsvp.subtitle")} />
        {saved ? (
          <Reveal>
            <div
              data-slot="glass-panel"
              className="bg-card mx-auto max-w-xl rounded-xl border p-8 text-center shadow-sm"
            >
              <p className="font-heading text-2xl">{t("rsvp.success")}</p>
              <p className="text-muted-foreground mt-3 text-sm">{saved.name}</p>
              <Button className="mt-6" variant="outline" onClick={reset}>
                {t("rsvp.reset")}
              </Button>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="bg-card mx-auto grid max-w-xl gap-4 rounded-xl border p-6 shadow-sm"
              data-slot="glass-panel"
            >
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">{t("rsvp.name")}</span>
                <input name="name" required className={fieldClass} autoComplete="name" />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">{t("rsvp.presence")}</span>
                <select name="presence" required className={fieldClass} defaultValue="both">
                  <option value="both">{t("rsvp.presenceBoth")}</option>
                  <option value="ceremony">{t("rsvp.presenceCeremony")}</option>
                  <option value="reception">{t("rsvp.presenceReception")}</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">{t("rsvp.plusOne")}</span>
                <select name="plusOne" className={fieldClass} defaultValue="no">
                  <option value="no">{t("rsvp.plusOneNo")}</option>
                  <option value="yes">{t("rsvp.plusOneYes")}</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">{t("rsvp.diet")}</span>
                <select name="diet" className={fieldClass} defaultValue="none">
                  <option value="none">{t("rsvp.dietNone")}</option>
                  <option value="veg">{t("rsvp.dietVeg")}</option>
                  <option value="vegan">{t("rsvp.dietVegan")}</option>
                  <option value="other">{t("rsvp.dietOther")}</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">{t("rsvp.children")}</span>
                <select name="children" className={fieldClass} defaultValue="none">
                  <option value="none">{t("rsvp.childrenNone")}</option>
                  <option value="yes">{t("rsvp.childrenYes")}</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">{t("rsvp.bus")}</span>
                <select name="bus" className={fieldClass} defaultValue="no">
                  <option value="no">{t("rsvp.busNo")}</option>
                  <option value="yes">{t("rsvp.busYes")}</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">{t("rsvp.stay")}</span>
                <select name="stay" className={fieldClass} defaultValue="no">
                  <option value="no">{t("rsvp.stayNo")}</option>
                  <option value="yes">{t("rsvp.stayYes")}</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">{t("rsvp.note")}</span>
                <textarea name="note" rows={3} className={fieldClass} />
              </label>
              <Button type="submit" size="lg">
                {t("rsvp.submit")}
              </Button>
            </form>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}

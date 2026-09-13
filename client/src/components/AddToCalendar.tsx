import { CalendarPlus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { openWeddingCalendar, type CalendarLanguage } from "@/lib/calendar";

type AddToCalendarProps = {
  language: CalendarLanguage;
};

export function AddToCalendar({ language }: AddToCalendarProps) {
  const { t } = useTranslation();

  return (
    <Button
      className="min-h-11 shrink-0 sm:min-h-9"
      onClick={() => openWeddingCalendar(language)}
    >
      <CalendarPlus />
      {t("essentials.calendar.action")}
    </Button>
  );
}

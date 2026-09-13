import { useMemo } from "react";
import { CalendarPlus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { site } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  detectCalendarClient,
  getGoogleCalendarUrl,
  getOutlookCalendarUrl,
  getWeddingCalendarFileUrl,
  type CalendarLanguage,
} from "@/lib/calendar";

type AddToCalendarProps = {
  language: CalendarLanguage;
};

const optionClassName =
  "min-h-11 w-full justify-start px-4 text-left whitespace-normal sm:min-h-10";

export function AddToCalendar({ language }: AddToCalendarProps) {
  const { t } = useTranslation();
  const client = useMemo(() => detectCalendarClient(), []);
  const icsHref = getWeddingCalendarFileUrl(language);
  const googleHref = getGoogleCalendarUrl(language);
  const outlookHref = getOutlookCalendarUrl(language);
  const showHostedIcs = !client.isInAppBrowser;
  const showDownload = !client.isIOS && !client.isInAppBrowser;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="min-h-11 shrink-0 sm:min-h-9">
          <CalendarPlus />
          {t("essentials.calendar.action")}
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-5 sm:max-w-md">
        <div className="pr-8">
          <DialogTitle>{t("essentials.calendar.chooseTitle")}</DialogTitle>
          <DialogDescription className="mt-2">
            {client.isInAppBrowser
              ? t("essentials.calendar.inAppHint")
              : t("essentials.calendar.chooseText")}
          </DialogDescription>
        </div>
        <div className="flex flex-col gap-2">
          {showHostedIcs ? (
            <Button asChild variant={client.isIOS ? "default" : "outline"} className={optionClassName}>
              <a href={icsHref}>{t("essentials.calendar.apple")}</a>
            </Button>
          ) : null}
          <Button
            asChild
            variant={client.isIOS && showHostedIcs ? "outline" : "default"}
            className={optionClassName}
          >
            <a href={googleHref} target="_blank" rel="noreferrer">
              {t("essentials.calendar.google")}
            </a>
          </Button>
          <Button asChild variant="outline" className={optionClassName}>
            <a href={outlookHref} target="_blank" rel="noreferrer">
              {t("essentials.calendar.outlook")}
            </a>
          </Button>
          {showDownload ? (
            <Button asChild variant="ghost" className={optionClassName}>
              <a href={icsHref} download={site.calendar.filename}>
                {t("essentials.calendar.download")}
              </a>
            </Button>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}

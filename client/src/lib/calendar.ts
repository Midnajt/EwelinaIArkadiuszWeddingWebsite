import { site } from "@/config/site";

export type CalendarLanguage = "pl" | "en";

export type CalendarClient = {
  isIOS: boolean;
  isAndroid: boolean;
  isInAppBrowser: boolean;
};

function escapeIcsText(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

function formatLocalDateTime(value: string) {
  return value.replace(/[-:]/g, "");
}

function formatUtcDateTime(value: Date) {
  return value.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

export function getCalendarCopy(language: CalendarLanguage) {
  const polish = language === "pl";
  const title = polish ? "Ślub Eweliny i Arkadiusza" : "Ewelina and Arkadiusz's wedding";
  const description = polish
    ? [
        `13:30 — zbiórka przy kościele`,
        `${site.ceremony.time} — ślub: ${site.ceremony.namePl}, ${site.ceremony.full}`,
        `${site.reception.time} — wesele: ${site.reception.namePl}, ${site.reception.full}`,
        `Mapa ślubu: ${site.ceremony.mapLink}`,
        `Mapa wesela: ${site.reception.mapLink}`,
      ].join("\n")
    : [
        `13:30 — gathering at the church`,
        `${site.ceremony.time} — ceremony: ${site.ceremony.nameEn}, ${site.ceremony.full}`,
        `${site.reception.time} — reception: ${site.reception.nameEn}, ${site.reception.full}`,
        `Ceremony map: ${site.ceremony.mapLink}`,
        `Reception map: ${site.reception.mapLink}`,
      ].join("\n");
  const location = `${site.ceremony.full} / ${site.reception.full}`;

  return { title, description, location };
}

export function createWeddingCalendar(language: CalendarLanguage, stampedAt = new Date()) {
  const { title, description, location } = getCalendarCopy(language);

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//AddPattern//Wedding Ewelina Arkadiusz//PL",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VTIMEZONE",
    `TZID:${site.calendar.timeZone}`,
    `X-LIC-LOCATION:${site.calendar.timeZone}`,
    "BEGIN:DAYLIGHT",
    "TZOFFSETFROM:+0100",
    "TZOFFSETTO:+0200",
    "TZNAME:CEST",
    "DTSTART:19700329T020000",
    "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU",
    "END:DAYLIGHT",
    "BEGIN:STANDARD",
    "TZOFFSETFROM:+0200",
    "TZOFFSETTO:+0100",
    "TZNAME:CET",
    "DTSTART:19701025T030000",
    "RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU",
    "END:STANDARD",
    "END:VTIMEZONE",
    "BEGIN:VEVENT",
    "UID:20261127-ewelina-arkadiusz@ewelinaiarkadiusz.pl",
    `DTSTAMP:${formatUtcDateTime(stampedAt)}`,
    `DTSTART;TZID=${site.calendar.timeZone}:${formatLocalDateTime(site.calendar.startsAt)}`,
    `DTEND;TZID=${site.calendar.timeZone}:${formatLocalDateTime(site.calendar.endsAt)}`,
    `SUMMARY:${escapeIcsText(title)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    `LOCATION:${escapeIcsText(location)}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n");
}

export function getWeddingCalendarFileUrl(language: CalendarLanguage) {
  return language === "en" ? site.calendar.fileUrlEn : site.calendar.fileUrl;
}

export function getGoogleCalendarUrl(language: CalendarLanguage) {
  const { title, description, location } = getCalendarCopy(language);
  const start = formatLocalDateTime(site.calendar.startsAt);
  const end = formatLocalDateTime(site.calendar.endsAt);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${start}/${end}`,
    details: description,
    location,
    ctz: site.calendar.timeZone,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function getOutlookCalendarUrl(language: CalendarLanguage) {
  const { title, description, location } = getCalendarCopy(language);
  const params = new URLSearchParams({
    rru: "addevent",
    path: "/calendar/action/compose",
    subject: title,
    startdt: site.calendar.startsAt,
    enddt: site.calendar.endsAt,
    body: description,
    location,
  });

  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

export function detectCalendarClient(): CalendarClient {
  if (typeof navigator === "undefined") {
    return { isIOS: false, isAndroid: false, isInAppBrowser: false };
  }

  const ua = navigator.userAgent;
  const isIOS =
    /iP(ad|hone|od)/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/i.test(ua);
  const isInAppBrowser =
    /FBAN|FBAV|FB_IAB|FBIOS|Messenger|Instagram|Line\/|Twitter|TikTok|BytedanceWebview|Snapchat/i.test(
      ua,
    ) ||
    /;\s*wv\)/i.test(ua) ||
    (isIOS && /AppleWebKit/i.test(ua) && !/Safari\//i.test(ua) && !/CriOS|FxiOS|EdgiOS/i.test(ua));

  return { isIOS, isAndroid, isInAppBrowser };
}

export function downloadWeddingCalendar(language: CalendarLanguage) {
  const blob = new Blob([createWeddingCalendar(language)], {
    type: "text/calendar;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = site.calendar.filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 2000);
}

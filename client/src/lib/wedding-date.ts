export type WeddingPhase = "before" | "today" | "after";

type WeddingDateState = {
  phase: WeddingPhase;
  days: number;
};

function localDateParts(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return { year, month: month - 1, day };
}

function calendarDayNumber(year: number, month: number, day: number) {
  return Math.floor(Date.UTC(year, month, day) / 86_400_000);
}

export function getWeddingDateState(isoDate: string, now = new Date()): WeddingDateState {
  const wedding = localDateParts(isoDate);
  const weddingDay = calendarDayNumber(wedding.year, wedding.month, wedding.day);
  const currentDay = calendarDayNumber(now.getFullYear(), now.getMonth(), now.getDate());
  const difference = weddingDay - currentDay;

  if (difference > 0) {
    return { phase: "before", days: difference };
  }

  if (difference < 0) {
    return { phase: "after", days: Math.abs(difference) };
  }

  return { phase: "today", days: 0 };
}

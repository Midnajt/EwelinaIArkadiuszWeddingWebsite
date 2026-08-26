const SCRIPT_ID = "ga-gtag-js";

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

/** Fallback when `.env` has no `VITE_GA_MEASUREMENT_ID` (local test). */
const FALLBACK_MEASUREMENT_ID = "G-9S8QF0YP33";

function readMeasurementId(): string {
  const fromEnv = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
  return fromEnv || FALLBACK_MEASUREMENT_ID;
}

/**
 * Loads GA4 on startup, without waiting for the cookie banner.
 * Consent gating can be added later for production.
 */
export function initGoogleAnalytics(): void {
  const measurementId = readMeasurementId();
  if (!measurementId || document.getElementById(SCRIPT_ID)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // Google's snippet uses `arguments`, not rest params.
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

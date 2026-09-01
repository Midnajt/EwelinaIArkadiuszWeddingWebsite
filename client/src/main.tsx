import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashViewProvider } from "@/lib/hash-view";
import { initGoogleAnalytics } from "@/lib/google-analytics";
import App from "@/App";
import "@/i18n";
import "@/index.css";

try {
  localStorage.removeItem("wedding-theme");
  localStorage.removeItem("wedding-hero-photo");
} catch {
  /* private mode / blocked storage */
}

initGoogleAnalytics();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashViewProvider>
      <App />
    </HashViewProvider>
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/lib/theme-provider";
import { HeroPhotoProvider } from "@/lib/hero-photo-provider";
import { HashViewProvider } from "@/lib/hash-view";
import { initGoogleAnalytics } from "@/lib/google-analytics";
import App from "@/App";
import "@/i18n";
import "@/index.css";

initGoogleAnalytics();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <HeroPhotoProvider>
        <HashViewProvider>
          <App />
        </HashViewProvider>
      </HeroPhotoProvider>
    </ThemeProvider>
  </StrictMode>,
);

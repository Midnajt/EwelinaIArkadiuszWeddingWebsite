import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/lib/theme-provider";
import { HashViewProvider } from "@/lib/hash-view";
import App from "@/App";
import "@/i18n";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <HashViewProvider>
        <App />
      </HashViewProvider>
    </ThemeProvider>
  </StrictMode>,
);

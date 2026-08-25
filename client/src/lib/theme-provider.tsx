import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  THEME_STORAGE_KEY,
  defaultPresetId,
  getPreset,
  isThemePresetId,
  type ThemePreset,
  type ThemePresetId,
} from "@/config/theme";

type ColorMode = "light" | "dark";

type ThemeContextValue = {
  preset: ThemePreset;
  presetId: ThemePresetId;
  setPresetId: (id: ThemePresetId) => void;
  mode: ColorMode;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredPreset(): ThemePresetId {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (isThemePresetId(stored)) return stored;
  } catch {
    /* private mode / blocked storage */
  }
  return defaultPresetId;
}

function applyTheme(preset: ThemePreset) {
  const tokens = preset.light;
  const root = document.documentElement;
  root.classList.remove("dark");
  root.dataset.theme = preset.id;
  root.style.setProperty("--radius", tokens.radius);
  root.style.setProperty("--font-heading-stack", tokens.headingFont);
  root.style.setProperty("--font-body", tokens.bodyFont);
  root.style.setProperty("--background", tokens.background);
  root.style.setProperty("--foreground", tokens.foreground);
  root.style.setProperty("--card", tokens.card);
  root.style.setProperty("--card-foreground", tokens.cardForeground);
  root.style.setProperty("--popover", tokens.popover);
  root.style.setProperty("--popover-foreground", tokens.popoverForeground);
  root.style.setProperty("--primary", tokens.primary);
  root.style.setProperty("--primary-foreground", tokens.primaryForeground);
  root.style.setProperty("--secondary", tokens.secondary);
  root.style.setProperty("--secondary-foreground", tokens.secondaryForeground);
  root.style.setProperty("--muted", tokens.muted);
  root.style.setProperty("--muted-foreground", tokens.mutedForeground);
  root.style.setProperty("--accent", tokens.accent);
  root.style.setProperty("--accent-foreground", tokens.accentForeground);
  root.style.setProperty("--destructive", tokens.destructive);
  root.style.setProperty("--border", tokens.border);
  root.style.setProperty("--input", tokens.input);
  root.style.setProperty("--ring", tokens.ring);
  root.style.setProperty("--hero-overlay", tokens.heroOverlay);
  root.style.setProperty("--hero-glow", tokens.heroGlow);

  let link = document.getElementById("theme-fonts") as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.id = "theme-fonts";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
  link.href = tokens.googleFontsHref;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [presetId, setPresetIdState] = useState<ThemePresetId>(() => {
    const id = readStoredPreset();
    applyTheme(getPreset(id));
    return id;
  });
  const preset = useMemo(() => getPreset(presetId), [presetId]);
  const mode: ColorMode = "light";

  useEffect(() => {
    applyTheme(preset);
  }, [preset]);

  const setPresetId = useCallback((id: ThemePresetId) => {
    setPresetIdState(id);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, id);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleMode = useCallback(() => {
    /* Light-only wedding theme */
  }, []);

  const value = useMemo(
    () => ({ preset, presetId, setPresetId, mode, toggleMode }),
    [preset, presetId, setPresetId, mode, toggleMode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

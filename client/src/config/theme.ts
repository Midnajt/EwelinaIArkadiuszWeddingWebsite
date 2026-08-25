export type HeroLayout = "fullscreen" | "split" | "editorial";
export type SectionDensity = "comfortable" | "compact" | "airy";
export type ThemeSurface = "solid" | "glass";
export type ThemePresetId = "boho" | "forest" | "noirGold";

export type ThemeTokens = {
  radius: string;
  headingFont: string;
  bodyFont: string;
  googleFontsHref: string;
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  border: string;
  input: string;
  ring: string;
  heroOverlay: string;
  heroGlow: string;
};

export type ThemePreset = {
  id: ThemePresetId;
  namePl: string;
  nameEn: string;
  heroLayout: HeroLayout;
  density: SectionDensity;
  surface: ThemeSurface;
  light: ThemeTokens;
  dark: ThemeTokens;
};

const bohoLight: ThemeTokens = {
  radius: "0.75rem",
  headingFont: '"Cormorant Garamond", serif',
  bodyFont: '"Nunito Sans", sans-serif',
  googleFontsHref:
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Nunito+Sans:wght@400;500;600;700&display=swap",
  background: "#F9F4EC",
  foreground: "#4A3F30",
  card: "#FFFCF7",
  cardForeground: "#4A3F30",
  popover: "#FFFCF7",
  popoverForeground: "#4A3F30",
  primary: "#9E5A30",
  primaryForeground: "#FFFCF7",
  secondary: "#EFE4D2",
  secondaryForeground: "#4A3F30",
  muted: "#F1E6D4",
  mutedForeground: "#7A6A55",
  accent: "#5E6551",
  accentForeground: "#FFFCF7",
  destructive: "#9B3D2E",
  border: "#E4D8C4",
  input: "#E4D8C4",
  ring: "#9E5A30",
  heroOverlay: "rgba(74, 63, 48, 0.5)",
  heroGlow:
    "radial-gradient(80% 50% at 50% -10%, rgba(255, 214, 170, 0.55) 0%, transparent 70%)",
};

const forestLight: ThemeTokens = {
  radius: "0.5rem",
  headingFont: '"Libre Baskerville", serif',
  bodyFont: '"Figtree", sans-serif',
  googleFontsHref:
    "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap",
  background: "#F7FAF6",
  foreground: "#1A2E1C",
  card: "#FFFFFF",
  cardForeground: "#1A2E1C",
  popover: "#FFFFFF",
  popoverForeground: "#1A2E1C",
  primary: "#1F4D36",
  primaryForeground: "#F7FAF6",
  secondary: "#E8F0E9",
  secondaryForeground: "#1A2E1C",
  muted: "#EEF4EF",
  mutedForeground: "#4A6B54",
  accent: "#4F7A5A",
  accentForeground: "#F7FAF6",
  destructive: "#9B3D2E",
  border: "#D4E4D7",
  input: "#D4E4D7",
  ring: "#1F4D36",
  heroOverlay: "rgba(31, 77, 54, 0.48)",
  heroGlow:
    "radial-gradient(80% 50% at 50% -10%, rgba(180, 220, 190, 0.4) 0%, transparent 70%)",
};

const noirGoldLight: ThemeTokens = {
  radius: "0.35rem",
  headingFont: '"Cinzel", serif',
  bodyFont: '"Manrope", sans-serif',
  googleFontsHref:
    "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap",
  background: "#0B0B0B",
  foreground: "#F5E6C8",
  card: "#1A1814",
  cardForeground: "#F5E6C8",
  popover: "#1A1814",
  popoverForeground: "#F5E6C8",
  primary: "#C9A227",
  primaryForeground: "#0B0B0B",
  secondary: "#1F1C16",
  secondaryForeground: "#F5E6C8",
  muted: "#161410",
  mutedForeground: "#C4B48A",
  accent: "#E8D5A3",
  accentForeground: "#0B0B0B",
  destructive: "#B54A3C",
  border: "#3D3420",
  input: "#3D3420",
  ring: "#C9A227",
  heroOverlay: "rgba(11, 11, 11, 0.62)",
  heroGlow:
    "radial-gradient(70% 45% at 50% -8%, rgba(201, 162, 39, 0.38) 0%, transparent 68%)",
};

export const themePresets: ThemePreset[] = [
  {
    id: "boho",
    namePl: "Boho",
    nameEn: "Boho",
    heroLayout: "fullscreen",
    density: "airy",
    surface: "solid",
    light: bohoLight,
    dark: { ...bohoLight },
  },
  {
    id: "forest",
    namePl: "Las",
    nameEn: "Forest",
    heroLayout: "fullscreen",
    density: "comfortable",
    surface: "solid",
    light: forestLight,
    dark: { ...forestLight },
  },
  {
    id: "noirGold",
    namePl: "Prestige",
    nameEn: "Prestige",
    heroLayout: "fullscreen",
    density: "compact",
    surface: "glass",
    light: noirGoldLight,
    dark: { ...noirGoldLight },
  },
];

export const defaultPresetId: ThemePresetId = "boho";
export const THEME_STORAGE_KEY = "wedding-theme";

export function isThemePresetId(value: string | null): value is ThemePresetId {
  return themePresets.some((preset) => preset.id === value);
}

export function getPreset(id: ThemePresetId): ThemePreset {
  return themePresets.find((preset) => preset.id === id) ?? themePresets[0];
}

export function densityClass(density: SectionDensity): string {
  if (density === "compact") return "py-12 md:py-16";
  if (density === "airy") return "py-24 md:py-32";
  return "py-16 md:py-24";
}

export function quickActionsGapClass(density: SectionDensity): string {
  if (density === "compact") return "gap-3";
  if (density === "airy") return "gap-5";
  return "gap-4";
}

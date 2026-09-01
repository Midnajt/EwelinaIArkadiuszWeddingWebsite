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

/** Single public look: Boho. Colors also live in `index.css` `:root` to avoid a flash. */
export const themeTokens: ThemeTokens = {
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

export const sectionDensityClass = "py-24 md:py-32";

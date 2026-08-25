import { Crown, Flower2, Heart, Landmark, Palmtree, Wine, type LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { heroPhotoOptions, type HeroPhotoId } from "@/config/hero-photo";
import { themePresets, type ThemePresetId } from "@/config/theme";
import { useHeroPhoto } from "@/lib/hero-photo-provider";
import { useTheme } from "@/lib/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const THEME_ICONS: Record<ThemePresetId, LucideIcon> = {
  boho: Flower2,
  love: Heart,
  noirGold: Crown,
};

const PHOTO_ICONS: Record<HeroPhotoId, LucideIcon> = {
  beach: Palmtree,
  paris: Landmark,
  restaurant: Wine,
};

const chipClass =
  "h-7 w-7 gap-1.5 p-0 text-xs sm:w-auto sm:px-3";

export function ThemeBar() {
  const { t, i18n } = useTranslation();
  const { presetId, setPresetId } = useTheme();
  const { photoId, setPhotoId } = useHeroPhoto();

  return (
    <div data-slot="theme-bar" className="bg-background/80 border-b backdrop-blur-md">
      <div className="mx-auto flex min-h-10 max-w-6xl flex-wrap items-center justify-center gap-1.5 px-4 py-1 sm:justify-start sm:gap-2 sm:px-6">
        <div className="flex items-center gap-1.5 sm:gap-2" role="group" aria-label={t("theme.bar")}>
          <span className="text-muted-foreground mr-1 shrink-0 text-xs font-medium">
            {t("theme.change")}
          </span>
          {themePresets.map((preset) => {
            const Icon = THEME_ICONS[preset.id];
            const active = presetId === preset.id;
            const label = i18n.language === "en" ? preset.nameEn : preset.namePl;

            return (
              <Button
                key={preset.id}
                type="button"
                size="sm"
                variant={active ? "default" : "ghost"}
                aria-pressed={active}
                aria-label={label}
                className={cn(
                  chipClass,
                  !active && "text-foreground hover:bg-accent hover:text-accent-foreground",
                )}
                onClick={() => setPresetId(preset.id)}
              >
                <Icon className={cn("size-3.5", preset.id === "love" && "fill-current")} />
                <span className="hidden sm:inline">{label}</span>
              </Button>
            );
          })}
        </div>

        <span className="bg-border mx-1 hidden h-4 w-px sm:block" aria-hidden />

        <div className="flex items-center gap-1.5 sm:gap-2" role="group" aria-label={t("theme.photoBar")}>
          <span className="text-muted-foreground mr-1 shrink-0 text-xs font-medium">
            {t("theme.choosePhoto")}
          </span>
          {heroPhotoOptions.map((option) => {
            const Icon = PHOTO_ICONS[option.id];
            const active = photoId === option.id;
            const label = t(option.labelKey);

            return (
              <Button
                key={option.id}
                type="button"
                size="sm"
                variant={active ? "default" : "ghost"}
                aria-pressed={active}
                aria-label={label}
                className={cn(
                  chipClass,
                  !active && "text-foreground hover:bg-accent hover:text-accent-foreground",
                )}
                onClick={() => setPhotoId(option.id)}
              >
                <Icon className="size-3.5" />
                <span className="hidden sm:inline">{label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

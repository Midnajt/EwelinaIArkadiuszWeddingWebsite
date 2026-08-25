import { Crown, Flower2, Leaf, type LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { themePresets, type ThemePresetId } from "@/config/theme";
import { useTheme } from "@/lib/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ICONS: Record<ThemePresetId, LucideIcon> = {
  boho: Flower2,
  forest: Leaf,
  noirGold: Crown,
};

export function ThemeBar() {
  const { t, i18n } = useTranslation();
  const { presetId, setPresetId } = useTheme();

  return (
    <div data-slot="theme-bar" className="bg-background/80 border-b backdrop-blur-md">
      <div
        className="mx-auto flex h-10 max-w-6xl items-center justify-center gap-1.5 px-4 sm:justify-start sm:gap-2 sm:px-6"
        role="group"
        aria-label={t("theme.bar")}
      >
        <span className="text-muted-foreground mr-1 shrink-0 text-xs font-medium">
          {t("theme.change")}
        </span>
        {themePresets.map((preset) => {
          const Icon = ICONS[preset.id];
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
                "h-7 w-7 gap-1.5 p-0 text-xs sm:w-auto sm:px-3",
                !active && "text-foreground hover:bg-accent hover:text-accent-foreground",
              )}
              onClick={() => setPresetId(preset.id)}
            >
              <Icon className="size-3.5" />
              <span className="hidden sm:inline">{label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

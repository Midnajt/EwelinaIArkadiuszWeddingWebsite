import { images } from "@/config/assets";
import { useTheme } from "@/lib/theme-provider";
import { cn } from "@/lib/utils";

export function FloralDivider({ className }: { className?: string }) {
  const { presetId } = useTheme();
  const prestige = presetId === "noirGold";

  return (
    <img
      src={prestige ? images.logoGold : images.ornament}
      alt=""
      className={cn(
        "mx-auto h-16 w-auto max-w-[min(100%,22rem)] object-contain md:h-20",
        prestige && "mix-blend-screen",
        className,
      )}
      loading="lazy"
    />
  );
}

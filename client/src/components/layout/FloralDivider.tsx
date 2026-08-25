import { images } from "@/config/assets";
import { useTheme } from "@/lib/theme-provider";
import { cn } from "@/lib/utils";

export function FloralDivider({ className }: { className?: string }) {
  const { presetId } = useTheme();
  const invertOnDark = presetId === "noirGold";

  return (
    <img
      src={images.ornament}
      alt=""
      className={cn(
        "mx-auto h-16 w-auto max-w-[min(100%,22rem)] object-contain md:h-20",
        invertOnDark && "invert",
        className,
      )}
      loading="lazy"
    />
  );
}

import { images } from "@/config/assets";
import { cn } from "@/lib/utils";

export function FloralDivider({ className }: { className?: string }) {
  return (
    <img
      src={images.ornament}
      alt=""
      className={cn("mx-auto h-16 w-auto max-w-[min(100%,22rem)] object-contain md:h-20", className)}
      loading="lazy"
    />
  );
}

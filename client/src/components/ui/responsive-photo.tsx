import type { CSSProperties } from "react";
import type { PhotoItem } from "@/config/assets";
import { cn } from "@/lib/utils";

type ResponsivePhotoProps = {
  photo: PhotoItem;
  alt: string;
  className?: string;
  pictureClassName?: string;
  style?: CSSProperties;
  loading?: "lazy" | "eager";
};

export function ResponsivePhoto({
  photo,
  alt,
  className,
  pictureClassName,
  style,
  loading,
}: ResponsivePhotoProps) {
  const objectPosition = photo.objectPosition ?? "center 40%";
  const imgClassName = cn("size-full object-cover", className);
  const imgStyle: CSSProperties = { objectPosition, ...style };

  if (!photo.mobileSrc) {
    return <img src={photo.src} alt={alt} className={imgClassName} style={imgStyle} loading={loading} />;
  }

  return (
    <picture className={cn("block size-full", pictureClassName)}>
      <source media="(max-width: 767px)" srcSet={photo.mobileSrc} />
      <img src={photo.src} alt={alt} className={imgClassName} style={imgStyle} loading={loading} />
    </picture>
  );
}

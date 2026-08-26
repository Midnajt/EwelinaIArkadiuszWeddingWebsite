import type { CSSProperties } from "react";
import type { PhotoItem } from "@/config/assets";
import { cn } from "@/lib/utils";

const FORMAT_ORDER = ["avif", "webp"];

function orderedSources(sources?: Record<string, string>) {
  if (!sources) return [];
  return Object.entries(sources).sort(([a], [b]) => {
    const orderA = FORMAT_ORDER.indexOf(a);
    const orderB = FORMAT_ORDER.indexOf(b);
    return (orderA === -1 ? 99 : orderA) - (orderB === -1 ? 99 : orderB);
  });
}

type ResponsivePhotoProps = {
  photo: PhotoItem;
  alt: string;
  className?: string;
  pictureClassName?: string;
  style?: CSSProperties;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
};

export function ResponsivePhoto({
  photo,
  alt,
  className,
  pictureClassName,
  style,
  loading,
  fetchPriority,
  sizes = "100vw",
}: ResponsivePhotoProps) {
  const objectPosition = photo.objectPosition ?? "center 40%";
  const objectPositionMobile = photo.objectPositionMobile ?? objectPosition;
  const { objectPosition: _objectPositionFromStyle, ...restStyle } = (style ?? {}) as CSSProperties;
  const imgClassName = cn(
    "size-full object-cover [object-position:var(--photo-object-position)] max-md:[object-position:var(--photo-object-position-mobile)]",
    className,
  );
  const imgStyle = {
    ...restStyle,
    "--photo-object-position": _objectPositionFromStyle ?? objectPosition,
    "--photo-object-position-mobile": objectPositionMobile,
  } as CSSProperties;
  const desktopSources = orderedSources(photo.sources);
  const mobileSources = orderedSources(photo.mobileSources);
  const hasPicture =
    desktopSources.length > 0 || mobileSources.length > 0 || Boolean(photo.mobileSrc);

  const img = (
    <img
      src={photo.src}
      alt={alt}
      className={imgClassName}
      style={imgStyle}
      loading={loading}
      fetchPriority={fetchPriority}
      sizes={sizes}
      width={photo.width}
      height={photo.height}
    />
  );

  if (!hasPicture) {
    return img;
  }

  return (
    <picture className={cn("block size-full", pictureClassName)}>
      {mobileSources.map(([format, srcSet]) => (
        <source
          key={`mobile-${format}`}
          media="(max-width: 767px)"
          type={`image/${format}`}
          srcSet={srcSet}
          sizes={sizes}
        />
      ))}
      {photo.mobileSrc && mobileSources.length === 0 ? (
        <source media="(max-width: 767px)" srcSet={photo.mobileSrc} />
      ) : null}
      {desktopSources.map(([format, srcSet]) => (
        <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={sizes} />
      ))}
      {img}
    </picture>
  );
}

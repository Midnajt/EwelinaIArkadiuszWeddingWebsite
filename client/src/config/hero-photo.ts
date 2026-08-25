import { images, type PhotoItem } from "@/config/assets";

export type HeroPhotoId = "beach" | "paris" | "restaurant";

export const HERO_PHOTO_STORAGE_KEY = "wedding-hero-photo";
export const defaultHeroPhotoId: HeroPhotoId = "paris";

export const heroPhotoOptions: readonly {
  id: HeroPhotoId;
  labelKey: string;
}[] = [
  { id: "beach", labelKey: "theme.photoBeach" },
  { id: "paris", labelKey: "theme.photoParis" },
  { id: "restaurant", labelKey: "theme.photoRestaurant" },
] as const;

export const heroPhotos: Record<HeroPhotoId, PhotoItem> = {
  beach: { src: images.beach, altKey: "photos.beach", objectPosition: "center 42%" },
  paris: { src: images.hero, altKey: "photos.hero", objectPosition: "center 40%" },
  restaurant: { src: images.restaurant, altKey: "photos.restaurant", objectPosition: "center 40%" },
};

export function isHeroPhotoId(value: string | null): value is HeroPhotoId {
  return value === "beach" || value === "paris" || value === "restaurant";
}

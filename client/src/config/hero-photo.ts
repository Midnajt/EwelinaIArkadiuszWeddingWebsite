import { heroParisPhoto, images, type PhotoItem } from "@/config/assets";

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
  beach: images.beach,
  paris: heroParisPhoto,
  restaurant: images.restaurant,
};

export function isHeroPhotoId(value: string | null): value is HeroPhotoId {
  return value === "beach" || value === "paris" || value === "restaurant";
}

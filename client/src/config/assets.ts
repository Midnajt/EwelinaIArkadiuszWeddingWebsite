import type { Picture } from "vite-imagetools";
import demoHero from "../../assets/5F4A6221.jpg?as=picture";
import hero from "../../assets/hero.png?as=picture";
import heroMobile from "../../assets/hero_mobile.png?as=picture";
import beach from "../../assets/beach.png?as=picture";
import restaurant from "../../assets/restaurant.png?as=picture";
import logoGold from "../../assets/logo_gold.png?url";
import intimate from "../../assets/5F4A5869.jpg?as=picture";
import brideSmile from "../../assets/5F4A5971.jpg?as=picture";
import hands from "../../assets/5F4A5888.jpg?as=picture";
import churchExit from "../../assets/5F4A9191.jpg?as=picture";
import ceremony from "../../assets/5F4A8913.jpg?as=picture";
import firstDance from "../../assets/5F4A9728.jpg?as=picture";
import sacrament from "../../assets/5F4A8998.jpg?as=picture";
import brideDetails from "../../assets/5F4A8392.jpg?as=picture";
import groomDetails from "../../assets/5F4A8617.jpg?as=picture";
import ornament from "../../assets/logo_black.png?url";

export type PhotoItem = {
  src: string;
  sources?: Record<string, string>;
  width?: number;
  height?: number;
  mobileSrc?: string;
  mobileSources?: Record<string, string>;
  altKey: string;
  objectPosition?: string;
};

function fromPicture(
  picture: Picture,
  altKey: string,
  options?: { mobile?: Picture; objectPosition?: string },
): PhotoItem {
  return {
    src: picture.img.src,
    sources: picture.sources,
    width: picture.img.w,
    height: picture.img.h,
    mobileSrc: options?.mobile?.img.src,
    mobileSources: options?.mobile?.sources,
    altKey,
    objectPosition: options?.objectPosition,
  };
}

export const heroParisPhoto = fromPicture(hero, "photos.hero", {
  mobile: heroMobile,
  objectPosition: "center 40%",
});

export const images = {
  hero: heroParisPhoto,
  beach: fromPicture(beach, "photos.beach", { objectPosition: "center 42%" }),
  restaurant: fromPicture(restaurant, "photos.restaurant", { objectPosition: "center 40%" }),
  logoGold,
  ornament,
  story: [
    fromPicture(intimate, "photos.intimate"),
    fromPicture(hands, "photos.hands"),
    fromPicture(brideSmile, "photos.brideSmile"),
  ] satisfies readonly PhotoItem[],
  slider: [
    fromPicture(beach, "photos.beach", { objectPosition: "center 42%" }),
    { ...heroParisPhoto, objectPosition: "center 48%" },
    fromPicture(restaurant, "photos.restaurant", { objectPosition: "center 40%" }),
  ] satisfies readonly PhotoItem[],
  gallery: [
    fromPicture(demoHero, "photos.hero"),
    fromPicture(intimate, "photos.intimate"),
    fromPicture(brideSmile, "photos.brideSmile"),
    fromPicture(hands, "photos.hands"),
    fromPicture(churchExit, "photos.churchExit"),
    fromPicture(ceremony, "photos.ceremony"),
    fromPicture(firstDance, "photos.firstDance"),
    fromPicture(sacrament, "photos.sacrament"),
    fromPicture(brideDetails, "photos.brideDetails"),
    fromPicture(groomDetails, "photos.groomDetails"),
  ] satisfies readonly PhotoItem[],
} as const;

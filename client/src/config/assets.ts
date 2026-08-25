import demoHero from "../../assets/5F4A6221.jpg?url";
import hero from "../../assets/hero.png?url";
import beach from "../../assets/beach.png?url";
import restaurant from "../../assets/restaurant.png?url";
import logoGold from "../../assets/logo_gold.png?url";
import intimate from "../../assets/5F4A5869.jpg?url";
import brideSmile from "../../assets/5F4A5971.jpg?url";
import hands from "../../assets/5F4A5888.jpg?url";
import churchExit from "../../assets/5F4A9191.jpg?url";
import ceremony from "../../assets/5F4A8913.jpg?url";
import firstDance from "../../assets/5F4A9728.jpg?url";
import sacrament from "../../assets/5F4A8998.jpg?url";
import brideDetails from "../../assets/5F4A8392.jpg?url";
import groomDetails from "../../assets/5F4A8617.jpg?url";
import ornament from "../../assets/logo_black.png?url";

export type PhotoItem = {
  src: string;
  altKey: string;
  objectPosition?: string;
};

export const images = {
  hero,
  beach,
  restaurant,
  logoGold,
  ornament,
  story: [
    { src: intimate, altKey: "photos.intimate" },
    { src: hands, altKey: "photos.hands" },
    { src: brideSmile, altKey: "photos.brideSmile" },
  ] as const satisfies readonly PhotoItem[],
  slider: [
    { src: beach, altKey: "photos.beach", objectPosition: "center 42%" },
    { src: hero, altKey: "photos.hero", objectPosition: "center 48%" },
    { src: restaurant, altKey: "photos.restaurant", objectPosition: "center 40%" },
  ] as const satisfies readonly PhotoItem[],
  gallery: [
    { src: demoHero, altKey: "photos.hero" },
    { src: intimate, altKey: "photos.intimate" },
    { src: brideSmile, altKey: "photos.brideSmile" },
    { src: hands, altKey: "photos.hands" },
    { src: churchExit, altKey: "photos.churchExit" },
    { src: ceremony, altKey: "photos.ceremony" },
    { src: firstDance, altKey: "photos.firstDance" },
    { src: sacrament, altKey: "photos.sacrament" },
    { src: brideDetails, altKey: "photos.brideDetails" },
    { src: groomDetails, altKey: "photos.groomDetails" },
  ] as const satisfies readonly PhotoItem[],
} as const;

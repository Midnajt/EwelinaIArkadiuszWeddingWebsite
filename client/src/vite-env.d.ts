/// <reference types="vite/client" />

declare module "*?as=picture" {
  const picture: {
    sources: Record<string, string>;
    img: { src: string; w: number; h: number };
  };
  export default picture;
}

declare module "*.svg?url" {
  const src: string;
  export default src;
}

declare module "*.jpg?url" {
  const src: string;
  export default src;
}

declare module "*.png?url" {
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly VITE_SHOW_DEV_PANEL?: string;
  readonly VITE_BASE?: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

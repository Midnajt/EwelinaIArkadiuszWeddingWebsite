/// <reference types="vite/client" />

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
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

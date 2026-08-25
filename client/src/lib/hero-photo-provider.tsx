import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  HERO_PHOTO_STORAGE_KEY,
  defaultHeroPhotoId,
  heroPhotos,
  isHeroPhotoId,
  type HeroPhotoId,
} from "@/config/hero-photo";
import type { PhotoItem } from "@/config/assets";

type HeroPhotoContextValue = {
  photoId: HeroPhotoId;
  photo: PhotoItem;
  setPhotoId: (id: HeroPhotoId) => void;
};

const HeroPhotoContext = createContext<HeroPhotoContextValue | null>(null);

function readStoredPhoto(): HeroPhotoId {
  try {
    const stored = localStorage.getItem(HERO_PHOTO_STORAGE_KEY);
    if (isHeroPhotoId(stored)) return stored;
  } catch {
    /* private mode / blocked storage */
  }
  return defaultHeroPhotoId;
}

export function HeroPhotoProvider({ children }: { children: ReactNode }) {
  const [photoId, setPhotoIdState] = useState<HeroPhotoId>(readStoredPhoto);
  const photo = heroPhotos[photoId];

  const setPhotoId = useCallback((id: HeroPhotoId) => {
    setPhotoIdState(id);
    try {
      localStorage.setItem(HERO_PHOTO_STORAGE_KEY, id);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({ photoId, photo, setPhotoId }),
    [photoId, photo, setPhotoId],
  );

  return <HeroPhotoContext.Provider value={value}>{children}</HeroPhotoContext.Provider>;
}

export function useHeroPhoto() {
  const ctx = useContext(HeroPhotoContext);
  if (!ctx) throw new Error("useHeroPhoto must be used within HeroPhotoProvider");
  return ctx;
}

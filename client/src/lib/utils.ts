import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isDevPanelEnabled(): boolean {
  const value = import.meta.env.VITE_SHOW_DEV_PANEL;
  if (value === "true") return true;
  if (value === "false") return false;
  return import.meta.env.DEV;
}

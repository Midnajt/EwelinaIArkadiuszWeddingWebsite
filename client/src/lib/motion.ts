import type { Transition, Variants } from "framer-motion";
import type { ThemePresetId } from "@/config/theme";

/** Cubic bezier from AddPattern: soft overshoot, no bounce. */
export const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export const viewportOnce = { once: true, amount: 0.15 as const };
export const viewportHeader = { once: true, amount: 0.3 as const };

const ease: Transition["ease"] = easeOutExpo;

export type MotionProfile = {
  fadeUp: Variants;
  sectionReveal: Variants;
  staggerItem: Variants;
  scaleItem: Variants;
  heroWord: Variants;
  heroWordContainer: Variants;
  hoverLift: { y: number; filter: string };
  hoverGlow: { scale: number; boxShadow: string };
  kenBurns: { fromScale: number; duration: number };
};

function makeFade(y: number, duration: number): Variants {
  return {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration, ease },
    },
  };
}

function makeScale(from: number, duration: number, y = 0): Variants {
  return {
    hidden: { opacity: 0, scale: from, y },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration, ease },
    },
  };
}

const boho: MotionProfile = {
  fadeUp: makeFade(24, 0.7),
  sectionReveal: makeFade(40, 0.7),
  staggerItem: makeFade(32, 0.6),
  scaleItem: makeScale(0.96, 0.6),
  heroWord: {
    hidden: { opacity: 0, y: 48, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease },
    },
  },
  heroWordContainer: {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.06, delayChildren: 0.3 },
    },
  },
  hoverLift: {
    y: -6,
    filter:
      "drop-shadow(0 8px 16px rgba(158, 90, 48, 0.18)) drop-shadow(0 0 28px rgba(94, 101, 81, 0.12))",
  },
  hoverGlow: {
    scale: 1.04,
    boxShadow: "0 0 20px rgba(158, 90, 48, 0.35), 0 0 40px rgba(94, 101, 81, 0.22)",
  },
  kenBurns: { fromScale: 1.08, duration: 8 },
};

const love: MotionProfile = {
  fadeUp: makeFade(16, 0.85),
  sectionReveal: makeFade(22, 0.95),
  staggerItem: makeFade(18, 0.8),
  scaleItem: makeScale(0.97, 0.85),
  heroWord: {
    hidden: { opacity: 0, y: 28, filter: "blur(3px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease },
    },
  },
  heroWordContainer: {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.07, delayChildren: 0.22 },
    },
  },
  hoverLift: {
    y: -5,
    filter:
      "drop-shadow(0 8px 18px rgba(114, 32, 21, 0.18)) drop-shadow(0 0 22px rgba(143, 46, 28, 0.12))",
  },
  hoverGlow: {
    scale: 1.03,
    boxShadow: "0 0 18px rgba(114, 32, 21, 0.32), 0 0 36px rgba(143, 46, 28, 0.18)",
  },
  kenBurns: { fromScale: 1.05, duration: 14 },
};

const noirGold: MotionProfile = {
  fadeUp: makeScale(0.98, 1.1, 4),
  sectionReveal: makeScale(0.985, 1.15, 6),
  staggerItem: makeScale(0.98, 1.05, 4),
  scaleItem: makeScale(0.97, 1.1),
  heroWord: {
    hidden: { opacity: 0, y: 8, scale: 0.98, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.1, ease },
    },
  },
  heroWordContainer: {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.35 },
    },
  },
  hoverLift: {
    y: -3,
    filter:
      "drop-shadow(0 10px 24px rgba(201, 162, 39, 0.22)) drop-shadow(0 0 32px rgba(201, 162, 39, 0.16))",
  },
  hoverGlow: {
    scale: 1.03,
    boxShadow: "0 0 24px rgba(201, 162, 39, 0.45), 0 0 48px rgba(201, 162, 39, 0.22)",
  },
  kenBurns: { fromScale: 1.06, duration: 20 },
};

const profiles: Record<ThemePresetId, MotionProfile> = {
  boho,
  love,
  noirGold,
};

export function getMotionProfile(id: ThemePresetId): MotionProfile {
  return profiles[id] ?? boho;
}

export function staggerContainer(stagger = 0.1, delay = 0.15): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
}

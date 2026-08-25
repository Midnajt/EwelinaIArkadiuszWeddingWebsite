import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { getMotionProfile, staggerContainer, viewportHeader, viewportOnce } from "@/lib/motion";
import { useTheme } from "@/lib/theme-provider";
import { cn } from "@/lib/utils";

type RevealProps = {
  className?: string;
  children: ReactNode;
  delay?: number;
};

export function Reveal({ className, children, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();
  const { presetId } = useTheme();
  const motionProfile = getMotionProfile(presetId);

  return (
    <motion.div
      className={className}
      variants={motionProfile.sectionReveal}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={viewportHeader}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  className?: string;
  children: ReactNode;
  stagger?: number;
  delay?: number;
  as?: "div" | "ol" | "ul";
};

export function Stagger({
  className,
  children,
  stagger = 0.1,
  delay = 0.15,
  as = "div",
}: StaggerProps) {
  const reduce = useReducedMotion();
  const variants = staggerContainer(stagger, delay);
  const shared = {
    className,
    variants,
    initial: reduce ? false : ("hidden" as const),
    whileInView: "show" as const,
    viewport: viewportOnce,
  };

  if (as === "ol") return <motion.ol {...shared}>{children}</motion.ol>;
  if (as === "ul") return <motion.ul {...shared}>{children}</motion.ul>;
  return <motion.div {...shared}>{children}</motion.div>;
}

type StaggerItemProps = {
  className?: string;
  children: ReactNode;
  hover?: boolean;
  scale?: boolean;
  as?: "div" | "li";
};

export function StaggerItem({
  className,
  children,
  hover = false,
  scale = false,
  as = "div",
}: StaggerItemProps) {
  const reduce = useReducedMotion();
  const { presetId } = useTheme();
  const motionProfile = getMotionProfile(presetId);
  const shared = {
    className: cn(hover && "h-full rounded-xl", className),
    variants: scale ? motionProfile.scaleItem : motionProfile.staggerItem,
    whileHover: reduce || !hover ? undefined : motionProfile.hoverLift,
  };

  if (as === "li") return <motion.li {...shared}>{children}</motion.li>;
  return <motion.div {...shared}>{children}</motion.div>;
}

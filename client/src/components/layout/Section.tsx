import { densityClass } from "@/config/theme";
import { useTheme } from "@/lib/theme-provider";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { FloralDivider } from "@/components/layout/FloralDivider";
import { Reveal } from "@/components/motion/Reveal";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  const { preset } = useTheme();

  return (
    <section
      id={id}
      className={cn(
        preset.surface === "glass" ? "bg-transparent" : "bg-background",
        densityClass(preset.density),
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}

export function SectionHeader({
  kicker,
  title,
  subtitle,
  ornament = true,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  ornament?: boolean;
}) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-sm font-medium tracking-widest text-primary uppercase">{kicker}</p>
      <h2 className="mt-2 text-3xl leading-tight md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="text-muted-foreground mt-3 text-base md:text-lg">{subtitle}</p>
      ) : null}
      {ornament ? <FloralDivider className="mt-6" /> : null}
    </Reveal>
  );
}

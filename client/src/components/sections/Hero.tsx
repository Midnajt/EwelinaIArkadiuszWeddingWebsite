import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { images } from "@/config/assets";
import { site } from "@/config/site";
import { motionProfile } from "@/lib/motion";
import { ResponsivePhoto } from "@/components/ui/responsive-photo";

export function Hero() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const photo = images.hero;
  const words = site.name.split(" ");

  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 origin-bottom"
        initial={reduce ? false : { scale: motionProfile.kenBurns.fromScale }}
        animate={{ scale: 1 }}
        transition={{ duration: motionProfile.kenBurns.duration, ease: "linear" }}
      >
        <ResponsivePhoto
          photo={photo}
          alt={t(photo.altKey)}
          pictureClassName="absolute inset-0"
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "var(--hero-overlay)" }} />
        <div className="absolute inset-0 opacity-25" style={{ background: "var(--hero-glow)" }} />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center text-white sm:px-6">
        <div className="flex max-w-3xl flex-col items-center">
          <motion.p
            className="text-sm font-medium tracking-[0.35em] uppercase text-white/85"
            initial={reduce ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("hero.kicker")}
          </motion.p>

          <motion.h1
            className="font-heading mt-4 text-5xl leading-tight md:text-7xl"
            variants={motionProfile.heroWordContainer}
            initial={reduce ? false : "hidden"}
            animate="show"
            aria-label={site.name}
          >
            {words.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                variants={motionProfile.heroWord}
                className="mr-[0.22em] inline-block last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            className="mt-5 max-w-2xl space-y-3 text-sm leading-relaxed text-white/90 md:text-base"
            variants={motionProfile.fadeUp}
            initial={reduce ? false : "hidden"}
            animate="show"
            transition={{ delay: 0.9 }}
          >
            <p>{t("hero.invite.lead")}</p>
            <p>{t("hero.invite.body")}</p>
            <p>
              {t("hero.invite.signoff")}{" "}
              <span className="inline-block brightness-0 invert" aria-hidden>
                ❤️
              </span>
            </p>
          </motion.div>

          <motion.div
            variants={motionProfile.fadeUp}
            initial={reduce ? false : "hidden"}
            animate="show"
            transition={{ delay: 1 }}
          >
            <img
              src={images.ornament}
              alt=""
              className="mx-auto mt-8 h-20 w-auto max-w-[min(100%,16rem)] object-contain invert md:h-28"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <motion.div
          className="h-10 w-px bg-linear-to-b from-white/60 to-transparent"
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

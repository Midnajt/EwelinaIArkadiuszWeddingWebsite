import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useHashView } from "@/lib/hash-view";

export function PartnersFab() {
  const { t } = useTranslation();
  const { view } = useHashView();

  if (view !== "home") return null;

  return (
    <a
      href="#polecamy"
      data-slot="partners-fab"
      className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring fixed right-4 bottom-6 z-40 inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium shadow-lg transition-all focus-visible:ring-2 focus-visible:outline-none"
    >
      <Sparkles className="size-4 shrink-0" />
      <span>{t("partners.title")}</span>
    </a>
  );
}

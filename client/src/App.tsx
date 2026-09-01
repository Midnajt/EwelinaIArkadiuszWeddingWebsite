import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { EventCards } from "@/components/sections/EventCards";
import { GuestEssentials } from "@/components/sections/GuestEssentials";
import { Lodging } from "@/components/sections/Lodging";
import { CountdownDays } from "@/components/sections/CountdownDays";
// import { LoveStory } from "@/components/sections/LoveStory";
// import { Slider } from "@/components/sections/Slider";
// import { DayTimeline } from "@/components/sections/DayTimeline";
// import { TablePlan } from "@/components/sections/TablePlan";
// import { WeddingMenu } from "@/components/sections/WeddingMenu";
// import { LogisticsGrid } from "@/components/sections/LogisticsGrid";
// import { GiftWishes } from "@/components/sections/GiftWishes";
// import { RsvpForm } from "@/components/sections/RsvpForm";
// import { Gallery } from "@/components/sections/Gallery";
// import { GuestBook } from "@/components/sections/GuestBook";
// import { Witnesses } from "@/components/sections/Witnesses";
import { Contact } from "@/components/sections/Contact";
// import { Partners } from "@/components/sections/Partners";
// import { PartnersFab } from "@/components/layout/PartnersFab";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { PrivacyPage, RodoPage } from "@/components/legal/LegalPages";
import { useHashView } from "@/lib/hash-view";

function HomePage() {
  return (
    <main id="content">
      <Hero />
      <EventCards />
      <GuestEssentials />
      <Lodging />
      <CountdownDays />
      {/* <LoveStory /> */}
      {/* <Slider /> */}
      {/* <DayTimeline /> */}
      {/* <TablePlan /> */}
      {/* <WeddingMenu /> */}
      {/* <LogisticsGrid /> */}
      {/* <GiftWishes /> */}
      {/* <RsvpForm /> */}
      {/* <Gallery /> */}
      {/* <GuestBook /> */}
      {/* <Witnesses /> */}
      <Contact />
      {/* <Partners /> */}
    </main>
  );
}

export default function App() {
  const { t } = useTranslation();
  const { view } = useHashView();

  return (
    <div id="top" className="min-h-dvh">
      <a
        href="#content"
        className="bg-primary text-primary-foreground sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-md focus:px-3 focus:py-2"
      >
        {t("common.skip")}
      </a>
      <div className="sticky top-0 z-40">
        <Navbar />
      </div>
      {view === "rodo" ? <RodoPage /> : view === "privacy" ? <PrivacyPage /> : <HomePage />}
      <Footer />
      {/* <PartnersFab /> */}
      <CookieBanner />
    </div>
  );
}

import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { PositioningSection } from "./PositioningSection";
import { IntegrationSection } from "./IntegrationSection";
import { UseCasesSection } from "./UseCasesSection";
import { BeforeAfterSection } from "./BeforeAfterSection";
import { SectorsSection } from "./SectorsSection";
import { HowWeStartSection } from "./HowWeStartSection";
import { ModulesSection } from "./ModulesSection";
import { WorkflowSection } from "./WorkflowSection";
import { ProjectsSection } from "./ProjectsSection";
import { PricingSection } from "./PricingSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";
import { Footer } from "./Footer";
import { MobileStickyCta } from "./MobileStickyCta";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

const sectionBg = {
  white: "bg-white",
  muted: "bg-[#F9F9F8]",
  tint: "bg-brand-tint",
} as const;

export function LandingPage({ locale, dict }: Props) {
  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="w-full max-w-full min-w-0 overflow-x-clip pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <Hero dict={dict} />
        <PositioningSection dict={dict} className={sectionBg.muted} />
        <IntegrationSection dict={dict} className={sectionBg.white} />
        <UseCasesSection dict={dict} className={sectionBg.tint} />
        <BeforeAfterSection dict={dict} className={sectionBg.muted} />
        <HowWeStartSection dict={dict} className={sectionBg.white} />
        <SectorsSection dict={dict} className={sectionBg.white} />
        <ModulesSection dict={dict} className={sectionBg.muted} />
        <WorkflowSection dict={dict} className={sectionBg.tint} />
        <ProjectsSection dict={dict} className={sectionBg.white} />
        <PricingSection dict={dict} className={sectionBg.white} />
        <FaqSection dict={dict} className={sectionBg.tint} />
        <CtaSection dict={dict} />
      </main>
      <Footer dict={dict} locale={locale} />
      <MobileStickyCta dict={dict} />
    </>
  );
}

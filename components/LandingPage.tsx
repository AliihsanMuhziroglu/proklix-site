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

export function LandingPage({ locale, dict }: Props) {
  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <Hero dict={dict} />
        <PositioningSection dict={dict} />
        <IntegrationSection dict={dict} />
        <UseCasesSection dict={dict} />
        <BeforeAfterSection dict={dict} />
        <SectorsSection dict={dict} locale={locale} />
        <HowWeStartSection dict={dict} />
        <ModulesSection dict={dict} />
        <WorkflowSection dict={dict} />
        <ProjectsSection dict={dict} />
        <PricingSection dict={dict} />
        <FaqSection dict={dict} />
        <CtaSection dict={dict} />
      </main>
      <Footer dict={dict} locale={locale} />
      <MobileStickyCta dict={dict} />
    </>
  );
}

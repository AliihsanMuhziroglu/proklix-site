import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ProblemSection } from "./ProblemSection";
import { SolutionSection } from "./SolutionSection";
import { SectorsSection } from "./SectorsSection";
import { HowWeStartSection } from "./HowWeStartSection";
import { WorkflowSection } from "./WorkflowSection";
import { TrustSection } from "./TrustSection";
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
        <ProblemSection dict={dict} />
        <SolutionSection dict={dict} />
        <SectorsSection dict={dict} />
        <HowWeStartSection dict={dict} />
        <WorkflowSection dict={dict} />
        <TrustSection dict={dict} />
        <CtaSection dict={dict} />
      </main>
      <Footer dict={dict} />
      <MobileStickyCta dict={dict} />
    </>
  );
}

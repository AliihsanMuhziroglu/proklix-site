import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ProblemSection } from "./ProblemSection";
import { SolutionSection } from "./SolutionSection";
import { SectorsSection } from "./SectorsSection";
import { WorkflowSection } from "./WorkflowSection";
import { WhySection } from "./WhySection";
import { CtaSection } from "./CtaSection";
import { Footer } from "./Footer";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function LandingPage({ locale, dict }: Props) {
  return (
    <>
      <Header locale={locale} dict={dict} />
      <main>
        <Hero dict={dict} />
        <ProblemSection dict={dict} />
        <SolutionSection dict={dict} />
        <SectorsSection dict={dict} />
        <WorkflowSection dict={dict} />
        <WhySection dict={dict} />
        <CtaSection dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}

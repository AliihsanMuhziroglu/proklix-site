export interface CardItem {
  title: string;
  description: string;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  header: {
    solutions: string;
    processes: string;
    forWhom: string;
    contact: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    trustTag: string;
    ctaTelegram: string;
    ctaAnalysis: string;
  };
  problem: {
    title: string;
    items: CardItem[];
  };
  solution: {
    title: string;
    items: CardItem[];
  };
  sectors: {
    title: string;
    items: CardItem[];
  };
  howWeStart: {
    title: string;
    steps: StepItem[];
  };
  workflow: {
    title: string;
    steps: string[];
  };
  trust: {
    title: string;
    description: string;
    points: string[];
    fitLine: string;
  };
  cta: {
    title: string;
    description: string;
    ctaTelegram: string;
    ctaCall: string;
    phone: string;
  };
  mobileCta: {
    telegram: string;
    call: string;
  };
  footer: {
    tagline: string;
    phone: string;
    telegram: string;
    location: string;
  };
  dashboard: {
    title: string;
    metricRequests: string;
    metricInProgress: string;
    metricPendingApproval: string;
    metricCompleted: string;
    feedItems: string[];
  };
}

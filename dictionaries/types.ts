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
    ctaTelegram: string;
    ctaAnalysis: string;
  };
  problem: {
    title: string;
    items: string[];
  };
  solution: {
    title: string;
    items: string[];
  };
  sectors: {
    title: string;
    items: string[];
  };
  workflow: {
    title: string;
    steps: string[];
  };
  why: {
    title: string;
    items: string[];
  };
  cta: {
    title: string;
    description: string;
    ctaTelegram: string;
    phone: string;
  };
  footer: {
    tagline: string;
    phone: string;
    telegram: string;
    location: string;
  };
  dashboard: {
    title: string;
    requests: string;
    offers: string;
    approvals: string;
    tasks: string;
    statusNew: string;
    statusPending: string;
    statusApproved: string;
    statusDone: string;
    recentActivity: string;
    activity1: string;
    activity2: string;
    activity3: string;
  };
}

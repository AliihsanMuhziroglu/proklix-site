import type { BlogSlug } from "@/lib/blog";
import type { SectorSlug } from "@/lib/sectors";

export interface CardItem {
  title: string;
  description: string;
}

export interface PositioningCardItem extends CardItem {
  badge: string;
}

export interface IntegrationCardItem extends CardItem {
  examples: string[];
}

export interface StepItem {
  title: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  website: string;
  url: string;
  category: string;
  description: string;
  badges: string[];
}

export interface PricingPlan {
  name: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface RelatedSectorItem {
  title: string;
  sector: SectorSlug;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface WorkflowTab {
  id: string;
  label: string;
  steps: StepItem[];
}

export interface SectorCardItem extends CardItem {
  sectorSlug?: SectorSlug;
}

export interface SectorPageContent {
  meta: { title: string; description: string };
  breadcrumb: { sectorName: string };
  hero: {
    title: string;
    subtitle: string;
    mockupFeed: string[];
  };
  problem: { title: string; items: CardItem[] };
  solution: { title: string; items: CardItem[] };
  workflow: { title: string; steps: StepItem[] };
  useCases: { title: string; items: CardItem[] };
  beforeAfter: {
    title: string;
    before: { title: string; items: string[] };
    after: { title: string; items: string[] };
  };
  miniOffer: { title: string; description: string };
  relatedSectors: { title: string; items: RelatedSectorItem[] };
  finalCta: { title: string; description: string };
}

export interface BlogArticle {
  meta: { title: string; description: string };
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  sections: { heading?: string; paragraphs: string[] }[];
}

export interface DictionaryEntry {
  meta: {
    title: string;
    description: string;
  };
  header: {
    platform: string;
    integrations: string;
    processes: string;
    forWhom: string;
    pricing: string;
    faq: string;
    blog: string;
    contact: string;
    cta: string;
    phone: string;
  };
  hero: {
    title: string;
    subtitle: string;
    trustTag: string;
    ctaTelegram: string;
    ctaAnalysis: string;
    integrationChips: string[];
    ctaHelper: string;
  };
  positioning: {
    title: string;
    subtitle: string;
    flowSteps: StepItem[];
    items: PositioningCardItem[];
  };
  integration: {
    title: string;
    subtitle: string;
    flowSteps: StepItem[];
    flowHint: string;
    items: IntegrationCardItem[];
    example: {
      title: string;
      flow: string;
      chips: string[];
    };
  };
  useCases: {
    title: string;
    flowHint: string;
    items: CardItem[];
  };
  beforeAfter: {
    title: string;
    without: { title: string; items: string[] };
    with: { title: string; items: string[] };
  };
  sectors: {
    title: string;
    items: SectorCardItem[];
    viewSector: string;
  };
  sectorPageLabels: {
    breadcrumbHome: string;
    breadcrumbSectors: string;
    before: string;
    after: string;
    step: string;
  };
  howWeStart: {
    title: string;
    steps: StepItem[];
  };
  modules: {
    title: string;
    items: CardItem[];
  };
  workflow: {
    title: string;
    tabs: WorkflowTab[];
  };
  projects: {
    title: string;
    subtitle: string;
    cta: string;
    items: ProjectItem[];
  };
  pricing: {
    title: string;
    subtitle: string;
    plans: PricingPlan[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  cta: {
    title: string;
    description: string;
    ctaTelegram: string;
    ctaCall: string;
    phone: string;
    formTitle: string;
  };
  contactForm: {
    name: string;
    company: string;
    phone: string;
    process: string;
    processPlaceholder: string;
    processOptions: string[];
    submit: string;
    submitting: string;
    success: string;
    error: string;
  };
  blog: {
    meta: { title: string; description: string };
    title: string;
    subtitle: string;
    readMore: string;
    backToBlog: string;
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
    blog: string;
  };
  dashboard: {
    title: string;
    flowLabels: string[];
    sourceLabel: string;
    metricRequests: string;
    metricInProgress: string;
    metricPendingApproval: string;
    metricCompleted: string;
    cards: {
      title: string;
      source: string;
      statusKey: "new" | "pending" | "telegram" | "completed";
    }[];
    statusNew: string;
    statusPending: string;
    statusTelegram: string;
    statusCompleted: string;
    statusIntegrated: string;
  };
}

export interface Dictionary extends DictionaryEntry {
  sectorPages: Record<SectorSlug, SectorPageContent>;
  blog: DictionaryEntry["blog"] & {
    articles: Record<BlogSlug, BlogArticle>;
  };
}

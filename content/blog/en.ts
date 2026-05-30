import type { BlogArticle } from "@/dictionaries/types";
import type { BlogSlug } from "@/lib/blog";

export const blogArticlesEn: Record<BlogSlug, BlogArticle> = {
  "crm-nedir": {
    meta: {
      title: "What is CRM? | Proklix Blog",
      description:
        "What CRM is, why B2B companies in Uzbekistan need it, and how to start without a complex ERP.",
    },
    title: "What is CRM? A simple explanation for B2B business",
    excerpt:
      "CRM isn't an abstract 'big system' — it's where clients, inquiries and deal history live.",
    date: "2026-05-15",
    readTime: "5 min",
    sections: [
      {
        paragraphs: [
          "CRM (Customer Relationship Management) is a system for managing client relationships. In B2B, that means: who the client is, what inquiries they submitted, deal stage and assigned manager.",
          "Many companies in Uzbekistan track clients in Excel and Telegram. That works until inquiries grow. At 20–30 per day, control slips: inquiries get lost, leadership can't see the funnel, history scatters across chats.",
        ],
      },
      {
        heading: "How CRM differs from Excel",
        paragraphs: [
          "Excel is a spreadsheet. CRM is a process: inquiry → owner → stage → notification → history. In CRM, every action is recorded, not overwritten in a cell.",
          "Good CRM for local B2B doesn't require a year of rollout. Start with one process — e.g. incoming website inquiries — and expand as you grow.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "1. Pick one process: inquiries, offers or approvals.",
          "2. Move it from chats into a system with Telegram notifications.",
          "3. Add roles: manager, leader, reports.",
          "Proklix builds exactly these systems — starting with an MVP, not a 'year-long platform project'.",
        ],
      },
    ],
  },
  "telegram-avtomatizasyon": {
    meta: {
      title: "Telegram Business Automation | Proklix Blog",
      description:
        "How to use Telegram for business automation: notifications, inquiries and process control.",
    },
    title: "Telegram business automation: a practical approach",
    excerpt:
      "Telegram is the main business messenger in Uzbekistan. Use it for more than chat — automate your processes.",
    date: "2026-05-20",
    readTime: "6 min",
    sections: [
      {
        paragraphs: [
          "In Uzbekistan, most B2B communication runs through Telegram. Managers get inquiries in group chats, leaders approve prices in DMs, warehouse learns about orders late.",
          "The problem isn't Telegram — it's that the process lives only in messages. The fix: Telegram as a notification channel + web dashboard as the source of truth.",
        ],
      },
      {
        heading: "What to automate via Telegram",
        paragraphs: [
          "• New inquiry → alert to assigned manager",
          "• Offer pending approval → signal to leader",
          "• Order status changed → message to client or dealer",
          "• Task overdue → reminder to assignee",
        ],
      },
      {
        heading: "Telegram + CRM: the right combo",
        paragraphs: [
          "Telegram doesn't replace CRM — it complements it. All data, history and reports live in the dashboard. Telegram is for fast signals and actions.",
          "Proklix builds Telegram-first systems: the team uses a familiar tool, leadership gets control through the dashboard.",
        ],
      },
    ],
  },
  "b2b-katalog": {
    meta: {
      title: "How to Build a B2B Catalog | Proklix Blog",
      description:
        "How to create a B2B catalog with inquiries, pricing and CRM — a step-by-step guide for trading companies.",
    },
    title: "How to build a B2B catalog: step-by-step plan",
    excerpt:
      "A B2B catalog isn't just a product list on a website. It's the entry point for inquiries, pricing and commercial offers.",
    date: "2026-05-25",
    readTime: "7 min",
    sections: [
      {
        paragraphs: [
          "Trading companies often start with a PDF price list or Excel sheet. The client calls, the manager hunts for a price, prepares an offer in Word — the process takes hours.",
          "A modern B2B catalog solves three jobs: show assortment, capture inquiries and link them to CRM and approval workflow.",
        ],
      },
      {
        heading: "B2B catalog structure",
        paragraphs: [
          "1. Categories and filters — client finds what they need fast",
          "2. Product page — description, specs, availability",
          "3. Inquiry form or 'request price' — no phone call needed",
          "4. Client portal (optional) — inquiry history and statuses",
        ],
      },
      {
        heading: "Link to CRM and workflow",
        paragraphs: [
          "Catalog inquiries should land in CRM automatically: owner, status, deadline. If price approval is needed — route manager → leader → client.",
          "Proklix builds catalogs with full integration: site + CRM + Telegram + approvals. MVP can launch in weeks.",
        ],
      },
    ],
  },
};

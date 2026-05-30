import type { SectorPageContent } from "@/dictionaries/types";

export const nedvizhimostEn: SectorPageContent = {
  meta: {
    title: "Real Estate CRM and Workflow System | Proklix",
    description:
      "Proklix helps real estate teams manage leads, properties, viewings, rental workflows, tasks and Telegram notifications in one web dashboard.",
  },
  breadcrumb: { sectorName: "Real Estate" },
  hero: {
    title:
      "Manage demand, listings, viewings and rental workflows for your real estate business in one system.",
    subtitle:
      "Proklix helps agencies and agents organize client inquiries, properties, viewings, rental agreements, payments and internal tasks through a web dashboard and Telegram notifications.",
    mockupFeed: [
      "New client inquiry",
      "Viewing scheduled",
      "Contract in preparation",
      "Payment reminder sent",
      "Telegram notification sent",
    ],
  },
  problem: {
    title: "The problem: everything lives in Telegram, calls and sticky notes.",
    items: [
      {
        title: "Client inquiries get lost in chats",
        description:
          "Requests scatter across messengers, owner and status stay unclear.",
      },
      {
        title: "Unclear who saw which property",
        description:
          "Viewing history sits in separate notes, hard to follow up with options.",
      },
      {
        title: "Agents track tasks manually",
        description:
          "Reminders live in memory or personal chats, deadlines slip.",
      },
      {
        title: "Rental contracts and payments run separately",
        description:
          "Terms, deposits and payments sit in files outside the CRM.",
      },
      {
        title: "Managers can't see the real picture",
        description:
          "Pipeline, workload and delays aren't in one panel, only on request.",
      },
      {
        title: "Client follow-up is slow",
        description:
          "No response-time tracking, clients move on while waiting.",
      },
    ],
  },
  solution: {
    title: "What does Proklix build for real estate teams?",
    items: [
      {
        title: "Client inquiry CRM",
        description: "Every inquiry in a card: source, budget, area, assigned agent.",
      },
      {
        title: "Property and portfolio management",
        description: "Listings, statuses, price changes and history in one place.",
      },
      {
        title: "Viewing and meeting scheduling",
        description: "Time, location, participants and outcome are recorded.",
      },
      {
        title: "Contract and rental workflow",
        description: "Terms negotiation, document stages and approval routing.",
      },
      {
        title: "Payment and reminder control",
        description: "Deposits, monthly payments and reminders tracked automatically.",
      },
      {
        title: "Telegram notifications",
        description: "Fast alerts on new inquiries, viewings and contract stages.",
      },
      {
        title: "Manager dashboard and reports",
        description: "Agent workload, conversion and process bottlenecks visible.",
      },
      {
        title: "Task and owner tracking",
        description: "Owner, deadline and completion status at every stage.",
      },
    ],
  },
  workflow: {
    title: "Example: from client inquiry to rental contract",
    steps: [
      {
        title: "Client sends an inquiry",
        description: "Request from website, Telegram or phone enters the system.",
      },
      {
        title: "Agent enters budget, area and rooms",
        description: "Request parameters saved, owner assigned.",
      },
      {
        title: "Matching properties are selected",
        description: "Portfolio filtering and client-ready options added.",
      },
      {
        title: "Viewing time is set",
        description: "Meeting time, place and participants scheduled.",
      },
      {
        title: "Client makes a decision",
        description: "Choice, rejection or request for more options recorded.",
      },
      {
        title: "Contract and payment stage opens",
        description: "Terms, deposit and payment schedule linked to workflow.",
      },
      {
        title: "Manager sees the full process in the panel",
        description: "Every deal stage and delay in one view.",
      },
      {
        title: "Notifications sent via Telegram",
        description: "Team and manager learn about key changes immediately.",
      },
    ],
  },
  useCases: {
    title: "Which processes can be digitized?",
    items: [
      {
        title: "Rental inquiries",
        description: "Incoming demand, filtering and fast response flow.",
      },
      {
        title: "Properties for sale",
        description: "Portfolio linked to listings, pricing and viewings.",
      },
      {
        title: "Agent tasks",
        description: "Daily assignments, deadlines and ownership.",
      },
      {
        title: "Client communication history",
        description: "Calls, meetings and messages in one card.",
      },
      {
        title: "Viewing schedule",
        description: "Shared calendar across agents and properties.",
      },
      {
        title: "Deposit and payment reminders",
        description: "Automatic reminders as deadlines approach.",
      },
      {
        title: "Documents and files",
        description: "Contracts and files tied to property and client.",
      },
      {
        title: "Manager oversight",
        description: "Workload, conversion and process status in one panel.",
      },
    ],
  },
  beforeAfter: {
    title: "Before and after",
    before: {
      title: "Before",
      items: [
        "Scattered messages in Telegram chats",
        "Excel never stays up to date",
        "Tasks live in memory",
        "Manager learns too late",
        "Client response is delayed",
      ],
    },
    after: {
      title: "After",
      items: [
        "Every inquiry enters the system",
        "Owner is assigned",
        "Every stage is tracked",
        "Telegram notifications included",
        "Manager sees the real status",
      ],
    },
  },
  miniOffer: {
    title: "First step: free process review",
    description:
      "In a 20-minute call we review how inquiries, properties, viewings and rental flow work today. Then we clearly say what to automate first.",
  },
  relatedSectors: {
    title: "Also works for other industries",
    items: [
      { title: "B2B catalogs", sector: "b2b-katalog" },
      { title: "Agro distributors", sector: "agro" },
      { title: "Cleaning equipment", sector: "oborudovanie" },
      { title: "Logistics", sector: "logistika" },
      { title: "Construction", sector: "stroitelstvo" },
      { title: "Service companies", sector: "b2b-katalog" },
    ],
  },
  finalCta: {
    title: "We'll organize your real estate workflows.",
    description:
      "Run demand, listings, viewings, contracts and payments in one panel. The team gets fast Telegram alerts; the manager sees the process clearly.",
  },
};

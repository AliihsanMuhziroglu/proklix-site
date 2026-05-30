import type { SectorPageContent } from "@/dictionaries/types";
import type { SectorSlug } from "@/lib/sectors";

export const sectorPagesEn: Record<SectorSlug, SectorPageContent> = {
  nedvizhimost: {
    meta: {
      title: "Proklix for Real Estate | CRM and Workflow for Rentals and Sales",
      description:
        "Automate inquiries, viewings, contracts and payments for real estate agencies in Tashkent and Uzbekistan.",
    },
    hero: {
      title: "Real estate without lost leads and chat chaos",
      subtitle:
        "Proklix brings client inquiries, properties, viewings, approvals and payments into one dashboard with Telegram notifications.",
    },
    problem: {
      title: "Common real estate pain points",
      items: [
        {
          title: "Leads get lost between agents",
          description: "A client writes on Telegram, the agent goes on leave — the inquiry is forgotten.",
        },
        {
          title: "Viewings aren't tracked",
          description: "No shared calendar or statuses: who viewed what and what the client decided.",
        },
        {
          title: "Contracts take weeks to approve",
          description: "Rental terms and discounts scatter across DMs with no oversight.",
        },
      ],
    },
    solution: {
      title: "What Proklix automates",
      items: [
        {
          title: "CRM for properties and clients",
          description: "Client cards, listings, deal stages and viewing history.",
        },
        {
          title: "Inquiry → viewing → contract flow",
          description: "Each step with an owner, deadline and Telegram notification.",
        },
        {
          title: "Manager dashboard",
          description: "Agent workload, viewing conversion and process bottlenecks.",
        },
      ],
    },
    caseStudy: {
      title: "Case: rental agency in Tashkent",
      company: "Rental company, 12 agents",
      challenge:
        "Inquiries arrived in 4 Telegram chats, Excel updated weekly, leadership had no funnel visibility.",
      solution:
        "MVP in 3 weeks: website and Telegram inquiries → CRM → term approval → notifications.",
      result: "Cut time from inquiry to viewing from 2 days to 4 hours. Saves 6+ hours weekly on manual tracking.",
    },
    cta: {
      title: "Let's review your agency process",
      description: "Free 20-minute review: how inquiries, viewings and contracts work today.",
    },
  },
  "b2b-katalog": {
    meta: {
      title: "Proklix for B2B Catalogs | Inquiries, Pricing and Offers",
      description:
        "CRM and workflow for trading companies: catalog, inquiries, commercial offers and approvals.",
    },
    hero: {
      title: "B2B catalog with inquiry and offer control",
      subtitle:
        "Products, prices, client inquiries and offer approval — in one system instead of Excel and chats.",
    },
    problem: {
      title: "Where trading companies lose control",
      items: [
        {
          title: "Catalog lives apart from CRM",
          description: "Managers hunt for prices in different files while the client waits.",
        },
        {
          title: "Offers sent without approval",
          description: "Discounts and terms go out before the manager signs off.",
        },
        {
          title: "No client history",
          description: "Unclear which offers were sent and what stage the deal is in.",
        },
      ],
    },
    solution: {
      title: "A solution for B2B sales",
      items: [
        {
          title: "Catalog + website inquiries",
          description: "Client picks products, manager gets the inquiry in dashboard and Telegram.",
        },
        {
          title: "Offer approval workflow",
          description: "Manager → leader → client with every step recorded.",
        },
        {
          title: "Client base and statuses",
          description: "All contacts, offers and deal stages in one place.",
        },
      ],
    },
    caseStudy: {
      title: "Case: wholesale trading company",
      company: "B2B distributor, 800+ SKUs",
      challenge:
        "8 managers worked in Excel and WhatsApp, offers took 2–3 days to approve, some inquiries were lost.",
      solution:
        "Catalog site with inquiries, CRM, price approval route and Telegram alerts for leadership.",
      result: "Offer approval dropped to a few hours. Team saves 8 hours per week.",
    },
    cta: {
      title: "See how this works for your catalog",
      description: "We'll map your sales process and propose an MVP for your assortment.",
    },
  },
  agro: {
    meta: {
      title: "Proklix for Agro and Distribution | Dealer Orders and Fulfillment",
      description:
        "Automate dealer inquiries, orders, warehouse statuses and regional managers.",
    },
    hero: {
      title: "Agro and distribution: orders under control",
      subtitle:
        "Dealer inquiries, orders, warehouse, regions and account managers — in one dashboard.",
    },
    problem: {
      title: "Agro distribution challenges",
      items: [
        {
          title: "Dealer orders in messengers",
          description: "Orders arrive in chats, warehouse learns about them late.",
        },
        {
          title: "Regions lack visibility",
          description: "Leadership can't see manager workload by region.",
        },
        {
          title: "Order statuses updated manually",
          description: "Clients call to ask where their order is — no single system.",
        },
      ],
    },
    solution: {
      title: "Proklix for agro business",
      items: [
        {
          title: "Dealer portal",
          description: "Orders via web form or Telegram bot, recorded in CRM.",
        },
        {
          title: "Warehouse and statuses",
          description: "Stages: received → picking → shipped — with notifications.",
        },
        {
          title: "Regional reports",
          description: "Manager workload, volumes by region and bottlenecks.",
        },
      ],
    },
    caseStudy: {
      title: "Case: agrochemical distributor",
      company: "Agro company, 5 regions",
      challenge:
        "40+ dealers wrote orders in Telegram, warehouse ran on Excel, delays up to 2 days.",
      solution:
        "Unified order system, status tracking, dealer notifications and regional manager dashboard.",
      result: "Order processing time cut by 60%. Saves 10 hours weekly on coordination.",
    },
    cta: {
      title: "Automate your agro process",
      description: "We'll map the chain: dealer → manager → warehouse → delivery.",
    },
  },
  oborudovanie: {
    meta: {
      title: "Proklix for Equipment | Catalog, Consultations and Offers",
      description:
        "CRM for equipment sales: catalog, bundles, inquiries and commercial offers.",
    },
    hero: {
      title: "Technical equipment: from inquiry to offer",
      subtitle:
        "Catalog, consultations, bundles, inquiries and offer approval — without chat chaos.",
    },
    problem: {
      title: "Equipment sales complexity",
      items: [
        {
          title: "Long consultation cycles",
          description: "Technical questions get lost between engineer and sales manager.",
        },
        {
          title: "Bundles calculated manually",
          description: "Proposal specs built in Excel with errors.",
        },
        {
          title: "Offers without margin control",
          description: "Discounts agreed verbally, leadership finds out later.",
        },
      ],
    },
    solution: {
      title: "System for technical sales",
      items: [
        {
          title: "Catalog with bundles",
          description: "Products, compatibility, standard bundles and quick offers.",
        },
        {
          title: "Inquiry → calculation → approval",
          description: "Engineer clarifies, manager calculates, leader approves.",
        },
        {
          title: "Project history",
          description: "All offer versions and communication per client.",
        },
      ],
    },
    caseStudy: {
      title: "Case: industrial equipment supplier",
      company: "B2B, 15 engineers and managers",
      challenge:
        "Consultations in Telegram, offers in Word, margin approval took 3–5 days.",
      solution:
        "CRM with technical cards, offer workflow and Telegram alerts at each step.",
      result: "Offer cycle cut to 1 day. Team saves 7 hours per week.",
    },
    cta: {
      title: "Configure the process for your equipment",
      description: "We'll review how consultations, calculations and approvals work today.",
    },
  },
  logistika: {
    meta: {
      title: "Proklix for Logistics | Inquiries, Documents and Delivery Status",
      description:
        "Workflow for logistics and foreign trade: inquiries, documents, delivery stages and client notifications.",
    },
    hero: {
      title: "Logistics and trade: every stage under control",
      subtitle:
        "Inquiries, documents, delivery stages, statuses and client notifications — in one system.",
    },
    problem: {
      title: "Where logistics processes break",
      items: [
        {
          title: "Documents everywhere",
          description: "Waybills, declarations and messages aren't linked to the inquiry.",
        },
        {
          title: "Client doesn't know status",
          description: "Managers answer the same cargo location questions repeatedly.",
        },
        {
          title: "Stages not recorded",
          description: "Unclear where the delay is: customs, warehouse or delivery.",
        },
      ],
    },
    solution: {
      title: "Proklix for logistics",
      items: [
        {
          title: "Stage tracking",
          description: "Each stage with owner, deadline and automatic notification.",
        },
        {
          title: "Documents per shipment",
          description: "All files and statuses tied to a specific shipment.",
        },
        {
          title: "Client portal",
          description: "Client sees status without calling the manager.",
        },
      ],
    },
    caseStudy: {
      title: "Case: logistics company",
      company: "International freight, 20 managers",
      challenge:
        "Statuses updated in Excel, clients called 3–4 times per shipment.",
      solution:
        "CRM with delivery stages, document upload and Telegram/SMS client notifications.",
      result: "'Where is my cargo' requests down 70%. Saves 12 hours weekly on communication.",
    },
    cta: {
      title: "Digitize your logistics process",
      description: "We'll map the chain from inquiry to delivery and automation points.",
    },
  },
  stroitelstvo: {
    meta: {
      title: "Proklix for Construction | Tasks, Approvals and Field Reports",
      description:
        "Task management, approvals, photo reports and inquiries on construction sites.",
    },
    hero: {
      title: "Construction: tasks and approvals on site",
      subtitle:
        "Tasks, approvals, photo reports, inquiries and execution control — even without an office.",
    },
    problem: {
      title: "Construction project challenges",
      items: [
        {
          title: "Tasks in WhatsApp",
          description: "Foreman assigns in chat — nobody tracks completion.",
        },
        {
          title: "Paper approvals",
          description: "Project changes wait for signatures for days, work stops.",
        },
        {
          title: "Photo reports get lost",
          description: "Site photos scattered across chats, no unified history.",
        },
      ],
    },
    solution: {
      title: "Proklix for construction",
      items: [
        {
          title: "Tasks with owners",
          description: "Assignment, deadline, photo proof and Telegram notification.",
        },
        {
          title: "Digital approvals",
          description: "Route: foreman → engineer → leader — with decision history.",
        },
        {
          title: "Photo reports by site",
          description: "All photos tied to site, stage and date.",
        },
      ],
    },
    caseStudy: {
      title: "Case: general contractor",
      company: "Construction company, 6 sites",
      challenge:
        "Tasks in 5 chats, change approvals took up to a week, leader visited every site.",
      solution:
        "Mobile task panel, approval workflow and photo reports with Telegram alerts.",
      result: "Change approval — 1 day instead of 5. Saves 9 hours weekly on oversight.",
    },
    cta: {
      title: "Bring order to your sites",
      description: "We'll review how tasks, approvals and reporting work today.",
    },
  },
};

import type { DictionaryEntry } from "./types";

export const en: DictionaryEntry = {
  meta: {
    title:
      "Proklix: CRM, workflow, requests, approvals and Telegram integrations for business in Uzbekistan",
    description:
      "Proklix helps companies in Uzbekistan manage requests, approvals, tasks, Telegram notifications and integrations with existing systems.",
  },
  header: {
    platform: "Platform",
    integrations: "Integrations",
    processes: "Processes",
    forWhom: "Who It's For",
    pricing: "Pricing",
    faq: "FAQ",
    blog: "Blog",
    contact: "Contact",
    cta: "Message on Telegram",
    phone: "+998 77 257 43 54",
  },
  hero: {
    title: "Run requests, approvals, tasks and integrations through Telegram",
    subtitle:
      "Proklix brings forms, approvals, tasks, files and action history into one workflow. Connect your CRM, website, warehouse, Excel or custom API systems and run operations through Telegram.",
    trustTag: "For companies in Tashkent and Uzbekistan",
    ctaTelegram: "Message on Telegram",
    ctaAnalysis: "Get a free process analysis",
    integrationChips: ["CRM", "Website", "Warehouse", "Excel", "Custom API", "Telegram"],
    ctaHelper: "In the first call, we'll map one real process together.",
    visualCards: [
      "New request",
      "Approval pending",
      "Task sent to Telegram",
      "History saved",
    ],
  },
  positioning: {
    title: "Not just CRM. Not just a bot. A complete operational workflow.",
    subtitle:
      "Proklix collects requests, assigns tasks to owners, manages approvals, pulls data from existing systems and records the full history of every process.",
    flowSteps: [
      {
        title: "Data arrives",
        description: "Sources: Website, CRM, Excel, warehouse, custom API",
      },
      {
        title: "Process starts",
        description: "A form, request, record or customer action is created",
      },
      {
        title: "Task assigned",
        description: "The owner receives a notification in Telegram",
      },
      {
        title: "Approved",
        description: "Manager approves, rejects or requests revision",
      },
      {
        title: "Result saved",
        description: "Status, files, comments and history are stored",
      },
    ],
    items: [
      {
        badge: "Form",
        title: "Requests and forms",
        description:
          "Turn incoming requests from your website, Telegram or internal screens into a standard form. Fields, files and notes are never lost.",
      },
      {
        badge: "Approval",
        title: "Approval flows",
        description:
          "Manage purchase, quote, expense or service processes step by step. Every stage has a clear decision owner.",
      },
      {
        badge: "Task",
        title: "Task management",
        description:
          "Every job is assigned to an owner. Tasks don't get lost in private chats; status, deadlines and history are tracked.",
      },
      {
        badge: "Telegram",
        title: "Telegram notifications",
        description:
          "Staff see new tasks, approvals and updates directly in Telegram. Less training on another app.",
      },
      {
        badge: "Integration",
        title: "Existing system integration",
        description:
          "Pull data from CRM, website, warehouse, Excel or custom API sources and connect it into your workflows.",
      },
      {
        badge: "Audit",
        title: "Control and history",
        description:
          "Track every request's status, current owner, decisions made and files attached from one place.",
      },
    ],
  },
  integration: {
    title: "Works on top of your existing systems",
    subtitle:
      "You do not need to replace your website, CRM, warehouse software or Excel spreadsheets right away. Proklix connects to your existing data, runs workflows, moves tasks to Telegram and records results back into the process.",
    flowSteps: [
      {
        title: "Data source",
        description: "Website, CRM, warehouse, Excel, API",
      },
      {
        title: "Proklix workflow",
        description: "Form, workflow, rules, owners",
      },
      {
        title: "Telegram task",
        description: "Notification, task, approval, comment",
      },
      {
        title: "Result & history",
        description: "Status, file, decision, action history",
      },
      {
        title: "Update back",
        description: "API, export or manual review",
      },
    ],
    flowHint:
      "Proklix does not have to replace your current system; it can be the operations and approval layer that works alongside it.",
    items: [
      {
        title: "Website / e-commerce",
        description:
          "Requests, products, orders or customer forms from your website can connect into a Proklix workflow.",
        examples: ["Requests", "Products", "Orders"],
      },
      {
        title: "CRM",
        description:
          "Customer records, sales stages, owners and communication history can be used inside workflows.",
        examples: ["Customer", "Stage", "Owner"],
      },
      {
        title: "Warehouse / stock",
        description:
          "Stock counts, product movement, transfers, photo checks and inventory processes can be managed through Telegram.",
        examples: ["Stock", "Count", "Transfer"],
      },
      {
        title: "ERP / accounting",
        description:
          "Purchase, expense, invoice and payment approvals can connect to flows based on your accounting setup.",
        examples: ["Purchase", "Expense", "Invoice"],
      },
      {
        title: "Google Sheets / Excel",
        description:
          "A quick start for companies that still keep data in spreadsheets: import, export or controlled data transfer.",
        examples: ["Import", "Export", "Quick start"],
      },
      {
        title: "Custom API",
        description:
          "Integration with your own systems is planned after process analysis via API or custom connections.",
        examples: ["API", "Custom setup", "Project-based"],
      },
    ],
    example: {
      title: "Example: stock count workflow",
      flow:
        "Product list arrives from warehouse system → Staff count in Telegram → Photo and notes added → Manager approves result → Outcome is recorded",
      chips: ["Purchase approval", "Service task", "Customer request", "Quote approval"],
    },
  },
  useCases: {
    title: "Different processes for every department",
    subtitle:
      "Proklix is not locked into one ready-made template. From sales to warehouse, purchasing to field teams, recurring workflows can be built with form, approval, task and outcome logic.",
    flowSteps: ["Form", "Approval", "Task", "Result"],
    featuredLabel: "Featured",
    categories: [
      { id: "sales", label: "Sales & customer" },
      { id: "finance", label: "Purchasing & finance" },
      { id: "warehouse", label: "Warehouse & ops" },
      { id: "field", label: "Field teams" },
      { id: "internal", label: "Internal admin" },
    ],
    integrationLabel: "Integration",
    items: [
      {
        categoryId: "sales",
        title: "Customer request",
        description:
          "Requests from your website, Telegram or sales team become one record. An owner is assigned and status is visible to management.",
        hasIntegration: true,
      },
      {
        categoryId: "sales",
        title: "Commercial proposal approval",
        description:
          "A proposal is prepared, a manager approves in Telegram, and the final version and history stay on record for the client.",
        hasIntegration: true,
      },
      {
        categoryId: "sales",
        title: "Service request",
        description:
          "A customer or manager creates a service request. An owner is assigned; outcome and files stay in the same record.",
      },
      {
        categoryId: "finance",
        title: "Purchase request",
        description:
          "An employee creates a purchase request. Manager and finance approve step by step; decisions are saved to history.",
        hasIntegration: true,
      },
      {
        categoryId: "finance",
        title: "Expense approval",
        description:
          "Receipt, description and files are attached. When the approval chain completes, the result goes to reporting.",
      },
      {
        categoryId: "finance",
        title: "Document approval",
        description:
          "Contracts, invoices or internal documents go through step-by-step approval. Versions and decisions are not lost.",
      },
      {
        categoryId: "warehouse",
        title: "Stock count",
        description:
          "Product list arrives from warehouse or website. Staff count in Telegram, attach photos, manager sees the result.",
        hasIntegration: true,
      },
      {
        categoryId: "warehouse",
        title: "Warehouse transfer",
        description:
          "A transfer request between warehouses is opened. Warehouse owner gets the task; action and history are recorded.",
        hasIntegration: true,
      },
      {
        categoryId: "warehouse",
        title: "Product / stock check",
        description:
          "Product list comes from an existing system or spreadsheet. A check task is assigned; variances and photos stay in one record.",
        hasIntegration: true,
      },
      {
        categoryId: "field",
        title: "Field tasks & checklists",
        description:
          "A checklist goes to a field worker. Photos, notes and completion status are reported to management.",
      },
      {
        categoryId: "field",
        title: "Photo task completion",
        description:
          "A field worker receives the task in Telegram. Photos, notes and completion status are reported to management.",
      },
      {
        categoryId: "field",
        title: "Maintenance / fault report",
        description:
          "A fault or maintenance request is opened. An owner is assigned; intervention steps and outcome are saved to history.",
      },
      {
        categoryId: "internal",
        title: "HR / admin requests",
        description:
          "Leave, access, documents or internal support requests are tracked through defined owners.",
      },
      {
        categoryId: "internal",
        title: "Access / permission requests",
        description:
          "New access or permission requests go through a form. When the approval chain completes, decision and history are stored.",
      },
      {
        categoryId: "internal",
        title: "Internal approval processes",
        description:
          "Internal policy, budget or operations decisions go through step-by-step approval. Who approved when is visible.",
      },
    ],
    customCard: {
      title: "Your custom process can be built too",
      description:
        "If your company has a recurring job, it can be adapted in Proklix with form, approval, task, file, notification, reporting and integration steps.",
      cta: "Analyze my process",
    },
    footerNote:
      "Best start: pick one process first and get it running in Proklix. Then expand to other departments.",
  },
  beforeAfter: {
    title: "Move from scattered tracking to controlled operations",
    subtitle:
      "Proklix brings together requests lost in chats, manual approvals, scattered files and copy-paste between systems into one flow.",
    transformLabel: "Chaos → Control",
    without: {
      title: "Without Proklix",
      subtitle: "Work is scattered across chats, Excel and manual follow-up.",
      items: [
        "Requests get lost in Telegram chats",
        "Excel files are updated late or incompletely",
        "It stays unclear who is responsible",
        "Approvals are tracked by message and manually",
        "Files, photos and comments stay in different places",
        "Action history and decision chain are not clearly visible",
        "Data is copied by hand between systems",
      ],
    },
    with: {
      title: "With Proklix",
      subtitle: "Every request, task, approval and outcome becomes traceable.",
      items: [
        "Every request has a clear status and owner",
        "Approval steps progress in order and on record",
        "Tasks go to the right person through Telegram",
        "Files, photos and comments stay attached to the process",
        "Who decided what and when is visible",
        "Management tracks the overall picture from one view",
        "Existing CRM, website, warehouse or Excel data can connect to the workflow",
      ],
    },
    resultChips: [
      "Fewer lost requests",
      "Clearer ownership",
      "Faster approvals",
      "More visible management",
      "Cleaner history",
    ],
    callout: {
      title: "The biggest difference: the process lives in the system, not in people's memory.",
      description:
        "When a request is opened, who owns it, what stage it waits at, which files were added and which decisions were made stay recorded in Proklix.",
      cta: "Analyze my process",
    },
  },
  sectors: {
    title: "For businesses with manual tracking, approvals and field control",
    subtitle:
      "Your industry may differ, but the need is usually the same: requests should not get lost, owners should be clear, approvals should move on record, files should stay in the process and management should see the overall picture.",
    positioningLine:
      "Proklix creates the most value for teams tracking work between Telegram, Excel, website, CRM or warehouse systems.",
    exampleLabel: "Example workflow",
    items: [
      {
        title: "B2B catalogs & trading",
        description:
          "Product requests, price inquiries, commercial proposals, customer records and approval flows can be managed in one stream.",
        pills: ["Requests", "Proposal", "CRM"],
        example: "customer request → proposal → manager approval",
        sectorSlug: "b2b-katalog",
      },
      {
        title: "Cleaning & field service",
        description:
          "Field tasks, checklists, photo completion, shift checks and manager reports can progress through Telegram.",
        pills: ["Field task", "Photo", "Checklist"],
        example: "task assignment → field check → photo result",
      },
      {
        title: "Warehouses & distributors",
        description:
          "Stock counts, warehouse transfers, dealer requests, product movement and delivery checks can be recorded.",
        pills: ["Stock", "Transfer", "Count"],
        example: "product list → count task → approved result",
        sectorSlug: "agro",
      },
      {
        title: "Equipment sales",
        description:
          "Catalog requests, consultation inquiries, proposal preparation, price approval and after-sales service can be tracked.",
        pills: ["Catalog", "Proposal", "Service"],
        example: "request → proposal → approval → client follow-up",
        sectorSlug: "oborudovanie",
      },
      {
        title: "Construction & field teams",
        description:
          "Field work, material requests, photo reports, job completion and manager approvals can sit in one workflow.",
        pills: ["Field", "Material", "Report"],
        example: "material request → field task → photo report",
        sectorSlug: "stroitelstvo",
      },
      {
        title: "Logistics & import/export",
        description:
          "Document tracking, delivery stages, customer notifications, task assignments and status updates can be managed.",
        pills: ["Document", "Delivery", "Status"],
        example: "document entry → review → delivery notification",
        sectorSlug: "logistika",
      },
      {
        title: "Real estate & rental",
        description:
          "Property requests, viewing appointments, contract steps, customer notes and approval history can stay organized.",
        pills: ["Request", "Appointment", "Contract"],
        example: "customer request → viewing → contract approval",
        sectorSlug: "nedvizhimost",
      },
      {
        title: "Clinics & service businesses",
        description:
          "Post-appointment internal tasks, staff requests, document approvals, maintenance jobs and reports can be tracked.",
        pills: ["Appointment", "Internal task", "Report"],
        example: "internal request → owner assigned → completed",
      },
      {
        title: "Restaurants & cafes",
        description:
          "Purchase requests, shift checks, fault reports, staff tasks and manager approvals can move on record.",
        pills: ["Purchase", "Shift", "Fault"],
        example: "need reported → approval → task completed",
      },
      {
        title: "Small factories & production",
        description:
          "Raw material requests, production tasks, quality control, team jobs and operation history can be viewed from one place.",
        pills: ["Raw material", "Production", "Quality"],
        example: "raw material request → production task → quality check",
      },
    ],
    callout: {
      title: "If your sector is not listed, that is fine",
      description:
        "If your company has recurring request, approval, task, file, reporting or integration needs, Proklix can be adapted to that workflow.",
      cta: "Analyze my process",
    },
  },
  sectorPageLabels: {
    breadcrumbHome: "Proklix",
    breadcrumbSectors: "Industries",
    before: "Before",
    after: "After",
    step: "Step",
  },
  howWeStart: {
    title: "Launch your first real process, not a big system overhaul",
    subtitle:
      "We do not start by transforming the whole company at once. We pick the process that wastes the most time, get it working, then expand to others.",
    steps: [
      {
        label: "Analysis",
        title: "We analyze the process together",
        description:
          "We clarify where requests start, who approves, which files are attached and where things get lost.",
      },
      {
        label: "Setup",
        title: "We build the first workflow",
        description:
          "We create form fields, steps, owners, statuses and Telegram notifications.",
      },
      {
        label: "Integration",
        title: "We connect required data",
        description:
          "If needed, sources like website, CRM, warehouse, Excel or custom API are integrated into the process.",
      },
      {
        label: "Go live",
        title: "We open it in Telegram",
        description:
          "Staff receive tasks and approvals through Telegram; managers track status in the system.",
      },
      {
        label: "Expansion",
        title: "We measure, improve and expand",
        description:
          "Once the first process is stable, we add reports, roles, new workflows and extra integrations.",
      },
    ],
    callout: {
      title: "Best start: pick one painful process",
      description:
        "Starting with purchase approval, a customer request, stock count, commercial proposal or field task and seeing results quickly is the healthiest path.",
      cta: "Analyze my first process",
    },
  },
  modules: {
    title: "Proklix building blocks",
    subtitle:
      "Each module works as part of the same process: data is collected, tasks are assigned, approvals move forward, files are attached, history is saved and management sees the outcome.",
    flowSteps: ["Form", "Workflow", "Task", "Approval", "History", "Report", "Integration"],
    categories: [
      {
        id: "build",
        title: "Process design",
        description: "Define the process with forms, steps and rules.",
        items: [
          {
            title: "Dynamic forms",
            description:
              "Define the fields, notes, files and validations your process needs.",
          },
          {
            title: "Workflow design",
            description:
              "Set up steps, owners, approval paths and decision options per process.",
          },
          {
            title: "Custom rules and steps",
            description:
              "Define conditional transitions, required fields, approval options and process rules.",
          },
        ],
      },
      {
        id: "daily",
        title: "Daily use",
        description: "Teams run day-to-day work from here.",
        items: [
          {
            title: "Task inbox",
            description:
              "Users see assigned tasks and pending actions on one screen.",
          },
          {
            title: "Request tracking",
            description:
              "Every request is tracked with number, status, owner, step and history.",
          },
          {
            title: "Telegram notifications",
            description:
              "New task, approval, return and outcome notifications go to the right people in Telegram.",
          },
          {
            title: "File and photo uploads",
            description:
              "Photos, PDFs and documents stay in the process instead of getting lost in chats.",
          },
        ],
      },
      {
        id: "control",
        title: "Management and control",
        description: "Status, history and access from one place.",
        items: [
          {
            title: "Process history",
            description:
              "Who decided what and when; comments, files and status changes stay on record.",
          },
          {
            title: "Reports and dashboard",
            description:
              "Management can see open requests, pending approvals, completed work and team status.",
          },
          {
            title: "User and role management",
            description:
              "Users, roles, access and company/team structure are managed in a controlled way.",
          },
        ],
      },
      {
        id: "integration",
        title: "Integration",
        description: "Existing systems connect to the process as needed.",
        items: [
          {
            title: "Website / CRM / warehouse / Excel connections",
            description:
              "Data can be pulled from existing sources or sent back; scope is planned together.",
          },
          {
            title: "Custom API integrations",
            description:
              "Your own systems can be integrated into the process via API or custom connections.",
          },
          {
            title: "Import / export workflows",
            description:
              "Excel and spreadsheet data can connect through import, export or controlled transfer.",
          },
        ],
      },
    ],
    callout: {
      title: "Modules connect in one process, not in isolation",
      description:
        "In a purchase request, for example, a form is filled, a manager approves, accounting gets a task, files are attached, all decisions are saved to history and the result can be sent back to an existing system if needed.",
      cta: "Analyze my process",
    },
  },
  workflow: {
    title: "Example workflow",
    subtitle:
      "When a request arrives, Proklix does not just record it; it pulls data, assigns tasks, manages approvals, sends Telegram notifications and saves the full history.",
    tabs: [
      {
        id: "proposal",
        label: "Commercial proposal",
        steps: [
          {
            badge: "Form",
            title: "Trigger",
            description: "The client submits a request via website, Telegram or form.",
          },
          {
            badge: "CRM",
            title: "Data source",
            description:
              "Customer, product and price data can be pulled from CRM, catalog or an existing system.",
          },
          {
            badge: "Task",
            title: "Owner",
            description:
              "The sales owner receives the task, clarifies details and prepares the proposal.",
          },
          {
            badge: "Approval",
            title: "Approval",
            description:
              "The manager checks price, terms and discount; approves or requests revision.",
          },
          {
            badge: "Telegram",
            title: "Telegram notification",
            description: "Participants are notified in Telegram at critical stages.",
          },
          {
            badge: "Result",
            title: "Result",
            description:
              "The final proposal is sent to the client, status is updated and the process closes.",
          },
          {
            badge: "Audit",
            title: "History",
            description:
              "All versions, decisions, comments and files are saved for audit and reporting.",
          },
        ],
      },
      {
        id: "stock",
        label: "Stock count",
        steps: [
          {
            badge: "Plan",
            title: "Trigger",
            description: "The count process starts from a manager or scheduled control.",
          },
          {
            badge: "Warehouse",
            title: "Data source",
            description:
              "Product list can come from warehouse system, website, Excel or API.",
          },
          {
            badge: "Task",
            title: "Owner",
            description: "Warehouse staff receive a count task through Telegram.",
          },
          {
            badge: "Approval",
            title: "Approval",
            description:
              "The manager checks count results, variances and attached photos.",
          },
          {
            badge: "Telegram",
            title: "Telegram notification",
            description: "Task assignment, return and approval notifications go via Telegram.",
          },
          {
            badge: "Result",
            title: "Result",
            description:
              "Approved count is recorded and can be sent back to the existing system if needed.",
          },
          {
            badge: "Audit",
            title: "History",
            description:
              "Who counted, who approved, what variances appeared and which photos were added are stored.",
          },
        ],
      },
      {
        id: "purchase",
        label: "Purchase approval",
        steps: [
          {
            badge: "Request",
            title: "Trigger",
            description: "An employee creates a request for a purchase need.",
          },
          {
            badge: "ERP",
            title: "Data source",
            description:
              "Supplier, product, budget or past purchase data can connect to the process.",
          },
          {
            badge: "Task",
            title: "Owner",
            description: "The request is assigned to the relevant manager or department owner.",
          },
          {
            badge: "Approval",
            title: "Approval",
            description: "Manager, finance or director approve step by step.",
          },
          {
            badge: "Telegram",
            title: "Telegram notification",
            description: "Pending approvals and revision requests appear in Telegram.",
          },
          {
            badge: "Result",
            title: "Result",
            description:
              "Approved purchase request is passed to finance or operations.",
          },
          {
            badge: "Audit",
            title: "History",
            description: "The full decision chain, comments and documents stay on record.",
          },
        ],
      },
      {
        id: "service",
        label: "Service task",
        steps: [
          {
            badge: "Request",
            title: "Trigger",
            description: "Client, manager or field team creates a service request.",
          },
          {
            badge: "CRM",
            title: "Data source",
            description:
              "Customer, device, location or prior service data can come from existing systems.",
          },
          {
            badge: "Task",
            title: "Owner",
            description: "A technician or field worker is assigned the task.",
          },
          {
            badge: "Approval",
            title: "Approval",
            description:
              "If needed, the manager checks outcome, photos and notes.",
          },
          {
            badge: "Telegram",
            title: "Telegram notification",
            description:
              "The owner receives the task in Telegram and sees updates in the same flow.",
          },
          {
            badge: "Result",
            title: "Result",
            description:
              "Service is completed, status closes and client/team can be informed.",
          },
          {
            badge: "Audit",
            title: "History",
            description:
              "Work done, photos added, comments and timing information are stored.",
          },
        ],
      },
    ],
    summary: {
      title: "This is just one example flow",
      description:
        "The same logic can be adapted to customer requests, stock counts, purchasing, field tasks, document approval and company-specific processes.",
      cta: "Analyze a similar process",
    },
  },
  projects: {
    title: "Proklix was born from real B2B needs",
    subtitle:
      "We bring our experience from B2B catalogs, customer requests, Telegram applications, local SEO, operations tracking and sector-specific processes into Proklix.",
    trustStrip: [
      "B2B catalog",
      "Telegram requests",
      "Local SEO",
      "Operational processes",
      "Integration logic",
    ],
    problemLabel: "Problem",
    insightLabel: "Experience carried into Proklix",
    items: [
      {
        title: "Clemar",
        website: "clemar.uz",
        url: "https://clemar.uz",
        category: "B2B cleaning equipment catalog",
        problem:
          "Multilingual product catalog, SEO, B2B sales requests and customer communication via Telegram.",
        insight:
          "Product/catalog data, quote requests, customer applications and operational tracking workflows.",
        badges: ["B2B catalog", "RU / UZ", "Telegram requests", "SEO", "Product data"],
      },
      {
        title: "Tozago",
        website: "tozago.uz",
        url: "https://tozago.uz",
        category: "Cleaning services website",
        problem:
          "Collecting service requests in Tashkent, local visibility and a Telegram-first application flow.",
        insight:
          "Service requests, field tasks, checklists and turning customer applications into structured workflows.",
        badges: ["Telegram", "Local SEO", "Service request", "Field task"],
      },
      {
        title: "Klinidex",
        website: "klinidex.com",
        url: "https://klinidex.com",
        category: "Operations platform for clinics",
        problem:
          "Need to manage patients, appointments, in-clinic tasks and operational processes more systematically.",
        insight:
          "SaaS logic, task flows, user roles, process tracking and a sector-based operations model.",
        badges: ["SaaS", "Processes", "Demo request", "Clinic operations"],
      },
    ],
    callout: {
      title: "These projects shared the same underlying need",
      description:
        "Requests get lost in chats, information sits in different systems, approvals move manually and managers cannot see the full process in one place. Proklix was designed to solve this.",
      cta: "Analyze a similar process",
    },
  },
  pricing: {
    title: "Proklix packages that start from your needs",
    subtitle:
      "Every company's processes, integration needs and user structure are different. That is why scope and pricing are defined after a short process analysis.",
    startNote: "Starting point: pick one real process and get it working.",
    bestForLabel: "Best for",
    plans: [
      {
        name: "First process",
        subtitle: "For companies that want to organize one workflow quickly.",
        bestFor:
          "One core process such as purchasing, proposals, customer requests, stock counts or service tasks.",
        features: [
          "Setup of 1 core process",
          "Dynamic forms and status tracking",
          "Telegram notifications",
          "Basic task and approval flow",
          "Simple dashboard view",
          "Scope defined after analysis",
        ],
        cta: "Analyze my first process",
      },
      {
        name: "Multiple processes + integration",
        subtitle:
          "For companies that need 2–3 linked processes, reports and data flow with existing systems.",
        bestFor:
          "Teams managing CRM/catalog/request flow, purchasing, stock or proposal processes together.",
        features: [
          "Multiple linked processes",
          "CRM / catalog / request flow",
          "Reports and dashboard",
          "Basic integration or import/export",
          "Telegram task and approval notifications",
          "Scope defined after analysis",
        ],
        cta: "Get a proposal",
        highlighted: true,
        badge: "Smartest starting point",
      },
      {
        name: "Operations system for your business",
        subtitle:
          "For companies needing custom CRM, workflows, integrations, roles and reporting.",
        bestFor:
          "Companies with multiple departments, custom API connections and full operational control.",
        features: [
          "Custom API integrations",
          "Roles, access, audit and reports",
          "Multiple departments and processes",
          "Custom dashboards and operations screens",
          "Training and support",
          "Scope defined after analysis",
        ],
        cta: "Book a custom project call",
      },
    ],
    explanation: {
      title: "Why is pricing defined after analysis?",
      description:
        "Because in Proklix, cost is not driven by user count alone. Number of processes, approval steps, file usage, reporting needs, Telegram flows and integration scope all affect the price.",
      factors: [
        "Number of processes",
        "Integration needs",
        "Users / role structure",
        "Reporting and support scope",
      ],
    },
    finalCta: "Tell us about one process and we'll outline the scope together.",
  },
  faq: {
    title: "Frequently asked questions",
    subtitle:
      "The most common questions about Proklix as CRM, Telegram, integrations, pricing and how setup works.",
    categories: {
      system: "System",
      integration: "Integration",
      setup: "Setup",
      pricing: "Pricing",
      usage: "Language and usage",
    },
    intro: {
      title: "If your question isn't here, tell us about your process",
      description:
        "Proklix is usually evaluated through one real process: where requests come from, who approves, which systems connect and where results are stored.",
      cta: "Message on Telegram",
      phone: "+998 77 257 43 54",
    },
    items: [
      {
        category: "system",
        question: "Is Proklix a CRM, bot or ERP?",
        answer:
          "Proklix is not a single classic system meant to replace all of them. It is a Telegram-focused workflow and operations platform that brings together requests, forms, approvals, tasks, Telegram notifications, activity history and integrations. It can work alongside your existing CRM, website, warehouse software or Excel setup.",
      },
      {
        category: "integration",
        question: "Can you connect our website, CRM or warehouse?",
        answer:
          "Yes, if technical access allows. Integration can be planned via API, import/export, file transfer or project-specific connections. The right approach is clarified after process analysis.",
      },
      {
        category: "setup",
        question: "Can we start with one process?",
        answer:
          "Yes, and that is usually the healthiest start. We first get one process working: purchase approval, customer request, stock count, commercial proposal or field task. New processes and integrations can be added when needed.",
      },
      {
        category: "usage",
        question: "Do employees need to install a new app?",
        answer:
          "Core usage runs through Telegram. Employees see tasks, approvals and notifications in Telegram. This reduces the learning curve, especially for field teams or staff who rarely use a computer.",
      },
      {
        category: "usage",
        question: "Are Russian and Uzbek supported?",
        answer:
          "Yes. Proklix processes and screens can be built for Russian, Uzbek, Turkish and English. RU/UZ-first usage is supported for teams in Uzbekistan.",
      },
      {
        category: "system",
        question: "Is this only for sales teams?",
        answer:
          "No. Beyond sales, Proklix can be used for purchasing, expense approval, stock counts, warehouse transfers, service tasks, field checks, document approval, HR/admin requests and company-specific operational processes.",
      },
      {
        category: "pricing",
        question: "Why isn't pricing fixed on the site?",
        answer:
          "Because in Proklix, cost is not driven by user count alone. Number of processes, approval steps, integration needs, reports, file usage, user roles and support scope all affect pricing. That is why a short process analysis comes first.",
      },
      {
        category: "integration",
        question: "Does Proklix replace our existing system?",
        answer:
          "Not always. In most cases Proklix acts as an operations and approval layer on top of your current system. Website, CRM, warehouse, Excel or custom API data can connect to Proklix workflows.",
      },
      {
        category: "setup",
        question: "How long does setup take?",
        answer:
          "It depends on the chosen process and integration needs. A simple process can start faster; projects with custom integrations, reporting and role structures are scoped after analysis.",
      },
      {
        category: "system",
        question: "Is Telegram secure enough for operations?",
        answer:
          "Telegram is the channel where employees receive tasks and notifications. Critical controls, process records, files, history and authorization are configured on the Proklix side. Access and permission models are defined per project needs.",
      },
    ],
    callout: {
      title: "If the answer isn't enough, let's review one of your processes together.",
      description:
        "Let's map where requests come from, who approves, which systems connect and where results are stored.",
      cta: "Message on Telegram",
    },
  },
  cta: {
    title: "Show us a chaotic process, we'll explain how Proklix can organize it",
    description:
      "In a short 20-minute call we'll listen to your process: where requests come from, who approves, which systems connect and where to start the MVP.",
    ctaTelegram: "Message on Telegram",
    ctaCall: "Call",
    phone: "+998 77 257 43 54",
    helperLine: "Fastest response is via Telegram.",
    helper: {
      title: "Just include this in your message:",
      checklist: [
        "Which process do you want to get under control?",
        "Does it currently run through Telegram, Excel, CRM or another system?",
        "Who approves and who takes the tasks?",
        "Where do you lose the most time or information?",
      ],
      example:
        "Example: Purchase requests come via Telegram, the manager approves and accounting moves them to Excel. We want to move this into Proklix.",
    },
  },
  contactForm: {
    name: "Name",
    company: "Company",
    phone: "Phone",
    process: "Which process do you want to control?",
    processPlaceholder: "Select a process",
    processOptions: [
      "Requests / CRM",
      "Commercial proposals",
      "Approvals",
      "Stock / warehouse",
      "Field tasks",
      "Website / e-commerce integration",
      "Other",
    ],
    submit: "Send request",
    submitting: "Sending…",
    success: "Thank you! We'll contact you shortly.",
    error: "Failed to send. Message us on Telegram.",
  },
  blog: {
    meta: {
      title: "Proklix Blog | CRM, automation and B2B",
      description:
        "Articles on CRM, Telegram automation and B2B catalogs for business in Uzbekistan.",
    },
    title: "Proklix Blog",
    subtitle: "Practical materials on CRM, automation and digital processes for B2B.",
    readMore: "Read",
    backToBlog: "All articles",
  },
  mobileCta: {
    telegram: "Telegram",
    call: "Call",
  },
  footer: {
    tagline:
      "Operations platform for managing requests, approvals, tasks and existing system integrations via Telegram.",
    location: "Tashkent / Uzbekistan",
    platformTitle: "Platform",
    platformLinks: [
      { href: "#platform", label: "Platform" },
      { href: "#integrations", label: "Integrations" },
      { href: "#processes", label: "Processes" },
      { href: "#pricing", label: "Packages" },
      { href: "#faq", label: "FAQ" },
    ],
    solutionsTitle: "Solutions",
    solutionsLinks: [
      { href: "#use-cases", label: "Customer requests" },
      { href: "#processes", label: "Purchase approval" },
      { href: "#integrations", label: "Stock / warehouse" },
      { href: "#use-cases", label: "Field tasks" },
      { href: "#integrations", label: "Custom integrations" },
    ],
    contactTitle: "Contact",
    phone: "+998 77 257 43 54",
    telegramCta: "Message on Telegram",
    telegramHelper: "Fastest response is via Telegram.",
    copyright: "© {year} Proklix. All rights reserved.",
    bottomTagline: "Telegram-first workflow platform · Tashkent / Uzbekistan",
  },
  phoneMockup: {
    notifHeader: "New notifications",
    chatHeader: "Telegram chat",
    botLabel: "Proklix Bot",
    statusTime: "14:32",
    notifications: [
      {
        color: "amber",
        title: "Purchase approval pending",
        subtitle: "₸ 4 200 000 · Aziz M.",
        actionPrimary: "Approve",
        actionSecondary: "Reject",
      },
      {
        color: "green",
        title: "New order #2847",
        subtitle: "Clemar · from website",
        actionPrimary: "Accept",
        actionSecondary: "View",
      },
    ],
    messages: [
      {
        from: "bot",
        text: "New task assigned: Inventory #112 ✓",
        time: "14:30",
        variant: "default",
      },
      {
        from: "user",
        text: "Done, uploaded photos",
        time: "14:31 ✓✓",
      },
      {
        from: "bot",
        text: "Task closed. History saved ✓",
        time: "14:32",
        variant: "success",
      },
    ],
  },
  dashboard: {
    title: "Proklix operations panel",
    flowLabels: [
      "CRM / Web / Excel",
      "Proklix workflow",
      "Telegram task",
      "Approval",
      "Result saved",
    ],
    sourceLabel: "Source",
    metricRequests: "24 active requests",
    metricInProgress: "8 tasks in progress",
    metricPendingApproval: "5 pending approval",
    metricCompleted: "11 completed",
    cards: [
      { title: "New customer request", source: "Website", statusKey: "new" },
      { title: "Stock count", source: "Warehouse system", statusKey: "telegram" },
      { title: "Purchase approval", source: "Excel / API", statusKey: "pending" },
      { title: "Service task", source: "CRM", statusKey: "completed" },
    ],
    statusNew: "New request",
    statusPending: "Pending approval",
    statusTelegram: "Telegram task",
    statusCompleted: "Completed",
    statusIntegrated: "Integrated data",
  },
};

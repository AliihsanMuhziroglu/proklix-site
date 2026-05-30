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
    title: "Requests, approvals, tasks and integrations in one Telegram-focused system",
    subtitle:
      "Proklix brings requests, forms, approvals, tasks, files and action history into one flow. Connect your existing CRM, website, warehouse, Excel or custom API systems and run operations through Telegram.",
    trustTag: "For companies in Tashkent and Uzbekistan",
    ctaTelegram: "Message on Telegram",
    ctaAnalysis: "Get a free process analysis",
    integrationChips: ["CRM", "Website", "Warehouse", "Excel", "Custom API", "Telegram"],
    ctaHelper: "In the first call, we'll map one of your processes together.",
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
    title: "What Proklix includes",
    items: [
      {
        title: "Dynamic forms",
        description: "Form builder with fields, files and conditions for your process.",
      },
      {
        title: "Workflow builder",
        description: "Steps, statuses, approval routes and transition rules.",
      },
      {
        title: "Task inbox",
        description: "Personal and team inbox: what's assigned, what needs action.",
      },
      {
        title: "Submission tracking",
        description: "Every request with number, status, owner and history.",
      },
      {
        title: "Telegram notifications",
        description: "Notifications for new requests, approvals and tasks in Telegram.",
      },
      {
        title: "File & photo uploads",
        description: "Files and photos attach to the process, not lost in chats.",
      },
      {
        title: "Process history",
        description: "Full audit trail: who changed what and when.",
      },
      {
        title: "Reports & dashboard",
        description: "Summary of requests, approvals, tasks and bottlenecks.",
      },
      {
        title: "User management",
        description: "Roles, access rights, departments and multi-tenant structure.",
      },
      {
        title: "Custom integrations",
        description: "Connect to website, CRM, warehouse, Excel or API per project.",
      },
    ],
  },
  workflow: {
    title: "Example workflow",
    tabs: [
      {
        id: "proposal",
        label: "Commercial proposal",
        steps: [
          {
            title: "Trigger",
            description: "Client submits a request via website, Telegram or form.",
          },
          {
            title: "Data source",
            description: "Client data and products pulled from CRM or catalog.",
          },
          {
            title: "Owner",
            description: "Manager gets a task, clarifies details and prepares the proposal.",
          },
          {
            title: "Approval",
            description: "Director checks price and terms, approves or returns for revision.",
          },
          {
            title: "Telegram notification",
            description: "Participants get notifications at each key stage.",
          },
          {
            title: "Result",
            description: "Client receives the final proposal, status is updated.",
          },
          {
            title: "History",
            description: "All versions and actions saved for audit and reports.",
          },
        ],
      },
      {
        id: "stock",
        label: "Stock count",
        steps: [
          {
            title: "Data source",
            description: "Product list comes from website, warehouse or spreadsheet.",
          },
          {
            title: "Telegram task",
            description: "Owner receives inventory task in Telegram.",
          },
          {
            title: "Execution",
            description: "Employee counts products and attaches photos.",
          },
          {
            title: "Approval",
            description: "Manager checks result and discrepancies.",
          },
          {
            title: "Result",
            description: "Outcome saved in history and can be sent back to the system.",
          },
        ],
      },
      {
        id: "purchase",
        label: "Purchase approval",
        steps: [
          {
            title: "Trigger",
            description: "Employee submits purchase request via form.",
          },
          {
            title: "Approval",
            description: "Manager and finance approve step by step.",
          },
          {
            title: "Telegram notification",
            description: "Each participant gets a task for their stage.",
          },
          {
            title: "Result",
            description: "Purchase approved or rejected with comment.",
          },
          {
            title: "History",
            description: "Full approval chain saved for audit.",
          },
        ],
      },
      {
        id: "service",
        label: "Service task",
        steps: [
          {
            title: "Trigger",
            description: "Client or manager creates a service request.",
          },
          {
            title: "Owner",
            description: "Assignee is set, task goes to Telegram.",
          },
          {
            title: "Execution",
            description: "Assignee completes work, attaches photos and status.",
          },
          {
            title: "Telegram notification",
            description: "Client and manager get progress updates.",
          },
          {
            title: "Result",
            description: "Request closed, history and files saved.",
          },
        ],
      },
    ],
  },
  projects: {
    title: "Experience with real B2B operations",
    subtitle:
      "Examples of projects where we built requests, catalogs, integrations and operational processes for B2B companies.",
    cta: "View website",
    items: [
      {
        title: "Clemar",
        website: "clemar.uz",
        url: "https://clemar.uz",
        category: "B2B cleaning equipment catalog",
        description:
          "Product catalog, multilingual structure, SEO and Telegram request flow for B2B sales.",
        badges: ["B2B catalog", "Telegram requests", "RU / UZ"],
      },
      {
        title: "Tozago",
        website: "tozago.uz",
        url: "https://tozago.uz",
        category: "Cleaning services website",
        description:
          "Multilingual site with Telegram requests for cleaning services in Tashkent.",
        badges: ["Requests", "Telegram", "Local SEO"],
      },
      {
        title: "Klinidex",
        website: "klinidex.com",
        url: "https://klinidex.com",
        category: "Clinic management platform",
        description:
          "Digital platform for patient management, appointments and clinic operational processes.",
        badges: ["SaaS", "Processes", "Demo request"],
      },
    ],
  },
  pricing: {
    title: "Proklix packages",
    subtitle:
      "Scope and timeline are defined after process analysis. Here is what each package typically includes:",
    plans: [
      {
        name: "First process",
        description: "For companies that need one workflow: requests, approvals or commercial proposals.",
        features: [
          "1 key workflow",
          "Telegram notifications",
          "Basic dashboard",
          "Limited number of users",
          "Scope defined after analysis",
        ],
        cta: "Get a proposal",
      },
      {
        name: "Multiple processes + integrations",
        description: "For companies with 2–3 workflows, reports and one or more integrations.",
        features: [
          "Multiple linked workflows",
          "CRM / catalog / request flow",
          "Reports and dashboard",
          "Basic integration or import/export",
          "Scope defined after analysis",
        ],
        cta: "Get a proposal",
        highlighted: true,
      },
      {
        name: "Operations system for your business",
        description: "For companies needing custom CRM, workflow, integrations and reporting.",
        features: [
          "Custom API integrations",
          "Roles, audit, reports",
          "Multiple departments",
          "Training and support",
          "Scope defined after analysis",
        ],
        cta: "Get a proposal",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "Is Proklix a CRM, bot or ERP?",
        answer:
          "Proklix doesn't replace everything at once. It's a workflow platform: requests, forms, approvals, tasks, notifications and integrations with existing systems.",
      },
      {
        question: "Can you connect our website, CRM or warehouse?",
        answer:
          "Yes, if there is API access, export/import or another technical path. Integrations are scoped per process.",
      },
      {
        question: "Can we start with one process?",
        answer:
          "Yes. It's usually best to start with one process: requests, proposals, purchases, inventory or expense approval.",
      },
      {
        question: "Do employees need to install a new app?",
        answer:
          "Main actions can be done via Telegram/WebApp. This works well for teams already using Telegram.",
      },
      {
        question: "Are Russian and Uzbek supported?",
        answer:
          "Yes, site and processes can be built in RU / UZ / EN / TR per project requirements.",
      },
      {
        question: "Is this only for sales?",
        answer:
          "No. Proklix fits any repeatable process: requests, approvals, tasks, warehouse, service, documents, purchases, expenses.",
      },
    ],
  },
  cta: {
    title: "Show us one chaotic process, we'll show you how to build it in Proklix",
    description:
      "In 20 minutes we'll review your process and suggest where to start the MVP. No obligation.",
    ctaTelegram: "Message on Telegram",
    ctaCall: "Call",
    phone: "+998 77 257 43 54",
    formTitle: "Or leave a request",
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
      "Telegram-first workflow platform: requests, approvals, tasks and integrations with existing systems.",
    phone: "+998 77 257 43 54",
    telegram: "Telegram",
    location: "Tashkent / Uzbekistan",
    blog: "Blog",
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

import type { SectorPageContent } from "@/dictionaries/types";
import type { SectorSlug } from "@/lib/sectors";
import {
  createSectorPage,
  defaultRelatedEn,
  makeBeforeAfter,
  makeUseCases,
  makeWorkflowSteps,
  relatedExcept,
} from "../templates";

const beforeItems = [
  "Scattered messages across Telegram chats",
  "Excel is not updated consistently",
  "Tasks live in people's memory",
  "Managers learn too late",
  "Client responses are delayed",
];

const afterItems = [
  "Every inquiry enters the system",
  "An owner is assigned",
  "Every stage is tracked",
  "Telegram notifications are active",
  "Managers see real-time status",
];

export const otherSectorsEn: Record<
  Exclude<SectorSlug, "nedvizhimost">,
  SectorPageContent
> = {
  "b2b-katalog": createSectorPage({
    meta: {
      title: "CRM and workflow for B2B catalogs | Proklix",
      description:
        "Proklix helps trading teams manage product catalogs, incoming inquiries, commercial offers and approvals in one dashboard.",
    },
    breadcrumb: { sectorName: "B2B Catalog" },
    hero: {
      title: "Run your B2B catalog, inquiries and offer approvals in one system.",
      subtitle:
        "Proklix combines catalog-driven demand, client communication, pricing approvals and Telegram notifications for B2B sales teams.",
      mockupFeed: [
        "New catalog inquiry",
        "Commercial offer in progress",
        "Manager approval pending",
        "Offer sent to client",
        "Telegram notification sent",
      ],
    },
    problem: {
      title: "Problem: catalog, inquiries and offers are managed in separate tools.",
      items: [
        { title: "Catalog is disconnected from CRM", description: "Sales reps search prices in multiple files and spreadsheets." },
        { title: "Offers go out before approval", description: "Discounts reach clients before manager sign-off." },
        { title: "No complete client history", description: "Teams cannot see which offer versions were already sent." },
        { title: "Inquiries get lost in chats", description: "Website and Telegram requests arrive in fragmented channels." },
        { title: "Leadership sees status too late", description: "Approval stages and delays are not visible in one panel." },
        { title: "Client response time slips", description: "Owners and deadlines are not clearly assigned per inquiry." },
      ],
    },
    solution: {
      title: "What does Proklix build for B2B sales teams?",
      items: [
        { title: "Catalog + website inquiry intake", description: "Product selection and inquiries flow directly into CRM." },
        { title: "Unified client base", description: "Contacts, offers, deal stages and communication history in one place." },
        { title: "Offer approval workflow", description: "Sales rep → manager → client with each step recorded." },
        { title: "Price and discount control", description: "No discount is sent without approved routing." },
        { title: "Telegram notifications", description: "Teams get instant updates on new inquiries and approval steps." },
        { title: "Manager dashboard", description: "Offer velocity, conversion and bottlenecks are visible." },
        { title: "Task ownership", description: "Every inquiry has a clear owner and due date." },
        { title: "Sales reporting", description: "Pipeline metrics and team workload in real time." },
      ],
    },
    workflow: makeWorkflowSteps("Example: from catalog inquiry to client offer", [
      ["Client submits a catalog inquiry", "Request from website or Telegram is captured automatically."],
      ["Sales rep qualifies scope and quantity", "Products, pricing and terms are saved in the deal card."],
      ["Commercial offer is prepared", "Team uses a standard offer template and pricing structure."],
      ["Manager approves terms", "Discounts and special conditions are routed through workflow."],
      ["Offer is sent to client", "Offer version and timestamp are recorded."],
      ["Client sends feedback", "Acceptance, rejection or clarifications are logged."],
      ["Manager tracks everything in dashboard", "All deal steps and delays are visible in one place."],
      ["Telegram updates are delivered", "Owners get instant notifications on key changes."],
    ]),
    useCases: makeUseCases("Which processes can be digitized?", [
      ["Catalog inquiries", "Unified intake from website and messengers."],
      ["Commercial offers", "Version control, approvals and send history."],
      ["Pricing approvals", "Controlled routing of discounts and conditions."],
      ["Client communication history", "Calls, messages and offer trail in one card."],
      ["Sales team tasks", "Daily activity tracking with deadlines."],
      ["Manager approvals", "Central queue of decisions pending review."],
      ["Documents and files", "Offers, contracts and attachments linked to client records."],
      ["Pipeline analytics", "Conversion and stage-speed reporting."],
    ]),
    beforeAfter: makeBeforeAfter("Before vs after", "Before", "After", beforeItems, afterItems),
    miniOffer: {
      title: "First step: free process review",
      description:
        "In a 20-minute session, we map your path from inquiry to offer and show what to automate first for quick impact.",
    },
    relatedSectors: {
      title: "Also relevant for other sectors",
      items: relatedExcept("b2b-katalog", defaultRelatedEn).slice(0, 6),
    },
    finalCta: {
      title: "Bring order to your B2B sales process.",
      description:
        "Control catalog demand, offers and approvals in one dashboard with fast Telegram alerts for the team.",
    },
  }),
  agro: createSectorPage({
    meta: {
      title: "CRM and workflow for agro distribution | Proklix",
      description:
        "Proklix helps agro distributors manage dealer orders, warehouse stages, regional teams and Telegram updates in one system.",
    },
    breadcrumb: { sectorName: "Agro Distribution" },
    hero: {
      title: "Manage dealer orders, warehouse flow and regional operations in one system.",
      subtitle:
        "Proklix gives agro teams one workflow for dealer requests, stock handling, delivery planning and internal coordination.",
      mockupFeed: [
        "New dealer order",
        "Warehouse picking started",
        "Shipment scheduled",
        "Status updated",
        "Telegram notification sent",
      ],
    },
    problem: {
      title: "Problem: orders live in chats while warehouse works separately.",
      items: [
        { title: "Orders arrive in messengers", description: "Dealers send requests in chat, warehouse sees them late." },
        { title: "Regional visibility is weak", description: "Leaders cannot track workload and volume by region." },
        { title: "Statuses are updated manually", description: "Dealers keep calling to ask where the order is." },
        { title: "Sales and warehouse are disconnected", description: "Excel and chat data are out of sync." },
        { title: "Leadership sees risks too late", description: "Delay reasons and bottlenecks are unclear." },
        { title: "Task ownership is inconsistent", description: "Owners and deadlines are not clearly assigned." },
      ],
    },
    solution: {
      title: "What does Proklix build for agro teams?",
      items: [
        { title: "Dealer order portal", description: "Orders via web form or Telegram flow straight into CRM." },
        { title: "Warehouse stage tracking", description: "Received → picking → shipped with status control." },
        { title: "Regional manager dashboard", description: "Workload and volume trends by territory." },
        { title: "Telegram notifications", description: "Instant alerts on new orders and stage changes." },
        { title: "Dealer history", description: "Each dealer card contains all orders and interactions." },
        { title: "Task control", description: "Owner and due date assigned for every step." },
        { title: "Leadership reporting", description: "Regional performance, delays and friction points." },
        { title: "Order documents", description: "Invoices and shipping files linked to each order." },
      ],
    },
    workflow: makeWorkflowSteps("Example: from dealer order to delivery", [
      ["Dealer submits an order", "Request arrives via portal or Telegram and enters workflow."],
      ["Manager confirms details", "Quantity, price and shipping terms are recorded."],
      ["Warehouse task is opened", "Picking and preparation stage is started."],
      ["Stages are updated", "Each status change captures owner and timestamp."],
      ["Delivery is planned", "Route, date and delivery owner are set."],
      ["Dealer receives updates", "Telegram notifications are sent automatically."],
      ["Manager monitors in dashboard", "Orders and delays are visible by region."],
      ["Performance report is generated", "Volume, speed and bottleneck patterns are analyzed."],
    ]),
    useCases: makeUseCases("Which processes can be digitized?", [
      ["Dealer order intake", "Request capture, validation and prioritization."],
      ["Warehouse operations", "Picking, packing and dispatch stages."],
      ["Regional sales monitoring", "Manager workload and territory performance."],
      ["Delivery planning", "Route and schedule control."],
      ["Dealer history", "Order archive and communication context."],
      ["Internal coordination", "Sales + warehouse collaboration flow."],
      ["Leadership oversight", "Delay tracking and operational risk signals."],
      ["Telegram notifications", "Real-time order status communication."],
    ]),
    beforeAfter: makeBeforeAfter("Before vs after", "Before", "After", beforeItems, afterItems),
    miniOffer: {
      title: "First step: free process review",
      description:
        "We map your dealer → manager → warehouse → delivery flow and identify the highest-impact automation points.",
    },
    relatedSectors: {
      title: "Also relevant for other sectors",
      items: relatedExcept("agro", defaultRelatedEn).slice(0, 6),
    },
    finalCta: {
      title: "Standardize your agro distribution process.",
      description: "Run orders, warehouse and delivery in one visible and accountable workflow.",
    },
  }),
  oborudovanie: createSectorPage({
    meta: {
      title: "CRM and workflow for equipment sales | Proklix",
      description:
        "Proklix helps equipment suppliers manage technical requests, pricing calculations, offer approvals and Telegram updates in one panel.",
    },
    breadcrumb: { sectorName: "Equipment Sales" },
    hero: {
      title: "Manage technical consultations, calculations and offers in one system.",
      subtitle:
        "Proklix combines equipment catalog, engineering checks, bundle pricing and approval routing in one sales workflow.",
      mockupFeed: [
        "New technical request",
        "Engineering review started",
        "Offer is being calculated",
        "Approval pending",
        "Telegram notification sent",
      ],
    },
    problem: {
      title: "Problem: consulting, pricing and offers are disconnected.",
      items: [
        { title: "Long technical consultation cycle", description: "Questions get lost between engineer and sales rep." },
        { title: "Bundles are calculated manually", description: "Excel-based specs lead to proposal errors." },
        { title: "Weak margin control", description: "Discounts are agreed verbally without clear audit." },
        { title: "Offer versions get mixed", description: "Team is unsure which proposal version went to client." },
        { title: "Leadership sees issues late", description: "Margins and approval stages are not centralized." },
        { title: "Client response is delayed", description: "Specification checks and calculations take too long." },
      ],
    },
    solution: {
      title: "What does Proklix build for equipment sales teams?",
      items: [
        { title: "Catalog with predefined bundles", description: "Products, compatibility and package logic in one place." },
        { title: "Request → calculation → approval flow", description: "Engineer, sales rep and manager work in one route." },
        { title: "Technical request cards", description: "Specifications and consultation history per lead." },
        { title: "Offer versioning", description: "Every offer version and change is tracked." },
        { title: "Telegram notifications", description: "Fast updates on technical and approval stages." },
        { title: "Margin guardrails", description: "Discounts cannot move forward without approval." },
        { title: "Manager dashboard", description: "Margins, cycle speed and stalled opportunities are visible." },
        { title: "Project history", description: "All offers and communications by client are centralized." },
      ],
    },
    workflow: makeWorkflowSteps("Example: from technical request to client offer", [
      ["Client submits technical request", "Request enters system with required project parameters."],
      ["Engineer validates specification", "Compatibility and package composition are confirmed."],
      ["Sales rep builds pricing", "Margin, terms and delivery conditions are added."],
      ["Manager approves proposal terms", "Discounts and final conditions are reviewed."],
      ["Offer is sent to client", "Version and send timestamp are saved."],
      ["Client responds", "Acceptance, rejection or clarification is captured."],
      ["Manager monitors status in dashboard", "Projects and stage delays are visible end to end."],
      ["Telegram updates are delivered", "Team sees critical changes immediately."],
    ]),
    useCases: makeUseCases("Which processes can be digitized?", [
      ["Technical consultations", "Question routing and engineering response tracking."],
      ["Bundle calculations", "Standard and custom package pricing."],
      ["Commercial offers", "Versioning, approvals and send logs."],
      ["Margin approvals", "Discount and condition control workflows."],
      ["Client project history", "Full archive of offers and decisions."],
      ["Engineering tasks", "Technical review queue and deadlines."],
      ["Management oversight", "Margin and conversion analytics."],
      ["Project documents", "Specifications, offers and files in one card."],
    ]),
    beforeAfter: makeBeforeAfter("Before vs after", "Before", "After", beforeItems, afterItems),
    miniOffer: {
      title: "First step: free process review",
      description:
        "We review your consultation, calculation and approval flow and propose the fastest path to automate the bottlenecks.",
    },
    relatedSectors: {
      title: "Also relevant for other sectors",
      items: relatedExcept("oborudovanie", defaultRelatedEn).slice(0, 6),
    },
    finalCta: {
      title: "Bring control to your equipment sales process.",
      description: "Manage consultations, calculations, offers and approvals in one dashboard.",
    },
  }),
  logistika: createSectorPage({
    meta: {
      title: "CRM and workflow for logistics | Proklix",
      description:
        "Proklix helps logistics teams manage transport requests, shipment documents, delivery stages and client updates in one system.",
    },
    breadcrumb: { sectorName: "Logistics" },
    hero: {
      title: "Manage transport requests, documents and delivery stages in one system.",
      subtitle:
        "Proklix unifies shipment intake, document handling, stage tracking and client communication for logistics and trade operations.",
      mockupFeed: [
        "New shipment request",
        "Documents uploaded",
        "Status: customs",
        "Status: out for delivery",
        "Telegram notification sent",
      ],
    },
    problem: {
      title: "Problem: documents and statuses are fragmented.",
      items: [
        { title: "Documents are scattered", description: "Waybills and declarations are not tied to shipment cards." },
        { title: "Clients lack live status", description: "Managers repeatedly answer identical tracking questions." },
        { title: "Stages are not consistently logged", description: "It's unclear where exactly delays occur." },
        { title: "Cross-team coordination is difficult", description: "Warehouse, customs and delivery run in silos." },
        { title: "Leadership gets updates too late", description: "No single panel for all active shipments." },
        { title: "Task ownership is unclear", description: "Owners and deadlines are not set by stage." },
      ],
    },
    solution: {
      title: "What does Proklix build for logistics teams?",
      items: [
        { title: "Stage-by-stage shipment tracking", description: "Each step has owner, due date and status." },
        { title: "Shipment-linked document management", description: "All files are attached to the right transport case." },
        { title: "Client status portal", description: "Clients track progress without calling managers." },
        { title: "Telegram notifications", description: "Status changes trigger automatic updates." },
        { title: "Internal task orchestration", description: "Operations, warehouse and sales stay synchronized." },
        { title: "Manager dashboard", description: "Delays, risks and workload are visible in one place." },
        { title: "Shipment history", description: "Complete archive by client and route." },
        { title: "Performance reporting", description: "SLA, stage duration and delay causes are measurable." },
      ],
    },
    workflow: makeWorkflowSteps("Example: from shipment request to delivery", [
      ["Client submits transport request", "Request enters workflow from website or Telegram."],
      ["Manager captures shipment terms", "Route, volume and deadline are recorded."],
      ["Documents are uploaded", "All files are linked to the shipment card."],
      ["Route stages are updated", "Warehouse, customs and delivery statuses are logged."],
      ["Client receives updates", "Telegram status messages are sent automatically."],
      ["Delay alert is triggered when needed", "Owner and manager are notified immediately."],
      ["Manager tracks operations in one panel", "All shipments and exceptions are visible at once."],
      ["Final report is generated", "Stage timing and bottlenecks are analyzed."],
    ]),
    useCases: makeUseCases("Which processes can be digitized?", [
      ["Transport request intake", "Capture, qualification and route launch."],
      ["Document workflows", "Waybills, declarations and attachments."],
      ["Delivery status tracking", "Stage-based updates with deadlines."],
      ["Client notifications", "Telegram alerts for key changes."],
      ["Internal coordination", "Warehouse, customs and delivery handoffs."],
      ["Task assignment", "Owner and due date control."],
      ["Leadership oversight", "Delays, risk hotspots and intervention points."],
      ["Client shipment history", "Single archive of all deliveries."],
    ]),
    beforeAfter: makeBeforeAfter("Before vs after", "Before", "After", beforeItems, afterItems),
    miniOffer: {
      title: "First step: free process review",
      description:
        "We map your full chain from request to delivery and identify the highest-impact automation opportunities.",
    },
    relatedSectors: {
      title: "Also relevant for other sectors",
      items: relatedExcept("logistika", defaultRelatedEn).slice(0, 6),
    },
    finalCta: {
      title: "Standardize your logistics operations.",
      description: "Control requests, documents and delivery stages in one dashboard.",
    },
  }),
  stroitelstvo: createSectorPage({
    meta: {
      title: "CRM and workflow for construction | Proklix",
      description:
        "Proklix helps construction teams manage site tasks, approval flows, photo reports and Telegram updates in one system.",
    },
    breadcrumb: { sectorName: "Construction" },
    hero: {
      title: "Manage site tasks, approvals and reporting in one system.",
      subtitle:
        "Proklix unifies field task control, change approvals, photo reporting and team coordination for construction operations.",
      mockupFeed: [
        "New site task assigned",
        "Photo report uploaded",
        "Change approval pending",
        "Manager approved stage",
        "Telegram notification sent",
      ],
    },
    problem: {
      title: "Problem: tasks stay in chats, approvals stay on paper.",
      items: [
        { title: "Tasks are assigned in messengers", description: "Work orders get lost and completion is not transparent." },
        { title: "Change approvals are slow", description: "Manual signatures delay execution on site." },
        { title: "Photo reports are scattered", description: "Images are not linked to project stages." },
        { title: "Managers see risks too late", description: "No consolidated panel across active sites." },
        { title: "Responsibility is unclear", description: "Owners and deadlines are not consistently set." },
        { title: "Deadlines slip", description: "No built-in reminders and stage visibility." },
      ],
    },
    solution: {
      title: "What does Proklix build for construction teams?",
      items: [
        { title: "Task control with ownership", description: "Assignment, deadline and photo proof in one flow." },
        { title: "Digital approval routes", description: "Foreman → engineer → manager with decision history." },
        { title: "Stage-linked photo reporting", description: "Every photo is tied to site and work stage." },
        { title: "Telegram notifications", description: "Immediate updates on tasks and approval milestones." },
        { title: "Project history", description: "Complete trail of tasks, comments and changes." },
        { title: "Manager dashboard", description: "Site load, delays and risk points in one view." },
        { title: "Mobile-first field updates", description: "Site teams update progress directly from phone." },
        { title: "Deadline enforcement", description: "Automated reminders and overdue visibility." },
      ],
    },
    workflow: makeWorkflowSteps("Example: from task assignment to change approval", [
      ["Manager or engineer opens a task", "Site, owner and deadline are assigned."],
      ["Field team receives assignment", "Telegram notification is sent to responsible worker."],
      ["Work is completed with proof", "Photo report is attached to the task stage."],
      ["Change request starts if needed", "Updated scope goes through approval workflow."],
      ["Engineer validates output", "Quality and completion are checked."],
      ["Manager makes final decision", "Stage is accepted or returned for rework."],
      ["Manager monitors all sites in panel", "Statuses and delivery risks are visible in one place."],
      ["Telegram updates are delivered", "All stakeholders get critical updates instantly."],
    ]),
    useCases: makeUseCases("Which processes can be digitized?", [
      ["Site task management", "Assignment, deadline and completion tracking."],
      ["Change approvals", "Digital routing of engineering decisions."],
      ["Photo reporting", "Evidence linked to site and stage."],
      ["Internal approvals", "Engineering and management checkpoints."],
      ["Project history", "Complete archive of tasks and revisions."],
      ["Crew coordination", "Role-based assignments and priorities."],
      ["Leadership oversight", "Delay and workload visibility."],
      ["Telegram notifications", "Fast alerts and reminders for teams."],
    ]),
    beforeAfter: makeBeforeAfter("Before vs after", "Before", "After", beforeItems, afterItems),
    miniOffer: {
      title: "First step: free process review",
      description:
        "In 20 minutes, we review your current task, approval and reporting flow and propose the most practical automation rollout.",
    },
    relatedSectors: {
      title: "Also relevant for other sectors",
      items: relatedExcept("stroitelstvo", defaultRelatedEn).slice(0, 6),
    },
    finalCta: {
      title: "Bring structure to your construction operations.",
      description: "Manage tasks, approvals and field reporting in one transparent workflow.",
    },
  }),
};

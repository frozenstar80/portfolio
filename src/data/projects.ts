export type ProjectType = "Full Time" | "Freelance" | "Client Project" | "Personal Project";
export type ProjectStatus = "Live" | "Under Development" | "Completed";
export type ProjectCategory = "Android" | "iOS" | "Flutter" | "Full Stack" | "SaaS" | "Enterprise";

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  clientName?: string;
  clientCountry?: string;
  projectType: ProjectType;
  role: string;
  startDate: string;
  endDate?: string;
  status: ProjectStatus;
  technologies: string[];
  features: string[];
  appStoreLink?: string;
  playStoreLink?: string;
  websiteLink?: string;
  githubLink?: string;
  images: string[];
  coverImage: string;
  category: ProjectCategory;
  platforms: string[];
  backendInvolvement: string[];
  releaseSupport: string[];
  caseStudy?: {
    overview: string;
    clientContext: string;
    problem: string;
    handled: string[];
    techStack: string[];
    mobileFeatures: string[];
    backendAndApi: string[];
    deploymentSupport: string[];
    outcome: string[];
  };
};

export const projects: Project[] = [
  {
    id: "polygon-local",
    title: "Polygon Local",
    shortDescription: "Live app-store product for local operations and field workflows.",
    description:
      "A production mobile app delivered through Enovate IT Outsourcing for an Israeli client, focused on reliable app delivery, API integration, production fixes, and app-store release support.",
    clientName: "Enovate IT Outsourcing",
    clientCountry: "Israel",
    projectType: "Full Time",
    role: "Mobile App Developer",
    startDate: "2024-02",
    endDate: "2025-02",
    status: "Live",
    technologies: ["iOS", "Flutter", "Dart", "REST APIs", "Firebase", "App Store"],
    features: ["Role-based app flows", "API-driven screens", "Production bug fixing", "Release support"],
    appStoreLink: "https://apps.apple.com/us/app/polygon-local/id6757414762",
    images: ["projects/polygon-local.svg"],
    coverImage: "projects/polygon-local.svg",
    category: "iOS",
    platforms: ["iOS", "Backend-connected"],
    backendInvolvement: ["REST API integration", "Firebase-supported workflows", "Loading/error/empty states"],
    releaseSupport: ["App Store release support", "QA feedback fixes", "Production stability improvements"],
    caseStudy: {
      overview:
        "Polygon Local is a live app-store product built for operational workflows and international client delivery expectations.",
      clientContext:
        "Delivered through Enovate IT Outsourcing for an Israeli client, with collaboration around product requirements, QA feedback, API behavior, and release readiness.",
      problem:
        "The app needed dependable mobile workflows, backend-connected screens, production fixes, and app-store readiness for real users.",
      handled: [
        "Built and refined mobile app screens for operational workflows.",
        "Integrated API-driven data with practical loading, error, and empty states.",
        "Handled production fixes and QA feedback during release cycles.",
        "Supported app-store release readiness for a live international client product.",
      ],
      techStack: ["Flutter", "Dart", "iOS", "REST APIs", "Firebase", "App Store"],
      mobileFeatures: ["Operational workflows", "Role-aware screens", "Field-friendly app states", "Production UI fixes"],
      backendAndApi: ["REST API integration", "Backend data handling", "Firebase-supported app behavior", "Error-state handling"],
      deploymentSupport: ["App Store release support", "Production bug fixing", "QA cycle support"],
      outcome: ["Live on the App Store", "International client collaboration", "Improved app stability and release readiness"],
    },
  },
  {
    id: "polygon-iot",
    title: "Polygon iOT",
    shortDescription: "IoT/mobile operations app with connected-device workflows and live operational views.",
    description:
      "A live IoT mobile app for an Israeli client through Enovate IT Outsourcing, built around connected-device workflows, API-driven screens, production support, and app-store release.",
    clientName: "Enovate IT Outsourcing",
    clientCountry: "Israel",
    projectType: "Full Time",
    role: "Mobile App Developer",
    startDate: "2023-09",
    endDate: "2024-08",
    status: "Live",
    technologies: ["Flutter", "Dart", "IoT", "REST APIs", "Firebase", "CI/CD"],
    features: ["Connected-device workflows", "Live operational views", "API-driven screens", "Production support"],
    appStoreLink: "https://apps.apple.com/us/app/iot-polygon/id6502901501",
    images: ["projects/polygon-iot.svg"],
    coverImage: "projects/polygon-iot.svg",
    category: "Flutter",
    platforms: ["Flutter", "iOS", "Backend-connected"],
    backendInvolvement: ["API-driven device views", "Realtime status handling", "Backend state coordination"],
    releaseSupport: ["App Store release support", "Production issue support", "CI/CD workflow coordination"],
    caseStudy: {
      overview:
        "Polygon iOT is a connected-device mobile operations app designed for clear monitoring, API-driven workflows, and stable day-to-day usage.",
      clientContext:
        "Delivered through Enovate IT Outsourcing for an Israeli client, with practical collaboration across product requirements, IoT states, and release needs.",
      problem:
        "IoT products require clear device status, careful API state handling, and reliable mobile screens that remain useful when operational data changes.",
      handled: [
        "Built mobile screens for device and operational states.",
        "Integrated API-driven views for connected-device workflows.",
        "Supported QA feedback, production fixes, and release readiness.",
        "Coordinated around data states, user feedback, and app-store delivery.",
      ],
      techStack: ["Flutter", "Dart", "REST APIs", "Firebase", "IoT workflows", "CI/CD coordination"],
      mobileFeatures: ["Device status views", "Operational dashboards", "Realtime-style updates", "Resilient app states"],
      backendAndApi: ["API data handling", "Connected-device workflow integration", "Firebase-supported monitoring"],
      deploymentSupport: ["App Store release", "Production support", "Build/release coordination"],
      outcome: ["Live on the App Store", "Reliable IoT mobile experience", "Production support for a real client product"],
    },
  },
  {
    id: "pethood",
    title: "Pethood",
    shortDescription: "Airbnb-style pet marketplace under development with booking, profiles, and trust flows.",
    description:
      "An independent client product under development for Robbin, designed as an Airbnb-style marketplace for pets with marketplace planning, booking flows, user profiles, trust signals, Firebase/backend planning, notifications, and scalable MVP roadmap.",
    clientName: "Robbin",
    projectType: "Freelance",
    role: "Mobile & Product Developer",
    startDate: "2025-04",
    status: "Under Development",
    technologies: ["Flutter", "Firebase", "Maps", "Authentication", "Payments", "Cloud Functions"],
    features: ["Marketplace planning", "Booking flows", "User profiles", "Trust signals", "Notifications"],
    images: ["projects/pethood.svg"],
    coverImage: "projects/pethood.svg",
    category: "Full Stack",
    platforms: ["Flutter", "Android", "iOS", "Firebase backend"],
    backendInvolvement: ["Firebase/backend planning", "Authentication flow planning", "Booking data model planning"],
    releaseSupport: ["MVP roadmap", "Launch planning", "Scalable feature prioritization"],
    caseStudy: {
      overview:
        "Pethood is a two-sided marketplace product being shaped from concept into a focused MVP for pet care, stays, and trusted hosts.",
      clientContext:
        "Independent client product for Robbin, with planning support around marketplace flows, trust-building features, and MVP delivery.",
      problem:
        "The product needs to balance pet-owner trust, host discovery, booking clarity, and a technical foundation that can grow after launch.",
      handled: [
        "Planned marketplace workflows for pet owners and hosts.",
        "Mapped booking flows, profiles, trust signals, and MVP feature priorities.",
        "Planned Firebase/backend structure for authentication, notifications, and booking data.",
        "Helped shape a scalable MVP roadmap before expanding secondary features.",
      ],
      techStack: ["Flutter", "Firebase", "Authentication", "Maps", "Notifications", "Cloud Functions planning"],
      mobileFeatures: ["Host discovery", "Pet profiles", "Booking requests", "Trust signals", "Notification flows"],
      backendAndApi: ["Firebase architecture planning", "Authentication flows", "Realtime notification planning", "Booking data modeling"],
      deploymentSupport: ["MVP milestone planning", "Release roadmap", "Post-launch scalability planning"],
      outcome: ["Under development", "Clear marketplace roadmap", "Founder-friendly MVP planning"],
    },
  },
  {
    id: "gift-djinn",
    title: "Gift Djinn",
    shortDescription: "Live consumer gifting app with polished mobile UI, app-store launch, and support.",
    description:
      "An independent client app for Robbin that helps users discover gift ideas through a polished mobile experience, with app-store launch, API/Firebase integration, production fixes, and client delivery support.",
    clientName: "Robbin",
    projectType: "Freelance",
    role: "Mobile App Developer",
    startDate: "2025-01",
    endDate: "2025-09",
    status: "Live",
    technologies: ["iOS", "Flutter", "Dart", "Firebase", "REST APIs", "App Store"],
    features: ["Consumer mobile UI", "Gift discovery", "API/Firebase integration", "App Store launch", "Production fixes"],
    appStoreLink: "https://apps.apple.com/in/app/gift-djinn/id6755253165",
    images: ["projects/gift-djinn.svg"],
    coverImage: "projects/gift-djinn.svg",
    category: "iOS",
    platforms: ["iOS", "Flutter", "Backend-connected"],
    backendInvolvement: ["Firebase integration", "API integration", "Production issue support"],
    releaseSupport: ["App Store launch", "QA fixes", "Post-launch support"],
    caseStudy: {
      overview:
        "Gift Djinn is a live consumer gifting app delivered for an independent client from mobile development through app-store availability.",
      clientContext:
        "Independent client product for Robbin, focused on a polished consumer experience, launch readiness, and production support.",
      problem:
        "The product needed a polished mobile UI, dependable app services, app-store release support, and practical production fixes after launch.",
      handled: [
        "Built and refined mobile user flows for a consumer app experience.",
        "Integrated Firebase/API-backed app behavior and production states.",
        "Supported testing feedback, production fixes, and app-store submission milestones.",
        "Helped the client move from app build to live app-store availability.",
      ],
      techStack: ["Flutter", "Dart", "iOS", "Firebase", "REST APIs", "App Store"],
      mobileFeatures: ["Gift discovery", "Personalized user flows", "Consumer UI states", "Production-ready interactions"],
      backendAndApi: ["Firebase integration", "REST API coordination", "App data states", "Production issue handling"],
      deploymentSupport: ["App Store launch", "Release preparation", "Post-launch fixes"],
      outcome: ["Live on the App Store", "Independent client product delivered", "Launch and support handled end to end"],
    },
  },
];

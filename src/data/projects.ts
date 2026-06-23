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
  caseStudy?: {
    summary: string;
    challenge: string;
    approach: string[];
    outcome: string[];
    responsibilities: string[];
  };
};

export const projects: Project[] = [
  {
    id: "polygon-local",
    title: "Polygon Local",
    shortDescription: "Production iOS app for local operations and field workflows.",
    description:
      "A live production mobile app delivered with Enovate IT Outsourcing for an Israeli client, focused on reliable field usage, smooth app-store delivery, and maintainable mobile architecture.",
    clientName: "Enovate IT Outsourcing",
    clientCountry: "Israel",
    projectType: "Full Time",
    role: "Mobile App Developer",
    startDate: "2024-02",
    endDate: "2025-02",
    status: "Live",
    technologies: ["iOS", "Flutter", "Dart", "REST APIs", "Firebase", "App Store"],
    features: ["Role-based app flows", "API integration", "Live release support", "Production bug fixing"],
    appStoreLink: "https://apps.apple.com/us/app/polygon-local/id6757414762",
    images: ["projects/polygon-local.svg"],
    coverImage: "projects/polygon-local.svg",
    category: "iOS",
    caseStudy: {
      summary: "A live app-store product built for operational reliability and international client expectations.",
      challenge:
        "The client needed stable mobile delivery, dependable API integration, and a release process that could handle real-world users without slowing the product team.",
      approach: [
        "Created maintainable mobile screens aligned with the product workflow.",
        "Integrated backend APIs with clear loading, error, and empty states.",
        "Supported release readiness, QA feedback, and production fixes.",
      ],
      outcome: ["Live on the App Store", "Supported international client delivery", "Improved production stability"],
      responsibilities: ["Mobile feature development", "API integration", "Bug fixing", "App Store release support"],
    },
  },
  {
    id: "polygon-iot",
    title: "Polygon iOT",
    shortDescription: "IoT-focused app with connected-device workflows and real-time operational views.",
    description:
      "A live IoT mobile app for an Israeli client through Enovate IT Outsourcing, built around device visibility, dependable interactions, and app-store quality standards.",
    clientName: "Enovate IT Outsourcing",
    clientCountry: "Israel",
    projectType: "Full Time",
    role: "Mobile App Developer",
    startDate: "2023-09",
    endDate: "2024-08",
    status: "Live",
    technologies: ["Flutter", "Dart", "IoT", "REST APIs", "Firebase", "CI/CD"],
    features: ["IoT data flows", "Device status screens", "Real-time updates", "Production monitoring"],
    appStoreLink: "https://apps.apple.com/us/app/iot-polygon/id6502901501",
    images: ["projects/polygon-iot.svg"],
    coverImage: "projects/polygon-iot.svg",
    category: "Flutter",
    caseStudy: {
      summary: "A connected-device mobile app designed for clear monitoring and stable day-to-day usage.",
      challenge:
        "IoT products need reliable status presentation, careful error handling, and an interface that remains useful when data changes quickly.",
      approach: [
        "Built responsive screens for device and operational states.",
        "Handled API states with user-friendly feedback and resilience.",
        "Collaborated through QA cycles to stabilize the production app.",
      ],
      outcome: ["Live on the App Store", "Reliable IoT user experience", "Production support for a real client"],
      responsibilities: ["Flutter development", "IoT workflow implementation", "API integration", "Release support"],
    },
  },
  {
    id: "pethood",
    title: "Pethood",
    shortDescription: "Airbnb-style marketplace concept for pet care, stays, and trusted hosts.",
    description:
      "An independent client product under development for Robbin, designed as an Airbnb for pets with discovery, booking-oriented flows, profile trust, and a scalable marketplace foundation.",
    clientName: "Robbin",
    projectType: "Freelance",
    role: "Mobile & Product Developer",
    startDate: "2025-04",
    status: "Under Development",
    technologies: ["Flutter", "Firebase", "Maps", "Authentication", "Payments", "Cloud Functions"],
    features: ["Pet host discovery", "Booking flow", "Profiles and trust signals", "Realtime notifications"],
    images: ["projects/pethood.svg"],
    coverImage: "projects/pethood.svg",
    category: "Full Stack",
    caseStudy: {
      summary: "A two-sided marketplace mobile product being shaped from concept into a launchable MVP.",
      challenge:
        "The product needs to balance trust, simple booking, pet owner confidence, and a technical foundation that can scale after launch.",
      approach: [
        "Mapped core MVP flows before expanding secondary features.",
        "Designed data models for hosts, pets, availability, and requests.",
        "Planned Firebase-backed authentication, notifications, and launch support.",
      ],
      outcome: ["MVP architecture in progress", "Clear marketplace feature roadmap", "Founder-friendly product planning"],
      responsibilities: ["MVP planning", "Flutter development", "Firebase architecture", "Product consultation"],
    },
  },
  {
    id: "gift-djinn",
    title: "Gift Djinn",
    shortDescription: "Consumer gifting app built for thoughtful recommendations and app-store launch.",
    description:
      "An independent client app for Robbin that helps people discover gift ideas and move from inspiration to action with a polished mobile experience.",
    clientName: "Robbin",
    projectType: "Freelance",
    role: "Mobile App Developer",
    startDate: "2025-01",
    endDate: "2025-09",
    status: "Live",
    technologies: ["iOS", "Flutter", "Dart", "Firebase", "REST APIs", "App Store"],
    features: ["Gift discovery", "Personalized flows", "App Store release", "Production issue support"],
    appStoreLink: "https://apps.apple.com/in/app/gift-djinn/id6755253165",
    images: ["projects/gift-djinn.svg"],
    coverImage: "projects/gift-djinn.svg",
    category: "iOS",
    caseStudy: {
      summary: "A live consumer app delivered from independent product development through app-store availability.",
      challenge:
        "The product needed a polished consumer experience, reliable app-store delivery, and practical production support after launch.",
      approach: [
        "Developed user-facing mobile flows with clean interaction states.",
        "Integrated app services and handled production-ready release needs.",
        "Supported testing feedback and app-store submission milestones.",
      ],
      outcome: ["Live on the App Store", "Independent client product delivered", "Launch and support handled end to end"],
      responsibilities: ["Mobile development", "Firebase/API integration", "Release preparation", "Post-launch fixes"],
    },
  },
];

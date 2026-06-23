export type Service = {
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    title: "MVP Planning & Product Scope",
    description:
      "I help founders convert rough app ideas into clear MVP scope, user flows, feature lists, milestones, and launch roadmap.",
    deliverables: ["Feature planning", "MVP scope", "User flow breakdown", "Milestone plan"],
  },
  {
    title: "Android & iOS App Development",
    description: "Build production-ready mobile apps using native Android or Flutter depending on project needs.",
    deliverables: ["Android app", "iOS app", "Flutter cross-platform app", "Responsive UI", "App-store-ready builds"],
  },
  {
    title: "Backend API Development",
    description:
      "Build or coordinate backend systems required for mobile apps, including authentication, user management, business logic, database integration, and API contracts.",
    deliverables: ["REST APIs", "Authentication", "Database schema", "API documentation", "Error handling"],
  },
  {
    title: "Firebase & Cloud Backend",
    description:
      "Use Firebase services for fast MVPs and scalable app features such as authentication, notifications, analytics, crash reporting, and real-time data.",
    deliverables: ["Firebase Auth", "Firestore/Realtime Database", "FCM push notifications", "Crashlytics", "Analytics"],
  },
  {
    title: "Admin Panel & Dashboard",
    description: "Plan and build admin workflows needed to manage users, content, bookings, orders, payments, and app operations.",
    deliverables: ["Admin panel planning", "Role-based access", "User/content management", "Dashboard APIs"],
  },
  {
    title: "API Integration & Third-Party Services",
    description:
      "Connect mobile apps with existing backend systems, payment gateways, maps, chat, notifications, CRM, and third-party APIs.",
    deliverables: ["REST API integration", "Payment integration", "Maps/location", "Notifications", "Error-state handling"],
  },
  {
    title: "Deployment & Release Support",
    description:
      "Prepare production builds, app store submissions, GitHub Actions/Jenkins pipelines, environment setup, and release support.",
    deliverables: ["Play Store release", "App Store release", "CI/CD setup", "Build automation", "Production checklist"],
  },
  {
    title: "Maintenance & Production Support",
    description:
      "Support apps after launch with bug fixes, monitoring, performance improvements, feature updates, and release management.",
    deliverables: ["Crash fixes", "Performance improvements", "Version updates", "Monitoring support"],
  },
];

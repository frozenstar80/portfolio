export type Service = {
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    title: "MVP App Development",
    description: "Turn a product idea into a focused, launch-ready first version.",
    deliverables: ["Scope planning", "Core user flows", "Launch support"],
  },
  {
    title: "Android App Development",
    description: "Native Android apps with maintainable architecture and production polish.",
    deliverables: ["Kotlin/Java", "Jetpack patterns", "Play Store support"],
  },
  {
    title: "iOS/Flutter App Development",
    description: "Cross-platform apps with a consistent experience across iOS and Android.",
    deliverables: ["Flutter/Dart", "Reusable UI", "App Store support"],
  },
  {
    title: "Existing App Bug Fixing",
    description: "Stabilize shipped apps, resolve crashes, and clean up user-facing issues.",
    deliverables: ["Crash review", "Bug fixes", "Regression testing"],
  },
  {
    title: "API Integration",
    description: "Connect mobile apps with backend systems, third-party APIs, and auth flows.",
    deliverables: ["REST APIs", "Error states", "Secure data handling"],
  },
  {
    title: "Firebase Integration",
    description: "Add authentication, database, notifications, analytics, and crash visibility.",
    deliverables: ["Auth", "Firestore", "Crashlytics"],
  },
  {
    title: "Payment Integration",
    description: "Implement payment-ready flows with careful UX and integration discipline.",
    deliverables: ["Checkout flows", "Webhook coordination", "QA support"],
  },
  {
    title: "Release Support",
    description: "Prepare builds, metadata, testing, and submission for Play Store or App Store.",
    deliverables: ["Build setup", "Store assets", "Submission checks"],
  },
  {
    title: "App Maintenance",
    description: "Keep your app healthy after launch with fixes, updates, and feature iteration.",
    deliverables: ["Monitoring", "Updates", "Ongoing improvements"],
  },
  {
    title: "Founder Consultation",
    description: "Clarify scope, tech choices, roadmap, and build strategy before development.",
    deliverables: ["Technical review", "MVP scope", "Delivery plan"],
  },
];

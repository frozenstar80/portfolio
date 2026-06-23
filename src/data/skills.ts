export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile App Development",
    skills: ["Android", "Kotlin", "Java", "Jetpack Compose", "Flutter", "Dart", "App Store / Play Store release support"],
  },
  {
    title: "Architecture & App Quality",
    skills: ["MVVM", "Clean Architecture", "Repository Pattern", "Offline-first workflows", "State management", "Production debugging"],
  },
  {
    title: "Backend & APIs",
    skills: ["REST APIs", "Authentication flows", "API contracts", "Firebase", "Node.js / Spring Boot collaboration", "Backend integration"],
  },
  {
    title: "Database & Storage",
    skills: ["Room", "SQLite", "Firebase Firestore", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud, DevOps & Release",
    skills: ["GitHub Actions", "Jenkins", "Docker coordination", "AWS deployment coordination", "CI/CD pipelines", "Crashlytics monitoring"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Jira", "Figma", "Firebase Console"],
  },
];

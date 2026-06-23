export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: "Mobile", skills: ["Kotlin", "Java", "Android SDK", "Jetpack Compose", "Flutter", "Dart"] },
  { title: "Architecture", skills: ["MVVM", "Clean Architecture", "Repository Pattern"] },
  { title: "Backend/API", skills: ["REST APIs", "Node.js basics", "Spring Boot basics", "Firebase"] },
  { title: "Database", skills: ["Room", "SQLite", "MySQL", "PostgreSQL", "MongoDB"] },
  { title: "Cloud/DevOps", skills: ["GitHub Actions", "Jenkins", "Docker basics", "AWS basics"] },
  { title: "Tools", skills: ["Git", "GitHub", "Postman", "Jira", "Figma", "Firebase Crashlytics"] },
];

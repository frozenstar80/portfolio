# Premium Mobile Developer Portfolio

A configurable React + Vite + TypeScript portfolio for a mobile/full-stack app developer targeting startups, agencies, founders, and international clients.

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal.

## Edit Profile Data

All website content is managed from `src/data`.

- `src/data/siteConfig.ts`: name, headline, contact links, proof bar, about text, navigation.
- `src/data/projects.ts`: project cards, filters, live links, and case study content.
- `src/data/services.ts`: service cards.
- `src/data/skills.ts`: grouped skills.
- `src/data/testimonials.ts`: testimonial cards.
- `src/data/process.ts`: client process steps.

You can edit these files without changing UI components.

## Add A New Project

Open `src/data/projects.ts` and add a new object to the `projects` array:

```ts
{
  id: "my-new-app",
  title: "My New App",
  shortDescription: "Short card description.",
  description: "Longer case study intro.",
  clientName: "Client Name",
  clientCountry: "USA",
  projectType: "Freelance",
  role: "Mobile App Developer",
  startDate: "2026-01",
  status: "Live",
  technologies: ["Flutter", "Firebase", "REST APIs"],
  features: ["Authentication", "Payments", "Push notifications"],
  appStoreLink: "https://example.com",
  images: ["projects/my-new-app.svg"],
  coverImage: "projects/my-new-app.svg",
  category: "Flutter"
}
```

Valid values are defined in `ProjectType`, `ProjectStatus`, and `ProjectCategory` inside the same file.

## Add Images

Put static images in `public/projects`.

Example:

```text
public/projects/my-new-app.png
```

Then reference it in `src/data/projects.ts`:

```ts
coverImage: "projects/my-new-app.png",
images: ["projects/my-new-app.png"]
```

Use compressed `.webp` or optimized `.png` images for best performance.

## Build For Production

```bash
npm run build
npm run preview
```

The production output is created in `dist`.

## Free Deployment

### Vercel

1. Push this project to GitHub.
2. Go to Vercel and import the repository.
3. Framework preset: `Vite`.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

### Netlify

1. Push this project to GitHub.
2. Go to Netlify and create a new site from Git.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Deploy.

### GitHub Pages

This project includes a ready-to-use GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Create a new GitHub repository.
2. Push this project to the repository.
3. On GitHub, open the repository and go to `Settings > Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Push to the `main` branch.
6. Open the `Actions` tab and wait for `Deploy to GitHub Pages` to finish.

Your site will be available at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

`vite.config.ts` uses `base: "./"` so assets work correctly on GitHub Pages project URLs.

## Static Contact Form Options

The current form uses `mailto:` so it works without a backend. For a better static form, create a free Formspree form and replace the form `action` in `src/components/ContactSection.tsx` with your endpoint.

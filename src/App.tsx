import { AboutSection } from "./components/AboutSection";
import { BookCallModal } from "./components/BookCallModal";
import { ContactSection } from "./components/ContactSection";
import { CTASection } from "./components/CTASection";
import { DeliveryCapabilitySection } from "./components/DeliveryCapabilitySection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProcessSection } from "./components/ProcessSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection";
import { SkillsSection } from "./components/SkillsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { TrustBar } from "./components/TrustBar";
import { TrustSection } from "./components/TrustSection";
import { siteConfig } from "./data/siteConfig";
import { projects } from "./data/projects";
import { useState } from "react";
import { useActiveSection } from "./hooks/useActiveSection";
import { useDarkMode } from "./hooks/useDarkMode";
import { useHashRoute } from "./hooks/useHashRoute";
import { getProjectById } from "./lib/utils";
import { NotFoundProject } from "./pages/NotFoundProject";
import { ProjectCaseStudy } from "./pages/ProjectCaseStudy";

const sectionIds = siteConfig.navLinks.map((link) => link.section);

export default function App() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const route = useHashRoute();
  const activeSection = useActiveSection(sectionIds);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const project = route.page === "project" ? getProjectById(projects, route.projectId) : undefined;

  return (
    <>
      <Navbar
        activeSection={route.page === "home" ? activeSection : ""}
        isDark={isDark}
        onThemeToggle={toggleDarkMode}
        onBookCall={() => setIsBookingOpen(true)}
      />
      {route.page === "project" ? (
        project ? <ProjectCaseStudy project={project} /> : <NotFoundProject />
      ) : (
        <main>
          <Hero onBookCall={() => setIsBookingOpen(true)} />
          <TrustBar />
          <ProjectsSection />
          <CTASection />
          <ServicesSection />
          <DeliveryCapabilitySection />
          <ProcessSection />
          <SkillsSection />
          <AboutSection />
          <TrustSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
      )}
      <Footer />
      <BookCallModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}

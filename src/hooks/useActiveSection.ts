import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    let frameId = 0;
    let hashTimeout = 0;

    const updateActiveSection = () => {
      const headerOffset = 120;
      const currentPosition = window.scrollY + headerOffset;
      let currentSection = sectionIds[0] ?? "";

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= currentPosition) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    const syncHashSection = () => {
      const hashSection = window.location.hash.replace("#", "");
      if (sectionIds.includes(hashSection)) {
        setActiveSection(hashSection);
        window.clearTimeout(hashTimeout);
        hashTimeout = window.setTimeout(updateActiveSection, 600);
        return;
      }
      requestUpdate();
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", syncHashSection);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(hashTimeout);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", syncHashSection);
    };
  }, [sectionIds]);

  return activeSection;
};

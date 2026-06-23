import { useEffect, useState } from "react";

export type RouteState =
  | { page: "home"; section?: string }
  | { page: "project"; projectId: string };

const parseHash = (): RouteState => {
  const hash = window.location.hash.replace(/^#/, "");

  if (hash.startsWith("/projects/")) {
    return { page: "project", projectId: hash.replace("/projects/", "") };
  }

  return { page: "home", section: hash.replace("/", "") || undefined };
};

export const useHashRoute = () => {
  const [route, setRoute] = useState<RouteState>(() => parseHash());

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (route.page === "home" && route.section) {
      requestAnimationFrame(() => {
        document.getElementById(route.section ?? "")?.scrollIntoView({ behavior: "smooth" });
      });
    }

    if (route.page === "project") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [route]);

  return route;
};

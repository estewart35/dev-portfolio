import { useEffect, useState } from "react";

type UseScrollSectionObserverOptions = {
  rootMargin?: string;
  threshold?: number | number[];
  initialSection?: string;
};

export function useScrollSectionObserver(
  sectionIds: string[],
  options: UseScrollSectionObserverOptions = {}
) {
  const {
    rootMargin = "-50% 0px -50% 0px",
    threshold = 0,
    initialSection,
  } = options;

  const [activeSection, setActiveSection] = useState(
    initialSection ?? sectionIds[0] ?? ""
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin,
        threshold,
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds, rootMargin, threshold]);

  return activeSection;
}

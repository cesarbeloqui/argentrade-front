import { useEffect, useState } from "react";

function useIntersectionObserver(refs) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observers = refs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(ref.current.getAttribute("data-section"));
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (refs[index].current) {
          observer.unobserve(refs[index].current);
        }
      });
    };
  }, [refs]);

  return activeSection;
}

export default useIntersectionObserver;

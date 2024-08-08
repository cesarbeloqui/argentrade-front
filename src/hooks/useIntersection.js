import { useEffect, useRef, useState } from "react";

const useIntersection = (opciones = {}) => {
  const [intersectingItems, setIntersectingItems] = useState({});
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const newIntersectingItems = {};
      entries.forEach((entry) => {
        newIntersectingItems[entry.target.id] = entry.isIntersecting;
      });
      setIntersectingItems(newIntersectingItems);
    }, opciones);

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [opciones]);

  return [elementsRef, intersectingItems];
};

export default useIntersection;

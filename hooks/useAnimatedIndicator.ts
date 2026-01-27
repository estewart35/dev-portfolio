import { useEffect, useState, useRef, RefObject } from "react";

type IndicatorPosition = {
  left: number;
  width: number;
};

type UseAnimatedIndicatorOptions<T extends HTMLElement> = {
  activeValue: string;
  externalRef?: RefObject<T | null>;
  itemSelector?: string;
  itemAttribute?: string;
  delay?: number;
};

export function useAnimatedIndicator<T extends HTMLElement = HTMLElement>({
  activeValue,
  externalRef,
  itemSelector = '[role="tab"]',
  itemAttribute = "data-value",
  delay = 50,
}: UseAnimatedIndicatorOptions<T>) {
  const [positions, setPositions] = useState<Record<string, IndicatorPosition>>({});
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const internalRef = useRef<T | null>(null);
  const ref = externalRef ?? internalRef;

  useEffect(() => {
    if (!ref.current) return;

    const updatePositions = () => {
      const items = ref.current?.querySelectorAll<HTMLElement>(itemSelector);
      if (!items || !ref.current) return;

      const containerRect = ref.current.getBoundingClientRect();
      const newPositions: Record<string, IndicatorPosition> = {};

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const value = item.getAttribute(itemAttribute);

        if (value) {
          newPositions[value] = {
            left: itemRect.left - containerRect.left,
            width: itemRect.width,
          };
        }
      });

      setPositions(newPositions);
    };

    // Initial update with delay
    const timeoutId = setTimeout(() => {
      updatePositions();
      setShouldAnimate(true);
    }, delay);

    // Update on resize
    const observer = new ResizeObserver(() => {
      setShouldAnimate(false);
      updatePositions();
      setTimeout(() => setShouldAnimate(true), 100);
    });

    observer.observe(ref.current);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [ref, itemSelector, itemAttribute, delay]);

  return {
    ref,
    activePosition: positions[activeValue],
    shouldAnimate,
  };
}
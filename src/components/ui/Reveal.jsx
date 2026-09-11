import { useEffect, useRef } from "react";

/**
 * Scroll reveal via IntersectionObserver. The transition itself lives in
 * index.css under [data-reveal], which also forces content visible when the
 * user prefers reduced motion — so nothing can stay hidden.
 *
 * Only wrap content below the first viewport: revealing above-the-fold
 * elements delays first paint for no benefit.
 */
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      node.dataset.reveal = "shown";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} data-reveal="" style={{ transitionDelay: `${delay}ms` }} className={className}>
      {children}
    </Tag>
  );
}

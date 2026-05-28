import { useState, useEffect } from "react";

export default function useScrollReveal(ref, options = {}) {
  const { delay = 300, margin = "-100px" } = options;
  const [isInView, setIsInView] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!ready || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ready, ref, margin]);

  return isInView;
}

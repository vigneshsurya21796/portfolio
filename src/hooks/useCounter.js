import { useEffect, useRef, useState } from "react";

/**
 * useCounter — counts from 0 to `target` over `duration` ms
 * when the returned ref element enters the viewport.
 * Returns [displayCount, ref]
 */
export function useCounter(target, duration = 1400) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || fired.current) return;
        fired.current = true;
        obs.unobserve(el);

        let startTime = null;
        const tick = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          // ease-out quad
          const eased = 1 - (1 - progress) * (1 - progress);
          setCount(Math.ceil(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return [count, ref];
}

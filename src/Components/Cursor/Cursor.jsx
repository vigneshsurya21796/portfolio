import { useEffect, useRef } from "react";
import "./Cursor.css";

/**
 * Custom cursor — lime dot + lagged ring.
 * Only renders on devices that support hover (not touch/mobile).
 */
function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only activate on pointer-capable devices
    if (!window.matchMedia("(hover: hover)").matches) return;

    document.body.classList.add("has-cursor");

    const dot  = dotRef.current;
    const ring = ringRef.current;

    let mx = -100, my = -100; // start offscreen
    let rx = -100, ry = -100;
    let hovered = false;
    let rafId;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const onEnterHover = () => { hovered = true; };
    const onLeaveHover = () => { hovered = false; };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      // Dot snaps immediately
      dot.style.transform  = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;

      // Ring lags behind with lerp
      rx = lerp(rx, mx, 0.14);
      ry = lerp(ry, my, 0.14);
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(${hovered ? 2.2 : 1})`;

      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove, { passive: true });

    // Track [data-hover] elements
    const addHoverListeners = () => {
      document.querySelectorAll("[data-hover], a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnterHover);
        el.addEventListener("mouseleave", onLeaveHover);
      });
    };

    addHoverListeners();
    rafId = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("has-cursor");
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor__dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor__ring" aria-hidden="true" />
    </>
  );
}

export default Cursor;

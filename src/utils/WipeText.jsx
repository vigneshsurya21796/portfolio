import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

/**
 * WipeText v2 — ScrambleText
 * Characters cycle through random glyphs (accent color) before
 * snapping to the real letter left-to-right, triggered on scroll-in.
 *
 * Props:
 *   text   {string}  — text to render
 *   delay  {number}  — start delay in ms (default 0)
 *   speed  {number}  — ms between each frame (default 35)
 */
export function WipeText({ text, delay = 0, speed = 35 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });
  const [displayed, setDisplayed] = useState(() => text.split("").map(() => " "));
  const frameRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isInView || startedRef.current) return;
    startedRef.current = true;

    const letters = text.split("");
    let frame = 0;
    const totalFrames = letters.length * 2 + 8;

    const timer = setTimeout(() => {
      frameRef.current = setInterval(() => {
        setDisplayed(
          letters.map((char, i) => {
            const resolveAt = i * 2 + 8;
            if (char === " ") return " ";
            if (frame >= resolveAt) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
        );
        frame++;
        if (frame > totalFrames) clearInterval(frameRef.current);
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timer);
      clearInterval(frameRef.current);
    };
  }, [isInView, text, delay, speed]);

  return (
    <span ref={ref} aria-label={text} className="scramble-text">
      {displayed.map((ch, i) => (
        <span
          key={i}
          className={ch === text[i] ? "scramble-char resolved" : "scramble-char"}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

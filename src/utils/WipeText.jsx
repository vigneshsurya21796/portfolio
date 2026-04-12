import { useRef } from "react";
import { useInView } from "framer-motion";

/**
 * WipeText v3 — Block-Sweep (FINAL)
 * An accent-colored bar grows left→right covering each word,
 * then slides off to the right revealing the text beneath.
 * Mirrors the FR Design System BlockTextRevealQuick animation.
 *
 * Props:
 *   text   {string}  — text to render
 *   delay  {number}  — base delay in seconds for the first word
 */
export function WipeText({ text, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });

  const words = text.split(" ");

  return (
    <span ref={ref} aria-label={text} className="wipe-wrap">
      {words.map((word, i) => {
        const blockDelay = delay + i * 0.15;
        const textDelay  = blockDelay + 0.5;

        return (
          <span
            key={i}
            className={`wipe-word${isInView ? " wipe-word--animate" : ""}`}
            style={{
              "--block-delay": `${blockDelay}s`,
              "--text-delay":  `${textDelay}s`,
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}

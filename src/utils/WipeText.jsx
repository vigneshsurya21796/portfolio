import { useRef } from "react";
import { useInView } from "framer-motion";

/**
 * WipeText — block sweeps left→right over each word, then slides off,
 * revealing the text underneath. Mirrors the BlockTextRevealQuick animation.
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
        const blockDelay  = delay + i * 0.15;          // block starts
        const textDelay   = blockDelay + 0.5;           // text snaps visible at midpoint

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

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * WipeText v1 — BarReveal
 * Each word is covered by a var(--bg) overlay. On scroll-in,
 * the overlay scaleX animates 1→0 (transformOrigin: right),
 * wiping away left-to-right to reveal the text beneath.
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
      {words.map((word, i) => (
        <span key={i} className="wipe-word">
          <span className="wipe-word__text">{word}</span>
          <motion.span
            className="wipe-word__bar"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: isInView ? 0 : 1 }}
            transition={{
              duration: 0.6,
              ease: [0.76, 0, 0.24, 1],
              delay: delay + i * 0.12,
            }}
          />
        </span>
      ))}
    </span>
  );
}

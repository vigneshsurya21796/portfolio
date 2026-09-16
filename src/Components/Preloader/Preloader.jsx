import { motion } from "framer-motion";
import "./Preloader.css";
import { useCounter } from "../../hooks/useCounter";

const panelVariants = {
  initial: { y: "0%" },
  exit: { y: "-100%", transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } },
};

const contentVariants = {
  initial: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const COUNT_DURATION = 1500;

function Preloader() {
  const [count, countRef] = useCounter(100, COUNT_DURATION);

  return (
    <motion.div
      className="preloader"
      variants={panelVariants}
      initial="initial"
      animate="initial"
      exit="exit"
      aria-hidden="true"
    >
      <motion.div className="preloader__content" variants={contentVariants} ref={countRef}>
        <div className="preloader__count-row">
          <span className="preloader__count">{count}</span>
          <span className="preloader__percent">%</span>
        </div>

        <div className="preloader__bar-track">
          <motion.div
            className="preloader__bar-fill"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: COUNT_DURATION / 1000, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>

        <div className="preloader__label">
          Loading
          <span className="preloader__dots" aria-hidden="true">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Preloader;

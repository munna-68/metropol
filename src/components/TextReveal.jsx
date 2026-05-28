import { motion } from "framer-motion";
import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  ease = [0.33, 1, 0.68, 1],
}) {
  const ref = useRef(null);
  const isInView = useScrollReveal(ref, { delay: 300 });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{
          duration,
          ease,
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

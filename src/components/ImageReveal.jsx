import { motion } from "framer-motion";
import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function ImageReveal({
  children,
  className = "",
  delay = 0,
  duration = 1.2,
  ease = [0.33, 1, 0.68, 1],
  scale = 1.15,
}) {
  const ref = useRef(null);
  const isInView = useScrollReveal(ref, { delay: 300 });

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={
          isInView
            ? { clipPath: "inset(0% 0% 0% 0%)" }
            : { clipPath: "inset(100% 0% 0% 0%)" }
        }
        transition={{
          duration,
          ease,
          delay,
        }}
        className="w-full h-full overflow-hidden"
      >
        <motion.div
          initial={{ scale, y: "20%" }}
          animate={isInView ? { scale: 1, y: 0 } : { scale, y: "20%" }}
          transition={{
            duration: duration + 0.3,
            ease,
            delay,
          }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

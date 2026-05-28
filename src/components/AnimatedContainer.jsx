import { motion } from "framer-motion";
import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const animations = {
  fadeInUp: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
  },
};

export default function AnimatedContainer({
  children,
  animation = "fadeInUp",
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);
  const isInView = useScrollReveal(ref, { delay: 300 });

  const variant = animations[animation] || animations.fadeInUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

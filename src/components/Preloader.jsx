import { motion } from "framer-motion";
import { useEffect } from "react";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.08 } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

const line = (dir = 1) => ({
  hidden: { y: 0, scaleY: 0.2, opacity: 1 },
  visible: {
    y: dir > 0 ? [-40, 40, 0] : [40, -40, 0],
    scaleY: [0.6, 1.05, 1],
    transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
  },
});

export default function Preloader({ visible = false, onFinish = () => {} }) {
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => onFinish(), 1000);
    return () => clearTimeout(t);
  }, [visible, onFinish]);

  if (!visible) return null;

  const lines = Array.from({ length: 9 }).map((_, i) => i + 1);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-white"
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="relative flex items-end gap-3 h-40">
        {lines.map((n, i) => (
          <motion.div
            key={n}
            variants={line(i % 2 === 0 ? 1 : -1)}
            className="bg-white/100 w-0.5 rounded-full"
            style={{ height: `${18 + (i % 4) * 6}vh`, backgroundColor: "#111" }}
          />
        ))}
      </div>
    </motion.div>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function DishModal({ dish, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {dish && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="relative z-10 w-full max-w-3xl bg-surface-container-lowest border border-primary/10 rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high/80 backdrop-blur-sm text-primary hover:bg-surface-container-highest transition-colors"
              aria-label="Close"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  {dish.tag && (
                    <span className="inline-block bg-surface-variant text-primary font-label-caps text-[10px] px-2 py-1 rounded mb-4">
                      {dish.tag}
                    </span>
                  )}
                  <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
                    {dish.title}
                  </h2>
                  <span className="font-body-lg text-body-lg font-bold text-primary block mb-6">
                    ${dish.price}
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-primary/10">
                  <a
                    href="/reservations"
                    className="block w-full text-center bg-secondary text-on-secondary font-label-caps text-label-caps px-6 py-3 rounded hover:bg-secondary/90 transition-colors"
                  >
                    RESERVE A TABLE
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

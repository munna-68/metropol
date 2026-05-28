import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function GalleryLightbox({ items, selectedIndex, onClose, onPrev, onNext }) {
  const item = items[selectedIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[70] flex items-center justify-center"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm" />

        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-lowest/20 backdrop-blur-sm text-on-primary hover:bg-surface-container-lowest/40 transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-8 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-lowest/20 backdrop-blur-sm text-on-primary hover:bg-surface-container-lowest/40 transition-colors"
          aria-label="Previous image"
        >
          <span className="material-symbols-outlined text-[24px]">chevron_left</span>
        </button>

        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-8 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-lowest/20 backdrop-blur-sm text-on-primary hover:bg-surface-container-lowest/40 transition-colors"
          aria-label="Next image"
        >
          <span className="material-symbols-outlined text-[24px]">chevron_right</span>
        </button>

        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
          className="relative z-10 w-full max-w-5xl mx-4 md:mx-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-auto max-h-[75vh] object-contain"
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <span className="font-label-caps text-label-caps text-on-primary/60 block mb-1">
                {item.number}
              </span>
              <h3 className="font-headline-md text-headline-md text-on-primary">
                {item.title}
              </h3>
            </div>
            <span className="font-label-caps text-label-caps text-on-primary/40">
              {selectedIndex + 1} / {items.length}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

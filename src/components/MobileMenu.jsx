import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";
import { navigation } from "../data";

function navClass({ isActive }) {
  return isActive
    ? "font-label-caps text-label-caps text-primary border-b-2 border-secondary pb-1 opacity-80"
    : "font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300";
}

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-primary/40 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="fixed top-0 right-0 z-[61] h-full w-[280px] bg-background border-l border-primary/10 flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-primary/10">
              <Link
                to="/"
                onClick={onClose}
                className="font-headline-md text-headline-md tracking-tighter text-primary"
              >
                METROPOL
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center text-primary hover:text-secondary transition-colors"
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <nav className="flex-1 flex flex-col gap-6 p-6">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={onClose}
                  className={navClass}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="p-6 border-t border-primary/10">
              <Link
                to="/reservations"
                onClick={onClose}
                className="block w-full text-center bg-secondary text-on-secondary font-label-caps text-label-caps px-6 py-3 rounded hover:bg-secondary/90 transition-colors"
              >
                RESERVE A TABLE
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

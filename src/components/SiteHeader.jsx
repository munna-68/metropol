import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { navigation } from "../data";
import MobileMenu from "./MobileMenu";

function navClass({ isActive }) {
  return isActive
    ? "font-label-caps text-label-caps text-primary border-b-2 border-secondary pb-1 opacity-80 transition-opacity"
    : "font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300";
}

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background border-b border-primary/10">
        <div className="mx-auto flex h-[72px] max-w-container-max-width items-center justify-between px-margin-mobile md:px-margin-desktop">
          <Link
            to="/"
            className="font-headline-md text-headline-md tracking-tighter text-primary"
          >
            METROPOL
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

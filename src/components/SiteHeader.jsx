import { Link, NavLink } from "react-router-dom";
import { navigation } from "../data";

function navClass({ isActive }) {
  return isActive
    ? "font-label-caps text-label-caps text-primary border-b-2 border-secondary pb-1 opacity-80 transition-opacity"
    : "font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors duration-300";
}

export default function SiteHeader({ variant = "page" }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background border-b border-primary/10">
      <div className="mx-auto grid h-[72px] max-w-container-max-width grid-cols-3 items-center px-margin-mobile md:px-margin-desktop">
        {variant === "home" ? (
          <>
            <div className="justify-self-start">
              <Link
                to="/"
                className="font-headline-md text-headline-md tracking-tighter text-primary"
              >
                METROPOL
              </Link>
            </div>
            <div className="hidden justify-self-center md:flex items-center gap-8">
              {navigation.map((item) => (
                <NavLink key={item.to} to={item.to} className={navClass}>
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="justify-self-end flex items-center gap-4">
              <Link
                to="/reservations"
                className="hidden md:inline-flex bg-secondary text-on-secondary px-6 py-2 rounded font-label-caps text-label-caps hover:bg-secondary/90 transition-colors"
              >
                Reserve
              </Link>
              <button
                type="button"
                aria-label="Open menu"
                className="md:hidden text-primary"
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="justify-self-start flex items-center gap-8">
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
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
            <div className="justify-self-center">
              <Link
                to="/"
                className="font-headline-md text-headline-md tracking-tighter text-primary"
              >
                METROPOL
              </Link>
            </div>
            <div className="justify-self-end flex items-center gap-4">
              <Link
                to="/reservations"
                className="hidden md:inline-flex bg-secondary text-on-secondary px-6 py-2 rounded font-label-caps text-label-caps hover:bg-secondary/90 transition-colors"
              >
                Reserve
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

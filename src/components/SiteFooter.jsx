import { footerLinks } from "../data";

function footerLinkProps() {
  return {
    href: "#",
    onClick: (event) => event.preventDefault(),
  };
}

function FooterLink({ children, className = "" }) {
  return (
    <a {...footerLinkProps()} className={className}>
      {children}
    </a>
  );
}

export default function SiteFooter({ variant = "standard" }) {
  if (variant === "gallery") {
    return (
      <footer className="bg-primary w-full py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
          <div className="flex flex-col space-y-4">
            <span className="font-headline-md text-headline-md text-on-primary">
              METROPOL
            </span>
            <span className="font-body-md text-body-md text-on-primary/70">
              © 2024 METROPOL NEW YORK
            </span>
          </div>
          <div className="flex flex-col space-y-2 md:col-start-3 md:items-end">
            {footerLinks.map((label) => (
              <FooterLink
                key={label}
                className="font-body-md text-body-md text-on-primary/70 hover:text-on-primary transition-colors"
              >
                {label}
              </FooterLink>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  if (variant === "reservations") {
    return (
      <footer className="bg-primary w-full py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
          <div>
            <div className="font-headline-md text-headline-md text-on-primary mb-4">
              METROPOL
            </div>
            <div className="font-body-md text-body-md text-on-primary/70">
              © 2024 METROPOL NEW YORK
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {footerLinks.map((label) => (
              <FooterLink
                key={label}
                className="font-body-md text-body-md text-on-primary/70 hover:text-on-primary transition-colors"
              >
                {label}
              </FooterLink>
            ))}
          </div>
          <div />
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full py-section-gap bg-primary text-on-primary">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
        <div>
          <span className="font-headline-md text-headline-md text-on-primary block mb-4">
            METROPOL
          </span>
          <p className="font-body-md text-body-md text-on-primary/70 text-sm">
            © 2024 METROPOL NEW YORK
            <br />
            124 Industrial Way, NY 10011
          </p>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2 md:flex-row md:justify-end md:gap-12 md:items-start">
          {footerLinks.map((label) => (
            <FooterLink
              key={label}
              className="font-body-md text-body-md text-on-primary/70 hover:text-on-primary transition-colors"
            >
              {label}
            </FooterLink>
          ))}
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import ImageReveal from "../components/ImageReveal";
import { reservations } from "../data";

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader variant="page" />
      <main className="pt-[72px]">
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto text-center">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6">
            Secure Your Table
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Experience the intersection of industrial history and culinary
            innovation. For parties larger than six, please contact us directly
            or explore our private dining options below.
          </p>
        </section>

        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
          <div className="max-w-3xl mx-auto bg-surface-container-lowest border border-primary/10 p-8 md:p-12 relative">
            {submitted ? (
              <div
                className="mb-6 rounded border border-secondary/20 bg-secondary/10 px-4 py-3 font-body-md text-secondary"
                aria-live="polite"
              >
                Reservation request received. We&apos;ll contact you shortly to
                confirm availability.
              </div>
            ) : null}
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-gutter"
              onSubmit={handleSubmit}
            >
              <div className="md:col-span-2">
                <label
                  className="block font-label-caps text-label-caps text-primary mb-2"
                  htmlFor="reservation-date"
                >
                  Date
                </label>
                <input
                  className="w-full border-b border-primary/20 bg-transparent py-2 font-body-md text-primary focus:border-secondary focus:ring-0 transition-colors"
                  id="reservation-date"
                  required
                  type="date"
                />
              </div>

              <div>
                <label
                  className="block font-label-caps text-label-caps text-primary mb-2"
                  htmlFor="reservation-time"
                >
                  Time
                </label>
                <select
                  className="w-full border-b border-primary/20 bg-transparent py-2 font-body-md text-primary focus:border-secondary focus:ring-0 transition-colors"
                  id="reservation-time"
                  required
                  defaultValue=""
                >
                  <option value="">Select Time</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="17:30">5:30 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>
              </div>

              <div>
                <label
                  className="block font-label-caps text-label-caps text-primary mb-2"
                  htmlFor="reservation-guests"
                >
                  Guests
                </label>
                <select
                  className="w-full border-b border-primary/20 bg-transparent py-2 font-body-md text-primary focus:border-secondary focus:ring-0 transition-colors"
                  id="reservation-guests"
                  required
                  defaultValue=""
                >
                  <option value="">Number of Guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                </select>
              </div>

              <div className="md:col-span-2 mt-4">
                <label
                  className="block font-label-caps text-label-caps text-primary mb-2"
                  htmlFor="reservation-name"
                >
                  Full Name
                </label>
                <input
                  className="w-full border-b border-primary/20 bg-transparent py-2 font-body-md text-primary focus:border-secondary focus:ring-0 transition-colors"
                  id="reservation-name"
                  placeholder="Jane Doe"
                  required
                  type="text"
                />
              </div>

              <div>
                <label
                  className="block font-label-caps text-label-caps text-primary mb-2 mt-4"
                  htmlFor="reservation-email"
                >
                  Email
                </label>
                <input
                  className="w-full border-b border-primary/20 bg-transparent py-2 font-body-md text-primary focus:border-secondary focus:ring-0 transition-colors"
                  id="reservation-email"
                  placeholder="jane@example.com"
                  required
                  type="email"
                />
              </div>

              <div>
                <label
                  className="block font-label-caps text-label-caps text-primary mb-2 mt-4"
                  htmlFor="reservation-phone"
                >
                  Phone
                </label>
                <input
                  className="w-full border-b border-primary/20 bg-transparent py-2 font-body-md text-primary focus:border-secondary focus:ring-0 transition-colors"
                  id="reservation-phone"
                  placeholder="+1 (555) 000-0000"
                  required
                  type="tel"
                />
              </div>

              <div className="md:col-span-2 mt-8 text-center">
                <button
                  className="bg-secondary text-on-secondary font-label-caps text-label-caps px-12 py-4 rounded hover:bg-secondary/90 transition-colors w-full md:w-auto"
                  type="submit"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-primary-container text-on-primary noise-overlay p-8 md:p-12 flex flex-col justify-center h-[500px]">
              <h2 className="font-headline-lg text-headline-lg mb-4">
                Private Dining
              </h2>
              <p className="font-body-md text-body-md text-on-primary-container mb-8 max-w-md">
                The Vault room offers an exclusive, intimate setting surrounded
                by original architectural details. Perfect for corporate
                gatherings or special celebrations of up to 20 guests.
              </p>
              <div>
                <a
                  className="border border-on-tertiary-container text-on-tertiary-container font-label-caps text-label-caps px-8 py-3 rounded hover:bg-on-tertiary-container hover:text-primary-container transition-colors"
                  href="mailto:reservations@metropolny.com"
                >
                  Inquire Now
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-gutter">
              <div className="h-[300px] w-full bg-surface-container-high">
                <ImageReveal className="w-full h-full" delay={0.1}>
                  <img
                    alt="Map"
                    className="object-cover w-full h-full opacity-80 grayscale"
                    src={reservations.mapImage}
                  />
                </ImageReveal>
              </div>
              <div className="border border-primary/10 p-8 flex-1 bg-surface-container-lowest">
                <h3 className="font-headline-md text-headline-md mb-6">
                  Location
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-2">
                  {reservations.locationName}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  {reservations.cityState}
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-sm">
                    call
                  </span>
                  <span className="font-body-md text-body-md">
                    {reservations.phone}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">
                    mail
                  </span>
                  <span className="font-body-md text-body-md">
                    {reservations.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter variant="reservations" />
    </div>
  );
}

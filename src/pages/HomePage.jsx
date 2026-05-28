import { Link } from "react-router-dom";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import AnimatedContainer from "../components/AnimatedContainer";
import TextReveal from "../components/TextReveal";
import ImageReveal from "../components/ImageReveal";
import { featuredDishes } from "../data";

function FeaturedDishCard({ dish }) {
  return (
    <div className="flex flex-col border border-primary/10 rounded overflow-hidden group hover:border-primary/30 transition-colors bg-surface-container-lowest">
      <div className="h-64 relative">
        <ImageReveal className="w-full h-full" delay={0.1}>
          <img
            alt={dish.alt}
            className="w-full h-full object-cover"
            src={dish.image}
          />
        </ImageReveal>
        {dish.tag ? (
          <div className="absolute top-4 right-4 bg-surface-container-low px-2 py-1 rounded z-10">
            <span className="font-label-caps text-label-caps text-primary">
              {dish.tag}
            </span>
          </div>
        ) : null}
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="font-headline-md text-headline-md text-primary text-[24px]">
              {dish.title}
            </h3>
            <span className="font-body-md text-body-md font-bold text-primary">
              {dish.price}
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-3">
            {dish.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <SiteHeader variant="home" />
      <main className="flex-grow pt-[72px]">
        <section className="relative h-[819px] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Signature Dish"
              className="w-full h-full object-cover object-center"
              src="/assets/hero-steak.jpg"
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
          </div>
          <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
            <TextReveal delay={0.2}>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-6 drop-shadow-lg">
                Culinary Precision.
                <br />
                Industrial Soul.
              </h1>
            </TextReveal>
            <TextReveal delay={0.4}>
              <p className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl mx-auto mb-10 drop-shadow-md">
                Experience the intersection of raw Manhattan architecture and
                refined gastronomy.
              </p>
            </TextReveal>
            <TextReveal delay={0.6}>
              <Link
                to="/reservations"
                className="bg-secondary text-on-secondary px-8 py-4 rounded font-label-caps text-label-caps tracking-widest hover:bg-secondary/90 transition-colors shadow-lg border border-secondary/20"
              >
                RESERVE A TABLE
              </Link>
            </TextReveal>
          </div>
        </section>

        <section
          id="story"
          className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-bright"
        >
          <div className="max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-primary/20" />
              <ImageReveal className="w-full h-auto rounded overflow-hidden">
                <img
                  alt="Metropol Interior"
                  className="w-full h-auto rounded object-cover shadow-sm grayscale-[20%]"
                  src="/assets/home-story.jpg"
                />
              </ImageReveal>
            </div>
            <div className="order-1 md:order-2">
              <TextReveal>
                <span className="font-label-caps text-label-caps text-on-tertiary-container block mb-4">
                  The Philosophy
                </span>
              </TextReveal>
              <TextReveal delay={0.1}>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
                  Forged in the City.
                </h2>
              </TextReveal>
              <TextReveal delay={0.2}>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  METROPOL occupies a restored 1920s steel foundry, preserving the
                  raw, unyielding nature of its industrial past while introducing
                  the warmth of bespoke hospitality.
                </p>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  Our menu reflects this duality bold, elemental flavors presented
                  with meticulous architectural precision. We source
                  hyper-locally, treating every ingredient with the respect
                  demanded by the city that never stops.
                </p>
              </TextReveal>
              <TextReveal delay={0.4}>
                <a
                  href="#story"
                  className="inline-flex items-center font-label-caps text-label-caps text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors"
                >
                  Discover Our Story{" "}
                  <span className="material-symbols-outlined ml-2 text-[16px]">
                    arrow_forward
                  </span>
                </a>
              </TextReveal>
            </div>
          </div>
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface">
          <div className="max-w-container-max-width mx-auto">
            <div className="text-center mb-16">
              <TextReveal>
                <span className="font-label-caps text-label-caps text-on-tertiary-container block mb-4">
                  Curated Selection
                </span>
              </TextReveal>
              <TextReveal delay={0.1}>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Chef&apos;s Signatures
                </h2>
              </TextReveal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {featuredDishes.map((dish, index) => (
                <AnimatedContainer key={dish.title} delay={index * 0.15}>
                  <FeaturedDishCard dish={dish} />
                </AnimatedContainer>
              ))}
            </div>
            <div className="mt-12 text-center">
              <TextReveal delay={0.3}>
                <Link
                  to="/menu"
                  className="bg-transparent text-on-tertiary-container border border-on-tertiary-container px-8 py-3 rounded font-label-caps text-label-caps hover:bg-on-tertiary-container hover:text-on-primary transition-colors"
                >
                  VIEW FULL MENU
                </Link>
              </TextReveal>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter variant="standard" />
    </div>
  );
}

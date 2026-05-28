import { useState } from "react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import TextReveal from "../components/TextReveal";
import ImageReveal from "../components/ImageReveal";
import DishModal from "../components/DishModal";
import {
  menuMains,
  menuStarterImage,
  menuStarters,
  menuDesserts,
  menuCocktails,
} from "../data";

function MenuItem({ item, onClick }) {
  return (
    <div onClick={onClick} className="flex flex-col gap-2 cursor-pointer group">
      <div className="flex justify-between items-baseline border-b border-dashed border-outline-variant/50 pb-1">
        <h3 className="font-headline-md text-[24px] text-primary group-hover:text-secondary transition-colors">
          {item.title}
        </h3>
        <span className="font-body-md text-body-md font-bold text-primary ml-4">
          ${item.price}
        </span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mt-2">
        {item.description}
      </p>
      {item.tag ? (
        <div className="mt-2 flex gap-2">
          <span className="bg-surface-variant text-primary font-label-caps text-[10px] px-2 py-1 rounded">
            {item.tag}
          </span>
        </div>
      ) : null}
    </div>
  );
}

function MainCourse({ item, reverse = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-6 md:gap-gutter cursor-pointer group`}
    >
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex justify-between items-baseline border-b border-dashed border-outline-variant/50 pb-1">
          <h3 className="font-headline-md text-[28px] text-primary group-hover:text-secondary transition-colors">
            {item.title}
          </h3>
          <span className="font-body-md text-body-md font-bold text-primary ml-4">
            ${item.price}
          </span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant mt-4">
          {item.description}
        </p>
        {item.tag ? (
          <div className="mt-4 flex gap-2">
            <span className="bg-surface-variant text-primary font-label-caps text-[10px] px-2 py-1 rounded">
              {item.tag}
            </span>
          </div>
        ) : null}
      </div>
      <ImageReveal
        className="w-full md:w-[300px] h-[200px] bg-surface-variant flex-shrink-0 overflow-hidden"
        delay={0.15}
      >
        <img
          alt={item.alt}
          className="object-cover w-full h-full grayscale-[20%]"
          src={item.image}
        />
      </ImageReveal>
    </div>
  );
}

function DessertItem({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col border border-primary/10 rounded overflow-hidden group hover:border-primary/30 transition-colors bg-surface-container-lowest cursor-pointer"
    >
      <div className="h-48 relative overflow-hidden">
        <img
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={item.image}
        />
        {item.tag && (
          <div className="absolute top-3 right-3 bg-surface-container-low px-2 py-1 rounded z-10">
            <span className="font-label-caps text-label-caps text-primary">
              {item.tag}
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="font-headline-md text-[20px] text-primary group-hover:text-secondary transition-colors">
            {item.title}
          </h3>
          <span className="font-body-md text-body-md font-bold text-primary">
            ${item.price}
          </span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function CocktailItem({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-4 p-4 border border-primary/10 rounded group hover:border-primary/30 transition-colors bg-surface-container-lowest cursor-pointer"
    >
      <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden">
        <img
          alt={item.alt}
          className="w-full h-full object-cover"
          src={item.image}
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-baseline">
          <h3 className="font-headline-md text-[18px] text-primary group-hover:text-secondary transition-colors">
            {item.title}
          </h3>
          <span className="font-body-md text-body-md font-bold text-primary ml-4">
            ${item.price}
          </span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-1 mt-1">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function MenuPage() {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow pt-[120px] pb-section-gap">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-section-gap max-w-3xl mx-auto">
            <TextReveal>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                Culinary Architecture
              </h1>
            </TextReveal>
            <TextReveal delay={0.1}>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                A study in contrast and precision. Our menu reflects the robust,
                industrial history of the city, refined through modern technique
                and seasonal intent.
              </p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative">
            <div className="md:col-span-3 hidden md:block">
              <div className="sticky top-[140px] flex flex-col gap-6">
                <a
                  className="font-label-caps text-label-caps text-primary border-l-2 border-primary pl-4 transition-colors"
                  href="#starters"
                >
                  STARTERS
                </a>
                <a
                  className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary border-l-2 border-transparent pl-4 transition-colors"
                  href="#mains"
                >
                  MAINS
                </a>
                <a
                  className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary border-l-2 border-transparent pl-4 transition-colors"
                  href="#desserts"
                >
                  DESSERTS
                </a>
                <a
                  className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary border-l-2 border-transparent pl-4 transition-colors"
                  href="#cocktails"
                >
                  COCKTAILS
                </a>
              </div>
            </div>

            <div className="md:col-span-9 flex flex-col gap-section-gap">
              <section className="scroll-mt-[120px]" id="starters">
                <TextReveal>
                  <h2 className="font-headline-lg text-headline-lg text-primary mb-12 pb-4 border-b border-primary/10">
                    Starters
                  </h2>
                </TextReveal>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-gutter gap-y-12">
                  {menuStarters.map((item) => (
                    <MenuItem
                      key={item.id}
                      item={item}
                      onClick={() => setSelectedDish({ ...item, image: menuStarterImage.src, alt: menuStarterImage.alt })}
                    />
                  ))}
                  <div className="lg:col-span-2 mt-8 mb-4 h-[400px] w-full bg-surface-variant">
                    <ImageReveal className="w-full h-full" delay={0.2}>
                      <img
                        alt={menuStarterImage.alt}
                        className="object-cover w-full h-full"
                        src={menuStarterImage.src}
                      />
                    </ImageReveal>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-[120px]" id="mains">
                <TextReveal>
                  <h2 className="font-headline-lg text-headline-lg text-primary mb-12 pb-4 border-b border-primary/10">
                    Mains
                  </h2>
                </TextReveal>
                <div className="grid grid-cols-1 gap-12">
                  {menuMains.map((item) => (
                    <MainCourse
                      key={item.id}
                      item={item}
                      reverse={item === menuMains[1]}
                      onClick={() => setSelectedDish(item)}
                    />
                  ))}
                </div>
              </section>

              <section className="scroll-mt-[120px]" id="desserts">
                <TextReveal>
                  <h2 className="font-headline-lg text-headline-lg text-primary mb-12 pb-4 border-b border-primary/10">
                    Desserts
                  </h2>
                </TextReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  {menuDesserts.map((item) => (
                    <DessertItem
                      key={item.id}
                      item={item}
                      onClick={() => setSelectedDish(item)}
                    />
                  ))}
                </div>
              </section>

              <section className="scroll-mt-[120px]" id="cocktails">
                <TextReveal>
                  <h2 className="font-headline-lg text-headline-lg text-primary mb-12 pb-4 border-b border-primary/10">
                    Cocktails
                  </h2>
                </TextReveal>
                <div className="grid grid-cols-1 gap-4">
                  {menuCocktails.map((item) => (
                    <CocktailItem
                      key={item.id}
                      item={item}
                      onClick={() => setSelectedDish(item)}
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter variant="standard" />

      <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </div>
  );
}

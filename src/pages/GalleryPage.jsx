import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import AnimatedContainer from "../components/AnimatedContainer";
import ImageReveal from "../components/ImageReveal";
import TextReveal from "../components/TextReveal";
import { galleryItems } from "../data";

function GalleryCard({ item, index = 0 }) {
  return (
    <AnimatedContainer
      animation="fadeInUp"
      className={`${item.spanClass} ${item.wrapperClass} ${item.marginClass || ""}`.trim()}
      delay={index * 0.06}
    >
      <ImageReveal className={item.frameClass} delay={index * 0.08}>
        <img
          alt={item.alt}
          className="w-full h-full object-cover"
          src={item.image}
        />
        <div className="absolute inset-unit border border-on-tertiary-container opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </ImageReveal>
      <div className="mt-4 flex justify-between items-baseline">
        <TextReveal delay={index * 0.06 + 0.2}>
          <span className="font-label-caps text-label-caps text-primary">
            {item.title}
          </span>
        </TextReveal>
        <TextReveal delay={index * 0.06 + 0.25}>
          <span className="font-label-caps text-label-caps text-on-surface-variant opacity-60">
            {item.number}
          </span>
        </TextReveal>
      </div>
    </AnimatedContainer>
  );
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader variant="page" />
      <main className="pt-[140px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
        <header className="mb-section-gap max-w-2xl">
          <TextReveal>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
              The Atmosphere
            </h1>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              A visual journey through METROPOL. Raw industrial materials
              intersect with refined hospitality, creating an environment that is
              both historically grounded and distinctly modern.
            </p>
          </TextReveal>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.number} item={item} index={i} />
          ))}
        </div>
      </main>
      <SiteFooter variant="gallery" />
    </div>
  );
}

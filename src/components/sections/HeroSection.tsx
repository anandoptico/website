import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { getCloudinaryUrl } from "@/lib/cloudinary";
import eyezenBadge from "@/assets/badges/essilor-eyezen-badge.png";

const heroSlides = [
  {
    id: 1,
    title: "Your Vision, Our Passion",
    subtitle: "50+ Years of Excellence in Eye Care",
    image: getCloudinaryUrl("hero-1_kvsgwf"),
  },
  {
    id: 2,
    title: "Premium Eyewear Collection",
    subtitle: "World's Finest Brands Under One Roof",
    image: getCloudinaryUrl("hero-2_cbh4es"),
  },
  {
    id: 3,
    title: "Expert Eye Testing",
    subtitle: "Advanced Equipment & Experienced Optometrists",
    image: getCloudinaryUrl("hero-3_sjm5uc"),
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
          </div>
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={cn(
                  "transition-all duration-700",
                  index === currentSlide
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-8 absolute pointer-events-none"
                )}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8">
                  {slide.subtitle}
                </p>

                {/* Eyezen Badge */}
                <div className="mb-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 pr-6 animate-fade-in animation-delay-500">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold shadow-lg shadow-gold/20">
                    <img src={eyezenBadge} alt="Essilor Eyezen Certified" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-gold font-bold text-sm tracking-wide uppercase">Elite Certification</p>
                    <p className="text-white text-xs font-medium opacity-90">1 of Only 5 Essilor Eyezen Centers in India</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gold text-primary hover:bg-gold-light font-semibold px-8 py-6 text-lg transition-all duration-300"
                onClick={() => scrollToSection("eyewear")}
              >
                Explore Collection
              </Button>
              <a href="tel:+91 9938082344">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg transition-all duration-300 w-full sm:w-auto"
                >
                  Book Eye Test
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide
                ? "bg-gold w-8"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

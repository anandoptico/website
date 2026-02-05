import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { getCategoryFrames } from "@/lib/brands";
import FrameCard from "@/components/cards/FrameCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import PoweredSunglassesCard from "@/components/cards/PoweredSunglassesCard";
import ComingSoonCard from "@/components/cards/ComingSoonCard";

const categories = [
  { id: "men", name: "Men's Eyewear", slug: "men" },
  { id: "women", name: "Women's Eyewear", slug: "women" },
  { id: "kids", name: "Kids' Eyewear", slug: "kids" },
  { id: "sunglasses", name: "Sunglasses & Polarized", slug: "sunglasses" },
];

interface CategoryRowProps {
  category: typeof categories[0];
}

const CategoryRow = ({ category }: CategoryRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const frames = getCategoryFrames(category.id as "men" | "women" | "kids" | "sunglasses", 6);

  // Check if this category should show Coming Soon cards
  const isComingSoon = ["men", "women", "kids", "sunglasses"].includes(category.id);

  // Calculate total items including PoweredSunglassesCard for sunglasses category
  const totalItems = category.id === "sunglasses" ? frames.length + 1 : frames.length;

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const checkScrollPosition = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);

      // Calculate which card is currently centered (active) on mobile
      if (isMobile) {
        const cardWidth = clientWidth * 0.85 + 16; // 85vw + gap
        const newActiveIndex = Math.round(scrollLeft / cardWidth);
        setActiveIndex(Math.min(newActiveIndex, totalItems - 1));
      }
    }
  }, [isMobile, totalItems]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      checkScrollPosition();
      scrollContainer.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);
      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, [checkScrollPosition]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = isMobile ? scrollRef.current.clientWidth * 0.85 + 16 : 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Get the frame index offset for sunglasses category (PoweredSunglassesCard is index 0)
  const getFrameActiveIndex = (frameIndex: number) => {
    return category.id === "sunglasses" ? frameIndex + 1 : frameIndex;
  };

  return (
    <div className="mb-12 last:mb-0">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
            {category.name}
          </h3>
          {category.id === "sunglasses" && (
            <p className="text-sm text-muted-foreground mt-1">
              Premium polarized lenses for ultimate clarity and 100% UV protection.
            </p>
          )}
          {isComingSoon && (
            <p className="text-sm text-gold/70 mt-1">
              Exciting collection arriving soon!
            </p>
          )}
        </div>
        {/* Hide View All button for Coming Soon categories */}
        {!isComingSoon && (
          <Link to={`/category/${category.slug}`}>
            <Button
              variant="ghost"
              className="text-gold hover:text-gold-light hover:bg-gold/10 gap-2"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        )}
      </div>

      {/* Coming Soon Cards for men, women, kids categories */}
      {isComingSoon ? (
        <div className="relative group">
          <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth snap-x snap-mandatory px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-72 snap-center">
                <ComingSoonCard
                  categoryName={category.name}
                  isActive={isMobile && activeIndex === index}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Original carousel code for sunglasses - UNCOMMENT THE BELOW CODE WHEN FRAMES ARE AVAILABLE FOR MEN, WOMEN, KIDS */
        <div className="relative group">
          {/* Scroll Buttons - Always visible on mobile, hover on desktop */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className={cn(
                "absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all duration-300 hover:bg-navy-light hover:scale-110 shadow-lg",
                isMobile ? "opacity-80" : "opacity-0 group-hover:opacity-100"
              )}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all duration-300 hover:bg-navy-light hover:scale-110 shadow-lg",
                isMobile ? "opacity-80" : "opacity-0 group-hover:opacity-100"
              )}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Frames Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth snap-x snap-mandatory px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {category.id === "sunglasses" && (
              <div className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-80 snap-center">
                <PoweredSunglassesCard isActive={isMobile && activeIndex === 0} />
              </div>
            )}
            {frames.map((frame, index) => (
              <div key={frame.id} className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-72 snap-center">
                <FrameCard
                  frame={frame}
                  isActive={isMobile && activeIndex === getFrameActiveIndex(index)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const EyewearSection = () => {
  return (
    <section id="eyewear" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Our <span className="text-gold">Eyewear Collection</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect frames for every style, age, and occasion.
            From classic elegance to contemporary trends.
          </p>
        </div>

        {/* Category Rows */}
        {categories.map((category) => (
          <CategoryRow key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default EyewearSection;

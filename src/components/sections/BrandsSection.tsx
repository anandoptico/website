import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { brands } from "@/lib/brands";
import BrandCard from "@/components/cards/BrandCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BrandsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedBrands = showAll ? brands : brands.slice(0, 8);

  return (
    <section id="brands" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Our <span className="text-gold">Premium Brands</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We partner with the world's most prestigious eyewear brands to bring you
            exceptional quality and style.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayedBrands.map((brand, index) => (
            <div
              key={brand.id}
              className={cn(
                "animate-fade-in-up opacity-0",
                `animation-delay-${(index % 4) * 100}`
              )}
              style={{ animationDelay: `${(index % 8) * 50}ms`, animationFillMode: "forwards" }}
            >
              <BrandCard brand={brand} />
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="flex justify-center mt-10">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-primary gap-2 px-8 py-6 text-lg transition-all duration-300"
          >
            {showAll ? (
              <>
                <Minus className="w-5 h-5" />
                Show Less
              </>
            ) : (
              <>
                <Plus className="w-5 h-5" />
                View All Brands
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;

import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getCategoryFrames, Frame } from "@/lib/brands";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import FrameCard from "@/components/cards/FrameCard";
import ComingSoonCard from "@/components/cards/ComingSoonCard";
import { Button } from "@/components/ui/button";

const categoryNames: Record<string, string> = {
  men: "Men's Eyewear",
  women: "Women's Eyewear",
  kids: "Kids' Eyewear",
  sunglasses: "Sunglasses",
};

const CategoryPage = () => {
  const { slug } = useParams();
  const categoryName = slug ? categoryNames[slug] : null;
  const frames = slug ? getCategoryFrames(slug as Frame["category"], 20) : [];

  // Check if this category should show Coming Soon content
  const isComingSoon = ["men", "women", "kids", "sunglasses"].includes(slug || "");

  if (!categoryName) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Category not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/#eyewear">
            <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Eyewear
            </Button>
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              {categoryName.split(" ")[0]} <span className="text-gold">{categoryName.split(" ").slice(1).join(" ")}</span>
            </h1>
            {isComingSoon ? (
              <p className="text-gold/70">Exciting collection arriving soon!</p>
            ) : (
              <p className="text-muted-foreground">Discover our curated {categoryName.toLowerCase()} collection</p>
            )}
          </div>

          {/* Coming Soon Grid for men, women, kids categories */}
          {isComingSoon ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <ComingSoonCard key={index} categoryName={categoryName} />
              ))}
            </div>
          ) : (
            /* Original frames grid - UNCOMMENT BELOW WHEN FRAMES ARE AVAILABLE FOR MEN, WOMEN, KIDS */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {frames.map((frame) => (
                <FrameCard key={frame.id} frame={frame} />
              ))}
            </div>
          )}

          <div className="text-center mt-12 p-8 bg-card rounded-xl elegant-shadow">
            {isComingSoon ? (
              <>
                <p className="text-lg text-foreground font-serif">
                  <span className="text-gold font-semibold">Coming Soon!</span>
                </p>
                <p className="text-muted-foreground mt-2">We're curating an amazing {categoryName.toLowerCase()} collection. Visit our store to explore what's available now!</p>
              </>
            ) : (
              <>
                <p className="text-lg text-foreground font-serif">
                  <span className="text-gold font-semibold">100+ designs</span> available at our store
                </p>
                <p className="text-muted-foreground mt-2">Please visit us to explore the complete collection</p>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CategoryPage;


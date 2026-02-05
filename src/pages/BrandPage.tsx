import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { brands } from "@/lib/brands";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";

const BrandPage = () => {
  const { slug } = useParams();
  const brand = brands.find((b) => b.slug === slug);

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Brand not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/#brands">
            <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Brands
            </Button>
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              {brand.name} <span className="text-gold">Collection</span>
            </h1>
            <p className="text-muted-foreground">Explore our exclusive {brand.name} eyewear range</p>
          </div>

          {brand.images && brand.images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {brand.images.map((image, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl elegant-shadow bg-card"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={`${brand.name} Frame ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-serif text-lg">{brand.name} Frame {idx + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl elegant-shadow bg-card border border-border"
                >
                  <div className="aspect-[4/3] flex flex-col items-center justify-center bg-gradient-to-br from-muted/50 to-muted p-6">
                    {brand.logo && (
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="max-w-[120px] max-h-[60px] object-contain opacity-30 mb-4"
                      />
                    )}
                    <div className="text-center">
                      <p className="text-gold font-serif text-lg font-semibold mb-1">Coming Soon</p>
                      <p className="text-muted-foreground text-sm">New frames arriving shortly</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12 p-8 bg-card rounded-xl elegant-shadow">
            <p className="text-lg text-foreground font-serif">
              <span className="text-gold font-semibold">100+ designs</span> available at our store
            </p>
            <p className="text-muted-foreground mt-2">Please visit us to explore the complete collection</p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BrandPage;

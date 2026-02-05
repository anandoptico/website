import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { getCloudinaryUrl, getCloudinaryVideoUrl, getVideoThumbnailUrl } from "@/lib/cloudinary";
import { galleryImages } from "@/data/gallery";

const GallerySection = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  // Navigate through ALL gallery items, not just first 6
  const navigateItem = (direction: "next" | "prev") => {
    if (selectedItemIndex === null) return;
    if (direction === "next") {
      setSelectedItemIndex((selectedItemIndex + 1) % galleryImages.length);
    } else {
      setSelectedItemIndex((selectedItemIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  // Show only first 6 items for the homepage "small version"
  const displayItems = galleryImages.slice(0, 6);

  return (
    <section id="gallery" className="section-padding bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Store <span className="text-gold">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a virtual tour of our elegantly designed store featuring
            the finest collection of eyewear and modern eye care facilities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayItems.map((item, index) => (
            <Dialog key={item.id} onOpenChange={(open) => {
              if (!open) {
                setSelectedItemIndex(null);
              }
            }}>
              <DialogTrigger asChild>
                <div
                  className={cn(
                    "relative aspect-[4/3] rounded-2xl overflow-hidden elegant-shadow cursor-pointer",
                    "animate-fade-in-up opacity-0"
                  )}
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                  onClick={() => setSelectedItemIndex(index)}
                >
                  {item.type === "video" ? (
                    <div className="relative w-full h-full">
                      <img
                        src={getVideoThumbnailUrl(item.image, 800, 600, item.thumbnailTime)}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gold/90 text-primary flex items-center justify-center shadow-xl">
                          <Play className="w-8 h-8 fill-current translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <img
                        src={getCloudinaryUrl(item.image, 800, 600)}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </>
                  )}
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] h-[90vh] p-0 bg-transparent border-none flex items-center justify-center outline-none">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Close Button */}
                  <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-gold p-2.5 text-primary shadow-lg hover:bg-gold-light transition-all duration-300 hover:scale-110">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close</span>
                  </DialogClose>

                  {/* Selected Content - uses FULL galleryImages array */}
                  {selectedItemIndex !== null && (
                    <div className="relative max-w-full max-h-full flex items-center justify-center p-4">
                      {galleryImages[selectedItemIndex].type === "video" ? (
                        <video
                          src={getCloudinaryVideoUrl(galleryImages[selectedItemIndex].image)}
                          className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
                          controls
                          playsInline
                          autoPlay
                        />
                      ) : (
                        <img
                          src={getCloudinaryUrl(galleryImages[selectedItemIndex].image, 1600)}
                          alt={galleryImages[selectedItemIndex].alt}
                          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                        />
                      )}
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="pointer-events-auto bg-gold/90 text-primary hover:bg-gold rounded-full h-12 w-12 shadow-lg transition-all duration-300 hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateItem("prev");
                      }}
                    >
                      <ChevronLeft className="h-8 w-8" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="pointer-events-auto bg-gold/90 text-primary hover:bg-gold rounded-full h-12 w-12 shadow-lg transition-all duration-300 hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateItem("next");
                      }}
                    >
                      <ChevronRight className="h-8 w-8" />
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* View Gallery Button */}
        <div className="flex justify-center mt-12">
          <Link to="/gallery">
            <Button className="bg-gold text-primary hover:bg-gold-light gap-2 px-8 py-6 text-lg transition-all duration-300 rounded-full font-serif font-bold group">
              View Full Gallery
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;



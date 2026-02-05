import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { getCloudinaryUrl, getCloudinaryVideoUrl, getVideoThumbnailUrl } from "@/lib/cloudinary";
import { galleryImages } from "@/data/gallery";

const GalleryPage = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const navigateItem = (direction: "next" | "prev") => {
    if (selectedItemIndex === null) return;
    if (direction === "next") {
      setSelectedItemIndex((selectedItemIndex + 1) % galleryImages.length);
    } else {
      setSelectedItemIndex((selectedItemIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/#gallery">
            <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-white transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Gallery
            </Button>
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">
              Store <span className="text-gold">Gallery</span>
            </h1>
            <p className="text-muted-foreground text-lg">Experience the elegance of Anand Optico</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
              <Dialog key={item.id} onOpenChange={(open) => {
                if (!open) {
                  setSelectedItemIndex(null);
                }
              }}>
                <DialogTrigger asChild>
                  <div
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden elegant-shadow group cursor-pointer"
                    onClick={() => setSelectedItemIndex(index)}
                  >
                    {item.type === "video" ? (
                      <div className="w-full h-full relative">
                        <img
                          src={getVideoThumbnailUrl(item.image, 800, 600, item.thumbnailTime)}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-gold/90 text-primary flex items-center justify-center shadow-xl">
                            <Play className="w-6 h-6 fill-current translate-x-0.5" />
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

                    {/* Selected Content */}
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
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GalleryPage;


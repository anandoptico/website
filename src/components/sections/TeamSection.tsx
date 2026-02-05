import { cn } from "@/lib/utils";
import { getCloudinaryUrl } from "@/lib/cloudinary";



const equipment = [
  { id: 1, name: "Topcon AR", image: getCloudinaryUrl("topcon-ar_tufiae") },
  { id: 2, name: "Topcon Lensometer", image: getCloudinaryUrl("topcon-lensometer_ik4gnj") },
  { id: 3, name: "Appasamy Slit Lamp", image: getCloudinaryUrl("appasamy-slit-lamp_xsxlhj") },
];

const TeamSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Advanced <span className="text-gold">Eye Testing Technology</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We use state-of-the-art diagnostic equipment to ensure the most
            accurate eye examinations and precise prescriptions for your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "bg-card rounded-2xl overflow-hidden elegant-shadow hover-lift group",
                "animate-fade-in-up opacity-0"
              )}
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
            >
              {/* Equipment Photo */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-gold transition-colors">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

import { Eye, IndianRupee, Users, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Award,
    title: "Elite Eyezen Partner",
    description: "One of only 5 certified Essilor Eyezen centers in India, offering advanced lens technology for digital life.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Premium quality eyewear at competitive prices. Value for money guaranteed.",
  },
  {
    icon: Users,
    title: "100K+ Happy Customers",
    description: "Trusted by over 100,000 satisfied customers across generations.",
  },
  {
    icon: Eye,
    title: "Expert Eye Testing",
    description: "Comprehensive eye examinations using state-of-the-art diagnostic technology.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Why Choose <span className="text-gold">Anand Optico?</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Experience the difference of genuine care and expertise that has made us
            a trusted name in eye care for over five decades.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10 hover:border-gold/50 transition-all duration-300 hover-lift",
                "animate-fade-in-up opacity-0"
              )}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-gold group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-primary-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

import { useState } from "react";
import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const locations = [
  {
    id: "mallikashpur",
    name: "Mallikashpur Store",
    address: "Anand Optico, Opposite to S.P. Office, Near Yamaha Showroom, Mallikashpur, Balasore, Odisha - 756001",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.450453844716!2d86.91820899999999!3d21.4900691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1cf576dd2306b3%3A0x5ffdfe9162915854!2sANAND%20OPTICO!5e0!3m2!1sen!2sin!4v1767701512540!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/place/ANAND+OPTICO/@21.4900691,86.918209,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1cf576dd2306b3:0x5ffdfe9162915854!8m2!3d21.4900691!4d86.918209!16s%2Fg%2F11vm983mlr"
  },
  {
    id: "remuna",
    name: "Remuna Store",
    address: "Anand Optico, Beside Muthoot Finance, Sidheswar Colony, Kalidaspur, Golei, Remuna, Balasore, Odisha 756019",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.841791846133!2d86.8964924!3d21.513916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1c5fe952853143%3A0x184d138c16e721ac!2sANAND%20OPTICO!5e0!3m2!1sen!2sin!4v1767700859057!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/place/ANAND+OPTICO/@21.513916,86.8964924,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1c5fe952853143:0x184d138c16e721ac!8m2!3d21.513916!4d86.8964924!16s%2Fg%2F11xz3vfnlc"
  }
];

const contactInfo = [
  {
    icon: Clock,
    title: "Working Hours",
    content: "Monday - Sunday: 10:00 AM - 9:00 PM",
    href: null,
    action: null,
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 9938082344",
    href: "tel:+91 9938082344",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "anandoptico@gmail.com",
    href: "mailto:anandoptico@gmail.com",
    action: "Send Email",
  },
];

const VisitUsSection = () => {
  const [activeLocationId, setActiveLocationId] = useState(locations[0].id);

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Visit <span className="text-gold">Our Stores</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We'd love to see you! Drop by any of our stores to explore our collection
            or schedule an appointment for an eye examination.
          </p>
        </div>

        {/* Mobile View: Both maps stacked */}
        <div className="lg:hidden space-y-8 mb-8">
          {locations.map((loc) => (
            <div key={loc.id} className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold" />
                <span className="font-serif font-bold text-lg text-foreground">
                  {loc.name}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {loc.address}
              </p>
              <div className="h-[280px] rounded-xl overflow-hidden elegant-shadow border border-border bg-card">
                <iframe
                  src={loc.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${loc.name} Location`}
                  className="grayscale-[20%]"
                />
              </div>
              <a
                href={loc.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light font-medium text-sm inline-flex items-center gap-1 transition-colors duration-300"
              >
                Get Directions <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}

          {/* Contact Info for Mobile - styled to match desktop hover state */}
          <div className="grid grid-cols-1 gap-4 pt-4 border-t border-border">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href || undefined}
                className={cn(
                  "flex items-start gap-4 p-4 rounded-xl border transition-all duration-300",
                  "bg-gold/5 border-gold/50",
                  "active:scale-[0.98] active:bg-gold/10",
                  info.href && "cursor-pointer"
                )}
              >
                {/* Icon with gold background (same as desktop hover) */}
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shrink-0">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-gold mb-1">{info.title}</h4>
                  <p className="text-xs text-muted-foreground whitespace-pre-line">
                    {info.content}
                  </p>
                  {info.action && (
                    <span className="text-xs text-gold font-medium mt-2 inline-flex items-center gap-1">
                      {info.action} →
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Desktop View: Location Selector with Toggle */}
        <div className="hidden lg:flex flex-row gap-8 mb-12">
          {/* Left Side: Location Selection & Details */}
          <div className="lg:w-1/3 space-y-6">
            <div className="flex flex-col gap-3">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveLocationId(loc.id)}
                  className={cn(
                    "flex flex-col items-start p-4 rounded-xl border transition-all duration-300 text-left",
                    activeLocationId === loc.id
                      ? "border-gold bg-gold/5 shadow-md"
                      : "border-border bg-card hover:border-gold/30"
                  )}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className={cn(
                      "w-5 h-5 transition-colors",
                      activeLocationId === loc.id ? "text-gold" : "text-muted-foreground"
                    )} />
                    <span className={cn(
                      "font-serif font-bold text-lg transition-colors",
                      activeLocationId === loc.id ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {loc.name}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {loc.address}
                  </p>
                  {activeLocationId === loc.id && (
                    <a
                      href={loc.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-gold hover:text-gold-light font-medium text-sm inline-flex items-center gap-1 transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Get Directions <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </button>
              ))}
            </div>

            {/* Other Contact Info */}
            <div className="grid grid-cols-1 gap-4 pt-4 border-t border-border">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex items-start gap-4 p-4 bg-muted/20 rounded-xl border border-border group hover:border-gold/50 hover:bg-gold/5 hover-lift transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-all duration-300">
                    <info.icon className="w-5 h-5 text-gold group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-1 group-hover:text-gold transition-colors duration-300">{info.title}</h4>
                    <p className="text-xs text-muted-foreground whitespace-pre-line">
                      {info.content}
                    </p>
                    {info.href && (
                      <a
                        href={info.href}
                        className="text-xs text-gold hover:underline mt-1 inline-block font-medium"
                      >
                        {info.action}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Map Embed */}
          <div className="lg:w-2/3 h-[450px] rounded-xl overflow-hidden elegant-shadow border border-border bg-card">
            <iframe
              key={activeLocationId}
              src={locations.find(loc => loc.id === activeLocationId)?.mapUrl || locations[0].mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={`${locations.find(loc => loc.id === activeLocationId)?.name || locations[0].name} Location`}
              className="grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUsSection;



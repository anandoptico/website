import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center border shadow-sm">
                <img src="/LOGO.png" alt="Anand Optico Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Anand Optico</h3>
                <span className="text-xs text-gold">Since 1973</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted partner in vision care for over 50 years. We bring you the finest
              collection of eyewear from world-renowned brands, combined with expert eye care services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Brands", href: "/#brands" },
                { name: "Eyewear", href: "/#eyewear" },
                { name: "Gallery", href: "/#gallery" },
                { name: "Contact", href: "/#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg text-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+91 9938082344"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors duration-300 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +91 9938082344
                </a>
              </li>
              <li>
                <a
                  href="mailto:anandoptico@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors duration-300 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  anandoptico@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919938082344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors duration-300 text-sm"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  +91 9938082344
                </a>
              </li>
            </ul>
          </div>

          {/* Visit Our Store */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg text-gold">Visit Our Store</h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.google.com/maps/place/ANAND+OPTICO/@21.4900691,86.918209,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1cf576dd2306b3:0x5ffdfe9162915854!8m2!3d21.4900691!4d86.918209!16s%2Fg%2F11vm983mlr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-primary-foreground/70 hover:text-gold transition-colors duration-300 text-sm"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gold mb-1">Store 1 (Mallikashpur)</p>
                  <span className="text-xs">Anand Optico, Opposite to S.P. Office, Near Yamaha Showroom, Mallikashpur, Balasore, Odisha - 756001</span>
                </div>
              </a>
              <a
                href="https://www.google.com/maps/place/ANAND+OPTICO/@21.513916,86.8964924,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1c5fe952853143:0x184d138c16e721ac!8m2!3d21.513916!4d86.8964924!16s%2Fg%2F11xz3vfnlc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-primary-foreground/70 hover:text-gold transition-colors duration-300 text-sm border-t border-primary-foreground/10 pt-4"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gold mb-1">Store 2 (Remuna)</p>
                  <span className="text-xs">Anand Optico, Beside Muthoot Finance, Sidheswar Colony, Kalidaspur, Golei, Remuna, Balasore, Odisha 756019</span>
                </div>
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg text-gold">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/anandoptico"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/10 my-8" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-center text-sm text-primary-foreground/60">
          <p>© Anand Optico. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

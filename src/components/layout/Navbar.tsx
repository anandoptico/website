import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Brands", href: "/#brands" },
  { name: "Eyewear", href: "/#eyewear" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href === "/") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (href.startsWith("/#")) {
      const elementId = href.substring(2);
      if (location.pathname === "/") {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-[40] md:hidden transition-all duration-500",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Tooltip (Desktop only) */}
            <div className="flex items-center">
              <Link
                to="/"
                onClick={handleLogoClick}
                className="flex items-center gap-3 group active:opacity-80 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center group-hover:scale-110 group-active:scale-110 transition-transform duration-300 border shadow-sm">
                  <img src="/LOGO.png" alt="Anand Optico Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-bold text-primary-foreground group-hover:text-gold transition-colors">
                    Anand Optico
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-primary-foreground/80 hover:text-gold transition-colors duration-300 font-medium tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:+91 9938082344">
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-primary transition-all duration-300"
                >
                  Book Eye Test
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary-foreground p-2 focus:outline-none hover:text-gold transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={cn(
                  "absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out left-0",
                  isOpen ? "rotate-45 top-[11px]" : "top-[5px]"
                )} />
                <span className={cn(
                  "absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out left-0",
                  isOpen ? "opacity-0 top-[11px]" : "opacity-100 top-[11px]"
                )} />
                <span className={cn(
                  "absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out left-0",
                  isOpen ? "-rotate-45 top-[11px]" : "top-[17px]"
                )} />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-500 ease-in-out border-t border-gold/10",
              isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0 invisible"
            )}
          >
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "text-primary-foreground/80 hover:text-gold active:text-gold transition-all duration-300 font-medium py-3 px-4 rounded-md active:bg-gold/10 transform",
                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  )}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
              <div
                className={cn(
                  "px-2 pt-2 transition-all duration-300 transform",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
                style={{ transitionDelay: `${navLinks.length * 50}ms` }}
              >
                <a href="tel:+91 9938082344" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-primary active:bg-gold active:text-primary transition-all duration-300 py-6"
                  >
                    Book Eye Test
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
